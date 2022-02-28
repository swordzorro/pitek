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
      {navShow && (
        <div className={`${styles.navMenu} ${styles.navShow}`}>
          <div className={styles.menuRed}></div>
          <div className={styles.menuBlue}>
            <div className={styles.close} onClick={() => setNavShow(false)}>
              <Image src={"/icons/close.svg"} width={40} height={40} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
