import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Screen = ({ children, refresh, changeScreen }) => {
    const [loading, setLoading] = useState();
    useEffect(() => {
        setLoading(true);
    }, [])


    return (
        <div className={ styles.screenContainer }>
            <div className={ styles.main }>

                <div className={ styles.codeScreen }>
                    <div>
                        { children }
                    </div>
                </div>

            </div>
            {loading && <div className={styles.mediumPc}>
                <img alt="actions" src={`${window?.location.origin}/options.png`}/>
            </div>
            }            <div className={ styles.mediumIcon }/>
            <div className={ styles.underlay }/>
            <div className={ styles.underlayBottom }/>
        </div>
    );
};

export default Screen;
