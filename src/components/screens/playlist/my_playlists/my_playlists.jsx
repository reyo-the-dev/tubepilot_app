import CustomBox from "@/components/ui/custom_box/custom_box"
import { Grid, PlusCircle, PlayFill, Pencil, ThreeDotsVertical, CollectionPlay } from "react-bootstrap-icons"
import styles from "./my_playlists.module.scss"
import CustomButton from "@/components/ui/custom_button/custom_button"
import { useState } from "react"
import Link from "next/link"
import PlaylistsData from "@/data/dummy_playlists"
import { useAuth } from "@/context/AuthContext"

const MyPlaylists = () => {
    const {userData} = useAuth()

    
    // Initialized with dummy data from source
    const [playlists, setPlaylists] = useState(PlaylistsData);

    return (
        <CustomBox title="My Playlists" icon={<Grid />}
            right={
                <CustomButton variant={1} href="/playlist/create">
                    Create New <PlusCircle />
                </CustomButton>
            }
        >
            <div className={styles.MyPlaylists}>
                {
                    playlists.length === 0 ? (
                        <div className={styles.empty}>
                            <p>No playlists found</p>
                            <CustomButton variant={1}
                                href="/playlist/create"
                            >
                                Create Your First Playlist <PlusCircle />
                            </CustomButton>
                        </div>
                    ) : (
                        <>
                            <div className={styles.playlists}>
                                {playlists.map((playlist) => (
                                    <Link href={`/playlist/${playlist.id}`} key={playlist.id} className={styles.playlistCard}>
                                        <div className={styles.thumbnail} style={{ background: playlist.gradient }}>
                                            <CollectionPlay size={40} opacity={0.5} />
                                            <div className={styles.countBadge}>
                                                <PlayFill size={14} />
                                                <span>{playlist.videoCount}</span>
                                            </div>
                                        </div>

                                        <div className={styles.info}>
                                            <h3>{playlist.title}</h3>
                                            <p>{playlist.description}</p>

                                            <div className={styles.footer}>
                                                <span>Updated {playlist.updatedAt || "recently"}</span>
                                                <div className={styles.actions}>
                                                    <button title="Play All" className={styles.primaryAction} onClick={(e) => e.preventDefault()}>
                                                        <PlayFill size={16} />
                                                    </button>
                                                    <button title="Edit" onClick={(e) => e.preventDefault()}>
                                                        <Pencil size={14} />
                                                    </button>
                                                    <button title="More" onClick={(e) => e.preventDefault()}>
                                                        <ThreeDotsVertical size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )
                }
            </div>
        </CustomBox>
    )
}

export default MyPlaylists