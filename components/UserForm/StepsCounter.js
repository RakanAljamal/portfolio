import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";


export const StepsCounter = ({ MAX_STEPS, state, message }) => {
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
