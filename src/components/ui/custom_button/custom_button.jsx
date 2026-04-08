import React from "react";
import styles from "./custom_button.module.scss";
import Link from "next/link";
import { Spinner } from "react-bootstrap";

const CustomButton = ({
  children,
  disabled,
  type,
  variant = 1,
  onClick,
  fullWidth,
  href,
  isLoading,
}) => {
  if (href) {
    return (
      <Link href={href}>
        <button
          type={type}
          disabled={disabled}
          className={`${styles.CustomButton} ${styles[`v${variant}`]} ${fullWidth ? styles.fullWidth : ""}`}
          onClick={onClick}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`${styles.CustomButton} ${styles[`v${variant}`]} ${fullWidth ? styles.fullWidth : ""}`}
      onClick={onClick}
    >
      {isLoading ? "Loading.." : children}
    </button>
  );
};

export default CustomButton;
