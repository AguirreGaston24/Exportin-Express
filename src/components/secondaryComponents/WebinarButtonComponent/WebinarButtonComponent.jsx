import React from "react";
import "./WebinarButtonComponent.css";

const WebinarButtonComponent = ({ openModal }) => {
  return (
    <button
      className='WebinarButtonComponent'
      onClick={() => {
        openModal();
      }}
    >
      Accedé al WEBINAR
    </button>
  );
};

export default WebinarButtonComponent;
