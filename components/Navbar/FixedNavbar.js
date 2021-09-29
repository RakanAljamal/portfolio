import React from 'react';
import styles from './styles.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useScreen } from "../../shared/hooks/useScreen";
import SidebarMenu from "../Menu";
import { scrollToElement } from "../../shared/utils";

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
        fontSize: '15px',
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            mass: 0.5
        }
    }
}

const fixedNavbarVariant = {
    hidden: {
        opacity: 0,
        y: '-200px'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            mass: 0.05
        }
    },
    exit: {
        y: '-200px',
        transition: { ease: 'easeInOut', duration: 0.5 }
    }
}

const FixedNavbar = ({ fixed, setOpen, setFixedNavbar }) => {
    const { isTablet } = useScreen();

    if (isTablet) {
        return <AnimatePresence>
            {fixed && <motion.div exit="exit" initial="hidden" animate="visible" variants={fixedNavbarVariant}
                                  className={styles.fixedMobileNavbar}>
                <SidebarMenu setFixedNavbar={setFixedNavbar} setOpen={setOpen} dark={true}/>
            </motion.div>
            }        </AnimatePresence>
    }

    return (
        <div style={{ minHeight: 100 }}>
            <AnimatePresence>
                {
                    fixed && <motion.div exit="exit" initial="hidden" animate="visible" variants={fixedNavbarVariant}
                                         className={styles.fixedNavbar}>
                        <div>
                            <div className={styles.navbarGroup}>
                                <div className={styles.fixedMenu}>
                                    <ul>
                                        <motion.li className={styles.menuItem} variants={menuItemVariant}
                                                   onClick={() => scrollToElement(document.getElementById('home'),100)}>Intro
                                        </motion.li>
                                        <motion.li className={styles.menuItem} variants={menuItemVariant}
                                                   onClick={() => scrollToElement(document.getElementById('skills'), 400)}>Skills
                                        </motion.li>
                                        <motion.li className={styles.menuItem} variants={menuItemVariant}
                                                   onClick={() => scrollToElement(document.getElementById('projects'))}>Projects
                                        </motion.li>
                                    </ul>
                                </div>
                                <div>
                                    <span onClick={() => setOpen(true)} className={styles.menuItem}>Contact</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
};

export default FixedNavbar;
