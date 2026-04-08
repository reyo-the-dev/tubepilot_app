import React from "react";
import VideoPreferences from "./video_preferences/video_preferences";
import AudioPreferences from "./audio_preferences/audio_preferences";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { useSaveAudioVideoPreferences } from "@/api_hooks/project.hooks";
import { toast } from "react-toastify";
import { Col, Row } from "react-bootstrap";
import CustomBox from "@/components/ui/custom_box/custom_box";

const VideoAudioPreferences = ({
  currentStepIndex,
  noOfSteps,
  values,
  onChangeValue,
  handleBack,
  handleNext,
  setVideoPreferences,
  videoPreferences,
  audioPreferences,
  setAudioPreferences,
}) => {
  const { mutateAsync, isPending } = useSaveAudioVideoPreferences();

  const saveAudioVideoPreferences = async () => {
    try {
      const res = await mutateAsync({
        videoPreferences,
        audioPreferences,
      });
      if (res.success) {
        toast.success(res.message);
        handleNext()
      }

      
    } catch (error) {
      toast.error("Something went wrong..");
    }
  };

  return (
    <>
      <Row>
        <Col md={12}>
          <VideoPreferences
            currentStepIndex={currentStepIndex}
            noOfSteps={noOfSteps}
            videoPreferences={videoPreferences}
            setVideoPreferences={setVideoPreferences}
          />
        </Col>

        <Col md={22}>
          <AudioPreferences
            currentStepIndex={currentStepIndex}
            noOfSteps={noOfSteps}
            values={values}
            onChangeValue={onChangeValue}
            audioPreferences={audioPreferences}
            setAudioPreferences={setAudioPreferences}
          />
        </Col>
      </Row>

      <div>
        <CustomButton onClick={handleBack} variant={3} disabled={isPending}>
          Back
        </CustomButton>
        <CustomButton onClick={saveAudioVideoPreferences} isLoading={isPending}>
          Next
        </CustomButton>
      </div>
    </>
  );
};

export default VideoAudioPreferences;
