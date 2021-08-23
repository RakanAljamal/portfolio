import React, { useEffect, useState } from 'react';
import styles from "../HomePage/styles.module.scss";

let timer;
let flashTimer;
let reverseTimer;


export const InfoCounter = ({ render, initialState, speed, timeToShow, dashTimer, indicator, timeToEnd, deleteSpeed }) => {


    const [running, setIsRunning] = useState(true);
    const [flashUnderscore, setFlashUnderscore] = useState(true);
    const [name, setName] = useState('');
    const [count, setCount] = useState(-1);

    useEffect(() => {
        setTimeout(() => {
            if (running) {
                timer = setInterval(() => {
                    setCount(prevCounter => prevCounter + 1);
                }, speed);
            }

            if (!running) {
                clearInterval(timer);
            }

        }, timeToShow)

        return () => {
            clearInterval(timer);
        }
    }, [running])

    useEffect(() => {
        if (!running) {
            clearInterval(timer);

            setTimeout(() => {
                reverseTimer = setInterval(() => {
                    setName(prevState => {
                        if (!prevState || prevState.length === 0) {
                            clearInterval(reverseTimer);
                            render();
                        }

                        return prevState.slice(0, -1)
                    });
                }, deleteSpeed)

            }, timeToEnd)
        }


    }, [running])

    const flashSlash = () => {
        return setInterval(() => {
            setFlashUnderscore(toggle => !toggle);
        }, dashTimer)
    }

    useEffect(() => {

        if (count === -1) {
            flashTimer = flashSlash();
        } else {
            setFlashUnderscore(true);
            clearInterval(flashTimer)
        }

        if (initialState.length - 1 <= count) {
            setIsRunning(false);
            flashSlash();
        }
        initialState[count] && setName(prevState => prevState + initialState[count]);

        return () => {
            clearInterval(flashTimer)
        }
    }, [count])

    return (
        <div className={styles.whoAmI}>
            <p> <span className={styles.rootUser}>Rakan@WEBSITE $ </span>{name} <span className={flashUnderscore ? styles.hidden : styles.visible}>{indicator}</span></p>
        </div>
    )
}

