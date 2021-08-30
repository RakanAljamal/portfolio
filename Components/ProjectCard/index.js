import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { motion } from "framer-motion";

const cardWidth = 1600;
const card = {
    start: {
        width: 0,
        height: 900,
        backgroundColor: 'red'
    },
    end: {
        backgroundColor: 'white',
        width: cardWidth,
        height: 900,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
}


const cardCollapse = {
    start: {
        width: cardWidth,
        height: 900,
        backgroundColor: 'white'
    },
    end: {
        backgroundColor: 'white',
        left: cardWidth,
        width: 0,
        height: 900,
        transition: {
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
        }, 1000)
    }, [])
    return (
        <div>
            {showImage && <motion.img variants={card} className={styles.cardImage}
                         src={src}
                         alt="image"/>
            }
            <motion.div variants={variant} initial="start" animate="end" className={styles.cardContainer}>

            </motion.div>

        </div>
    );
};

export default ProjectCard;
