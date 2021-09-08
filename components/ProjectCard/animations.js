export const cardWidth = 1200;
export const cardHeight = 600;
export const cardOpenDuration = 1;

export const cardInfoWidth = 650;
export const closeCardColor = '#fff';
export let card = {
    start: {
        width: 0,
        backgroundColor: closeCardColor
    },
    end: {
        width: cardWidth,
        transition: {
            duration: cardOpenDuration,
            ease: "easeInOut"
        }
    }
}


export const cardCollapse = {
    start: {
        width: cardWidth,
        left: cardWidth,
    },
    end: {
        width: cardWidth,
        left: 2 * cardHeight,
        transition: {
            animationDirection: '',
            duration: 1,
            ease: "easeInOut"
        }
    }
}
export const cardInfo = {
    start: {
        width: 0,
    },
    end: {
        width: cardInfoWidth,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        transition: {
            delay: 0.2,
            duration: cardOpenDuration,
            ease: "easeInOut"
        }
    }
}


export const cardInfoCollapse = {
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
            animationDirection: '',
            duration: 1,
            ease: "easeInOut"
        }
    }
}

export const cardContainer = {
    start: {
        boxShadow: '',
        scale: 0.9,
    },
    end: {
        scale: 1,
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        transition: {
            animationDirection: '',
            duration: 2,
            ease: "easeInOut"
        }
    }
}
