import React from 'react';
import styles from './prediction_widget.module.scss';
import { GraphUpArrow } from 'react-bootstrap-icons';

const PredictionWidget = () => {
    return (
        <div className={styles.predictionCard}>
            <div className={styles.boxTitle}>
                <GraphUpArrow /> AI PREDICTION
            </div>
            <div className={styles.score}>84%</div>
            <div className={styles.desc}>
                TubePilot predicts this video will perform in the top 15% of your niche based on current trends.
            </div>
            <div className={styles.progBg}>
                <div className={styles.progFill}></div>
            </div>
        </div>
    );
};

export default PredictionWidget;
