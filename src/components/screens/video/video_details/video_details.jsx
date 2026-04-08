import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './video_details.module.scss';
import PlaylistsData from "@/data/dummy_playlists";
import Link from 'next/link';
import { ClockHistory, Save, Upload } from 'react-bootstrap-icons';

import VideoPlayer from './components/video_player/video_player';
import ScriptEditor from './components/script_editor/script_editor';
import MetadataForm from './components/metadata_form/metadata_form';
import VoiceoverSettings from './components/voiceover_settings/voiceover_settings';
import QualityControl from './components/quality_control/quality_control';
import PredictionWidget from './components/prediction_widget/prediction_widget';

const VideoDetailsScreen = () => {
    const router = useRouter();
    const { playlistId, videoId } = router.query;

    // Form States
    const [title, setTitle] = useState("Loading...");
    const [description, setDescription] = useState("Loading...");
    const [privacy, setPrivacy] = useState("Unlisted");
    const [category, setCategory] = useState("Travel & Events");
    const [tags, setTags] = useState("italy, travel, hidden gems, south italy, travel guide, amalfi coast");

    useEffect(() => {
        if (playlistId && videoId) {
            const playlist = PlaylistsData.find(p => p.id === playlistId);
            const video = playlist?.videos?.find(v => v.id === videoId);
            if (video) {
                setTitle(video.title || "");
                setDescription(video.description || "");
            }
        }
    }, [playlistId, videoId]);

    return (
        <div className={styles.VideoDetails}>
            
            {/* Header Section */}
            <div className={styles.headerArea}>
                <div className={styles.titleInfo}>
                    <Link 
                        href={`/playlist/${playlistId}`} 
                        style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', marginBottom: '16px', display: 'inline-block', fontWeight: '600' }}
                    >
                        &larr; Back to Videos
                    </Link>
                    <div className={styles.metaRow}>
                        <span className={styles.aiBadge}>AI GENERATED</span>
                        <span className={styles.saveStatus}>
                            <ClockHistory /> Draft saved 2m ago
                        </span>
                    </div>
                    <h1>{title}</h1>
                </div>

                <div className={styles.headerActions}>
                    <button className={styles.btnSave}>
                        <Save /> Save Draft
                    </button>
                    <button className={styles.btnUpload}>
                        <Upload /> Upload to YouTube
                    </button>
                </div>
            </div>

            {/* Layout Grid */}
            <div className={styles.layoutGrid}>
                
                {/* Left Column */}
                <div className={styles.leftCol}>
                    <VideoPlayer />
                    <ScriptEditor />
                    <MetadataForm 
                        title={title} setTitle={setTitle}
                        description={description} setDescription={setDescription}
                        privacy={privacy} setPrivacy={setPrivacy}
                        category={category} setCategory={setCategory}
                        tags={tags} setTags={setTags}
                    />
                </div>

                {/* Right Column */}
                <div className={styles.rightCol}>
                    <VoiceoverSettings />
                    <QualityControl />
                    <PredictionWidget />
                </div>

            </div>
        </div>
    );
};

export default VideoDetailsScreen;
