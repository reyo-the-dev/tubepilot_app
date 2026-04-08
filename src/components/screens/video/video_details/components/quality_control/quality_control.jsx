import React from 'react';
import styles from './quality_control.module.scss';
import CustomBox from "@/components/ui/custom_box/custom_box";
import { ArrowRepeat, Film, Stars } from 'react-bootstrap-icons';

const QualityControl = () => {
    return (
        <CustomBox
            title="Quality Control"
            icon={<ArrowRepeat />}
        >
            <div className={styles.qualityCard}>
                <div className={styles.qList}>
                    <div className={styles.qItem}>
                        <ArrowRepeat className={styles.icon} />
                        <div className={styles.details}>
                            <h5>Regenerate Audio</h5>
                            <span>Update voice or tone</span>
                        </div>
                    </div>
                    <div className={styles.qItem}>
                        <Film className={styles.icon} />
                        <div className={styles.details}>
                            <h5>Regenerate Video</h5>
                            <span>Refresh stock footage</span>
                        </div>
                    </div>
                    <div className={styles.qItem}>
                        <Stars className={styles.icon} />
                        <div className={styles.details}>
                            <h5>AI Smart Polish</h5>
                            <span>Auto-enhance all assets</span>
                        </div>
                    </div>
                </div>
            </div>
        </CustomBox>
    );
};

export default QualityControl;
