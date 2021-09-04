import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { motion } from "framer-motion";
import { validateEmail } from "../../shared/utils";


const StepsCounter = ({ MAX_STEPS, state, message }) => {
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
const CustomInput = ({ message, setMessage, placeholder, name, state, handleChange, nextStep, prevStep, MIN_STEPS, MAX_STEPS }) => {

    console.log(state.step)
    console.log(MIN_STEPS)
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
const CustomTextarea = ({ placeholder, name, state, handleChange, nextStep, prevStep, resetContact,MIN_STEPS,MAX_STEPS }) => {
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
const pathVariants = {
    hidden: {
        opacity: 1,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1.5,
            ease: "easeInOut",
        }
    }
};
const FinishStep = ({ setOpen, resetContact }) => {
    useEffect(() => {
        let closeTimeout = setTimeout(() => {
            setOpen(false);
            resetContact();
        }, 5000)

        return () => {
            clearTimeout(closeTimeout)
            resetContact();
        }
    }, [])
    return ( <div className={styles.finalStep}>
            <span>Your message has been sent.</span>
            <svg className={styles.checkMark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle  className={styles.checkMarkCircle} cx="26" cy="26" r="25" fill="none"/>
                <motion.path variants={pathVariants} initial="hidden" animate="visible" className={styles.checkMarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <span>Thank you! I'll get back to you quickly.</span>
        </div>
    )
}
const UserForm = (props) => {

    const initialProps = {
        ...props,
    }

    switch (props.state.step) {
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
                <FinishStep {...initialProps}/>
            )
    }
}

export default UserForm;
