import React from 'react';
import styles from './styles.module.scss';
import {Icon, Icon2, Icon3} from "./vectors";

const MyJob = () => {
    return (
        <div className={styles.jobsContainer}>
            <div className={styles.job1}>
            <Icon3 />
            <div className={styles.jobDetails}>
                <h2 className={styles.jobDetailsTitle}>
                    Bring Technology To Your
                    Comfrotable Home
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            </div>
            <div className={styles.job2}>
                <Icon2 />
                <div className={styles.jobDetails}>
                    <h2 className={styles.jobDetailsTitle}>
                        Bring Technology To Your
                        Comfrotable Home
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

            </div>
            <div className={styles.job3}>
                <Icon />
                <div className={styles.jobDetails}>
                    <h2 className={styles.jobDetailsTitle}>
                        Bring Technology To Your
                        Comfrotable Home
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyJob;