import styles from "./styles.module.scss";
import React from "react";

const TopHome = () => <svg className={styles.homepage} xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 1440 320">
    <path
        d="M0,224L80,218.7C160,213,320,203,480,170.7C640,139,800,85,960,64C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    />
</svg>

const BottomHome = () => <svg className={styles.homepage} xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1440 320">
    <path fillOpacity="1"
          d="M0,192L60,165.3C120,139,240,85,360,85.3C480,85,600,139,720,144C840,149,960,107,1080,101.3C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"/>
</svg>


export const SectionDivider = ({children}) => ( <div>
    <TopHome/>
        <div className={styles.presentation}>{children}</div>
    <BottomHome/>
</div> )
