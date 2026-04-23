import React from "react";
import styles from "./custom_button.module.scss";
import Link from "next/link";
import { Spinner } from "react-bootstrap";
import FONTS from "@/styles/fonts";

const CustomButton = ({
  children,
  disabled,
  type = "button",
  variant = 1,
  onClick,
  fullWidth,
  href,
  isLoading,
  className = "",
}) => {
  const buttonClasses = `${FONTS.font2} ${styles.CustomButton} ${styles[`v${variant}`]} ${
    fullWidth ? styles.fullWidth : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles.linkWrapper}>
        <button type={type} disabled={disabled} className={buttonClasses} onClick={onClick}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={buttonClasses}
      onClick={onClick}
    >
      {isLoading ? (
        <div className={styles.loadingArea}>
          <Spinner animation="border" size="sm" className={styles.spinner} />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default CustomButton;
