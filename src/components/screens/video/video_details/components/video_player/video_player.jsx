import React from 'react';
import styles from './video_player.module.scss';
import { PlayFill, VolumeUpFill, GearFill, Fullscreen } from 'react-bootstrap-icons';

const VideoPlayer = ({ videoUrl, ratio }) => {

    return (
        <div
            className={styles.videoPlayerCard}
            style={{
                aspectRatio: ratio,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                background: '#000',
                height: '500px',
                margin: 'auto'
            }}
        >
            {videoUrl ? (
                <video
                    controls
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '16px',
                        display: 'block'
                    }}
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            ) : (
                <>
                    {/* Top gradient */}
                    <div
                        className={styles.topGradient}
                        style={{
                            position: 'absolute',
                            top: 0,
                            width: '100%',
                            height: '30%',
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
                            zIndex: 1
                        }}
                    />

                    {/* Center play */}
                    <div
                        className={styles.playCenter}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 2,
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '50%',
                            padding: '18px',
                            cursor: 'pointer'
                        }}
                    >
                        <PlayFill size={28} />
                    </div>

                    {/* Bottom controls */}
                    <div
                        className={styles.bottomControls}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            padding: '12px 14px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                            zIndex: 2
                        }}
                    >
                        <span className={styles.time} style={{ fontSize: '12px' }}>
                            02:45 / 12:30
                        </span>

                        <div
                            className={styles.icons}
                            style={{
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'center'
                            }}
                        >
                            <VolumeUpFill />
                            <GearFill />
                            <Fullscreen />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default VideoPlayer;