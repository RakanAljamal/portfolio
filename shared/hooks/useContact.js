import React, { useState } from "react";


const MIN_STEPS = 1;
const MAX_STEPS = 3;

export const useContact = () => {

    const initialState = {
        step: 1,
        name: '',
        email: '',
        description: ''
    };

    let initialMessage = {
        message: '',
        error: false,
    };
    const [state, setState] = useState(initialState)


    const [message, setMessage] = useState(initialMessage)
    const nextStep = () => {
        if (state.step > MAX_STEPS) {
            return;
        }
        setState((state) => ( { ...state, step: state.step + 1 } ))
    }

    const resetContact = (stepOnly = false) => {
        if (stepOnly) {
            setState(prevState => ( { ...prevState, step: 1 } ))
        } else {
            setState(initialState);
            setMessage(initialMessage);
        }
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

    return {
        state,
        message,
        setMessage,
        nextStep,
        prevStep,
        handleChange,
        MAX_STEPS,
        resetContact
    }
}
