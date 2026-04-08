import React, { useEffect, useState } from "react";
import GenerateScriptStep from "./steps/generate_script/generate_script";

import VideoAudioPreferences from "./steps/video_audio_preferences/video_audio_preferences";
import { useRouter } from "next/router";
import { useGetScriptById } from "@/api_hooks/script.hooks";
import GenerateVideoStep from "./steps/generate_video/generate_video";
import styles from "./create_video.module.scss";
import { CheckCircleFill } from "react-bootstrap-icons";

const CreateVideoScreen = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    topic: "Custom Topic",
    customTopic: "",
    //
    voiceGender: "Male",
    voice: "Troy",
    artStyle: "Cinematic Realistic",
    captionStyle: "Trendy (Alex Hormozi Style)",
    music: "Cinematic Orchestral",
    language: "English (US)",
    //
    duration: "60 sec (Standard Short)",
    frequency: "3 per week",
    privacy: "Unlisted",

    backgroundMusicGenre: "None",
    backgroundMusic: "music1.mp3",
  });

  const router = useRouter();

  const onChangeValue = (field, value) => {
    setValues((prev) => {
      const newValue = { ...prev };
      newValue[field] = value;
      return newValue;
    });
  };

  const steps = [
    {
      label: "Script Generation",
      Component: GenerateScriptStep, // <-- reference
    },
    {
      label: "Preferences",
      Component: VideoAudioPreferences, // <-- reference
    },
    {
      label: "Generate Video",
      Component: GenerateVideoStep, // <-- reference
    },
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const CurrentStepComponent = steps[currentStepIndex].Component;

  const handleNext = () => {
    if (currentStepIndex !== steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      alert("last step");
    }
  };

  const handleBack = () => {
    if (currentStepIndex !== 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const [script, setScript] = useState(null);
  const [videoPreferences, setVideoPreferences] = useState(null);
  const [audioPreferences, setAudioPreferences] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [videoData, setVideoData] = useState(null)

  const projectId = router?.query?.id;
  const { data, error, isLoading } = useGetScriptById(projectId);



  useEffect(() => {
    if (data?.success) {
      setProjectData(data.data)
      setScript(data.data.script);
      setVideoPreferences(data?.data?.video_preferences)
      setAudioPreferences(data?.data?.audio_preferences)
      setVideoData(data?.data?.video)
    }

    if (data?.data?.video) {
      setCurrentStepIndex(2);
    }
  }, [data]);


  if (error) {
    return <p>Project error</p>;
  }


  return (
    <div className={styles.createVideoWrapper}>
      {/* Stepper Header */}
      {/* <div className={styles.stepperContainer}>
        {steps.map((step, index) => {
          const isActive = index === currentStepIndex;
          const isCompleted = index < currentStepIndex;

          return (
            <div
              key={`step-${index}`}
              className={`${styles.stepItem} ${isActive ? styles.active : ""} ${
                isCompleted ? styles.completed : ""
              }`}
            >
              <div className={styles.stepIcon}>
                {isCompleted ? <CheckCircleFill /> : <span>{index + 1}</span>}
              </div>
              <div className={styles.stepLabel}>{step.label}</div>
              {index < steps.length - 1 && <div className={styles.stepConnector}></div>}
            </div>
          );
        })}
      </div> */}

      {/* Step Content */}
      <div className={styles.stepContent} key={currentStepIndex}>
        <CurrentStepComponent
          currentStepIndex={currentStepIndex}
          script={script}
          setScript={setScript}
          noOfSteps={steps.length}
          values={values}
          onChangeValue={onChangeValue}
          handleBack={handleBack}
          handleNext={handleNext}
          router={router}
          setProjectData={setProjectData}
          projectData={projectData}
          projectId={projectId}
          videoPreferences={videoPreferences}
          setVideoPreferences={setVideoPreferences}
          audioPreferences={audioPreferences}
          setAudioPreferences={setAudioPreferences}
          videoData={videoData}
        />
      </div>
    </div>
  );
};

export default CreateVideoScreen;
