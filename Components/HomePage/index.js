import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { ProjectsDivider, SectionDivider } from "../../shared/svg";
import { InfoCounter } from "../InfoCounter";
import Screen from "../Screen";
import Navbar from "../Navbar";
import Skills from "../Skills";
import ShowMyInfo from "../ShowMyInfo";
import { animationType, ScrollContext } from "../ScrollProvider";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { MyProject, ProjectDetails } from "../ProjectCard";
import FixedNavbar from "../Navbar/FixedNavbar";
import {motion} from "framer-motion";

const sajilniDetails = '\n' +
    '                Manage the whole application infrastructure including\n' +
    '                the front-end, back-end,\n' +
    '                and Cloud Infrastructure.\n' +
    '            '

const weightDetails = '- Manage a cutting-edge Studio finder application which deals\n' +
    'with maps, locations and geocodes, written in NextJS (React)\n' +
    'for SSO, SSR and optimization'

const contactHover = {
    color : 'red'
}

export const HomePage = ({ initialState }) => {
    const [forceRender, setForceRender] = useState(true);
    const [randomState, setRandomState] = useState(initialState[Math.floor(Math.random() * initialState.length)]);
    const [loading, setLoading] = useState(true);
    const { showSkillsAnimation,showProjectsCardAnimation, showAnimation } = useContext(ScrollContext);
    const [showMyProject, setShowMyProject] = useState(false);
    const [fixedNavbar,setFixedNavbar] = useState(false);
    useScrollPosition(
        ({ currPos }) => {
            setFixedNavbar(currPos.y <= -1500);

            if (currPos.y <= -375) {
                showAnimation(animationType.Skills);
            }
            setShowMyProject(currPos.y <= -925  && currPos.y >= -2125);
            console.log(currPos.y);

            if(currPos.y <= -2000) {
                showAnimation(animationType.Cards,0);
            }


            if(currPos.y <= -2800) {
                showAnimation(animationType.Cards,1);
            }

        },
        [showSkillsAnimation],
    );
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

    useEffect(()=>{
        console.log('Rakan',showProjectsCardAnimation);
    },[showProjectsCardAnimation])

    if (loading) {
        return <h1>Loading</h1>
    }

    return (
        <>
            <Navbar fixed={fixedNavbar}/>
            <FixedNavbar fixed={fixedNavbar} />
            <div className={styles.homepageContainer}>
                <ShowMyInfo/>
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
            <SectionDivider showSkills={showSkillsAnimation}>
                {showSkillsAnimation && <Skills/>}
            </SectionDivider>
            <ProjectsDivider fill={'#FCFCFC'}/>
            <div className={styles.projectsContainer}>
                <MyProject show={showMyProject}/>
                {<ProjectDetails showProjectsCardAnimation={showProjectsCardAnimation[0]}
                                 src={`${window?.location.origin}/card-1.png`}
                                 animationColor='#000586'
                                 title="Weight Watchers"
                                 href={"https://www.ww.com/us/find-a-workshop"}
                                 details={weightDetails}
                                 items={['NextJS','NodeJS','GraphQL','Express']}
                />}
                {<ProjectDetails showProjectsCardAnimation={showProjectsCardAnimation[1]}
                                 src={`${window?.location.origin}/card-2.png`}
                                 title="Sajilni"
                                 href="https://www.sajilni.com"
                                 animationColor='#98D551'
                                 details={sajilniDetails}
                                 items={['MYSQL','AWS','Spring','JQuery']}
                />}
                <br/>
                <br/>


            </div>
            <svg style={{fill:'#F7F7F7'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path d="M0,96L120,133.3C240,171,480,245,720,245.3C960,245,1200,171,1320,133.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
            </svg> <div className={styles.contactMeFooter}>
            Wanna hire me, don't hesitate to <motion.div className={styles.contactMeCTA}>
            <span>contact me</span>
            <div className={styles.contactMeBackground} />
            </motion.div>
            </div>
        </>

    );
}





