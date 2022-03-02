import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = ({ setShowForm, setShowMenu }) => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.logo}>
        <Image
          src={"/icons/pitek_logo_white.svg"}
          width={180}
          height={84}
          alt=""
        />
      </div>
      <div className={styles.footerInfo}>
        <div className={styles.address}>
          <p>PITEK JSC ©2022</p>
          <p>
            633 - 635 Dien Bien Phu, Ward 25, Binh Thanh District, Ho Chi Minh.
          </p>
        </div>
        <div className={styles.contact}>
          <p>GET IN TOUCH</p>
          <p>+84 86 900 22 44 info@pitek.one</p>
        </div>
        <div className={styles.sendMessage}>
          <p>SAY HELLO</p>
          <button
            className="link-btn-white"
            onClick={() => {
              // setShowMenu(true);
              setShowForm(true);
            }}
          >
            SEND A MESSAGE
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
