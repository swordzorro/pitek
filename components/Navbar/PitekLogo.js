import React from "react";

const PitekLogo = ({ leftColor = "#002266", rightColor = "#FF3355" }) => {
  return (
    <svg
      width="90"
      height="42"
      viewBox="0 0 90 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M78 12C84.6274 12 90 6.62742 90 0H66V12H78Z" fill={leftColor} />
      <path d="M90 42C90 28.7452 79.2548 18 66 18V42H90Z" fill={leftColor} />
      <path
        d="M0 0V12H12V42C18.6274 42 24 36.6274 24 30V12H36V42H48C54.6274 42 60 36.6274 60 30H48V12H60V0H0Z"
        fill={rightColor}
      />
      <path d="M54 18H60V24H54V18Z" fill={rightColor} />
    </svg>
  );
};

export default PitekLogo;
