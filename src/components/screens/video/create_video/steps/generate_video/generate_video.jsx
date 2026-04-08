import CustomBox from "@/components/ui/custom_box/custom_box";
import React, { useState } from "react";
import styles from "./generate_video.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { CameraReels, Magic } from "react-bootstrap-icons";
import { Spinner } from "react-bootstrap";
import { useCreateJobandGenerateVideo } from "@/api_hooks/job.hooks";
import { toast } from "react-toastify";

const GenerateVideoStep = ({ projectId }) => {
  const isGenerated = false;

  const { mutateAsync, isPending } = useCreateJobandGenerateVideo();
  const [seconds, setSeconds] = useState(0);

  const handleGenerate = async () => {
    setSeconds(0)
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    try {
      const res = await mutateAsync({
        projectId,
      });

      toast.success("Success..");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    } finally {
      clearInterval(interval);
    }
  };

  return (
    <CustomBox icon={<CameraReels />} title={"Generate Video"}>
      <div className={styles.GenerateVideoStep}>
        <p>{seconds} Seconds</p>

        {isPending && (
          <div className={styles.cta}>
            <Spinner />
            <p>Video is generating</p>
          </div>
        )}

        {!isPending && (
          <div className={styles.cta}>
            <CustomButton onClick={handleGenerate} isLoading={isPending}>
              Generate Video <Magic />
            </CustomButton>
          </div>
        )}
      </div>
    </CustomBox>
  );
};

export default GenerateVideoStep;
