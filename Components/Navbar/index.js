import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './styles.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const navbarVariant = {
    hidden: {
        transition: {
            staggerChildren: 0.51
        }
    },
    visible: {
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
        fontSize: '19px',
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            mass: 0.5
        }
    }
}

const Navbar = ({ fixed }) => {

    const variant = useMemo(()=>{
       menuItemVariant
    },[])
    return <AnimatePresence>
        {!fixed && <motion.div animate={{ y: 0 }} initial={{ y: -100 }} exit={{ y: -100 }} className={styles.navbar}>
            <div>
                <div className={styles.navbarGroup}>
                    <motion.div variants={navbarVariant} initial="hidden" animate="visible" className={styles.menu}>
                        <ul>
                            <motion.li variants={variant}>Intro</motion.li>
                            <motion.li variants={variant}>Skills</motion.li>
                            <motion.li variants={variant}>Projects</motion.li>
                        </ul>
                    </motion.div>
                    <div>
                        <span className={styles.contact}>Contact Me</span>
                    </div>
                </div>
            </div>
        </motion.div>
        }
    </AnimatePresence>

};

export default Navbar;
