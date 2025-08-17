"use client";
import React, { useState } from "react";
import styles from "./style.module.css";

const BookingCalendar = ({ teacher }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const availableDates = [3, 5, 9, 12, 15, 18, 22, 25];
  const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const monthNames = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
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
      alert(
        `تم حجز الموعد بنجاح!\nالتاريخ: ${selectedDate} ${
          monthNames[currentMonth.getMonth()]
        }\nالوقت: ${selectedTime}\nسيتم التواصل معك قريباً للتأكيد.`
      );
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
        <div className={styles.sectionIcon}>📅</div>
        <h3 className={styles.sectionTitle}>حجز موعد</h3>
      </div>

      <div className={styles.wrapperCalendar}>
        <div className={styles.calendarContainer}>
          <div className={styles.calendarHeader}>
            <button className={styles.navBtn} onClick={() => navigateMonth(-1)}>
              ‹
            </button>
            <div className={styles.monthYear}>
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>
            <button className={styles.navBtn} onClick={() => navigateMonth(1)}>
              ›
            </button>
          </div>

          <div className={styles.calendarGrid}>
            {[
              "الأحد",
              "الإثنين",
              "الثلاثاء",
              "الأربعاء",
              "الخميس",
              "الجمعة",
              "السبت",
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
        <div className={styles.bookingInfo}>
          <div className={styles.priceDisplay}>{teacher.price} جنيه</div>
          <div className={styles.priceLabel}>سعر الحصة الواحدة</div>
          <button
            className={styles.bookBtn}
            disabled={!selectedDate || !selectedTime}
            onClick={handleBooking}
          >
            {selectedDate && selectedTime
              ? `احجز الموعد - ${selectedTime}`
              : selectedDate
              ? "اختر الوقت المناسب"
              : "اختر موعد أولاً"}
          </button>
          <div className={styles.contactInfo}>
            أو تواصل معي مباشرة:
            <br />
            📱 {teacher.phone}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
