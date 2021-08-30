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
        transition: {
            duration:0.5,
            type:"spring",
            stiffness:100,
            mass:0.5
        }
    }
}

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <span className={styles.me}>Logo</span>
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
  );
};

export default Navbar;
