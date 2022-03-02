import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Burger from "./Burger";
import styles from "./Navbar.module.scss";
import PitekLogo from "./PitekLogo";

const Navbar = ({
  navWhite,
  showMenu = false,
  showForm = false,
  setShowMenu,
  setShowForm,
}) => {
  const [radio, setRadio] = useState("BRIEF_US");

  const [formValue, setFormValue] = useState({
    radio: "BRIEF_US",
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({});

  const validate = (value) => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let errorObj = {};
    if (!emailRegex.test(value?.email)) {
      errorObj.email = "Vui lòng nhập đúng định dạng email.";
    }
    return errorObj;
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorObj = validate(formValue);

    if (Object.keys(errorObj).length === 0) {
      alert("submitted");
    } else {
      setError(errorObj);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "sticky";
    } else {
      (document.body.style.overflow = "unset"),
        (document.body.style.position = "static");
    }
  }, [showMenu]);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <PitekLogo
            leftColor={navWhite ? "#FFF" : "#002266"}
            rightColor={navWhite ? "#FFF" : "#FF3355"}
          />
        </div>
        <div className={styles.burger} onClick={() => setShowMenu(true)}>
          <Burger fill={navWhite ? "#fff" : "#002266"} />
        </div>
      </div>
      <div
        className={`${styles.navMenu} ${showMenu && styles.showMenu} `}
        style={{ visibility: showForm && "visible" }}
      >
        <div className={styles.menuContent}>
          <div className={`${styles.menuRed} ${showMenu && styles.showMenu}`}>
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
              services of modern technology, helping customers who’re
              approaching new technology trends have effective experiences,
              tailored to their needs.
            </p>

            <div className={styles.sendMessage}>
              <p>SAY HELLO</p>
              <button
                className="link-btn-white"
                onClick={() => setShowForm(true)}
              >
                SEND A MESSAGE
              </button>
            </div>

            <div className={styles.navFooter}>
              <div className={styles.address}>
                <p>PITEK JSC ©2022</p>
                <p>
                  633 - 635 Dien Bien Phu, Ward 25, <br /> Binh Thanh District,
                  Ho Chi Minh.
                </p>
              </div>
              <div className={styles.contact}>
                <p>GET IN TOUCH</p>
                <p>+84 86 900 22 44</p>
                <p> info@pitek.one</p>
              </div>
            </div>
          </div>

          <div className={`${styles.menuBlue} ${showMenu && styles.showMenu}`}>
            <div className={styles.circlePatterns}>
              <Image
                src={"/home-page/circle-pattern-320x320.svg"}
                width={320}
                height={320}
                alt=""
              />
            </div>
            <div
              className={styles.close}
              onClick={() => {
                setShowForm(false);
                setShowMenu(false);
              }}
            >
              <Image src={"/icons/close.svg"} width={40} height={40} alt="" />
            </div>
            <div className={styles.logoMenuBlue}>
              <Image
                src={"/icons/pitek_logo_white.svg"}
                width={60}
                height={28}
                alt=""
              />
            </div>
            <h2>ABOUT</h2>
            <h2>SERVICE</h2>
            <h2>PROJECTS</h2>
            <h2>CONTACT</h2>
          </div>

          {/* TODO: Contact Form */}
          <div
            className={`${styles.contactForm} ${showForm && styles.showForm}`}
          >
            {/* <div className={styles.arrowPatterns}>
            <Image
              src={"/home-page/arrow-pattern-160x160.svg"}
              width={160}
              height={160}
              alt=""
            />
          </div> */}
            <div className={styles.logoMenu}>
              <Image
                src={"/icons/pitek_logo.svg"}
                width={240}
                height={112}
                alt=""
              />
            </div>
            <form onSubmit={handleSubmit}>
              <h4>We'd love to work with you!</h4>
              <div className={styles.radioGroup}>
                <label for="brief" className={styles.customRadio}>
                  BRIEF US
                  <input
                    id="brief"
                    type="radio"
                    checked={radio === "BRIEF_US"}
                    value="BRIEF_US"
                    onChange={(e) => setRadio(e.target.value)}
                  />
                  <span className={styles.checkmark}></span>
                </label>
                <label for="join" className={styles.customRadio}>
                  JOIN OUR TEAM
                  <input
                    id="join"
                    type="radio"
                    checked={radio === "JOIN_OUR_TEAM"}
                    value="JOIN_OUR_TEAM"
                    onChange={(e) => setRadio(e.target.value)}
                  />
                  <span className={styles.checkmark}></span>
                </label>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <input
                    placeholder="Name"
                    type={"text"}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    placeholder="Email"
                    type={"text"}
                    name="email"
                    onChange={handleChange}
                  />
                  {error?.email && (
                    <span className={styles.errorMessage}>{error.email}</span>
                  )}
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    placeholder="Your messages..."
                    type={"text"}
                    name="message"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.btnGroup}>
                <button className="link-btn-red" type="submit">
                  SEND MESSAGE
                </button>
                <button
                  className="link-btn-gray"
                  type="button"
                  onClick={() => setShowForm(false)}
                >
                  GO BACK
                </button>
              </div>
            </form>

            <div className={styles.navFooter}>
              <div className={styles.address}>
                <p>PITEK JSC ©2022</p>
                <p>
                  633 - 635 Dien Bien Phu, Ward 25, <br /> Binh Thanh District,
                  Ho Chi Minh.
                </p>
              </div>
              <div className={styles.contact}>
                <p>GET IN TOUCH</p>
                <p>+84 86 900 22 44</p>
                <p> info@pitek.one</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
