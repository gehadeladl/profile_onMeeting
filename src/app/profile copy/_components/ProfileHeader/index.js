"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

const ProfileHeader = ({ teacher }) => {
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div className={styles.profileHeader}>
      <div className={styles.coverSection}>
        <ImgCrop rotationSlider>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 1 && "+ Upload"}
          </Upload>
        </ImgCrop>
      </div>

      <div className={styles.profileInfoSection}>
        <div className={styles.profileAvatar}>
          <Image
            src="/images/avatar.png"
            width={500}
            height={500}
            alt="avatar profile onMeeting"
          />
        </div>

        <div className={styles.teacherDetails}>
          <h1 className={styles.teacherName}>{teacher.name}</h1>
          <h2 className={styles.teacherTitle}>{teacher.title}</h2>
          <p className={styles.teacherBio}>{teacher.bio}</p>

          <div className={styles.ratingSection}>
            <div className={styles.stars}>{renderStars(teacher.rating)}</div>
            <span className={styles.ratingText}>
              {teacher.rating} ({teacher.totalReviews} تقييم)
            </span>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                {teacher.totalStudents}+
              </span>
              <div className={styles.statLabel}>طالب</div>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{teacher.experience}</span>
              <div className={styles.statLabel}>سنوات خبرة</div>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{teacher.successRate}%</span>
              <div className={styles.statLabel}>معدل النجاح</div>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{teacher.rating}</span>
              <div className={styles.statLabel}>التقييم</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
