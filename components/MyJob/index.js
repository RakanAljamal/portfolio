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
                    Bring Modern Technology To Your Website
                </h2>
                <p className={styles.jobDetailsInfo}>
                    PWA , Responsive , and Optimization are my main key features when working on websites
                </p>
            </div>
            </div>
            <div className={styles.job2}>
                <Icon2 />
                <div className={styles.jobDetails}>
                    <h2 className={styles.jobDetailsTitle}>
                        Make Your business To Be Better Famous In Internet
                    </h2>
                    <p className={styles.jobDetailsInfo}>
                        Transferring CSR into SSR to optimize SEO,
                        High availability and Vertical Scaling
                    </p>
                </div>

            </div>
            <div className={styles.job3}>
                <Icon />
                <div className={styles.jobDetails}>
                    <h2 className={styles.jobDetailsTitle}>
                        Build Your Digital Product That Suitable For Your Need
                    </h2>
                    <p className={styles.jobDetailsInfo}>
                        From blogs to video streaming, the sky is the limit,
                        Providing a modern dashboard to control your content
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyJob;