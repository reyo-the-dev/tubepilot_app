import React from "react";
import styles from "../create_playlist.module.scss";
import CustomSelect from "@/components/ui/custom_select/custom_select";

const AutomationStatergy = ({ values, onChangeValue }) => {
  return (
    <div className={styles.formGrid}>
      <div className={styles.row2}>
        <CustomSelect
          label="POSTING FREQUENCY"
          options={[
            "1 per week",
            "3 per week",
            "Daily",
            "2 per day (Aggressive)",
          ]}
          value={values.frequency}
          onChange={(e) => onChangeValue("frequency", e.target.value)}
        />
        <CustomSelect
          label="DEFAULT UPLOAD PRIVACY"
          options={["Public", "Unlisted", "Private", "Schedule automatically"]}
          value={values.privacy}
          onChange={(e) => onChangeValue("privacy", e.target.value)}
        />
      </div>
    </div>
  );
};

export default AutomationStatergy;
