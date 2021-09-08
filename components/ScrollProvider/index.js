import React, { createContext, useState } from 'react';

export const ScrollContext = createContext({
    showSkillsAnimation: false,
    showProjectsCardAnimation: false,
    showAnimation: (type, index = 0) => {
    }
})

export const animationType = {
    Skills: 'skills',
    Cards: 'cards'
}
export const ScrollProvider = ({ children }) => {
    const [showSkillsAnimation, setShowSkillsAnimation] = useState(false);
    const [showProjectsCardAnimation, setShowProjectsCardAnimation] = useState([false, false]);

    const showAnimation = (type, index = 0) => {
        switch (type) {
            case animationType.Cards:
                setShowProjectsCardAnimation(prevState => prevState.map((item, idx) => idx === index ? true : item));
                break;
            case animationType.Skills:
                setShowSkillsAnimation(true);
                break;
            default:
                break;
        }
    }


    return (
        <ScrollContext.Provider value={ { showSkillsAnimation, showProjectsCardAnimation, showAnimation } }>
            { children }
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;
