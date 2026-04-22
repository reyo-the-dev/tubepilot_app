import React from "react";
import styles from "./slide_posts.module.scss";
import { useRouter } from "next/router";
import SlideSeriesData from "@/data/dummy_slide_series";
import CustomBox from "@/components/ui/custom_box/custom_box";
import SectionHeading from "@/components/common/section_heading/section_heading";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Image } from "react-bootstrap";
import {
  Images,
  Calendar,
  CheckCircleFill,
  ClockFill,
  PencilSquare,
  EyeFill
} from "react-bootstrap-icons";

import Link from "next/link";

const SlidePostsList = () => {
  const router = useRouter();
  const { id } = router.query;

  const series = SlideSeriesData.find((ssd) => ssd.id === id);
  const slidesPosts = series?.slidesPosts || [];

  const PostCard = ({ post }) => {
    const isUpcoming = post.status === "Upcoming";

    return (
      <Link href={`/slides/${id}/${post.id}`} className={styles.postCard}>
        <div className={styles.thumbnailContainer}>
          <Image
            src={post.slides?.[0]?.imgUrl}
            alt={post.title}
            className={styles.thumbnail}
          />
          <div className={styles.slideCount}>
            <Images size={14} />
            <span>{post.slides?.length} Slides</span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.titleArea}>
              <h3>{post.title}</h3>
              <div className={styles.badges}>
                <span className={`${styles.badge} ${isUpcoming ? styles.upcoming : styles.posted}`}>
                  {isUpcoming ? <ClockFill size={10} /> : <CheckCircleFill size={10} />}
                  {post.status}
                </span>
                <span className={`${styles.badge} ${styles.approval}`}>
                  {post.approvalStatus}
                </span>
              </div>
            </div>
            <div className={styles.dateInfo}>
              <Calendar size={14} />
              <span>
                {isUpcoming
                  ? `Scheduled: ${new Date(post.scheduledAt).toLocaleDateString()}`
                  : `Posted: ${new Date(post.postedAt).toLocaleDateString()}`
                }
              </span>
            </div>
          </div>

          <p className={styles.description}>{post.description}</p>
        </div>
      </Link>
    );
  };

  return (
    <>
      <CustomBox
        title="Upcoming Posts"
        icon={<Images />}

      >
        <div className={styles.SlidePostsList}>


          <div className={styles.section}>

            <div className={styles.grid}>
              {slidesPosts
                .filter((sp) => sp.status === "Upcoming")
                .map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
            </div>
          </div>
        </div>
      </CustomBox>

      <CustomBox
        title="Posted Posts"
        icon={<Images />}

      >
        <div className={styles.SlidePostsList}>

          <div className={styles.section}>

            <div className={styles.grid}>
              {slidesPosts
                .filter((sp) => sp.status === "Posted")
                .map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
            </div>
          </div>
        </div>

      </CustomBox>
    </>
  );
};

export default SlidePostsList;