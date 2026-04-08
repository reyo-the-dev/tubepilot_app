import React from 'react';
import styles from './video_player.module.scss';
import { PlayFill, VolumeUpFill, GearFill, Fullscreen } from 'react-bootstrap-icons';

const VideoPlayer = () => {
    return (
        <div className={styles.videoPlayerCard}>
            <div className={styles.topGradient}></div>
            
            <div className={styles.playCenter}>
                <PlayFill style={{ marginLeft: '4px' }} />
            </div>

            <div className={styles.bottomControls}>
                <span className={styles.time}>02:45 / 12:30</span>
                <div className={styles.icons}>
                    <VolumeUpFill />
                    <GearFill />
                    <Fullscreen className={styles.fullIcon} />
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
