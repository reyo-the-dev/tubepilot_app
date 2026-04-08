import React from "react";
import styles from "./section_heading.module.scss";

const SectionHeading = ({ title, head, caption, center, noAnimation }) => {
  const text = head || "";

  return (
    <div className={`${styles.SectionHeading} ${center ? styles.center : ""}`}>
      {title && <p data-aos={noAnimation ? "" : "fade-up"}>{title}</p>}

      <h2 className={styles.charWrap}>
        {text.split(" ").map((c, idx) => {
          return (
            <span
              key={`${text}_char_${idx}`}
              data-aos={noAnimation ? "" : "fade-left"}
              data-aos-delay={idx * 50}
              className={styles.char}
            >
              {/* {c === " " ? "\u00A0" : c} */}
              {c}
            </span>
          );
        })}
      </h2>

      {caption && <small
        data-aos={noAnimation ? "" : "fade-in"}
      >{caption}</small>}
    </div>
  );
};

export default SectionHeading;
