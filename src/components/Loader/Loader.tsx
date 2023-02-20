import React from 'react';
import styles from './Loader.module.scss'

const Loader: React.FC<any> = () => {
    return (
        <div className={styles.ldsDefault}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;