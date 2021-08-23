import React from 'react';
import styles from './styles.module.scss';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <span className={styles.me}>Rakan</span>
                <div className={styles.menu}>
                    <ul>
                        <li>Intro</li>
                        <li>Skills</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div>
                    <span className={styles.contact}>Contact</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
