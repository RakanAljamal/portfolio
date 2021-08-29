import React, { createRef, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { SectionDivider } from "../../shared/svg";
import { InfoCounter } from "../InfoCounter";
import Screen from "../Screen";
import Navbar from "../Navbar";
import { motion, useCycle } from "framer-motion";
import { expandDot, letter, rotateLogo, sentence, showLogo, skills, wave } from "./animations";

const line = 'Hi, I\'m Rakan';

export const HomePage = ({ initialState }) => {
    const [forceRender, setForceRender] = useState(true);
    const [randomState, setRandomState] = useState(initialState[Math.floor(Math.random() * initialState.length)]);
    const [expandDotAnimation, setExpandDotAnimation] = useState(false);
    const [variant, toggleVariant] = useCycle(showLogo,rotateLogo)

    const [loading,setLoading] = useState(true);
    const someRef = createRef();
    useEffect(() => {
        if (!forceRender) {
            setForceRender(true);
            setRandomState(prevRandom => {
                let newRandom = initialState[Math.floor(Math.random() * initialState.length)];
                while (newRandom === prevRandom) {
                    newRandom = initialState[Math.floor(Math.random() * initialState.length)];
                }
                return newRandom;
            });
        }
    }, [forceRender])

    useEffect(() => {
        setTimeout(()=>{
            setExpandDotAnimation(true);
        },4000)

        setTimeout(()=>{
            toggleVariant();
        },5000)
        setLoading(false)
    },[])

    if(loading){
        return <h1>Loading</h1>
    }
    return (
        <>
            <Navbar/>
            <div className={styles.homepageContainer}>
                <div className={styles.contactMe}>
                    <motion.h3 className={styles.myInfo}
                               variants={sentence}
                               initial="hidden"
                               animate="visible"
                    >
                        <motion.span style={{ display: "inline-block", marginRight: 10 }} variants={wave}
                                     initial="still"
                                     animate="move">👋
                        </motion.span>
                        {
                            line.split("").map((char, index) => {
                                return (
                                    <motion.span key={`${char}-${index}`} variants={letter}>
                                        {char}
                                    </motion.span>
                                )
                            })
                        }
                    </motion.h3>
                    <p>
                        Diligent, Creative Software Engineer who's able to works in
                        a fully agile environment
                        Have the desire to keep learning
                        anything related to modern
                        development
                    </p>
                </div>
                <Screen changeScreen={15000}>
                    {forceRender && <InfoCounter
                        initialState={randomState}
                        render={() => setForceRender(false)}
                        speed={25}
                        deleteSpeed={25}
                        dashTimer={400}
                        timeToShow={1000}
                        timeToEnd={2000}
                        indicator={"_"}
                    />

                    }
                </Screen>
            </div>
            <SectionDivider>
                <motion.div className={styles.dotSkills} variants={expandDotAnimation ? expandDot : skills} initial="hidden" animate="visible"/>
                <motion.img variants={variant} initial="hidden" animate="visible" className={styles.logo}  alt="logo" src={`${window?.location.origin}/react.png`}/>
                <motion.h1 className={styles.skills} variants={skills} initial="hidden" animate="visible">Skılls
                </motion.h1>
            </SectionDivider>

        </>

    );
};





