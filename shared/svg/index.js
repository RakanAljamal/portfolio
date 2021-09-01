import styles from "./styles.module.scss";
import React, { createRef, useContext, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { isElementViewable } from "../utils";
import { animationType, ScrollContext } from "../../Components/ScrollProvider";

const svgVariant = {
    initial: {
        fill: "#F7F7FF"
    },
    end: {
        fill: "#222222",
        transition: {
            delay: 3.1,
            duration: 0.2,
            ease: "easeInOut"
        }
    }
}
const TopHome = ({ showSkills }) => <motion.svg
    variants={showSkills ? svgVariant : null} initial={{ fill: "#F7F7FF" }} animate="end"
    className={styles.homepage} xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320">
    <path
        d="M0,224L80,218.7C160,213,320,203,480,170.7C640,139,800,85,960,64C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    />
</motion.svg>

const BottomHome = ({ showSkills }) => {

    return <motion.svg variants={showSkills ? svgVariant : null} initial={{ fill: "#F7F7FF" }} animate="end"
                       className={styles.homepage}
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 1440 320">
        <path fillOpacity="1"
              d="M0,192L60,165.3C120,139,240,85,360,85.3C480,85,600,139,720,144C840,149,960,107,1080,101.3C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"/>
    </motion.svg>
}


export const ProjectsDivider = ({fill}) =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={fill} fill-opacity="1" d="M0,32L120,53.3C240,75,480,117,720,122.7C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
    )
}
export const SectionDivider = ({ showSkills, children }) => ( <div>
    <TopHome showSkills={showSkills}/>
    <div className={styles.presentation}>{children}</div>
    <BottomHome showSkills={showSkills} />
</div> )
