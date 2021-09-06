import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import UserForm from "../UserForm";
import { useContact } from "../../shared/hooks/useContact";
import { AnimatePresence, motion } from "framer-motion";
import { useScreen } from "../../shared/hooks/useScreen";

const modalBoxVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

const modalVariant = {
    hidden: {
        opacity: 0,
        y: -500,
        transition: {
            staggerChildren: 0.21
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            duration: 1,
            staggerChildren: 0.21,
            when: "beforeChildren"
        }
    }
}

const contactInfoVariant = {
    hidden: {
        opacity: 0,
        y: -100,

    },
    visible: {
        opacity: 1,
        y: 0,
    }
}
const Modal = ({ open, setOpen }) => {
    const contactProps = useContact();
    const { isTablet } = useScreen();
    useEffect(() => {
        if (!document?.documentElement) {
            return
        }
        document.documentElement.style.overflow = open ? 'hidden' : 'auto'

        return () => {
            document.documentElement.style.overflow = 'auto';
        }
    }, [open])


    const handleClose = (ev, keyClicked) => {
        if (ev && ev.key === 'Escape') {
            setOpen(false);
            contactProps.resetContact(true);
        }
        if (keyClicked) {
            return;
        }
        setOpen(false);
    }
    return (
        <AnimatePresence>

            {open &&
            <motion.div key="modalContainer" exit="hidden" variants={modalBoxVariant} initial="hidden" animate="visible"
                        className={styles.modal} tabIndex="0" onKeyDown={(ev) => handleClose(ev, true)}>
                <motion.div key="modalBox" exit="hidden" variants={modalVariant} initial="hidden" animate="visible"
                            className={styles.modalBoxContainer}>
                    <div className={styles.modalBox}>
                        <div className={styles.closeButton} onClick={handleClose}>&#x2715;</div>

                        <div className={styles.modalHeader}>
                            <motion.div variants={contactInfoVariant} className={styles.contactOptions}>
                                <span>Location:</span>
                                <a className={styles.contactDetail}>Jordan/Amman</a>
                            </motion.div>
                            <motion.div variants={contactInfoVariant} className={styles.contactOptions}>
                                <span>PHONE:</span>
                                {isTablet ? <div>
                                        <a href="tel:+962798000023">+962 798000023</a>
                                        <span className={styles.available}>I&#39;m available </span>
                                    </div> :
                                    <>
                                        <a href="tel:+962798000023">+962 798000023</a>
                                        <span className={styles.available}>I&#39;m available </span>
                                    </>
                                }
                            </motion.div>
                            <motion.div variants={contactInfoVariant} className={styles.contactOptions}>
                                <span>E-MAIL:</span>
                                <a href="mailto:rakanaljamal@gmail.com">rakanaljamal@gmail.com</a>
                            </motion.div>
                        </div>
                        <div className={styles.modalBody}>
                            <UserForm  {...contactProps} setOpen={setOpen}/>
                        </div>
                        <div className={styles.modalFooter}>
                        </div>
                        <svg className={styles.modalPattern} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path
                                d="M0,64L34.3,101.3C68.6,139,137,213,206,213.3C274.3,213,343,139,411,101.3C480,64,549,64,617,106.7C685.7,149,754,235,823,250.7C891.4,267,960,213,1029,176C1097.1,139,1166,117,1234,128C1302.9,139,1371,181,1406,202.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"/>
                        </svg>

                    </div>
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>
    );
};

export default Modal;
