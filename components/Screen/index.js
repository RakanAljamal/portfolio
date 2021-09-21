import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import githubLogo from '../../public/github.png';
import linkedInLogo from '../../public/linkedin.png';
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

                            <div className={styles.imageContainer}>
                                <Image width={50} height={50} src={githubLogo} alt="github"/>
                            </div>
                            <div className={styles.sourceCode}>
                                <a rel="noreferrer"  target="_blank" href="https://github.com/RakanAljamal/portfolio">Source Code</a>
                            </div>
                            <div className={styles.imageContainer}>
                                <Image width={50} height={50} src={linkedInLogo} alt="linkedin"/>
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
