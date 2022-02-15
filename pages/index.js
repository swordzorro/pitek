import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useInView } from "react-intersection-observer";
import { useWindowScrollPositions } from "../utils/useWindowScrollPositions";
import { useEffect, useState } from "react";

const slideTextArr = ["unique", "modern", "creative"];

export default function Home() {
  const [slideText, setSlideText] = useState(0);

  const [aboutRef, aboutInview] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    let timer = setInterval(() => {
      setSlideText((prevSlideText) => {
        const updatedCounter = prevSlideText + 1;
        if (updatedCounter === slideTextArr.length) {
          return 0;
        }
        return updatedCounter;
      }); // use callback function to set the state
    }, 2000);
    return () => clearInterval(timer); // cleanup the timer
  }, []);

  const { scrollY } = useWindowScrollPositions();
  return (
    <div className={styles.container}>
      <Head>
        <title>Pitek- One Simple</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Page */}
      <div className={styles.bannerContainer}>
        <video loop muted autoPlay className={styles.bannerVideo}>
          <source src="/mp4/banner_fullhd.mp4" />
        </video>
        <div className={styles.bannerText}>Digital Product Development</div>
        <div
          className={`${styles.exploreMore} ${scrollY > 0 ? styles.gone : ""}`}
        >
          <p>Explore more</p>
          <div className={styles.line}></div>
        </div>
      </div>
      <section
        className={`${styles.about} ${styles.contentWrapper}`}
        ref={aboutRef}
      >
        <div className={styles.visual}>
          <div className={styles.visualLayer2}></div>
          <div className={styles.visualLayer1}></div>
          <div className={styles.logoSprite}></div>
        </div>
        <div className={styles.aboutContent}>
          <h2>
            We create{" "}
            <div className={`${styles.textSlider}`}>
              {slideTextArr?.map((item, index) => (
                <span
                  key={index}
                  className={`${styles.text} ${
                    slideText === index ? styles.show : styles.notShow
                  } 
                  `}
                  style={{
                    width: 250,
                    opacity: slideText === index ? 1 : 0,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
            digital products & technology experiences.
          </h2>
          <p>
            Starting operations in early 2021, Pitek brings products and
            services of modern technology, helping customers who’re approaching
            new technology trends have effective experiences, tailored to their
            needs.
          </p>
          <div className={styles.aboutLink}>
            <a>see more about us</a>
            <div className={styles.line}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
