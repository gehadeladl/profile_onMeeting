import Navbar from "./_components/navbar";
import "./globals.css";
import { Noto_Kufi_Arabic } from "next/font/google";
import I18nProvider from "./I18nProvider";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi-arabic",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "onMeeting profile",
  description: " onMeeting app profile ",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body className={`${notoKufiArabic.variable} `}>
        <I18nProvider>
          <Navbar />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
};

export default RootLayout;
