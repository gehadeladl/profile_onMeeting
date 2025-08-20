import React from "react";
import {
  DashboardOutlined,
  HomeOutlined,
  ProfileFilled,
} from "@ant-design/icons";

const Menu = () => {
  return (
    <>
      <button>
        <ProfileFilled /> <span> الشخصي </span>{" "}
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
