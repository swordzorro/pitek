import React, { useEffect, useState } from "react";

const slideTextArr = ["unique", "modern", "creative"];

const TextSlider = ({ styles }) => {
  const [slideText, setSlideText] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setSlideText((prevSlideText) => {
        const updatedCounter = prevSlideText + 1;
        if (updatedCounter === slideTextArr.length) {
          return 0;
        }
        return updatedCounter;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  return (
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
  );
};

export default TextSlider;
