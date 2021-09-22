import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import githubLogo from '../../public/github.png';
import linkedInLogo from '../../public/linkedin.png';
import hackerRankLogo from '../../public/hackerRank.png';
import Image from 'next/image';

const Screen = ({ children }) => {
    const [loading, setLoading] = useState();
    useEffect(() => {
        setLoading(true);
    }, [])


    return (
        <div className={styles.screenContainer}>
            <div className={styles.main}>

                <div className={styles.codeScreen}>
                    <div>
                        {children}
                    </div>

                    <div className={styles.codeScreenCTA}>

                        <div className={styles.sourceCodeContainer}>
                            <div className={styles.sourceCode}>
                                <a rel="noreferrer" target="_blank" href="https://github.com/RakanAljamal/portfolio">Source
                                    Code</a>
                            </div>
                        </div>
                        <div>
                            <div className={styles.imageContainer}>
                                <a rel="noreferrer" href="https://www.github.com/RakanAljamal" target="_blank">
                                    <Image width={25} height={25} src={githubLogo} alt="github"/>
                                </a>
                            </div>
                            <div className={styles.imageContainer}>
                                <a rel="noreferrer" href="https://www.hackerrank.com/rakanaljamal" target="_blank">
                                    <Image width={35} height={35} src={hackerRankLogo} alt="hackerRank"/>
                                </a>
                            </div>
                            <div className={styles.imageContainer}>
                                <a rel="noreferrer" href="https://www.linkedin.com/in/RakanAljamal" target="_blank">
                                    <Image width={25} height={25} src={linkedInLogo} alt="linkedin"/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {loading && <div className={styles.mediumPc}>
                <img alt="actions" src={`${window?.location.origin}/options.png`}/>
            </div>
            }
            <div className={styles.mediumIcon}/>
            <div className={styles.underlay}/>
            <div className={styles.underlayBottom}/>
        </div>
    );
};

export default Screen;
