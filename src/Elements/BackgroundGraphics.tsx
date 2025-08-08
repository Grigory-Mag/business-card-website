import React from 'react';
import styles from '../CSS/BackgroundGraphics.module.css';

const BackgroundGraphics: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.blob} ${styles.blob1}`}></div>
            <div className={`${styles.blob} ${styles.blob2}`}></div>
            <div className={`${styles.blob} ${styles.blob3}`}></div>
        </div>
    );
};

export default BackgroundGraphics;