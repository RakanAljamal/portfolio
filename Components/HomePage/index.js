import React, { createRef, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { SectionDivider } from "../../shared/svg";
import { InfoCounter } from "../InfoCounter";
import Screen from "../Screen";
import Navbar from "../Navbar";
import { motion } from "framer-motion";

const line = 'Hi, I\'m Rakan';
const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            staggerChildren: 0.09
        }
    }
}
const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,

    }
}
const wave = {
    still: {
        rotateZ: 0,
        scale: 1.3
    },
    move: {
        rotateZ: 10,
        scale: 1.3,
        transition: {
            yoyo: 3,
            delay: 1
        }
    }
}
export const HomePage = ({ initialState }) => {
    const [forceRender, setForceRender] = useState(true);
    const [randomState, setRandomState] = useState(initialState[Math.floor(Math.random() * initialState.length)]);
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
                        <motion.span style={{ display: "inline-block",marginRight:10 }} variants={wave} initial="still"
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
            <SectionDivider/>

        </>

    );
};





