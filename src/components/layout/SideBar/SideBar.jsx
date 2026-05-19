import React, { useEffect, useState } from "react";
import styles from "./SideBar.module.scss";
import {
  ArrowLeft,
  At,
  BoxArrowRight,
  CameraVideo,
  CameraVideoFill,
  ChatRight,
  ChevronLeft,
  ChevronRight,
  ClipboardData,
  ClipboardDataFill,
  Clock,
  ClockFill,
  Grid,
  GridFill,
  Image,
  ImageAlt,
  Images,
  List,
  Person,
  PersonFill,
  PlusCircle,
  PlusCircleFill,
  Youtube,
} from "react-bootstrap-icons";
import Link from "next/link";
import useDeviceType from "@/helpers/custom_hooks";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { supabase } from "@/services/supabaseClient";
import { useRouter } from "next/router";
import FONTS from "@/styles/fonts";

const SideBar = ({ isExpanded, setIsExpanded }) => {
  const router = useRouter();

  const menus = [
    {
      id: "dashboard",
      icon: <Grid />,
      name: "Dashboard",
      activeIcon: <GridFill />,
      href: "/dashboard",
    },
    {
      type: "label",
      label: "CREATE",
    },

    {
      id: "playlist",
      icon: <CameraVideo />,
      name: "Video Series",
      activeIcon: <CameraVideoFill />,
      href: "/playlist",
    },

    {
      id: "slide-series",
      icon: <Images />,
      name: "Slide Series",
      activeIcon: <Images />,
      href: "/slide-series",
    },
    {
      id: "create-slides",
      icon: <ImageAlt />,
      name: "Create Slide",
      activeIcon: <Images />,
      href: "/slides/create",
    },

    {
      type: "label",
      label: "PUBLISH",
    },


    {
      id: "queue",
      icon: <Clock />,
      name: "Queue",
      activeIcon: <ClockFill />,
      href: "/queue",
    },

    {
      id: "analytics",
      icon: <ClipboardData />,
      name: "Analytics",
      activeIcon: <ClipboardDataFill />,
      href: "/",
    },
    {
      id: "youtube",
      icon: <At />,
      name: "Social Accounts",
      activeIcon: <At />,
      href: "/",
    },

    {
      type: "label",
      label: "ACCOUNT",
    },

    {
      id: "account",
      icon: <Person />,
      name: "My Account",
      activeIcon: <PersonFill/>,
      href: "/account",
    },
  ];

  const device = useDeviceType();

  useEffect(() => {
    if (device.desktop) {
      setIsExpanded(true);
    } else {
      setIsExpanded(true);
    }
  }, [device]);

  return (
    <div
      className={`${styles.SideBar} ${isExpanded ? styles.expanded : ""}
    
    `}
    >
      <div className={styles.logo}>TubePilot</div>
      <div className={styles.menu}>
        {menus.map((menu, idx) => {
          if (menu.type == "label") {
            return (
              <div key={menu.label} className={`${styles.label} ${FONTS.font2}`}>
                <span>{menu.label}</span>
                <hr/>
              </div>
            );
          }
          // if (menu.type == "label") {
          //   return (
          //     <p key={menu.label} className={`${styles.label} ${FONTS.font1}`}>
          //       {menu.label}
          //     </p>
          //   );
          // }

          const isActive = router.pathname.split("/")?.[1] === menu.id;

          if (!isExpanded) {
            return (
              <OverlayTrigger
                key={menu.id}
                placement="right"
                overlay={
                  <Tooltip id={`tooltip-${menu.id}`}>{menu.name}</Tooltip>
                }
                disabled={isExpanded || device.mobile}
              >
                <Link
                  href={`${menu.href}`}
                  className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
                  onClick={() => {
                    if (!device.desktop) {
                      setIsExpanded(false);
                    }
                  }}
                >
                  {isActive ? menu.activeIcon : menu.icon}
                  {isExpanded && <span>{menu.name}</span>}
                </Link>
              </OverlayTrigger>
            );
          }

          return (
            <Link
              key={menu.id}
              href={`${menu.href}`}
              className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
              onClick={() => {
                if (!device.desktop) {
                  setIsExpanded(false);
                }
              }}
            >
              {isActive ? menu.activeIcon : menu.icon}
              {isExpanded && <span className={FONTS.font2}>{menu.name}</span>}
              <div className={styles.activeBorder}></div>
            </Link>
          );
        })}

        <div className={styles.bottom}>
          <p
            className={`${styles.menuItem} ${styles.logout}`}
            onClick={async () => {
              await supabase.auth.signOut();
            }}
          >
            <BoxArrowRight />
            {isExpanded && "Logout"}
          </p>
        </div>
      </div>

      <div
        className={` ${styles.back}`}
        onClick={() => {
          setIsExpanded((prev) => !prev);
        }}
      >
        {isExpanded ? <ChevronLeft /> : <ChevronRight />}
      </div>
    </div>
  );
};

export default SideBar;
