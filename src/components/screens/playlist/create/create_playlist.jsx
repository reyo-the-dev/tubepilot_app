import React, { useState } from "react";
import styles from "./create_playlist.module.scss";
import {
  ArrowRight,
  ArrowLeft,
  Magic,
  InfoCircle,
  Activity,
  CameraVideo,
  Sliders2,
} from "react-bootstrap-icons";
import { useRouter } from "next/router";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomBox from "@/components/ui/custom_box/custom_box";
import VisualsAudioProfile from "./Visuals & Audio Profile/Visuals & Audio Profile";
import PlaylistCofiguration from "./playlist_cofiguration/playlist_cofiguration";
import AutomationStatergy from "./Automation Statergy/Automation Statergy";

const CreatePlaylistScreen = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);


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
  });

  const onChangeValue = (field, value) => {
    setValues((prev) => {
      const newValue = { ...prev };
      newValue[field] = value;
      return newValue;
    });
  };

  const steps = {
    step1: {
      title: "Playlist Information",
      icon: <Sliders2 />,
      component: (
        <PlaylistCofiguration
          onChangeValue={onChangeValue}
          values={values}
        />
      ),
    },

    step2: {
      title: "Visuals & Audio Profile",
      icon: <Magic />,

      component: (
        <VisualsAudioProfile
          onChangeValue={onChangeValue}
          values={values}
        />
      ),
    },
    step3: {
      title: "Automation Strategy",
      icon: <Activity />,

      component: (
        <AutomationStatergy
          onChangeValue={onChangeValue}
          values={values}
        />
      ),
    },
  };

  const totalSteps = Object.keys(steps).length;
  const currentStep = steps[`step${step}`];

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else {
      // Map submission payload here before pushing
      router.push("/playlist");
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className={styles.wrapper}>
      <CustomBox
        title={currentStep.title}
        icon={currentStep.icon}
        right={<b>Step {step} of 3</b>}
      >
        {currentStep.component}
      </CustomBox>

      {/* Footer Navigation */}
      <div className={styles.footerActions}>
        <CustomButton
          className={styles.btnBack}
          onClick={handleBack}
          disabled={step === 1}
          variant={3}
        >
          <ArrowLeft /> Back
        </CustomButton>

        {step < totalSteps ? (
          <CustomButton className={styles.btnNext} onClick={handleNext}>
            Next Step <ArrowRight />
          </CustomButton>
        ) : (
          <CustomButton className={styles.btnCreate} onClick={handleNext}>
            <CameraVideo /> Launch Automation
          </CustomButton>
        )}
      </div>
    </div>
  );
};

export default CreatePlaylistScreen;
