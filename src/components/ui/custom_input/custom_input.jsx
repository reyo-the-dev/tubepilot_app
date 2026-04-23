import React, { useId } from "react";
import styles from "./custom_input.module.scss";
import FONTS from "@/styles/fonts";

const CustomInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange=()=>{},
  name,
  required = false,
  disabled
}) => {
  const id = useId();

  return (
    <div className={`${styles.CustomInput} ${FONTS.font2}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e, e.target.value);
        }}
        disabled={disabled}
        required={required}
        className={styles.inputField}
      />
    </div>
  );
};

export default CustomInput;
