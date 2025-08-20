import React from "react";
import {
  DashboardOutlined,
  HomeOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const Menu = () => {
  return (
    <>
      <button>
        <ProfileOutlined /> <span> الشخصي </span>{" "}
      </button>
      <button>
        <HomeOutlined /> <span> الرئيسيه </span>{" "}
      </button>
      <button>
        <DashboardOutlined /> <span> التحكم </span>{" "}
      </button>
    </>
  );
};

export default Menu;
