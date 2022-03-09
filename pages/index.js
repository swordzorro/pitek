import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";
import { useWindowScrollPositions } from "../utils/useWindowScrollPositions";
import { Parallax } from "react-scroll-parallax";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import withTransition from "../HOC/withTransition";
import useVerticalScrollDirection from "../helper/useGetScrollDirection";
import SplashScreen from "../components/SplashScreen";
import projectGif from "../public/home-page/pitek_card_project.gif";
import ReactPlayer from "react-player";

const slideTextArr = ["unique", "modern", "creative"];

function Home() {
  const [slideText, setSlideText] = useState(0);
  const [swiper, setSwiper] = useState({});
  const [overlayPercent, setOverlayPercent] = useState(1);

  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);

  const logoSpriteRef = useRef();
  const bannerVideoRef = useRef();

  const router = useRouter();

  const [bannerRef, bannerInview] = useInView({
    threshold: 0.2,
  });
  const [projectSectionRef, projectSectionInview] = useInView({
    threshold: 1,
    rootMargin: "350px",
  });
  const [aboutSectionRef, aboutSectionInview] = useInView({
    threshold: [0.6, 0.1],
  });
  const { scrollY } = useWindowScrollPositions();

  useEffect(() => {
    let timer = setInterval(() => {
      setSlideText((prevSlideText) => {
        const updatedCounter = prevSlideText + 1;
        if (updatedCounter === slideTextArr.length) {
          return 0;
        }
        return updatedCounter;
      }); // use callback function to set the state
    }, 3000);

    return () => clearInterval(timer); // cleanup the timer
  }, []);

  // useEffect(() => {
  //   let video = document.getElementById("banner-video");
  //   if (video.readyState === 4) {
  //     setTimeout(() => {
  //       setIsBannerLoaded(true);
  //     }, 500);
  //   }
  // }, []);

  const scrollDirection = useVerticalScrollDirection();

  // console.log(isBannerLoaded);

  const lockScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  }, []);

  const unlockScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = "unset";
    }
  }, []);

  useEffect(() => {
    !isBannerLoaded ? lockScroll() : unlockScroll();
  }, [isBannerLoaded]);

  return (
    <>
      <SplashScreen
        style={{
          opacity: isBannerLoaded ? 0 : 1,
          zIndex: isBannerLoaded ? -1 : 999,
        }}
      />
      <div className={styles.container}>
        <Head>
          <title>Pitek- One Simple</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        {/* Page */}
        {isBannerLoaded && (
          <Navbar
            showNav={scrollY > 300 && scrollDirection === "up" ? true : false}
            showForm={showForm}
            setShowForm={setShowForm}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            scrollY={scrollY}
          />
        )}
        <Parallax
          // speed={-10}
          translateY={[-15, 15]}
          className={styles.bannerContainer}
          startScroll={0}

          // style={{ opacity: 1 - overlayPercent }}
        >
          <div ref={bannerRef} className={styles.bannerVideo}>
            <ReactPlayer
              loop
              controls={false}
              playsinline
              playing={true}
              width={1920}
              height={1080}
              muted
              onReady={() => {
                setIsBannerLoaded(false);
              }}
              url={"/mp4/banner_fullhd.mp4"}
            />

            <div className={styles.bannerBlur}></div>
            <div
              className={`${styles.exploreMore} ${
                scrollY > 0 ? styles.gone : ""
              }`}
            >
              <p>Explore</p>
              <div className={styles.line}></div>
            </div>
          </div>
          <div className={styles.bannerText}>
            Digital Product <br /> Development
          </div>
        </Parallax>
        {/* TODO: section about */}
        <div ref={aboutSectionRef}>
          <Parallax
            translateY={[0, -15]}
            onProgressChange={(progress) => setOverlayPercent(progress)}
            className={`${styles.about} `}
            style={{ background: "white" }}
          >
            <div className={styles.visual} ref={logoSpriteRef}>
              {/* <div className={styles.visualLayer2}></div> */}
              <div className={styles.visualLayer1}>
                <Image
                  // className={styles.visualLayer1}
                  src={"/visual_bg1.png"}
                  width={704}
                  height={548}
                  alt=""
                  objectFit="contain"
                  layout="intrinsic"
                ></Image>
              </div>
              <div className={styles.visualLayer2}>
                <Image
                  // className={styles.visualLayer1}
                  src={"/visual_bg2.png"}
                  width={704}
                  height={548}
                  alt=""
                  objectFit="contain"
                  layout="intrinsic"
                ></Image>
              </div>
              <div className={styles.visualLayer3}>
                <Image
                  // className={styles.visualLayer1}
                  src={"/visual_one_simple.png"}
                  width={704}
                  height={548}
                  alt=""
                  objectFit="contain"
                  layout="intrinsic"
                ></Image>
              </div>

              <div className={styles.logoSprite} id="logo"></div>
            </div>
            {/* </Parallax>*/}
            <Parallax
              translateY={[20, -20]}
              // startScroll={0}
              className={styles.aboutContent}
            >
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
                        opacity: slideText === index ? 1 : 0,
                        // transition: "1s all ease",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <br />
                digital products & technology experiences.
              </h2>
              <p>
                Starting operations in early 2021, Pitek brings products and
                services of modern technology, helping customers who’re
                approaching new technology trends have effective experiences,
                tailored to their needs.
              </p>
              <div className={styles.link}>
                <a>see more about us</a>
                <div className={styles.line}></div>
              </div>
            </Parallax>
            {/* </section> */}
          </Parallax>
          {/* TODO: service */}
          <Parallax translateY={[0, -15]}>
            <div className={styles.service}>
              <Parallax translateY={[-20, 20]} className={styles.circlePattern}>
                <Image
                  src="/home-page/circle-pattern-320x320.svg"
                  width={320}
                  height={320}
                  alt=""
                />
              </Parallax>
              <Parallax translateY={[20, 0]} className={styles.arrowPattern}>
                <Image
                  src="/home-page/arrow-pattern-160x160.svg"
                  width={160}
                  height={160}
                  alt=""
                />
              </Parallax>
              <Parallax translateY={[-20, 20]} className={styles.plusPattern}>
                <Image
                  src="/home-page/plus-pattern-320x160.svg"
                  width={320}
                  height={160}
                  alt=""
                />
              </Parallax>
              <div className={styles.contentWrapper}>
                <Parallax translateY={[-20, 0]}>
                  <h1>Our service</h1>
                </Parallax>
                <div className={styles.cards}>
                  <div className={styles.card}>
                    <div className={styles.icon}>
                      <Image
                        src={"/home-page/glassmorphims-dev.png"}
                        width={120}
                        height={120}
                        alt=""
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <h5>
                        Software <br /> development
                      </h5>
                      <p>
                        We architect, build, and deliver digital products
                        entirely in-house.
                      </p>
                      <div className={styles.cardList}>
                        <p>Product Development</p>
                        <p>CMS Integration</p>
                        <p>3rd Party Integration</p>
                        <p>API Design & Implementation</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.icon}>
                      <Image
                        src={"/home-page/glassmorphims-iot.png"}
                        width={120}
                        height={120}
                        alt=""
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <h5>
                        IoT software <br /> and services
                      </h5>
                      <p>
                        Through the digital transformation, our products are
                        being interconnected into intelligent systems based in
                        IoT.
                      </p>
                      <p>
                        With the brand message: <br />
                        ONE SIMPLE — We resolve the problems with simple
                        solution.
                      </p>
                      {/* <p>Product Development</p>
                <p>CMS Integration</p>
                <p>3rd Party Integration</p>
                <p>API Design & Implementation</p> */}
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.icon}>
                      <Image
                        src={"/home-page/glassmorphims-solution.png"}
                        width={120}
                        height={120}
                        alt=""
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <h5>
                        Business process <br /> solution
                      </h5>
                      <p>
                        We believe with our professional technology consulting
                        and solutions team helping you achieve cost-efficiency
                        and drive business growth with the right mix of quality
                        standards, people and technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
        </div>

        <section className={`${styles.project}`} ref={projectSectionRef}>
          <div className={styles.projectBg}>
            <video
              loop
              muted
              autoPlay
              playsInline
              onLoadedData={() => {
                console.log("Im loaded");
              }}
              onLoad={() => alert("loaded")}
            >
              <source src="/mp4/background.mp4" />
            </video>
          </div>
          <div className={styles.mask}></div>
          <div className={styles.projectContainer}>
            <div className={`${styles.projectContent}`}>
              <h1>PROJECTS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis.
              </p>
              <div className={styles.link}>
                <a>brief us</a>
                <div className={styles.line}></div>
              </div>
              <div className={styles.slideNavigate}>
                <div
                  className={`${styles.slideBtn} ${styles.slideLeft}`}
                  onClick={() => {
                    swiper.slideNext();
                  }}
                >
                  <Image
                    src="/icons/caret.svg"
                    width={32}
                    height={32}
                    alt=""
                    objectFit="contain"
                  />
                </div>
                <div
                  className={`${styles.slideBtn} ${styles.slideRight}`}
                  onClick={() => {
                    swiper.slidePrev();
                  }}
                >
                  <Image
                    src="/icons/caret.svg"
                    width={32}
                    height={32}
                    alt=""
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
            <Swiper
              spaceBetween={80}
              slidesPerView={3}
              speed={1000}
              loop={true}
              className={styles.mySwiper}
              onInit={(ev) => setSwiper(ev)}
            >
              <SwiperSlide
                className={styles.projectCard}
                onClick={() => router.push("/project/ecoe")}
              >
                <Image
                  src={"/projects/Ecoe.png"}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>Mobile App</p>
                  <h2>Ecoe</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.projectCard}>
                <Image
                  src={"/projects/Pinnow.png"}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>Mobile App</p>
                  <h2>Pinnow</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.projectCard}>
                <Image
                  src={"/projects/PiBuilding.png"}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>Desktop App</p>
                  <h2>PiBuilding</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.projectCard}>
                <Image
                  src={"/projects/Ecoin.png"}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>Platform</p>
                  <h2>Ecoin</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.projectCard}>
                <Image
                  src={projectGif}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>New App</p>
                  <h3>
                    Your project
                    <br /> can be here
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>

            <Swiper
              spaceBetween={40}
              slidesPerView={2}
              speed={1000}
              loop={true}
              className={styles.mySwiperIpad}
            >
              <SwiperSlide
                className={styles.projectCard}
                onClick={() => router.push("/project/ecoe")}
              >
                <Image
                  src={"/projects/Ecoe.png"}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>Mobile App</p>
                  <h2>Ecoe</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.projectCard}>
                <Image
                  src={"/projects/Pinnow.png"}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>Mobile App</p>
                  <h2>Pinnow</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.projectCard}>
                <Image
                  src={"/projects/PiBuilding.png"}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>Desktop App</p>
                  <h2>PiBuilding</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.projectCard}>
                <Image
                  src={"/projects/Ecoin.png"}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>Platform</p>
                  <h2>Ecoin</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.projectCard}>
                <Image
                  src={projectGif}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>New App</p>
                  <h3>
                    Your project
                    <br /> can be here
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>

            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              speed={1000}
              loop={true}
              className={styles.mySwiperPhone}
            >
              <SwiperSlide
                className={styles.projectCard}
                onClick={() => router.push("/project/ecoe")}
              >
                <Image
                  src={"/projects/Ecoe.png"}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>Mobile App</p>
                  <h2>Ecoe</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.projectCard}>
                <Image
                  src={"/projects/Pinnow.png"}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>Mobile App</p>
                  <h2>Pinnow</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.projectCard}>
                <Image
                  src={"/projects/PiBuilding.png"}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>Desktop App</p>
                  <h2>PiBuilding</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.projectCard}>
                <Image
                  src={"/projects/Ecoin.png"}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>Platform</p>
                  <h2>Ecoin</h2>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.projectCard}>
                <Image
                  src={projectGif}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
                <div className={styles.info}>
                  <p>New App</p>
                  <h3>
                    Your project
                    <br /> can be here
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <Footer setShowForm={setShowForm} setShowMenu={setShowMenu} />
      </div>
    </>
  );
}
export default Home;
