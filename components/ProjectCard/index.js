import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { motion } from "framer-motion";
import { card, cardCollapse, cardContainer, cardInfo, cardInfoCollapse, cardOpenDuration } from './animations';
import AnimatedCharacters from "./AnimatedCharacters";
import { useInScreen } from "../../shared/hooks/useInScreen";

export const MyProject = () => {
    const { ref, show } = useInScreen();

    const placeholderText = [
        { type: "heading1", text: "Projects & Experience" },
    ];

    const container = {
        visible: {
            transition: {
                duration: 3,
                staggerChildren: 0.025
            }
        }
    };


    return (
        <div className={ styles.myProject } ref={ ref }>

            { show && <motion.div
                style={ { textAlign: 'center' } }
                initial="hidden"
                animate="visible"
                className={ styles.projectChars }
                variants={ container }
            >
                <div>
                    { placeholderText.map((item, index) => {
                        return <AnimatedCharacters { ...item } key={ index }/>;
                    }) }
                </div>

            </motion.div> }
        </div>
    );
}
export const ProjectDetails = (props) => {
    return (
        <div className={ styles.projectDetailsContainer }>
            <ProjectInfo { ...props }/>
            <ProjectCard  { ...props } />
        </div>
    )
};


const ProjectInfo = ({ showProjectsCardAnimation, title, details, animationColor, items, href }) => {
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

    if ( !showProjectsCardAnimation) {
        return <div className={ styles.cardInfoContainer }/>
    }

    function handleHref() {
        window.location.href = href;
    }

    return <motion.div variants={ showCardDetails ? cardContainer : null } initial="start" animate="end"
                       className={ styles.cardInfoContainer }>
        <motion.div variants={ cardInfoVariant } initial="start" animate="end" className={ styles.cardInfoOverlay }/>

        { showCardDetails && <div className={ styles.cardInfoDetails }>
            <h2>{ title }</h2>
            <div className={ styles.projectDetails }>{ details }</div>
            <ul className={ styles.itemSkills }>
                { items.map(item => (<li key={ item }>{ item }</li>)) }
            </ul>
            <div style={ { background: animationColor } } onClick={ handleHref } className={ styles.website }>Website
            </div>
        </div> }
    </motion.div>
}

const ProjectCard = ({ src, showProjectsCardAnimation, animationColor }) => {
    let animateCard = card;
    if (animationColor) {
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
        <div className={ styles.projectContainer }>
            <div style={ { background: showImage && '#000' } } className={ styles.animationContainer }>
                { showImage && <motion.img variants={ card } className={ styles.cardImage }
                                           src={ src }
                                           alt="image"/> }

                { showProjectsCardAnimation &&
                <motion.div variants={ variant } initial="start" animate="end" className={ styles.cardContainer }>

                </motion.div> }
            </div>

        </div>
    );
};

