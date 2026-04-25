import React from "react";
import parentStyles from "../../create_series.module.scss";
import styles from "./automation_settings.module.scss";
import CustomSelect from "@/components/ui/custom_select/custom_select";
import CustomMultiSelect from "@/components/ui/custom_multi_select/custom_multi_select";
import CustomBox from "@/components/ui/custom_box/custom_box";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Activity, ArrowLeft, RocketTakeoff } from "react-bootstrap-icons";

const AutomationSettings = ({ values, onChangeValue, handleBack, handleNext, step, totalSteps }) => {
  const platforms = [
    { label: "Instagram Reels", value: "Instagram" },
    { label: "TikTok", value: "TikTok" },
    { label: "YouTube Shorts", value: "YouTube" },
    { label: "Facebook Watch", value: "Facebook" },
    { label: "LinkedIn Posts", value: "LinkedIn" },
  ];

  const frequencies = [
    "Daily",
    "2 per day (Aggressive)",
    "3 per week",
    "Weekly",
    "Custom Schedule",
  ];

  return (
    <CustomBox
      title="Automation & Posting"
      icon={<Activity />}
      right={<b>Step {step} of {totalSteps}</b>}
    >
      <div className={parentStyles.formGrid}>
        <CustomMultiSelect
          label="POSTING DESTINATIONS"
          placeholder="Select social platforms..."
          options={platforms}
          selectedItems={values.destinations}
          onChange={(selected) => onChangeValue("destinations", selected)}
        />

        <div className={parentStyles.row2}>
          <CustomSelect
            label="POSTING FREQUENCY"
            options={frequencies}
            value={values.frequency}
            onChange={(e, v) => onChangeValue("frequency", v)}
          />
          
          <CustomSelect
            label="CONTENT PERMISSION"
            options={["Auto-post without review", "Needs manual approval", "Draft only"]}
            defaultValue="Needs manual approval"
          />
        </div>

        <div className={parentStyles.footerActions}>
          <CustomButton onClick={handleBack} variant={2}>
            <ArrowLeft /> Back
          </CustomButton>
          <CustomButton onClick={handleNext} variant={1}>
            <RocketTakeoff /> Launch Series
          </CustomButton>
        </div>
      </div>
    </CustomBox>
  );
};

export default AutomationSettings;
