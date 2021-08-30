import React, { createContext, useEffect, useState } from 'react';

export const ScrollContext = createContext({
    showSkillsAnimation: false,
    showProjectsCardAnimation: false,
    showAnimation: (type) => {
    }
})

export const scrollAnimationType = {
    Skills:'skills',
    Cards:'cards'
}
export const ScrollProvider = ({ children }) => {
    const [showSkillsAnimation,setShowSkillsAnimation] = useState(false);
    const [showProjectsCardAnimation,setShowProjectsCardAnimation] = useState(false);

    const showAnimation = (type) => {
        switch (type) {
            case scrollAnimationType.Cards:
                setShowProjectsCardAnimation(true);
                break;
            case scrollAnimationType.Skills:
                setShowSkillsAnimation(true);
                break;
            default:
                break;
        }
    }


    return (
        <ScrollContext.Provider value={{ showSkillsAnimation, showProjectsCardAnimation, showAnimation }}>
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;
