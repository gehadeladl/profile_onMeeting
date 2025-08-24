import React from "react";
import {
  DashboardOutlined,
  HomeOutlined,
  ProfileFilled,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const Menu = () => {
  // state
  const { t, i18n } = useTranslation();
  return (
    <>
      <button>
        <ProfileFilled /> <span> {t("navbar.profile")} </span>{" "}
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
