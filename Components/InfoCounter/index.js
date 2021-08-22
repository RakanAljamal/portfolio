import React, { useCallback, useEffect, useState } from 'react';
import styles from "../HomePage/styles.module.scss";
import Parser from 'html-react-parser';

let timer;



export const InfoCounter = ({ initialState, speed, timeToShow, dashTimer, indicator }) => {
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


    let flashTimer;

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
        <div className={styles.whoami}>
            <h1>{name} {flashUnderscore && indicator}</h1>
        </div>
    )
}

