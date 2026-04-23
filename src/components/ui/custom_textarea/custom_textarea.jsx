import React, { useId } from "react";
import styles from "./custom_textarea.module.scss";
import FONTS from "@/styles/fonts";

const CustomTextarea = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  required = false,
  rows = 4,
  disabled = false,
}) => {
  const id = useId();

  return (
    <div className={`${styles.CustomTextarea} ${FONTS.font2}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e, e.target.value);
        }}
        required={required}
        rows={rows}
        disabled={disabled}
        className={styles.textareaField}
      />
    </div>
  );
};

export default CustomTextarea;
