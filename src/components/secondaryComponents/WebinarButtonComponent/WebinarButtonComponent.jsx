import React from "react";

import "./WebinarButtonComponent.css";

const WebinarButtonComponent = ({ onClick = () => {}, margin = "" }) => {
  return <button className='WebinarButtonComponent'>Accedé al WEBINAR</button>;
};

export default WebinarButtonComponent;
