import React from "react";
import styles from "./page_heading.module.scss";
import FONTS from "@/styles/fonts";

const PageHeading = ({head,caption}) => {
  return (
    <div className={styles.pageHead}>
      <h2 className={FONTS.font2}>{head}</h2>
      <p className={FONTS.font2}>
        {caption}
      </p>
    </div>
  );
};

export default PageHeading;
