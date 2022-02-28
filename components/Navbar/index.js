import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Burger from "./Burger";
import styles from "./Navbar.module.scss";
import PitekLogo from "./PitekLogo";

const Navbar = ({ navWhite }) => {
  const [navShow, setNavShow] = useState(false);

  useEffect(() => {
    // navShow && document.body.style.overflow = "hidden";
    if (navShow) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    // !navShow && document.body.style.overflow = 'unset';
  }, [navShow]);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <PitekLogo
            leftColor={navWhite ? "#FFF" : "#002266"}
            rightColor={navWhite ? "#FFF" : "#FF3355"}
          />
        </div>
        <div className={styles.burger} onClick={() => setNavShow(true)}>
          <Burger fill={navWhite ? "#fff" : "#002266"} />
        </div>
      </div>
      <div className={`${styles.navMenu} ${navShow && styles.navShow} `}>
        <div className={`${styles.menuRed} ${navShow && styles.navShow}`}>
          <div className={styles.arrowPatterns}>
            <Image
              src={"/icons/arrow-pattern-white-160x160.svg"}
              width={160}
              height={160}
              alt=""
            />
          </div>
          <div className={styles.logoMenu}>
            <Image
              src={"/icons/pitek_logo_white.svg"}
              width={240}
              height={112}
              alt=""
            />
          </div>

          <p className={styles.desc}>
            Starting operations in early 2021, Pitek brings products and
            services of modern technology, helping customers who’re approaching
            new technology trends have effective experiences, tailored to their
            needs.
          </p>

          <div className={styles.sendMessage}>
            <p>SAY HELLO</p>
            <a className="link-btn-white" href="#">
              SEND A MESSAGE
            </a>
          </div>

          <div className={styles.navFooter}>
            <div className={styles.address}>
              <p>PITEK JSC ©2022</p>
              <p>
                633 - 635 Dien Bien Phu, Ward 25, <br /> Binh Thanh District, Ho
                Chi Minh.
              </p>
            </div>
            <div className={styles.contact}>
              <p>GET IN TOUCH</p>
              <p>+84 86 900 22 44</p>
              <p> info@pitek.one</p>
            </div>
          </div>
        </div>
        <div className={`${styles.menuBlue} ${navShow && styles.navShow}`}>
          <div className={styles.circlePatterns}>
            <Image
              src={"/home-page/circle-pattern-320x320.svg"}
              width={320}
              height={320}
              alt=""
            />
          </div>
          <div className={styles.close} onClick={() => setNavShow(false)}>
            <Image src={"/icons/close.svg"} width={40} height={40} alt="" />
          </div>
          <h2>ABOUT</h2>
          <h2>SERVICE</h2>
          <h2>PROJECTS</h2>
          <h2>CONTACT</h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
