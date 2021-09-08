import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const pathVariants = {
    hidden: {
        opacity: 1,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1.5,
            ease: "easeInOut",
        }
    }
};

export const FinishStep = ({ setOpen, resetContact }) => {
    useEffect(() => {
        let closeTimeout = setTimeout(() => {
            setOpen(false);
            resetContact();
        }, 5000)

        return () => {
            clearTimeout(closeTimeout)
            resetContact();
        }
    }, [])
    return ( <div tabIndex="1" autoFocus className={styles.finalStep}>
            <span>Your message has been sent.</span>
            <svg className={styles.checkMark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className={styles.checkMarkCircle} cx="26" cy="26" r="25" fill="none"/>
                <motion.path variants={pathVariants} initial="hidden" animate="visible"
                             className={styles.checkMarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <span>Thank you! I&apos;ll get back to you quickly.</span>
        </div>
    )
}
