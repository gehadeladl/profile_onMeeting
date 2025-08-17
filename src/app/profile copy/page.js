import React from "react";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileAbout from "./_components/ProfileAbout";
import BookingCalendar from "./_components/BookingCalendar";
import ReviewsSection from "./_components/ReviewsSection";

const Profile = () => {
  //   data
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

  const reviewsData = [
    {
      id: 1,
      name: "أحمد علي",
      rating: 5,
      text: "أستاذ أحمد مدرس ممتاز جداً، شرحه واضح ومبسط. ساعدني كثيراً في تحسين درجاتي في الرياضيات.",
    },
    {
      id: 2,
      name: "فاطمة محمد",
      rating: 5,
      text: "طريقة تدريسه رائعة ومفيدة جداً. دائماً صبور ويجيب على جميع الأسئلة.",
    },
    {
      id: 3,
      name: "محمد أحمد",
      rating: 5,
      text: "أفضل مدرس رياضيات درست معه. حولني من كرهي للرياضيات إلى حبها!",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <ProfileHeader teacher={teacherData} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-12">
            <ProfileAbout teacher={teacherData} />
          </div>
          <div className="lg:col-span-12">
            <BookingCalendar teacher={teacherData} />
          </div>
        </div>

        <ReviewsSection reviews={reviewsData} />
      </div>
    </div>
  );
};

export default Profile;
