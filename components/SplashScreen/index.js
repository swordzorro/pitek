import Image from "next/image";
import React from "react";
import styles from "./Splash.module.scss";

const SplashScreen = ({ style }) => {
  return (
    <div className={styles.splashScreen} style={style}>
      <div>
        <div className={styles.logo}>
          <Image src={"/icons/logo_os.svg"} width={240} height={180} alt="" />
        </div>
        <div className={styles.loadingBar}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
