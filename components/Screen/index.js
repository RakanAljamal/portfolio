import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Screen = ({ children }) => {



    return (
        <div className={styles.screenContainer}>
            <div className={styles.main}>
                <div className={styles.codeScreen}>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screen;
