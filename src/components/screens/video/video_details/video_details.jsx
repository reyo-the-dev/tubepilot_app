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
import CustomBox from '@/components/ui/custom_box/custom_box';
import ScriptPreview from '@/components/common/script_preview/script_preview';

const VideoDetailsScreen = ({ videoUrl, projectData }) => {

    const { video_preferences } = projectData;
    const { script } = projectData;
    const { title } = script;

    const privacy = "Unlisted"
    const category = "Travel & Events"
    const tags = "ai, shorts, youtube"

    const description = "Your new video is ready to be edited."

    return (
        <div className={styles.VideoDetails}>

            {/* Header Section */}
            <div className={styles.headerArea}>
                <div className={styles.titleInfo}>
                    <Link
                        href={`/videos`}
                        style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', marginBottom: '16px', display: 'inline-block', fontWeight: '600' }}
                    >
                        &larr; &nbsp; Back to Videos
                    </Link>
                    {/* <div className={styles.metaRow}>
                        <span className={styles.aiBadge}>AI GENERATED</span>
                        <span className={styles.saveStatus}>
                            <ClockHistory /> Draft saved 2m ago
                        </span>
                    </div> */}
                    <h1>{title}</h1>
                </div>

                {/* <div className={styles.headerActions}>
                    <button className={styles.btnSave}>
                        <Save /> Save Draft
                    </button>
                    <button className={styles.btnUpload}>
                        <Upload /> Upload to YouTube
                    </button>
                </div> */}
            </div>

            {/* Layout Grid */}
            <div className={styles.layoutGrid}>


                <div className={styles.leftCol}>
                    <CustomBox>
                        <VideoPlayer videoUrl={videoUrl}
                            ratio={video_preferences?.ratio ? video_preferences?.ratio.replace(":", " / ") : "16 / 9"}
                        />
                    </CustomBox>

                    <ScriptPreview script={script} noTitle />
                    {/* <MetadataForm
                        title={title}

                        description={description}

                        privacy={privacy}
                        category={category}
                        tags={tags}
                    /> */}
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
