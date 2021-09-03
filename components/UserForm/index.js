import React, { useMemo, useState } from 'react';
import styles from './styles.module.scss';

const MIN_STEPS = 1;
const MAX_STEPS = 4;
const CustomInput = ({ placeholder, name, state, handleChange, nextStep, prevStep }) => {

    const handleNextStep = (ev) => {
        if (ev.key === 'Enter') {
            nextStep();
        }
    }
    return (
        <div className={styles.customInputContainer}>
            <span className={styles.inputPlaceholder}>{placeholder}</span>
            <input
                autoFocus

                onKeyDown={handleNextStep}
                className={styles.nameInput}
                name={name}
                value={state[name]}
                onChange={handleChange}
                type="text"/>
        </div>

    )
}
const UserForm = () => {
    const [state, setState] = useState({
        step: 1,
        name: '',
        email: '',
        optionalDescription: ''
    })
    console.log(state)

    const nextStep = () => {
        if (state.step >= MAX_STEPS) {
            return;
        }
        setState((state) => ( { ...state, step: state.step + 1 } ))
    }


    const prevStep = () => {
        if (state.step <= MIN_STEPS) {
            return;
        }
        setState((state) => ( { ...state, step: state.step - 1 } ))
    }

    const handleChange = (ev) => {
        setState({ ...state, [ev.target.name]: ev.target.value })
    }

    const initialProps = {
        state,
        nextStep,
        prevStep,
        handleChange
    }

    switch (state.step) {
        case 1:
            return (
                <CustomInput {...initialProps} name="name" placeholder="Name"/>
            );
        case 2:

            return (
                <CustomInput {...initialProps} name="email" placeholder="Email"/>
            );
        default:
            console.log(state)
            return (
                <h1>Thanks</h1>
            )
            break;
    }
}

export default UserForm;
