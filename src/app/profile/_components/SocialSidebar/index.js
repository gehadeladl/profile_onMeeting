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

const SocialSidebar = () => {
  return (
    <div className={styles.wrapperSocialSidebar}>
      <h6> تواصل </h6>
      <div className={styles.Social}>
        <p>
          {" "}
          <FaPhoneVolume /> <span> هاتف </span> <a href="/"> 01097786430 </a>{" "}
        </p>
        <p>
          {" "}
          <MdEmail /> <span> إيميل </span> <a href="/"> @Gehad_E </a>{" "}
        </p>
        <p>
          {" "}
          <FaFacebookF /> <span> فيس بوك </span> <a href="/"> @Gehad_Eladl </a>{" "}
        </p>
        <p>
          {" "}
          <FaLinkedinIn /> <span> لينكداين </span> <a href="/"> @Gehad_E </a>{" "}
        </p>
        <p>
          {" "}
          <FaWhatsapp /> <span> واتساب </span> <a href="/"> 01097786430 </a>{" "}
        </p>
        <p>
          {" "}
          <RiInstagramFill />
          <span> لينكداين </span> <a href="/"> @Gehad_E </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default SocialSidebar;
