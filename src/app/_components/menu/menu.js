"use client";

import React from "react";
import styles from "./../style.module.css";
import {
  DashboardOutlined,
  HomeOutlined,
  ProfileFilled,
  CalendarOutlined,
  ProfileOutlined,
  CalendarFilled,
} from "@ant-design/icons";

import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";

const Menu = () => {
  // state
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path) => pathname === path;

  return (
    <>
      <button
        className={isActive("/profile") ? styles.active : ""}
        onClick={() => router.push("/profile")}
      >
        {isActive("/profile") ? <ProfileFilled /> : <ProfileOutlined />}
        <span> {t("navbar.profile")} </span>{" "}
      </button>
      <button
        className={isActive("/booking_calendar") ? styles.active : ""}
        onClick={() => router.push("/booking_calendar")}
      >
        {isActive("/booking_calendar") ? (
          <CalendarFilled />
        ) : (
          <CalendarOutlined />
        )}{" "}
        <span> {t("navbar.bookAppointment")} </span>
      </button>
      <button>
        <HomeOutlined /> <span> {t("navbar.home")} </span>{" "}
      </button>
      <button>
        <DashboardOutlined /> <span> {t("navbar.dashboard")} </span>{" "}
      </button>
    </>
  );
};

export default Menu;
