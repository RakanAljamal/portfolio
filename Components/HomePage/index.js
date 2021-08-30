import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { SectionDivider } from "../../shared/svg";
import { InfoCounter } from "../InfoCounter";
import Screen from "../Screen";
import Navbar from "../Navbar";
import Skills from "../Skills";
import ShowMyInfo from "../ShowMyInfo";
import { scrollAnimationType, ScrollContext } from "../ScrollProvider";
import { useMouseWheel, useScroll } from "react-use";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


export const HomePage = ({ initialState }) => {
    const [forceRender, setForceRender] = useState(true);
    const [randomState, setRandomState] = useState(initialState[Math.floor(Math.random() * initialState.length)]);
    const [loading, setLoading] = useState(true);
    const {showSkillsAnimation,showAnimation} = useContext(ScrollContext);

    useScrollPosition(
        ({ prevPos, currPos }) => {
            console.log(currPos)
        },
        [],
    )
            ;
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
        showAnimation(scrollAnimationType.Skills)
    }, [])

    if (loading) {
        return <h1>Loading</h1>
    }

    return (
        <>
            <Navbar/>
            <div className={styles.homepageContainer}>
                <ShowMyInfo />
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
            <SectionDivider showSkills={showSkillsAnimation} >
                {showSkillsAnimation && <Skills/>}
            </SectionDivider>
            <br/>
            <br/>
        </>

    );
};





