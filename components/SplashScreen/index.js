import Image from "next/image";
import React from "react";
import styles from "./Splash.module.scss";

const SplashScreen = ({ style }) => {
  return (
    <div className={styles.splashScreen} style={style}>
      <Image src={"/icons/logo_os.svg"} width={240} height={180} alt="" />
    </div>
  );
};

export default SplashScreen;
