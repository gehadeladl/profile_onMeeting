"use client";
import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

const ProfileAbout = ({ teacher }) => {
  const [t, i18n] = useTranslation();

  return (
    <div className={`${styles.contentCard} contentCard mt-[40px] lg:mt-0`}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}> {t("about.title")} </h3>
      </div>

      <div className={styles.aboutContent}>
        أهلاً بك! أنا {teacher.name.split(" ")[1]}، مدرس متخصص في الرياضيات
        والفيزياء. أؤمن بأن التعليم هو مفتاح النجاح، وأسعى دائماً لجعل المفاهيم
        الصعبة سهلة ومفهومة لجميع طلابي. أستخدم طرق تدريس حديثة وتفاعلية لضمان
        وصول المعلومة بأفضل شكل ممكن.
      </div>
    </div>
  );
};

export default ProfileAbout;
