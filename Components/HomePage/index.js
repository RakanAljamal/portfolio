import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { SectionDivider } from "../../shared/svg";
import { InfoCounter } from "../InfoCounter";
import Screen from "../Screen";
import Navbar from "../Navbar";
import Skills from "../Skills";
import ShowMyInfo from "../ShowMyInfo";
import ProjectCard from "../ProjectCard";


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
            <SectionDivider showSkills={showSkills} setShowSkills={setShowSkills} >
                {showSkills && <Skills/>}
            </SectionDivider>
            <br/>
            <br/>
            <br/>
            <br/>
            <ProjectCard src={`${window?.location.origin}/card-1.png`} />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>

    );
};





