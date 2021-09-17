import React from 'react';
import styles from "../HomePage/styles.module.scss";
import {
    AiFillGithub,
    DiNodejs,
    FaDocker,
    FaReact,
    FaSass,
    SiAmazonaws,
    SiGraphql,
    SiJavascript,
    SiMysql,
    SiNextDotJs,
    SiTypescript
} from "react-icons/all";


const Skills = () => {
    return (
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

    );
};

export default Skills;
