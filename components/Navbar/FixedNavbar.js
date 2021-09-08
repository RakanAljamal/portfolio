import React from 'react';
import styles from './styles.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useScreen } from "../../shared/hooks/useScreen";
import SidebarMenu from "../Menu";

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

const FixedNavbar = ({ fixed, setOpen }) => {
    const { isTablet } = useScreen();

    if (isTablet) {
        return <AnimatePresence>
            { fixed && <motion.div exit="exit" initial="hidden" animate="visible" variants={ fixedNavbarVariant }
                                   className={ styles.fixedMobileNavbar }>
                <SidebarMenu dark={ true }/>
            </motion.div>
            }        </AnimatePresence>
    }

    return (
        <div style={ { minHeight: 100 } }>
            <AnimatePresence>
                {
                    fixed && <motion.div exit="exit" initial="hidden" animate="visible" variants={ fixedNavbarVariant }
                                         className={ styles.fixedNavbar }>
                        <div>
                            <div className={ styles.navbarGroup }>
                                <div className={ styles.fixedMenu }>
                                    <ul>
                                        <motion.li className={ styles.menuItem } variants={ menuItemVariant }>Intro
                                        </motion.li>
                                        <motion.li className={ styles.menuItem } variants={ menuItemVariant }>Skills
                                        </motion.li>
                                        <motion.li className={ styles.menuItem } variants={ menuItemVariant }>Projects
                                        </motion.li>
                                    </ul>
                                </div>
                                <div>
                                    <span onClick={ () => setOpen(true) } className={ styles.menuItem }>Contact</span>
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
