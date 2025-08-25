"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { IoTimeOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { useTranslation } from "react-i18next";

const BookingCalendar = ({ teacher, setBookingConfirmation }) => {
  const [t] = useTranslation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  console.log(selectedDate);
  const availableDates = [3, 5, 9, 12, 15, 18, 22, 25];
  const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const monthNames = [
    t("months.jan"),
    t("months.feb"),
    t("months.mar"),
    t("months.apr"),
    t("months.may"),
    t("months.jun"),
    t("months.jul"),
    t("months.aug"),
    t("months.sep"),
    t("months.oct"),
    t("months.nov"),
    t("months.dec"),
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    const prevMonth = new Date(year, month - 1, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonth.getDate() - i,
        isCurrentMonth: false,
        isAvailable: false,
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        isAvailable: availableDates.includes(day),
        isToday: day === 10,
      });
    }

    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isAvailable: false,
      });
    }

    return days;
  };

  const handleDateSelect = (day) => {
    if (day.isAvailable && day.isCurrentMonth) {
      setSelectedDate(day.day);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // alert(
      //   `تم حجز الموعد بنجاح!\nالتاريخ: ${selectedDate} ${
      //     monthNames[currentMonth.getMonth()]
      //   }\nالوقت: ${selectedTime}\nسيتم التواصل معك قريباً للتأكيد.`
      // );
      setBookingConfirmation(true);
    }
  };

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div className={styles.contentCard}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>
          {t("bookingCalendar.header.title")}
        </h3>
      </div>

      <div className={styles.wrapperCalendar}>
        <div className={styles.bookingInfo}>
          <Image
            src="/images/user.jpg"
            width={60}
            height={60}
            alt="logo onMeeting"
          />
          <p className={styles.descLabel}> جميع المناهج الدراسيه </p>
          <h5 className={styles.titleLabel}> مؤسسه العدل </h5>
          <h6 className={styles.timeLabel}>
            {" "}
            <IoTimeOutline />
            30 دقيقه{" "}
          </h6>
          <button
            className={styles.bookBtn}
            disabled={!selectedDate || !selectedTime}
            onClick={handleBooking}
          >
            {selectedDate && selectedTime
              ? `${t("but.bookAppointment")} - ${selectedTime}`
              : selectedDate
              ? t("but.chooseSuitableTime")
              : t("but.chooseAnAppointmentFirst")}
          </button>
          <div className={styles.contactInfo}>
            <span> {t("but.orContactMeDirectly")} :</span>
            <br />

            <p>
              {" "}
              <MdLocalPhone /> <span> {teacher.phone}</span>{" "}
            </p>
          </div>
        </div>

        <div>
          {selectedDate && (
            <div className={styles.timeSlots}>
              <div className={styles.selectedDate}>
                {selectedDate} {monthNames[currentMonth.getMonth()]}
              </div>
              <div className={styles.slotsGrid}>
                {availableTimes.map((time) => (
                  <div
                    key={time}
                    className={`${styles.timeSlot} ${
                      selectedTime === time ? styles.selected : ""
                    }`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div
          className={`${styles.calendarContainer} ${
            selectedDate ? styles.calendarContainerNoSelectedDate : ""
          }`}
        >
          <div className={styles.calendarHeader}>
            <div>
              <button
                className={styles.navBtn}
                onClick={() => navigateMonth(-1)}
              >
                ‹
              </button>
              <button
                className={styles.navBtn}
                onClick={() => navigateMonth(1)}
              >
                ›
              </button>
            </div>
            <div className={styles.monthYear}>
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>
          </div>

          <div className={styles.calendarGrid}>
            {[
              t("days.sun"),
              t("days.mon"),
              t("days.tue"),
              t("days.wed"),
              t("days.thu"),
              t("days.fri"),
              t("days.sat"),
            ].map((day) => (
              <div key={day} className={styles.dayHeader}>
                {day}
              </div>
            ))}

            {days.map((day, index) => (
              <div
                key={index}
                className={`${styles.calendarDay} ${
                  !day.isCurrentMonth ? styles.otherMonth : ""
                } ${day.isToday ? styles.today : ""} ${
                  day.isAvailable ? styles.available : ""
                } ${
                  selectedDate === day.day && day.isCurrentMonth
                    ? styles.selected
                    : ""
                } ${day.isAvailable ? styles.hasSlots : ""}`}
                onClick={() => handleDateSelect(day)}
              >
                {day.day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
