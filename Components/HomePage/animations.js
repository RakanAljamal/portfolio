export const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            staggerChildren: 0.09
        }
    }
}
export const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,

    }
}
export const wave = {
    still: {
        rotateZ: 0,
        scale: 1.3
    },
    move: {
        rotateZ: 10,
        scale: 1.3,
        transition: {
            yoyo: 3,
            delay: 1
        }
    }
}

export const skills = {
    hidden: {
        opacity: 0,
        y:'-200px'
    },
    visible: {
        opacity:1,
        y:-50,
        transition:{
            type:"spring",
            delay:1,
            stiffness:120
        }
    }
}

export const expandDot = {
    hidden: {
        opacity:1,
        y:-50,
        scale:1
    },
    visible: {
        y:-13,
        opacity:1,
        scale:18,
        background:'#222',
        transition:{
            type:"spring",
            delay:1,
            stiffness:120
        }
    }
}

export const showLogo = {
    hidden:{
        opacity:0,
    },
    visible:{
        opacity:1,
        transition:{
            type:'spring',
            delay:5
        }
    }
}


export const rotateLogo = {
    visible:{
        opacity:1,
        scale:1,
        rotate: 360,
        transition:{
            loop: Infinity,
            ease: "linear",
            duration: 10
        }
    }
}
