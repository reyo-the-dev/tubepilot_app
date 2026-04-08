import CustomBox from "@/components/ui/custom_box/custom_box";
import React, { useEffect, useState } from "react";
import styles from "./generate_video.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { CameraReels, Magic, CheckCircleFill } from "react-bootstrap-icons";


import { useCreateJobandGenerateVideo } from "@/api_hooks/job.hooks";
import { toast } from "react-toastify";
import VideoDetailsScreen from "../../../video_details/video_details";

const GenerateVideoStep = ({ projectId, projectData }) => {
  const { mutateAsync, isPending } = useCreateJobandGenerateVideo();

  const [seconds, setSeconds] = useState(0);
  const [videoUrl, setVideoUrl] = useState(
    projectData?.video?.video_url
  );


  console.log(projectData);


  // Timer effect
  useEffect(() => {
    if (!isPending) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPending]);

  const handleGenerate = async () => {
    setSeconds(0);
    setVideoUrl(null);

    try {
      const res = await mutateAsync({ projectId });

      if (res.success) {
        setVideoUrl(res.data?.videoUrl);
        toast.success("Video generation success...");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    }
  };

  if (videoUrl && !isPending) {
    return <VideoDetailsScreen videoUrl={videoUrl}
      projectData={projectData}
    />;
  }

  return (
    <CustomBox icon={<CameraReels />} title={"Generate Video"}>
      <div className={styles.GenerateVideoStep}>
        {/* Loading State */}
        {(isPending) && (
          <div className={styles.generatingState}>
            <div className={styles.spinnerWrapper}>
              <div className={styles.pulseGlow}></div>
              <Magic className={styles.magicIcon} size={40} />
            </div>
            <h3 className={styles.generatingTitle}>AI is crafting your video...</h3>
            <p className={styles.generatingSubtitle}>This might take a few moments. We are rendering the frames ({seconds}s)</p>
          </div>
        )}

        {/* Generate Button */}
        {!isPending && !videoUrl && (
          <div className={styles.cta}>
            <div className={styles.iconWrapper}>
              <CameraReels size={48} />
            </div>
            <h2>Ready to generate your masterpiece?</h2>
            <p>Your script and preferences are set. Let's bring it to life.</p>
            <CustomButton onClick={handleGenerate} className={styles.generateBtn}>
              Generate Video <Magic />
            </CustomButton>
          </div>
        )}
      </div>
    </CustomBox>
  );
};

export default GenerateVideoStep;
