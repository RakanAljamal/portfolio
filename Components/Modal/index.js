import React, { useEffect } from 'react';
import styles from './styles.module.scss';
const Modal = ({open}) => {
    useEffect(()=>{
        if (!document?.documentElement) {
            return
        }
        document.documentElement.style.overflow = open ? 'hidden' : 'auto'

        return () =>{
            document.documentElement.style.overflow='auto';
        }
    },[open])

    if(!open){
        return <div/>
    }
    return (
        <div className={styles.modal}>

        </div>
    );
};

export default Modal;
