import React, { useState } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const hiddenTextBackground = {
    height: '50px',
    bottom:0,
    right:0,
    background:'#222',
    width: '100%',
    position: 'absolute',
};
const showTextBackground = {
    height: '5px',
    bottom: 0,
    right:0,
    background:'#222',
    position: 'absolute',
    width: '100%',
};
export const Footer = () => {
    const [showContactBackground,setShowContactBackground] = useState(false);

    return (
        <>
            <svg style={{ fill: '#F7F7F7' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    d="M0,96L120,133.3C240,171,480,245,720,245.3C960,245,1200,171,1320,133.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"/>
            </svg>
            <div className={styles.contactMeFooter}>
                Wanna hire me, don&#39;t hesitate to <motion.div className={styles.contactMeCTA}>
            <span onMouseEnter={() => setShowContactBackground(true)}
                  onMouseLeave={() => setShowContactBackground(false)}
            >contact me</span>
                <motion.div className={styles.contactMeBackground}
                            animate={showContactBackground ?
                                hiddenTextBackground
                                :
                                showTextBackground
                            }
                />
            </motion.div>
            </div>
        </>
    )
}
