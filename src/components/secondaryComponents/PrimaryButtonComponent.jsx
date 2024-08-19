import React from "react";

export const PrimaryButtonComponent = ({ RedirectButton, width, height, fontSize, backgroundColor }) => {
  return (
    <button
      onClick={{ RedirectButton }}
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        backgroundColor: backgroundColor,
      }}
    ></button>
  );
};
