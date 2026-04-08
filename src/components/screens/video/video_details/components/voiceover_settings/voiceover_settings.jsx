import React from 'react';
import styles from './voiceover_settings.module.scss';
import CustomBox from "@/components/ui/custom_box/custom_box";
import { PlayFill, Download } from 'react-bootstrap-icons';

const VoiceoverSettings = () => {
    return (
        <CustomBox
            title="AI Voiceover"
            icon={<PlayFill />}
        >
            <div className={styles.voiceCard}>


                <div className={styles.audioPlayer}>
                    <button className={styles.playBtn}><PlayFill size={20} style={{ marginLeft: '2px' }} /></button>
                    <div className={styles.track}>
                        <div className={styles.bar}>
                            <div className={styles.fill}></div>
                        </div>
                        <div className={styles.times}>
                            <span>01:12</span>
                            <span>03:45</span>
                        </div>
                    </div>
                </div>

                <div className={styles.voiceSelector}>
                    <div className={styles.infoRow}>
                        <div className={styles.avatar}>
                            {/* Placeholder for Voice Avatar */}
                        </div>
                        <div className={styles.details}>
                            <h5>&quot;Isabella&quot; - English (UK)</h5>
                            <span>Narrative & Warm</span>
                        </div>
                    </div>
                    <span className={styles.changeLink}>Change</span>
                </div>

                <button className={styles.downloadBtn}>
                    <Download /> Download Audio (.mp3)
                </button>
            </div>
        </CustomBox>
    );
};

export default VoiceoverSettings;
