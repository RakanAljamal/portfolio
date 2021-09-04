import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { motion } from "framer-motion";

const MIN_STEPS = 1;
const MAX_STEPS = 3;

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const StepsCounter = ({ state, message }) => {
    const stepWidth = 100 / MAX_STEPS;
    return (
        <>
            <motion.div
                animate={{
                    width: `${stepWidth * ( state.step - 1 )}%`
                }}
                transition={{
                    type: "spring",
                    duration: 1,
                    stiffness: 100,
                    mass: 0.6
                }}
                style={{ backgroundColor: message.error ? '#ff8080' : null }}
                className={styles.stepsProgress}>


            </motion.div>
            <div className={styles.stepsCounter}>
                {`${state.step} / ${MAX_STEPS}`}
            </div>
        </>
    )
}
const CustomInput = ({ message, setMessage, placeholder, name, state, handleChange, nextStep, prevStep }) => {

    const handleNextStep = (ev) => {
        if (( ev.key === 'Enter' || ev.type === 'click' ) && state[name].trim()) {
            if (ev.target.name === 'email' && !validateEmail(ev.target.value)) {
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

            <label htmlFor={name} onClick={handleNextStep} className={styles.arrow}>&#8594;</label>

            {message.error && <div style={{ position: 'absolute', top: '75%', fontSize: 35 }}>
                - {message.message}
            </div>}

        </div>

    )
}
const CustomTextarea = ({ placeholder, name, state, handleChange, nextStep, prevStep }) => {

    const handleNextStep = (ev) => {
        if (ev.key === 'Enter' && !ev.shiftKey) {
            ev.preventDefault();
            nextStep();
        } else if (ev.key === 'Enter' && !ev.shiftKey) {
            ev.preventDefault();
            return false;
        }
    }
    return (
        <div className={styles.customInputContainer}>
            <span className={styles.inputPlaceholder}>{placeholder}</span>
            <textarea
                autoFocus
                onKeyDown={handleNextStep}
                className={styles.descriptionInput}
                name={name}
                value={state[name]}
                onChange={handleChange}
            />
        </div>

    )
}

const FinishStep = ({setOpen}) => {
    useEffect(()=>{
        let closeTimeout = setTimeout(()=>{
            setOpen(false)
        },5000)

        return () => {
            clearTimeout(closeTimeout)
        }
    },[])
    return ( <div className={styles.finalStep}>
            <span>Your message has been sent.</span>
            <svg className={styles.checkMark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className={styles.checkMarkCircle} cx="26" cy="26" r="25" fill="none"></circle>
                <path className={styles.checkMarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
            </svg>
            <span>Thank you ! I'll get back to you quickly.</span>
        </div>
    )
}
const UserForm = ({setOpen}) => {
    const [state, setState] = useState({
        step: 1,
        name: '',
        email: '',
        description: ''
    })

    const [message, setMessage] = useState({
        message: '',
        error: false,
    })
    const nextStep = () => {
        if (state.step > MAX_STEPS) {
            return;
        }
        setState((state) => ( { ...state, step: state.step + 1 } ))
    }


    const prevStep = () => {
        if (state.step < MIN_STEPS) {
            return;
        }
        setState((state) => ( { ...state, step: state.step - 1 } ))
    }

    const handleChange = (ev, validate) => {
        if (ev.target.name === 'email') {


        }
        setState({ ...state, [ev.target.name]: ev.target.value })
    }

    const initialProps = {
        state,
        nextStep,
        prevStep,
        handleChange,
        message,
        setMessage
    }

    switch (state.step) {
        case 1:
            return (
                <>
                    <CustomInput {...initialProps} name="name" placeholder="Name"/>
                    <StepsCounter {...initialProps}/>
                </>
            );
        case 2:

            return (
                <>
                    <CustomInput {...initialProps} name="email" placeholder="Email"/>
                    <StepsCounter {...initialProps}/>
                </>
            );
        case 3:

            return (
                <>
                    <CustomTextarea {...initialProps} name="description" placeholder="Description (Optional)"/>
                    <StepsCounter {...initialProps}/>
                </>
            );
        default:
            return (
                <FinishStep setOpen={setOpen}/>
            )
    }
}

export default UserForm;
