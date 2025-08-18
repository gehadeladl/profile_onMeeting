"use client";
import React from "react";
import styles from "./style.module.css";

const ProfileAbout = ({ teacher }) => {
  return (
    <div className={styles.contentCard}>
      <div className={styles.sectionHeader}>
        {/* <div className={styles.sectionIcon}>📚</div> */}
        <h3 className={styles.sectionTitle}>نبذة عني</h3>
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
