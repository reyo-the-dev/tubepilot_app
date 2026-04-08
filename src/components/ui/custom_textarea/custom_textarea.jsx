import React, { useId } from "react";
import styles from "./custom_textarea.module.scss";

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
    <div className={styles.CustomTextarea}>
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
