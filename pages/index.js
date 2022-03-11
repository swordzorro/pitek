import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import ReactPlayer from "react-player";
import { Parallax } from "react-scroll-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SplashScreen from "../components/SplashScreen";
import TextSlider from "../components/TextSlider";
import useVerticalScrollDirection from "../helper/useGetScrollDirection";
import useWindowSize from "../helper/useWindowSize";
import projectGif from "../public/home-page/pitek_card_project.gif";
import styles from "../styles/Home.module.scss";
import { useWindowScrollPositions } from "../utils/useWindowScrollPositions";

function Home() {
  const [swiper, setSwiper] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const [showRedMenu, setShowRedMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);

  const [serviceCard1Ref, serviceCard1Inview] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [serviceCard2Ref, serviceCard2Inview] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [serviceCard3Ref, serviceCard3Inview] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const router = useRouter();
  const { scrollY } = useWindowScrollPositions();
  const scrollDirection = useVerticalScrollDirection();
  const windowSize = useWindowSize();

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

  const handleShowForm = () => {
    if (windowSize.width < 1025) {
      setShowForm(true);
    } else {
      setShowMenu(true);
      setShowForm(true);
    }
  };

  return (
    <>
      <SplashScreen
        style={{
          opacity: 1,
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
            showRedMenu={showRedMenu}
            setShowRedMenu={setShowRedMenu}
            scrollY={scrollY}
          />
        )}
        <Parallax
          translate={[-15, 15]}
          className={styles.bannerContainer}
          startScroll={0}
        >
          <div className={styles.bannerVideo}>
            <ReactPlayer
              loop
              controls={false}
              playsinline
              playing={true}
              width={1920}
              height={1080}
              muted
              onReady={() => {
                setIsBannerLoaded(true);
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
          <h3 className={styles.bannerText}>
            Digital Product <br /> Development
          </h3>
        </Parallax>
        {/* TODO: section about */}
        <div>
          <Parallax
            translateY={[0, -15]}
            className={`${styles.about} `}
            style={{ background: "white" }}
          >
            <MouseParallaxContainer
              className={styles.visual}
              containerStyles={{ overflow: "visible" }}
              useWindowMouseEvents={true}
            >
              {/* <div className={styles.visualLayer2}></div> */}
              <MouseParallaxChild
                factorX={0.18}
                factorY={0.1}
                className={styles.visualBg}
                inverted
                updateStyles={{
                  transitionDuration: "2.5s",
                }}
              >
                <Image
                  src={"/visual_bg1.png"}
                  width={704}
                  height={548}
                  alt=""
                  objectFit="contain"
                  layout="intrinsic"
                ></Image>
              </MouseParallaxChild>

              <MouseParallaxChild
                factorX={0.15}
                factorY={0.2}
                className={styles.visualBg}
                inverted
                updateStyles={{
                  transitionDuration: "1s",
                }}
              >
                <Image
                  src={"/visual_bg2.png"}
                  width={704}
                  height={548}
                  alt=""
                  objectFit="contain"
                  layout="intrinsic"
                ></Image>
              </MouseParallaxChild>

              <MouseParallaxChild
                factorX={0.15}
                factorY={0.1}
                className={styles.visualBg}
                inverted
                updateStyles={{
                  transitionDuration: "2s",
                }}
              >
                <Image
                  src={"/visual_bg4.png"}
                  width={704}
                  height={548}
                  alt=""
                  objectFit="contain"
                  layout="intrinsic"
                ></Image>
              </MouseParallaxChild>

              <MouseParallaxChild
                factorX={0.05}
                factorY={0.2}
                className={styles.visualBg}
                inverted
                updateStyles={{
                  transitionDuration: "1.8s",
                }}
              >
                <Image
                  src={"/visual_bg5.png"}
                  width={704}
                  height={548}
                  alt=""
                  objectFit="contain"
                  layout="intrinsic"
                ></Image>
              </MouseParallaxChild>

              <MouseParallaxChild
                factorX={0.08}
                factorY={0.1}
                className={styles.visualBg}
                inverted
                updateStyles={{
                  transitionDuration: "1.5s",
                  top: "20px",
                }}
              >
                <Image
                  src={"/visual_bg3.png"}
                  width={704}
                  height={548}
                  alt=""
                  objectFit="contain"
                  layout="intrinsic"
                ></Image>
              </MouseParallaxChild>

              <MouseParallaxChild
                className={styles.visualOS}
                factorX={0.05}
                factorY={0.05}
                inverted
              >
                <Image
                  // className={styles.visualLayer1}
                  src={"/visual_one_simple.png"}
                  width={704}
                  height={548}
                  alt=""
                  objectFit="contain"
                  layout="intrinsic"
                ></Image>
              </MouseParallaxChild>

              <div className={styles.logoSprite} id="logo"></div>
            </MouseParallaxContainer>
            {/* </Parallax>*/}
            <Parallax
              translateY={[20, -20]}
              // startScroll={0}
              className={styles.aboutContent}
            >
              <h2>
                We create <TextSlider styles={styles} />
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
              <Parallax translateY={[-20, 80]} className={styles.circlePattern}>
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
              <Parallax translateY={[0, 120]} className={styles.plusPattern}>
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
                  <div
                    className={`${styles.card} ${
                      serviceCard1Inview && styles.cardAppear
                    }`}
                    ref={serviceCard1Ref}
                  >
                    <div className={styles.icon}>
                      <Image
                        src={"/home-page/glassmorphims-dev.png"}
                        width={120}
                        height={120}
                        alt=""
                        quality={100}
                      />
                      {/* <div className={styles.background}>
                        <Image
                          src={"/home-page/glassmorphims-dev2.png"}
                          width={120}
                          height={120}
                          alt=""
                          quality={100}
                        />
                      </div> */}
                    </div>
                    {/* <div className={styles.icon}>
                   
                    </div> */}
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

                  <div
                    className={`${styles.card} ${
                      serviceCard2Inview && styles.cardAppear
                    }`}
                    ref={serviceCard2Ref}
                  >
                    <div className={styles.icon}>
                      <Image
                        src={"/home-page/glassmorphims-iot.png"}
                        width={120}
                        height={120}
                        alt=""
                        quality={100}
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
                    </div>
                  </div>

                  <div
                    className={`${styles.card} ${
                      serviceCard3Inview && styles.cardAppear
                    }`}
                    ref={serviceCard3Ref}
                  >
                    <div className={styles.icon}>
                      <Image
                        src={"/home-page/glassmorphims-solution.png"}
                        width={120}
                        height={120}
                        alt=""
                        quality={100}
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

        <section className={`${styles.project}`}>
          <div className={styles.projectBg}>
            <video loop muted autoPlay playsInline>
              <source src="/mp4/background.mp4" />
            </video>
          </div>
          <div className={styles.mask}></div>
          <div className={styles.projectContainer}>
            <div className={`${styles.projectContent}`}>
              <h1>PROJECTS</h1>
              <p>
                Recently, Pitek Technology JSC has provided to the market lots
                of products including Pigroup ecosystem. Besides, we are
                expanding our international market by outsourcing to potential
                markets such as Laos, Cambodia, Myanmar, Indonesia, Nepal,
                Singapore etc.
              </p>
              <div className={styles.link} onClick={handleShowForm}>
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
        <Footer
          setShowForm={setShowForm}
          setShowMenu={setShowMenu}
          setShowRedMenu={setShowRedMenu}
          windowSize={windowSize?.width}
          handleShowForm={handleShowForm}
        />
      </div>
    </>
  );
}
export default Home;
