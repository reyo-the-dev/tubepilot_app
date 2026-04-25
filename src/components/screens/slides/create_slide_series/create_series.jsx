import React, { useState } from "react";
import styles from "./create_series.module.scss";
import { useRouter } from "next/router";
import SeriesConfiguration from "./steps/series_configuration/series_configuration";
import SlideDesign from "./steps/slide_design/slide_design";
import SlideStyles from "@/data/dummySlideStyles";
import AutomationSettings from "./steps/automation_settings/automation_settings";

const CreateSeriesScreen = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [values, setValues] = useState({
    name: "",
    description: "",
    category: "Facts",
    //
    style: "Social News",
    color: "#000000",
    highlightColor: "#c2410c",
    font: "Inter",
    logo: "",
    textSize: "Medium",
    fontWeight: "800",
    previewText: "A study found that about one in five corporate executives is a psychopath, roughly the same rate found among prisoners.",
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

  const steps = [
    {
      Component: SeriesConfiguration,
    },
    {
      Component: SlideDesign,
    },
    {
      Component: AutomationSettings,
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
        />
      </div>
    </div>
  );
};

export default CreateSeriesScreen;
