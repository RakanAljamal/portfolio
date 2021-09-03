import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import UserForm from "../UserForm";

const Modal = ({ open, setOpen }) => {
    useEffect(() => {
        if (!document?.documentElement) {
            return
        }
        document.documentElement.style.overflow = open ? 'hidden' : 'auto'

        return () => {
            document.documentElement.style.overflow = 'auto';
        }
    }, [open])

    if (!open) {
        return <div/>
    }

    const handleClose = (ev,keyClicked) => {
        if (ev && ev.key === 'Escape') {
            setOpen(false);
        }
        if(keyClicked){
            return;
        }
        setOpen(false);
    }
    return (
        <div className={styles.modal} tabIndex="0" onKeyDown={(ev)=>handleClose(ev,true)}>
            <div className={styles.modalBoxContainer}>
                <div className={styles.modalBox}>
                    <div className={styles.modalHeader}>
                        <div className={styles.contactOptions}>
                            <span>Location</span>
                            <span className={styles.contactDetail}>Jordan/Amman</span>
                        </div>
                        <div className={styles.contactOptions}>
                            <span>PHONE</span>
                            <a href="tel:+962798000023">+962-798000023</a>
                            <span className={styles.available}>I'm available </span>
                        </div>
                        <div className={styles.contactOptions}>
                            <span>E-MAIL</span>
                            <a href="mailto:rakanaljamal@gmail.com">rakanaljamal@gmail.com</a>
                        </div>
                    </div>
                    <div className={styles.modalBody}>
                        <UserForm/>
                    </div>
                    <div className={styles.modalFooter}>
                        <span onClick={handleClose}>Close</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
