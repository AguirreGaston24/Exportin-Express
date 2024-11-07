import React from "react";
import "./WebinarAccessSection.css";

import WebinarButtonComponent from "../../../secondaryComponents/WebinarButtonComponent/WebinarButtonComponent";

const WebinarAccessSection = ( { openModal } ) => {
  return (
    <section className='HomePage-WebinarAccessSection'>
      <span className='HomePage-WebinarAccessSection-line start'></span>
      <div className='HomePage-WebinarAccessSection-content'>
        <p className='HomePage-WebinarAccessSection-text'>
          Si estás listo para conseguir tu empleo remoto soñado en Estados
          Unidos, Canadá o Europa
        </p>
        <WebinarButtonComponent openModal={openModal} />
      </div>
      <span className='HomePage-WebinarAccessSection-line end'></span>
    </section>
  );
};

export default WebinarAccessSection;
