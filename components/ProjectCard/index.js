import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { motion } from "framer-motion";
import { card, cardCollapse, cardContainer, cardInfo, cardInfoCollapse, cardOpenDuration } from './animations';
import AnimatedCharacters from "./AnimatedCharacters";
import { useInScreen } from "../../shared/hooks/useInScreen";
import Image from "next/image";

export const MyProject = ({setFixedNavbar}) => {
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

    useEffect(()=>{
        if(show){
            setFixedNavbar(true);
        }
    },[show])


    return (
        <div id="projects" className={ styles.myProject } ref={ ref }>

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


const ProjectInfo = ({ title, details, animationColor, items, href }) => {
    const { ref, show } = useInScreen();
    const [cardInfoVariant, setCardInfoVariant] = useState(animationColor ? {
        ...cardInfo,
        start: {
            ...cardInfo.start,
            backgroundColor: animationColor
        }
    }: cardInfo);
    const [showCardDetails, setShowCardDetails] = useState(false);
    const [showCardOverlay, setShowCardOverlay] = useState(false);
    useEffect(() => {
        if (show) {
            setShowCardOverlay(true);
            console.log('Rendered')
            setTimeout(() => {
                setCardInfoVariant(cardInfoCollapse)
                setShowCardDetails(true);
            }, 1500 * cardOpenDuration)
        }

    }, [show])



    function handleHref() {
        window.location.href = href;
    }

    return <motion.div ref={ ref } variants={ showCardDetails ? cardContainer : null } initial="start" animate="end"
                       className={ styles.cardInfoContainer }>

        { showCardOverlay && <motion.div variants={ cardInfoVariant } initial="start" animate="end"
                      className={ styles.cardInfoOverlay }/> }

        { showCardDetails && <div ref={ ref } className={ styles.cardInfoDetails }>
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

const ProjectCard = ({ src, animationColor }) => {
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
    const { ref, show } = useInScreen();
    const [variant, setVariant] = useState(animateCard);
    const [showImage, setShowImage] = useState(false);
    const [showCardContainer, setShowCardContainer] = useState(false);
    useEffect(() => {
        if (show) {
            setShowCardContainer(true)
            console.log('Rendered')
            setTimeout(() => {
                setVariant(cardCollapse)
                setShowImage(true);
            }, 1000 * cardOpenDuration)
        }
    }, [ref, show])
    return (
        <div className={ styles.projectContainer }>
            <div style={ { background: showImage && '#000' } } ref={ ref } className={ styles.animationContainer }>
                { showImage && <Image className={ styles.cardImage }
                                           src={ src }
                                           alt="image"/> }

                { showCardContainer &&
                <motion.div variants={ variant } initial="start" animate="end" className={ styles.cardContainer }>

                </motion.div> }
            </div>

        </div>
    );
};

