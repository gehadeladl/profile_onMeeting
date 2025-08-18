"use client";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { DashboardFilled, HomeFilled } from "@ant-design/icons";
import { Input } from "antd";

const Navbar = () => {
  return (
    <div className={styles.wrapperNavbar}>
      <div>
        <Image
          src="/images/logoiconhome.png"
          width={50}
          height={50}
          alt="logo onMeeting"
        />
        <Input placeholder="بحث عن مستخدم" />
      </div>
      <div>
        <button>
          <HomeFilled /> <span> الرئيسيه </span>{" "}
        </button>
        <button>
          <DashboardFilled /> <span> التحكم </span>{" "}
        </button>
      </div>
      <div>
        <Image
          src="/images/avatar.png"
          width={40}
          height={40}
          alt="user onMeeting"
        />
      </div>
    </div>
  );
};

export default Navbar;
