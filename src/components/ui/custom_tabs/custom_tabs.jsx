import React, { useState } from "react";
import styles from "./custom_tabs.module.scss";

const CustomTabs = ({currentTabIndex, setCurrentTabIndex,tabs=[]}) => {


  return (
    <div className={styles.CustomTabs}>
      {tabs.map((tab, tabIdx) => {
        return (
          <div
            key={tab.title}
            className={`${styles.tab} ${tabIdx === currentTabIndex ? styles.active : ""}`}
            onClick={() => {
              setCurrentTabIndex(tabIdx);
            }}
          >
            {tab.title}
          </div>
        );
      })}
    </div>
  );
};

export default CustomTabs;
