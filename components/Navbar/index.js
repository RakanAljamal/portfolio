import React from 'react';
import styles from './styles.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useScreen } from "../../shared/hooks/useScreen";
import SidebarMenu from "../Menu";
import {scrollToElement} from "../../shared/utils";

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
const Navbar = ({ fixed, setOpen }) => {
    const { isTablet } = useScreen();

    if (isTablet) {
        return <SidebarMenu setOpen={setOpen}/>
    }
    return <AnimatePresence>
        { !fixed &&
        <motion.div animate={ { y: 0 } } initial={ { y: -100 } } exit={ { y: -100 } } className={ styles.navbar }>
            <div id="home">
                <div className={ styles.navbarGroup }>
                    <motion.div variants={ navbarVariant } initial="hidden" animate="visible" className={ styles.menu }>
                        <ul>
                            <motion.li variants={ menuItemVariant } onClick={()=>scrollToElement(document.getElementById('home'),100)}      >Intro</motion.li>
                            <motion.li variants={ menuItemVariant } onClick={()=>scrollToElement(document.getElementById('skills'),400)}>Skills</motion.li>
                            <motion.li variants={ menuItemVariant } onClick={()=>scrollToElement(document.getElementById('projects'))}  >Projects</motion.li>
                        </ul>
                    </motion.div>
                    <div>
                        <span onClick={ () => setOpen(true) } className={ styles.lightContact }>Contact</span>
                    </div>
                </div>
            </div>
        </motion.div>
        }
    </AnimatePresence>

};

export default Navbar;
