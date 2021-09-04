import React, { useEffect } from 'react';
import { validateEmail } from "../../shared/utils";
import styles from "./styles.module.scss";

export const CustomInput = ({ message, setMessage, placeholder, name, state, handleChange, nextStep, prevStep, MIN_STEPS, MAX_STEPS }) => {
    const hasPrevStep = state.step > MIN_STEPS;
    const hasNextStep = state.step < MAX_STEPS;

    const handleNextStep = (ev) => {
        if (( ev.key === 'Enter' || ev.type === 'click' ) && state[name].trim()) {
            if (state.step === 2 && !validateEmail(state[name])) {
                setMessage({
                    message: 'Invalid email',
                    error: true
                })
                return;
            }

            setMessage({ message: '', error: false })
            nextStep();
        }
    }

    const handlePrevStep = () => {
        prevStep();
    }

    return (
        <div className={styles.customInputContainer}>
            <span className={styles.inputPlaceholder}>{placeholder}</span>
            <input
                autoComplete="off"
                autoFocus
                onKeyDown={handleNextStep}
                className={styles.nameInput}
                id={name}
                name={name}
                value={state[name]}
                onChange={(ev) => handleChange(ev, setMessage)}
                type="text"/>

            { hasNextStep && <label htmlFor={name} onClick={handleNextStep} className={styles.arrow}>&#8594;</label> }
            { hasPrevStep && <label htmlFor={name} onClick={handlePrevStep} className={styles.backwardArrow}>&#8592;
                <span>{Object.keys(state)[state.step - 1]}</span></label> }

            {message.error && <div style={{ position: 'absolute', top: '25%', fontSize: 15 }}>
                - {message.message}
            </div>}

        </div>

    )
}
export const CustomTextarea = ({ placeholder, name, state, handleChange, nextStep, prevStep, resetContact,MIN_STEPS,MAX_STEPS }) => {
    const hasPrevStep = state.step > MIN_STEPS;
    const hasNextStep = state.step <= MAX_STEPS;

    const handleNextStep = (ev) => {
        if (ev.type ==='click' || (ev.key === 'Enter' && !ev.shiftKey)) {
            ev.preventDefault();
            nextStep();
        } else if (ev.key === 'Enter' && !ev.shiftKey) {
            ev.preventDefault();
            return false;
        }
    }

    const handlePrevStep = () => {
        prevStep();
    }

    return (
        <div className={styles.customInputContainer}>
            <span className={styles.inputPlaceholder}>{placeholder}</span>
            <textarea
                autoFocus
                id={name}
                onKeyDown={handleNextStep}
                className={styles.descriptionInput}
                name={name}
                value={state[name]}
                onChange={handleChange}
            />
            { hasNextStep && <label htmlFor={name} onClick={handleNextStep} className={styles.textAreaArrow}>&#8594;</label> }
            { hasPrevStep && <label htmlFor={name} onClick={handlePrevStep} className={styles.textAreaBackwardArrow}>&#8592;
                <span>{Object.keys(state)[state.step - 1]}</span></label> }
        </div>

    )
}
