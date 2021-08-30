import React, { createRef, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { motion } from "framer-motion";
import { useIntersection } from '../useIntersection';
import TrackVisibility from 'react-on-screen';

const cardWidth = 1200;
let cardHeight = 600;
let cardOpenDuration = 1;
const card = {
    start: {
        width: 0,
    },
    end: {
        width: cardWidth,
        transition: {
            duration: cardOpenDuration,
            ease: "easeInOut"
        }
    }
}


const cardCollapse = {
    start: {
        width: cardWidth,
        left: cardWidth,
        backgroundColor: 'white',
    },
    end: {
        width: cardWidth,
        backgroundColor: 'white',
        left: 2 * cardHeight,
        transition: {
            animationDirection:'',
            duration: 1,
            ease: "easeInOut"
        }
    }
}

const ProjectCard = ({src}) => {
    const [variant, setVariant] = useState(card);
    const [showImage, setShowImage] = useState(false);
    useEffect(() => {

        setTimeout(() => {
            setVariant(cardCollapse)
            setShowImage(true);
        }, 1000 * cardOpenDuration)
    }, [])
    return (
        <div className={styles.projectContainer}>
            <div className={styles.animationContainer}>
                {showImage && <motion.img  variants={card} className={styles.cardImage}
                             src={src}
                             alt="image"/>}

                <motion.div   variants={variant} initial="start" animate="end" className={styles.cardContainer}>

                </motion.div>
            </div>

        </div>
    );
};

export default ProjectCard;
