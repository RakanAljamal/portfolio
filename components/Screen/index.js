import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import githubLogo from '../../public/github.png';
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
                        <div className={styles.box}>
                            <h3>{"<SourceCode />"}</h3>
                        </div>
                        <div className={styles.absDiv}>
                            <Image width={100} height={100} src={githubLogo} alt="github"/>
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
