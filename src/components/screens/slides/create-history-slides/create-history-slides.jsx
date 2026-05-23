
import React, { Component, useState } from "react";
import GenerateScriptStep from "./steps/generate-script/generate-script";
import CreateSlides from "./steps/create-slides/create-slides";
import SlidesSummaryStep from "./steps/slides-summary/slides-summary";

const CreateHistorySlides = () => {
  const [topic, setTopic] = useState("");
  const [script, setScript] = useState(null);
  const [isTest, setIsTest] = useState(true);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleNext = () => {
    setCurrentStepIndex((prev) => prev + 1);
  };
  const handleBack = () => {
    setCurrentStepIndex((prev) => prev - 1);
  };

  

  const steps = [
    {
      Component: GenerateScriptStep,
    },
    {
      Component: CreateSlides,
    },
    {
      Component : SlidesSummaryStep
    }
  ];

  const CurrentStep = steps[currentStepIndex];

  return (
    <CurrentStep.Component
      handleNext={handleNext}
      topic={topic}
      setTopic={setTopic}
      script={script}
      setScript={setScript}
      isTest={isTest}
      setIsTest={setIsTest}
      handleBack={handleBack}
    />
  );
};

export default CreateHistorySlides;
