import React from "react";

export const PrimaryButtonComponent = ({
  onClick = () => {},
  width = "100px",
  height = "40px",
  fontSize = "16px",
  backgroundColor = "blue",
  type = "button",
  textButton = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        backgroundColor: backgroundColor,
      }}
    >
      {textButton}
    </button>
  );
};
