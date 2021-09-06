import React, { useEffect, useState } from 'react';
import { motion, useCycle } from "framer-motion";
import styles from "../HomePage/styles.module.scss";
import {
    childLogo,
    expandDot,
    loadingCircleTransition,
    rotateLogo,
    showLogo,
    skills,
    snakeLogos
} from "../HomePage/animations";
import {
    FaDocker, FaReact, SiJavascript, SiMysql, SiAmazonaws, DiNodejs,
    SiTypescript,SiNextDotJs,SiGraphql,AiFillGithub,FaSass,DiLinux
} from "react-icons/all";

import { useScreen } from "../../shared/hooks/useScreen";

const logos = ['aws', 'node', 'docker']
const Skills = () => {
    const { isSmallLaptop } = useScreen();

    const [expandDotAnimation, setExpandDotAnimation] = useState(false);
    const [variant, toggleVariant] = useCycle(showLogo);
    const [showAllSkills, setShowAllSkills] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setExpandDotAnimation(true);
        }, 2000)

        setTimeout(() => {
            toggleVariant();
        }, 3000)


        setTimeout(() => {
            setShowAllSkills(true);
        }, 5000)

    }, [toggleVariant])
    return isSmallLaptop ? (
        <div>
            <ul className={styles.skillsIconsContainer}>
                <li key='JSIcon'><SiJavascript/></li>
                <li key='SiTypescript'><SiTypescript/></li>
                <li key='ReactIcon'><FaReact/></li>
                <li key='SiMysql'><SiMysql/></li>
                <li key='SiAmazonaws'><SiAmazonaws/></li>
                <li key='DockerIcon'><FaDocker/></li>
                <li key='DiNodejs'><DiNodejs/></li>
                <li key='SiNextDotJs'><SiNextDotJs/></li>
                <li key='SiGraphql'><SiGraphql/></li>
                <li key='AiFillGithub'><AiFillGithub/></li>
                <li key='FaSass'><FaSass/></li>

            </ul>
        </div>

    ) : (
        <div>
            <motion.div className={styles.dotSkills} variants={expandDotAnimation ? expandDot : skills} initial="hidden"
                        animate="visible"/>
            <motion.img variants={showLogo} initial="hidden" animate="visible" className={styles.logo} alt="logo"
                        src={`${window?.location.origin}/react.png`}/>
            {showAllSkills && <motion.div
                className={styles.skillsLogoContainer}
                variants={snakeLogos}
                initial="start"
                animate="end"
            >
                {logos.map((logo, idx) => {
                    return (
                        <motion.img key={`logo-${idx}`} variants={childLogo} transition={loadingCircleTransition}
                                    className={styles.skillsLogo} alt="logo"
                                    src={`${window?.location.origin}/${logo}.png`}/>
                    )
                })}
            </motion.div>
            }
            <motion.h1 className={styles.skills} variants={skills} initial="hidden" animate="visible">Skılls
            </motion.h1>
        </div>
    );
};

export default Skills;
