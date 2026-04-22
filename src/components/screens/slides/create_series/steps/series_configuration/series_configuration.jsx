import React from "react";
import parentStyles from "../../create_series.module.scss";
import styles from "./series_configuration.module.scss";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomTextarea from "@/components/ui/custom_textarea/custom_textarea";
import CustomSelect from "@/components/ui/custom_select/custom_select";
import CustomBox from "@/components/ui/custom_box/custom_box";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Sliders2, ArrowRight } from "react-bootstrap-icons";

const SeriesConfiguration = ({ values, onChangeValue, handleNext, step, totalSteps }) => {
  const categories = [
    { label: "Facts & Trivia", value: "Facts" },
    { label: "Daily News", value: "News" },
    { label: "Historical Events", value: "History" },
    { label: "Motivation & Success", value: "Motivation" },
    { label: "Science & Technology", value: "Science" },
    { label: "Life Hacks", value: "Lifestyles" },
  ];

  return (
    <CustomBox
      title="Series Information"
      icon={<Sliders2 />}
      right={<b>Step {step} of {totalSteps}</b>}
    >
      <div className={parentStyles.formGrid}>
        <CustomInput
          label="SERIES NAME"
          placeholder="e.g. Daily Space Facts"
          value={values.name}
          onChange={(e, v) => onChangeValue("name", v)}
        />
        
        <CustomSelect
          label="CATEGORY"
          options={categories}
          value={values.category}
          onChange={(e, v) => onChangeValue("category", v)}
        />

        <CustomTextarea
          label="DESCRIPTION"
          placeholder="Briefly describe what this series is about..."
          rows={4}
          value={values.description}
          onChange={(e, v) => onChangeValue("description", v)}
        />

        <div className={parentStyles.footerActions}>
          <div /> {/* Spacer */}
          <CustomButton onClick={handleNext}>
            Next Step <ArrowRight />
          </CustomButton>
        </div>
      </div>
    </CustomBox>
  );
};

export default SeriesConfiguration;
