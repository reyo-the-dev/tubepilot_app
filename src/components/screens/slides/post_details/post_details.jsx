import React from "react";
import styles from "./post_details.module.scss";
import { useRouter } from "next/router";
import SlideSeriesData from "@/data/dummy_slide_series";
import CustomBox from "@/components/ui/custom_box/custom_box";
import { Image } from "react-bootstrap";
import {
  Images,
  Calendar,
  CheckCircleFill,
  ClockFill,
  ArrowLeft
} from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";

const PostDetails = () => {
  const router = useRouter();
  const { id, postId } = router.query;

  const series = SlideSeriesData.find((s) => s.id === id);
  const post = series?.slidesPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <CustomBox title="Post Not Found" icon={<Images />}>
        <div className={styles.error}>
          <p>The post you are looking for does not exist or has been removed.</p>
          <CustomButton variant={1} onClick={() => router.back()}>
            <ArrowLeft /> Go Back
          </CustomButton>
        </div>
      </CustomBox>
    );
  }

  const isUpcoming = post.status === "Upcoming";

  return (
    <div className={styles.PostDetails}>
      <div className={styles.headerArea}>
        <CustomButton variant={3} onClick={() => router.back()} className={styles.backBtn}>
          <ArrowLeft /> Back to Series
        </CustomButton>
      </div>

      <CustomBox
        title={post.title}
        icon={<Images />}
        right={
          <div className={styles.badges}>
            <span className={`${styles.badge} ${isUpcoming ? styles.upcoming : styles.posted}`}>
              {isUpcoming ? <ClockFill size={10} /> : <CheckCircleFill size={10} />}
              {post.status}
            </span>
          </div>
        }
      >
        <div className={styles.mainContent}>
          <div className={styles.metaInfo}>
            <div className={styles.infoItem}>
              <Calendar size={16} />
              <span>
                {isUpcoming
                  ? `Scheduled: ${new Date(post.scheduledAt).toLocaleString()}`
                  : `Posted: ${new Date(post.postedAt).toLocaleString()}`
                }
              </span>
            </div>
            <div className={styles.infoItem}>
              <strong>Approval Status:</strong>
              <span className={styles.approvalBadge}>{post.approvalStatus}</span>
            </div>
          </div>

          <p className={styles.description}>{post.description}</p>

          <div className={styles.gallerySection}>
            <h3>Image Gallery ({post.slides?.length} Slides)</h3>
            <div className={styles.imageGrid}>
              {post.slides?.map((slide, index) => (
                <div key={slide.id} className={styles.imageCard}>
                  <Image src={slide.imgUrl} alt={`Slide ${index + 1}`} className={styles.slideImg} />
                  <div className={styles.slideNumber}>#{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CustomBox>
    </div>
  );
};

export default PostDetails;
