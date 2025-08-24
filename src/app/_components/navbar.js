"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { BarsOutlined } from "@ant-design/icons";
import { Drawer, Dropdown, Input, Space } from "antd";
import Menu from "./menu/menu";
import { useTranslation } from "react-i18next";

const { Search } = Input;

const Navbar = () => {
  // state
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // items menu user

  const items = [
    {
      label: (
        <div
          className={` ${styles.wrapperImageUser} ${styles.wrapperImageUserOption} `}
        >
          <div className={styles.bg}> </div>
          <div className={styles.content}>
            <Image
              src="/images/avatar.png"
              width={50}
              height={50}
              alt="user onMeeting"
            />
            <h4> gehadeladl19@gmail.com </h4>
            <p> owner </p>
          </div>
        </div>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    i18n.language == "en" && {
      label: (
        <button onClick={() => changeLang("ar")} className="mx-2">
          {t("navbar.langAr")}
        </button>
      ),
      key: "1",
    },
    i18n.language == "en" && {
      type: "divider",
    },
    i18n.language == "ar" && {
      label: (
        <button onClick={() => changeLang("en")} className="mx-2">
          {t("navbar.langEn")}
        </button>
      ),
      key: "2",
    },
    i18n.language == "ar" && {
      type: "divider",
    },
    {
      label: <a href="https://www.aliyun.com"> {t("navbar.logout")} </a>,
      key: "3",
    },
  ];

  // translation

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    window.localStorage.setItem("onMeetingLang", lang);
    document.body.classList.remove("ar", "en");
    document.body.classList.add(lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  };

  // useEffect

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div style={{ boxShadow: "1px 1px 8px -6px #5232ca" }}>
      <div
        className={`container mx-auto px-4 py-6 max-w-7xl ${styles.wrapperNavbar}`}
      >
        <div
          className={`${styles.wrapperLogo} ${
            i18n.language == "en" ? styles.wrapperLogoEn : ""
          } wrapperLogoNav`}
        >
          <Image
            src="/images/logoiconhome.png"
            width={40}
            height={40}
            alt="logo onMeeting"
          />
          <Search placeholder={t("navbar.search")} />
        </div>
        <div className={styles.menuNavbar}>
          <Menu />
        </div>

        <div className={styles.infoUser}>
          <button onClick={showDrawer}>
            <BarsOutlined />
          </button>
          <div className={styles.wrapperMenuRes}>
            <Drawer
              title=""
              closable={{ "aria-label": "Close Button" }}
              onClose={onClose}
              open={open}
            >
              <Menu />
            </Drawer>
          </div>
          <div className={`${styles.wrapperImageUser} `}>
            <Dropdown
              overlayClassName="wrapperImageUser"
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Image
                    src="/images/avatar.png"
                    width={40}
                    height={40}
                    alt="user onMeeting"
                  />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
