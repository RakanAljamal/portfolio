export const cardWidth = 1200;
export const cardHeight = 600;
export const cardOpenDuration = 1;

export const cardInfoWidth = 650;
export const closeCardColor = '#fff';
export let card = {
    start: {
        width: 0,
        backgroundColor:closeCardColor
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
        scale:0.9,
    },
    end: {
        scale:1,
        boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
        transition: {
            animationDirection: '',
            duration: 2,
            ease: "easeInOut"
        }
    }
}
