import Navbar from "./_components/navbar";
import "./globals.css";
import { Noto_Kufi_Arabic } from "next/font/google";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi-arabic",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "onMeeting profile",
  description: " onMeeting app profile ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`${notoKufiArabic.variable} `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
