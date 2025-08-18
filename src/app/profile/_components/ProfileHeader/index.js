"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  CameraFilled,
  CarryOutTwoTone,
  ScheduleFilled,
} from "@ant-design/icons";
import { Upload } from "antd";

const ProfileHeader = ({ teacher }) => {
  const router = useRouter();

  const [fileList, setFileList] = useState([]);
  const handleChange = ({ fileList: newFileList }) => console.log(newFileList);
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <CameraFilled />
    </button>
  );

  return (
    <div className={styles.profileHeader}>
      <div
        className={styles.coverSection}
        style={{
          backgroundImage:
            "url(https://media.licdn.com/dms/image/v2/D4E3DAQH-eOnIP_MZYg/image-scale_191_1128/B4EZWjs6i.GwAc-/0/1742208215677/vodafone_cover?e=1756119600&v=beta&t=1SgmL6jYtSdQHVv1oUVLEDlBmPRFRroWuai5GK0PlpY)",
        }}
      >
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={fileList}
          onChange={handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
      </div>

      <div className={styles.profileInfoSection}>
        <div className={styles.profileAvatar}>
          <Image
            src="/images/vodafone_logo.jpg"
            width={500}
            height={500}
            alt="avatar profile onMeeting"
          />
        </div>

        <div className={styles.teacherDetails}>
          <h1 className={styles.teacherName}> جهاد العدل </h1>
          <h2 className={styles.teacherTitle}> المدير التقني للفريق </h2>
          <p className={styles.teacherBio}> المنصوره - مصر </p>
          <button
            className={styles.but}
            onClick={() => router.push("/booking_calendar")}
          >
            <ScheduleFilled />
            <span>حجز موعد</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
