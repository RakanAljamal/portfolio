import React, { createRef, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { SectionDivider } from "../../shared/svg";
import { InfoCounter } from "../InfoCounter";
import Screen from "../Screen";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { letter, sentence, wave } from "./animations";
import { useOnScreen } from "../../shared/useOnScreen";
import Skills from "../Skills";

const line = 'Hi, I\'m Rakan';

export const HomePage = ({ initialState }) => {
    const [forceRender, setForceRender] = useState(true);
    const [randomState, setRandomState] = useState(initialState[Math.floor(Math.random() * initialState.length)]);
    const [loading, setLoading] = useState(true);
    const [showSkills, setShowSkills] = useState(false);

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
        setLoading(false)
    }, [])

    if (loading) {
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
            <SectionDivider showSkills={showSkills} setShowSkills={setShowSkills} >
                {showSkills && <Skills/>}
            </SectionDivider>
        </>

    );
};





