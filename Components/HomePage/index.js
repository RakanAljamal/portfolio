import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { BottomHome, SectionDivider, TopHome } from "../../shared/svg";
import Particles from 'react-particles-js';
import { InfoCounter } from "../InfoCounter";
import Home from "../../pages";


export const HomePage = ({ initialState } ) => {
    return (
        <div className={styles.homepageContainer}>
            <div className={styles.particlesContainer}>
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 160,
                                density: {
                                    enable: false
                                }
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    speed: 4,
                                    size_min: 0.3
                                }
                            },
                            line_linked: {
                                enable: false
                            },
                            move: {
                                random: true,
                                speed: 1,
                                direction: "top",
                                out_mode: "out"
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
                    }}/>
                <InfoCounter initialState={initialState}
                             speed={40}
                             dashTimer={400}
                             timeToShow={2000} indicator={'_'}/>


            </div>
            <SectionDivider/>
        </div>
    );
};





