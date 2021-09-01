import React from 'react';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const navbarVariant = {
    hidden:{
        transition: {
            staggerChildren: 0.51
        }
    },
    visible:{
        transition: {
            staggerChildren: 0.51
        }
    }
}

const menuItemVariant = {
    hidden: {
        opacity: 0,
        y: '-200px'
    },
    visible: {
        opacity: 1,
        y: 0,
        fontSize:'19px',
        transition: {
            duration:0.5,
            type:"spring",
            stiffness:100,
            mass:0.5
        }
    }
}

const Navbar = ({fixed}) => {
  return (
    <div className={fixed ? styles.fixedNavbar : styles.navbar}>
        <div className={fixed && styles.fixedNavbarContainer}>
            <div className={styles.navbarGroup}>
                <span className={styles.me}>Rakan</span>
                <motion.div variants={navbarVariant} initial="hidden" animate="visible" className={styles.menu}>
                    <ul>
                        <motion.li variants={menuItemVariant}>Intro</motion.li>
                        <motion.li variants={menuItemVariant}>Skills</motion.li>
                        <motion.li variants={menuItemVariant}>Projects</motion.li>
                    </ul>
                </motion.div>
                <div>
                    <span className={styles.contact}>Contact</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
