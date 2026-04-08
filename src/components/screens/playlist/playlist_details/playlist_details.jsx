import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './playlist_details.module.scss';
import CustomBox from "@/components/ui/custom_box/custom_box";
import { Filter, ThreeDots, ArrowClockwise, CheckLg, ExclamationTriangleFill } from "react-bootstrap-icons";
import PlaylistsData from "@/data/dummy_playlists";
import Link from "next/link";

const PlaylistDetailsScreen = () => {
    const router = useRouter();
    const { playlistId } = router.query;
    const [activeTab, setActiveTab] = useState('All');

    // Find the current playlist from dummy data based on slug. Fallback to empty.
    const playlistData = PlaylistsData.find(p => p.id === playlistId);
    let playlistVideos = playlistData?.videos || [];

    // Filter by tab simply for presentation
    if (activeTab !== 'All') {
       playlistVideos = playlistVideos.filter(v => (v.status || "Ready") === activeTab);
    }

    const getStatusBadge = (status) => {
        let statusStyle = styles.badgeReady;
        let icon = <span className={styles.dot}></span>;

        if (status === 'Processing') {
            statusStyle = styles.badgeProcessing;
            icon = <span className={styles.dotBlue}></span>;
        } else if (status === 'Uploaded') {
            statusStyle = styles.badgeUploaded;
            icon = <CheckLg />;
        } else if (status === 'Failed') {
            statusStyle = styles.badgeFailed;
            icon = null;
        }

        return (
            <div className={`${styles.statusBadge} ${statusStyle}`}>
                {icon}
                {status}
            </div>
        );
    };

    return (
        <div className={styles.PlaylistDetails}>
            <div className={styles.headerArea}>
                <div className={styles.titleInfo}>
                    <Link 
                        href="/playlist" 
                        style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', marginBottom: '8px', display: 'inline-block', fontWeight: '600' }}
                    >
                        &larr; Back to Playlists
                    </Link>
                    <h1>{playlistData?.title || 'My Videos'}</h1>
                    <p>{playlistData?.description || 'Manage, track, and publish your AI-generated video content.'}</p>
                </div>
                
                <div className={styles.headerControls}>
                    <div className={styles.tabs}>
                        <button 
                            className={activeTab === 'All' ? styles.active : ''} 
                            onClick={() => setActiveTab('All')}
                        >All</button>
                        <button 
                            className={activeTab === 'Ready' ? styles.active : ''} 
                            onClick={() => setActiveTab('Ready')}
                        >Ready</button>
                        <button 
                            className={activeTab === 'Processing' ? styles.active : ''} 
                            onClick={() => setActiveTab('Processing')}
                        >Processing</button>
                    </div>
                    
                    <button className={styles.filterBtn}>
                        <Filter /> More Filters
                    </button>
                </div>
            </div>

            <CustomBox>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>THUMBNAIL & TITLE</th>
                                <th>STATUS</th>
                                <th>DURATION</th>
                                <th>CREATED</th>
                                <th>VIEWS</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {playlistVideos.map((video, index) => {
                                // Fallback fields since generic dummy data might miss them
                                const vStatus = video.status || (index === 1 ? "Processing" : "Ready");
                                const vDuration = video.duration || "12m 45s";
                                const vCreated = video.created || "Last week";
                                const vViews = video.views || "1k";
                                const vProject = video.description || `Project: ${playlistData?.title}`;
                                const isProcessingImage = vStatus === 'Processing';

                                return (
                                    <tr 
                                        key={video.id} 
                                        style={{ cursor: 'pointer', transition: 'background 0.2s' }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        onClick={() => router.push(`/playlist/${playlistId}/${video.id}`)}
                                    >
                                        <td className={styles.videoInfoCell}>
                                            <div className={styles.thumbnailWrapper}>
                                                <div 
                                                    className={styles.thumbnail} 
                                                    style={{ background: video.gradient }}
                                                >
                                                    {isProcessingImage && <ArrowClockwise className={styles.spinnerIcon} />}
                                                    {!isProcessingImage && <span className={styles.timeTag}>{vDuration}</span>}
                                                </div>
                                                <div className={styles.details}>
                                                    <Link href={`/playlist/${playlistId}/${video.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                        <h4 
                                                            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                                            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                                                        >
                                                            {video.title}
                                                        </h4>
                                                    </Link>
                                                    <span className={`
                                                        ${styles.project} 
                                                        ${vStatus === "Processing" ? styles.textProcessing : ''} 
                                                        ${vStatus === "Failed" ? styles.textError : ''}
                                                    `}>
                                                        {vStatus === "Failed" && <ExclamationTriangleFill className={styles.errorIcon} />}
                                                        {vProject}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{getStatusBadge(vStatus)}</td>
                                        <td className={styles.textMuted}>{vDuration}</td>
                                        <td className={styles.textMuted}>{vCreated}</td>
                                        <td className={styles.textBold}>{vViews}</td>
                                        <td>
                                            <button 
                                                className={styles.actionBtn}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ThreeDots />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                            
                            {playlistVideos.length === 0 && (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>
                                        No videos in this playlist.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className={styles.paginationArea}>
                    <span>Showing <strong>1-{Math.max(1, playlistVideos.length)}</strong> of <strong>{playlistData?.videoCount || playlistVideos.length}</strong> videos</span>
                    
                    <div className={styles.paginationControls}>
                        <button className={styles.pageBtn}>&lt;</button>
                        <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
                        <button className={styles.pageBtn}>2</button>
                        <button className={styles.pageBtn}>3</button>
                        <button className={styles.pageBtn}>&gt;</button>
                    </div>
                </div>
            </CustomBox>
        </div>
    );
};

export default PlaylistDetailsScreen;
