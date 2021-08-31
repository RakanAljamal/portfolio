import React, { createRef, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { motion } from "framer-motion";

const cardWidth = 1200;
let cardHeight = 600;
let cardOpenDuration = 1;

const cardInfoWidth = 650;
const cardInfoHeight = 650;
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
            animationDirection: '',
            duration: 1,
            ease: "easeInOut"
        }
    }
}
const cardInfo = {
    start: {
        width: 0,
    },
    end: {
        width: cardInfoWidth,
        transition: {
            delay: 0.2,
            duration: cardOpenDuration,
            ease: "easeInOut"
        }
    }
}


const cardInfoCollapse = {
    start: {
        width: cardInfoWidth,
        left: cardInfoWidth,
        backgroundColor: '#fefefe',
    },
    end: {
        width: cardInfoWidth,
        backgroundColor: '#fff',
        left: 2 * cardInfoWidth,
        transition: {
            delay:0.5,
            animationDirection: '',
            duration: 1,
            ease: "easeInOut"
        }
    }
}
export const ProjectInfo = () => {
    const [cardInfoVariant, setCardInfoVariant] = useState(cardInfo);
    const [showCardDetails, setShowCardDetails] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setCardInfoVariant(cardInfoCollapse)
            setShowCardDetails(true);
        }, 1500 * cardOpenDuration)

    })
    return <div className={styles.cardInfoContainer}>
        <motion.div variants={cardInfoVariant} initial="start" animate="end"  className={styles.cardInfoOverlay}/>

        {showCardDetails && <div className={styles.cardInfoDetails}>
            <h2>Sajilni</h2>
            <div className={styles.projectDetails}>
                Manage the whole application infrastructure including
                the front-end, back-end,
                and Cloud Provider.
            </div>
        </div>}
    </div>
}

const ProjectCard = ({ src, showProjectsCardAnimation }) => {
    const [variant, setVariant] = useState(card);
    const [showImage, setShowImage] = useState(false);
    useEffect(() => {
        if (showProjectsCardAnimation) {
            setTimeout(() => {
                setVariant(cardCollapse)
                setShowImage(true);
            }, 1000 * cardOpenDuration)
        }
    }, [showProjectsCardAnimation])
    return (
        <div className={styles.projectContainer}>
            <div style={{background:showImage && '#222'}} className={styles.animationContainer}>
                {showImage && <motion.img variants={card} className={styles.cardImage}
                                          src={src}
                                          alt="image"/>}

                {showProjectsCardAnimation &&
                <motion.div variants={variant} initial="start" animate="end" className={styles.cardContainer}>

                </motion.div>}
            </div>

        </div>
    );
};


export const ProjectDetails = (props) => {
    return (
        <div className={styles.projectDetailsContainer}>
            <ProjectInfo/>
            <ProjectCard  {...props} />
        </div>
    )
};

export default ProjectCard;
