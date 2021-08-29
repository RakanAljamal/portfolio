export const params = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: false
            }
        },

        color:{
            value:["#fff"]
        },
        size: {
            value: 40,
            random: true,
            anim: {
                speed: 4,
                size_min: 10
            }
        },
        line_linked: {
            enable: false,
            color: '#22c2a2'

        },
        move: {
            speed: 0.1,
            out_mode: "bounce"
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "bubble"
            },
        },
        modes: {
            bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0
            },
            repulse: {
                distance: 400,
                duration: 4
            }
        }
    }
}
