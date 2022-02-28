import React from "react";

const Burger = ({ fill = "#FF3355" }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="6" width="40" height="4" fill={fill} />
      <rect y="18" width="40" height="4" fill={fill} />
      <rect y="30" width="40" height="4" fill={fill} />
    </svg>
  );
};

export default Burger;
