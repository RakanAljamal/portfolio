import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { BottomHome, SectionDivider, TopHome } from "../../shared/svg";
import Particles from 'react-particles-js';
import { InfoCounter } from "../InfoCounter";
import { params } from "../../config/particles";
import Screen from "../Screen";
import Navbar from "../Navbar";


export const HomePage = ({ initialState }) => {
    const [forceRender, setForceRender] = useState(true);
    const [randomState, setRandomState] = useState(initialState[Math.floor(Math.random() * initialState.length)]);

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
            <Navbar />
            <div className={styles.homepageContainer}>
                <div className={styles.contactMe}></div>
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





