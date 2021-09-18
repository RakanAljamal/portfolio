import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { ProjectsDivider, SectionDivider } from "../../shared/svg";
import { InfoCounter } from "../InfoCounter";
import Screen from "../Screen";
import Navbar from "../Navbar";
import Skills from "../Skills";
import ShowMyInfo from "../ShowMyInfo";
import { MyProject, ProjectDetails } from "../ProjectCard";
import FixedNavbar from "../Navbar/FixedNavbar";
import { Footer } from "../Footer";
import Modal from "../Modal";
import Resume from "../Resume";
import cardOne from '../../public/card-1.png'
import cardTwo from '../../public/card-2.png'
import { card } from "../ProjectCard/animations";


const sajilniDetails = '\n' +
    '                Manage the whole application infrastructure including\n' +
    '                the front-end, back-end,\n' +
    '                and Cloud Infrastructure.\n' +
    '            '

const weightDetails = '- Manage a cutting-edge Studio finder application which deals\n' +
    'with maps, locations and geocodes, written in NextJS (React)\n' +
    'for SSO, SSR and optimization'


export const HomePage = ({ initialState }) => {

    const [forceRender, setForceRender] = useState(true);
    const [randomState, setRandomState] = useState(initialState[Math.floor(Math.random() * initialState.length)]);
    const [loading, setLoading] = useState(true);
    const [fixedNavbar, setFixedNavbar] = useState(false);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        if ( !forceRender) {
            setForceRender(true);
            setRandomState(prevRandom => {
                let newRandom = initialState[Math.floor(Math.random() * initialState.length)];
                while (newRandom === prevRandom) {
                    newRandom = initialState[Math.floor(Math.random() * initialState.length)];
                }
                return newRandom;
            });
        }
        setLoading(false)
    }, [forceRender])



    return (
        <>
            <Modal open={open} setOpen={setOpen}/>
            <Navbar setOpen={setOpen} fixed={fixedNavbar}/>
            <FixedNavbar setOpen={setOpen} fixed={fixedNavbar}/>
            <div className={styles.homepageContainer} id="home">
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
            <SectionDivider setFixedNavbar={setFixedNavbar}>
                {<Skills/>}
            </SectionDivider>
            {<Resume/>}
            <ProjectsDivider fill={'#FFF'}/>
            {<div className={styles.projectsContainer}>
                <MyProject setFixedNavbar={setFixedNavbar}/>
                <ProjectDetails
                    src={cardOne}
                    animationColor='#000586'
                    title="Weight Watchers"
                    href={"https://www.ww.com/us/find-a-workshop"}
                    details={weightDetails}
                    items={['NextJS', 'NodeJS', 'GraphQL', 'Express']}
                />
                <ProjectDetails
                    src={cardTwo}
                    title="Sajilni"
                    href="https://www.sajilni.com"
                    animationColor='#98D551'
                    details={sajilniDetails}
                    items={['MYSQL', 'AWS', 'Spring', 'JQuery']}
                />
                <br/>
                <br/>
            </div>
            } <Footer setOpen={setOpen}/>
        </>

    );
}





