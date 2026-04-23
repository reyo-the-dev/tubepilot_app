import React, {  useState } from "react";
import styles from "./layout.module.scss";
import UserHeader from "./UserHeader/UserHeader";
import SideBar from "./SideBar/SideBar";
import { useAuth } from "@/context/AuthContext";

const Layout = ({ children }) => {
  const {session} = useAuth()
  const isAuthticated = session;
  const [isSidebarExpanded, setIsSideBarExpanded] = useState(false);

  if (isAuthticated) {
    return (
      <div className={styles.Layout}>

        <div className={styles.cont}>
          <SideBar
            isExpanded={isSidebarExpanded}
            setIsExpanded={setIsSideBarExpanded}
          />
          <div className={styles.main}>
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }

  return <div className={styles.Layout}>{children}</div>;
};

export default Layout;
