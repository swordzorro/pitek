import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Project.module.scss";
import { useRef } from "react";
import withTransition from "../../HOC/withTransition";

const Ecoe = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const topRef = useRef();

  const scrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className={styles.projectPage}>
        <Navbar
          showForm={showForm}
          setShowForm={setShowForm}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <div className={styles.projectContent}>
          <div className={styles.banner}></div>
          <div className={styles.projectInfo}>
            <div className={styles.title} ref={topRef}>
              <h1> Ecoe App</h1>
              <p>
                Brief description of the project. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit ut aliquam, purus sit amet luctus
                venenatis.
              </p>
            </div>
            <div className={styles.list}>
              <div className={styles.col}>
                <p>Client</p>
                <p className="font-12">Ecoe</p>
              </div>
              <div className={styles.col}>
                <p>Client</p>
                <p className="font-12">Ecoe</p>
              </div>
              <div className={styles.col}>
                <p>Client</p>
                <p className="font-12">Software development </p>
                <p className="font-12">Business process solution</p>
              </div>
            </div>
            <div className={styles.categoryBlock}>
              <h3>Objective</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urn elementum.
              </p>
            </div>
            <div className={styles.categoryBlock}>
              <h3>Result</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urn elementum.
              </p>
            </div>
            <div className={styles.projectImage}>
              <Image
                src="/projects/ecoe_img_1.png"
                width={960}
                height={540}
                alt=""
                // layout="intrinsic"
              />
            </div>

            <p>
              Tellus risus, diam tincidunt tristique tempor, turpis ut et aenean
              risus nunc digniss porta aenean sed egestas venenatis nulla a duis
              fermentum arcu faucibus molest nisl, blandit enim ultricies eget
              enim vitae lobortis aliquet proin tincidunt aliquet vitae ut none
              teliestasd evetinkes amz. Scelerisque mattis fermentum velit
              dictum ut porta tincidunt non tristique proin gravida dis
              tristique dolor id tortor eget elementum neque ut consectetur
              etiam tempor egestas venenatis nulla.
            </p>

            <div className={styles.projectFooter}>
              <div className={styles.footerItem1}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollTo(topRef)}
                >
                  <Image
                    src="/icons/to_top.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Image src="/icons/share.svg" width={24} height={24} alt="" />
                </div>
              </div>
              <div className={styles.footerItem2}>
                <div className="sub-title">Do you like this project ?</div>
                <button className="btn btn-red">BRIEF US</button>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default withTransition(Ecoe);
