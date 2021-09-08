import styles from "../HomePage/styles.module.scss";
import { motion } from "framer-motion";
import { letter, sentence, wave } from "../HomePage/animations";

const intro = "Hi, I'm Rakan";

export default function ShowMyInfo() {
    return <div className={ styles.contactMe }>
        <motion.h3 className={ styles.myInfo }
                   variants={ sentence }
                   initial="hidden"
                   animate="visible"
        >
            <motion.span style={ { display: "inline-block", marginRight: 10 } } variants={ wave }
                         initial="still"
                         animate="move">👋
            </motion.span>
            {
                intro.split("").map((char, index) => {
                    return (
                        <motion.span key={ `${ char }-${ index }` } variants={ letter }>
                            { char }
                        </motion.span>
                    )
                })
            }
        </motion.h3>
        <p>
            Creative Software Engineer based in Jordan who have the desire to keep learning
            anything related to modern development,

        </p>
    </div>;
}
