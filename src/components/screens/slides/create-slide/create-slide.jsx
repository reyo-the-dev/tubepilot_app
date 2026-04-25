import React, { useState } from "react";

import { useRouter } from "next/router";

import SlideStyles from "@/data/dummySlideStyles";
import SlideDataStep from "./steps/slide_data/slide_data";
import ScriptPreviewStep from "./steps/script_preview/script_preview";
import SlidePreviewStep from "./steps/slide_preview/slide_preview";

const styles = {};

const CreateSlideScreen = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [values, setValues] = useState({
    name: "",
    description: "",
    category: "Tech",
    //
    style: "Social News",
    color: "#000000",
    highlightColor: "#c2410c",
    font: "Inter",
    logo: "",
    textSize: "Medium",
    fontWeight: "800",
    previewText:
      "A study found that about one in five corporate executives is a psychopath, roughly the same rate found among prisoners.",
    previewHighlights: ["corporate executives", "psychopath", "prisoners"],
    ratio: "4:5",
    //
    destinations: [],
    frequency: "Daily",
  });

  const onChangeValue = (field, value) => {
    if (field === "style") {
      const newStyle = SlideStyles.find((s) => s.name === value);
      if (newStyle) {
        setValues((prev) => ({
          ...prev,
          style: value,
          color: newStyle.defaultStyle.fontColor || "#000000",
          highlightColor: newStyle.defaultStyle.highlightColor || "#c2410c",
          previewText: newStyle.defaultStyle.text || "",
          previewHighlights: newStyle.defaultStyle.highlights || [],
          // You might also want to reset font/weight if styles have them
        }));
        return;
      }
    }

    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Mock submission
      console.log("Submitting Series:", values);
      alert("Series Created Successfully!");
      router.push("/playlist");
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const [scriptData, setScriptData] = useState(null);
  const [slideData, setSlideData] = useState(null);

  const steps = [
    {
      Component: SlideDataStep,
    },
    {
      Component: ScriptPreviewStep,
    },
    {
      Component: SlidePreviewStep,
    },
  ];

  const totalSteps = steps.length;
  const CurrentStepComponent = steps[step - 1].Component;

  
  

  return (
    <div className={styles.wrapper}>
      <div className={styles.stepContent} key={step}>
        <CurrentStepComponent
          step={step}
          totalSteps={totalSteps}
          values={values}
          onChangeValue={onChangeValue}
          handleBack={handleBack}
          handleNext={handleNext}
          scriptData={scriptData}
          setScriptData={setScriptData}
          setSlideData={setSlideData}
          slideData={slideData}

        />
      </div>
    </div>
  );
};

export default CreateSlideScreen;
