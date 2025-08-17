import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.wrapperNavbar}>
      <Image
        src="/images/logo_nav.png"
        width={120}
        height={200}
        alt="logo onMeeting"
      />
      <div>
        <button> لوحة التحكم </button>
      </div>
    </div>
  );
};

export default Navbar;
