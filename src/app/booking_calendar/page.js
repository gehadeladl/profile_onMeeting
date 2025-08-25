"use client";
import React, { useState } from "react";
import BookingCalendar from "./_components/BookingCalendar";
import BookingConfirmation from "./_components/BookingConfirmation";

const bookingCalendar = () => {
  const [bookingConfirmation, setBookingConfirmation] = useState(false);
  const teacherData = {
    id: 12124,
    name: "أستاذ أحمد محمد",
    title: "مدرس الرياضيات والفيزياء",
    bio: "مدرس متخصص في الرياضيات والفيزياء مع أكثر من 10 سنوات خبرة في التدريس. حاصل على ماجستير في الرياضيات التطبيقية من جامعة القاهرة.",
    rating: 4.9,
    totalReviews: 127,
    totalStudents: 500,
    experience: 10,
    successRate: 95,
    avatar: "أ.أ",
    price: 200,
    phone: "01234567890",
    specializations: [
      "الجبر",
      "الهندسة",
      "التفاضل والتكامل",
      "الفيزياء العامة",
      "الميكانيكا",
      "الكهرباء والمغناطيسية",
    ],
    experiences: [
      {
        title: "مدرس أول بمدرسة النيل الدولية",
        details: "2018 - حتى الآن | تدريس الرياضيات للمرحلة الثانوية",
      },
      {
        title: "مدرس خاص ومدرب أكاديمي",
        details: "2014 - 2018 | تدريس خاص وتأهيل للامتحانات",
      },
      {
        title: "ماجستير الرياضيات التطبيقية",
        details: "جامعة القاهرة | 2013",
      },
    ],
  };
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {bookingConfirmation ? (
        <BookingConfirmation setBookingConfirmation={setBookingConfirmation} />
      ) : (
        <BookingCalendar
          setBookingConfirmation={setBookingConfirmation}
          teacher={teacherData}
        />
      )}
    </div>
  );
};

export default bookingCalendar;
