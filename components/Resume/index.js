import React, { useState } from 'react';
import { LocalImage } from "../../shared/components";
import styles from './styles.module.scss'
import { ImEye } from 'react-icons/all';

const Resume = () => {
    const [overlayHover, setOverlayHover] = useState(false);
    return (
        <>

            <div style={{position:'relative'}}>
                <span className={styles.resumeText}>Resume</span>
            </div>
            <div onMouseEnter={() => setOverlayHover(true)}
                 onMouseLeave={() => setOverlayHover(false)}
                 style={{ position: 'relative' }}>
                <div className={styles.resumeContainer}>
                    <LocalImage name='cv.png' alt='resume'/>
                    {overlayHover && <div className={styles.downloadOverlay}>
                        <ImEye/>
                    </div>
                    }
                </div>
            </div>
        </>

    );
};

export default Resume;
