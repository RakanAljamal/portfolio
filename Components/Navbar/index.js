import React from 'react';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const itemVariant = {
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
const itemTwoVariant = {
  hidden: {
    opacity: 0,
    y: '-200px'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
        duration:0.5,
        delay:0.5,
        type:"spring",
        stiffness:100,
        mass:0.5
    }
  }
}
const itemThreeVariant = {
  hidden: {
    opacity: 0,
    y: '-200px'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
        duration:0.5,
        delay:1,
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
        <div className={styles.menu}>
          <ul>
            <motion.li variants={itemVariant} initial="hidden" animate="visible">Intro</motion.li>
            <motion.li variants={itemTwoVariant} initial="hidden" animate="visible">Skills</motion.li>
            <motion.li variants={itemThreeVariant} initial="hidden" animate="visible">Projects</motion.li>
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
