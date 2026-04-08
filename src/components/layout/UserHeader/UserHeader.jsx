import React from "react";
import styles from "./UserHeader.module.scss";
import { List } from "react-bootstrap-icons";

const UserHeader = ({isSidebarExpanded, setIsSideBarExpanded}) => {
  return (
    <header className={styles.UserHeader}>
      <div className={styles.container}>
        
        <List
        size={24}
        onClick={()=>{
          setIsSideBarExpanded(prev=> !prev)
        }}
        style={{
          cursor:'pointer'
        }}
        />
        <div>TubePilot</div>
      </div>
    </header>
  );
};

export default UserHeader;
