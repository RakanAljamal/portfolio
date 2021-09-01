import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { motion } from "framer-motion";
import { cardInfo, cardCollapse, cardOpenDuration, card, cardInfoCollapse, cardContainer } from './animations';
import AnimatedCharacters from "./AnimatedCharacters";

export const MyProject = ({show}) => {
    const [replay, setReplay] = useState(true);
    // Placeholder text data, as if from API
    const placeholderText = [
        { type: "heading1", text: "Projects & Experience" },
    ];

    const container = {
        visible: {
            width:'100%',
            transition: {
                duration:3,
                staggerChildren: 0.025
            }
        }
    };

    if(!show){
        return <div style={{minHeight:100}}/>;
    }

    return (
        <motion.div
            style={{textAlign:'center'}}
            initial="hidden"
            animate="visible"
            variants={container}
        >
            <div className="container">
                {placeholderText.map((item, index) => {
                    return <AnimatedCharacters {...item} key={index} />;
                })}
            </div>

        </motion.div>
    );
}
export const ProjectDetails = (props) => {
    return (
        <div className={styles.projectDetailsContainer}>
            <ProjectInfo {...props}/>
            <ProjectCard  {...props} />
        </div>
    )
};


const ProjectInfo = ({ showProjectsCardAnimation,title,details }) => {
    const [cardInfoVariant, setCardInfoVariant] = useState(cardInfo);
    const [showCardDetails, setShowCardDetails] = useState(false);
    useEffect(() => {
        if (showProjectsCardAnimation) {
            setTimeout(() => {
                setCardInfoVariant(cardInfoCollapse)
                setShowCardDetails(true);
            }, 1500 * cardOpenDuration)
        }

    }, [showProjectsCardAnimation])

    if (!showProjectsCardAnimation) {
        return <div className={styles.cardInfoContainer}/>
    }

    return <motion.div variants={showCardDetails ? cardContainer : null} initial="start" animate="end"
                       className={styles.cardInfoContainer}>
        <motion.div variants={cardInfoVariant} initial="start" animate="end" className={styles.cardInfoOverlay}/>

        {showCardDetails && <div className={styles.cardInfoDetails}>
            <h2>{title}</h2>
            <div className={styles.projectDetails}>{details}</div>
        </div>}
    </motion.div>
}

const ProjectCard = ({ src, showProjectsCardAnimation, animationColor }) => {
    let animateCard = card;
    if(animationColor){
        animateCard = {
            ...card,
            start: {
                ...card.start,
                backgroundColor: animationColor
            }
        }
    }
    const [variant, setVariant] = useState(animateCard);
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
            <div style={{ background: showImage && '#000' }} className={styles.animationContainer}>
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

