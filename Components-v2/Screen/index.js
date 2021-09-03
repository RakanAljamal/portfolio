import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Screen = ({ children, refresh, changeScreen }) => {
    const [showScreen, setShowScreen] = useState(true);
    useEffect(() => {
        setInterval(() => {
            setShowScreen(toggle => !toggle);
        }, changeScreen)
    }, [changeScreen])


    return (
        <div className={styles.screenContainer}>
            <div className={styles.main}>

                <div className={styles.codeScreen}>
                    <div>
                        {children}
                    </div>
                </div>

            </div>
            <div className={styles.mediumPc}/>
            <div className={styles.mediumIcon}/>
            <div className={styles.underlay}/>
            <div className={styles.underlayBottom}/>
        </div>
    );
};

export default Screen;
