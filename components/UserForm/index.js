import React from 'react';
import { FinishStep } from "./FinishStep";
import { CustomInput, CustomTextarea } from "./Inputs";
import { StepsCounter } from "./StepsCounter";

const UserForm = (props) => {

    const initialProps = {
        ...props,
    }

    switch (props.state.step) {
        case 1:
            return (
                <>
                    <CustomInput { ...initialProps } name="name" placeholder="Name"/>
                    <StepsCounter { ...initialProps }/>
                </>
            );
        case 2:

            return (
                <>
                    <CustomInput { ...initialProps } name="email" placeholder="Email"/>
                    <StepsCounter { ...initialProps }/>
                </>
            );
        case 3:

            return (
                <>
                    <CustomTextarea { ...initialProps } name="description" placeholder="Description (Optional)"/>
                    <StepsCounter { ...initialProps } description={ true }/>
                </>
            );
        default:
            return (
                <FinishStep { ...initialProps }/>
            )
    }
}

export default UserForm;
