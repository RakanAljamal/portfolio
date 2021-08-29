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

const logos = ['aws','node','docker']
const Skills = () => {
    const [expandDotAnimation, setExpandDotAnimation] = useState(false);
    const [variant, toggleVariant] = useCycle(showLogo,rotateLogo);
    const [showAllSkills,setShowAllSkills] = useState(false);

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

    }, [])
    return (
        <div>
            <motion.div className={styles.dotSkills} variants={expandDotAnimation ? expandDot : skills} initial="hidden"
                        animate="visible"/>
            <motion.img variants={variant} initial="hidden" animate="visible" className={styles.logo} alt="logo"
                        src={`${window?.location.origin}/react.png`}/>
            {showAllSkills && <motion.div
                className={styles.skillsLogoContainer}
                variants={snakeLogos}
                initial="start"
                animate="end"
            >
                {logos.map(logo => {
                    return (
                        <motion.img variants={childLogo} transition={loadingCircleTransition}
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
