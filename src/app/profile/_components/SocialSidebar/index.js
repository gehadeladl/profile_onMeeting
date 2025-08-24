"use client";

import React from "react";
import styles from "./style.module.css";
import {
  LinkedinOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneVolume,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const SocialSidebar = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className={styles.wrapperSocialSidebar}>
      <h6> {t("profile.header.contact.title")} </h6>
      <div className={styles.Social}>
        <p>
          {" "}
          <FaPhoneVolume /> <span>
            {" "}
            {t("profile.header.contact.phone")}{" "}
          </span>{" "}
          <a href="/"> 01097786430 </a>{" "}
        </p>
        <p>
          {" "}
          <MdEmail /> <span> {t("profile.header.contact.email")} </span>{" "}
          <a href="/"> @Gehad_E </a>{" "}
        </p>
        <p>
          {" "}
          <FaFacebookF /> <span>
            {" "}
            {t("profile.header.contact.facebook")}{" "}
          </span>{" "}
          <a href="/"> @Gehad_Eladl </a>{" "}
        </p>
        <p>
          {" "}
          <FaLinkedinIn /> <span>
            {t("profile.header.contact.linkedin")}{" "}
          </span>{" "}
          <a href="/"> @Gehad_E </a>{" "}
        </p>
        <p>
          {" "}
          <FaWhatsapp /> <span>
            {t("profile.header.contact.whatsapp")}{" "}
          </span>{" "}
          <a href="/"> 01097786430 </a>{" "}
        </p>
        <p>
          {" "}
          <RiInstagramFill />
          <span>{t("profile.header.contact.instagram")} </span>{" "}
          <a href="/"> @Gehad_E </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default SocialSidebar;
