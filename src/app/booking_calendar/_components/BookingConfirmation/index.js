import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import { Form, Input, Button } from "antd";
import Image from "next/image";
import { IoTimeOutline } from "react-icons/io5";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const BookingConfirmation = ({ setBookingConfirmation }) => {
  const [t, i18n] = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={`${styles.contentCard} contentCard`}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>
          <span> {t("bookingCalendar.bookingConfirmation.title")} </span>
          <button onClick={() => setBookingConfirmation(false)}>
            {i18n.language == "En" ? <IoMdArrowForward /> : <IoMdArrowBack />}
          </button>
        </h3>
      </div>
      <div className={styles.wrapperConfirm}>
        <div>
          <Image
            src="/images/user.jpg"
            width={60}
            height={60}
            alt="logo onMeeting"
          />
          <h5> جهاد العدل </h5>
          <p> مادة الرياضيات </p>
          <h6>
            <IoTimeOutline />
            30 دقيقه
          </h6>
          <h6> 15 أغسطس 2025 </h6>
        </div>
        <div>
          <Form
            form={form}
            layout="vertical"
            name="bookingForm"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label={t("input.name.title")}
              name="name"
              rules={[{ required: true, message: t("input.name.confirm") }]}
            >
              <Input placeholder={t("input.name.placeholder")} />
            </Form.Item>

            <Form.Item
              label={t("input.email.title")}
              name="email"
              rules={[
                { required: true, message: t("input.email.confirm1") },
                { type: "email", message: t("input.email.confirm2") },
              ]}
            >
              <Input placeholder={t("input.email.placeholder")} />
            </Form.Item>

            <Form.Item
              label={t("input.ReasonForMeeting.title")}
              name="reason"
              rules={[
                {
                  required: true,
                  message: t("input.ReasonForMeeting.confirm"),
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder={t("input.ReasonForMeeting.placeholder")}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                {t("but.confirm")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
