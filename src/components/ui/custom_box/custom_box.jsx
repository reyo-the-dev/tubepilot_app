import styles from "./custom_box.module.scss";

const CustomBox = ({
  children,
  title,
  icon,
  right,
  leftBorder,
  isWhite = true,
}) => {
  return (
    <div
      className={`${styles.CustomBox} ${isWhite ? styles.white : styles.green}
        ${leftBorder ? styles.leftBorder : ""}
        `}
    >
      <div className={styles.header}>
        {title && (
          <h2 className={styles.title}>
            {icon && icon}
            {title}
          </h2>
        )}
        {right && right}
      </div>
      {children}
    </div>
  );
};

export default CustomBox;
