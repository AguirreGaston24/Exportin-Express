import React from "react";

// CSS
import "./MainSection.css";

// Components
import WebinarButtonComponent from "../../../secondaryComponents/WebinarButtonComponent/WebinarButtonComponent";
import MapWithHeatPoints from "../../../secondaryComponents/MapWithHeatPointsComponent/MapWithHeatPointsComponent";

const MainSection = ({ openModal, id }) => {
  return (
    <section id={id} className='HomePage-main-section'>
      <MapWithHeatPoints />
      <div className='HomePage-main-section-content-container'>
        <h1 className='HomePage-main-section-content-title'>
          Conseguí trabajo en el extranjero
        </h1>
        <p className='HomePage-main-section-content-paragraph'>
          Únete a nuestra comunidad de IT Job Seekers y accedé a las mentorias
          con las que mis clientes han logrado trabajos de{" "}
          <span className='green-text'>+30k dólares al año.</span>
        </p>
        <WebinarButtonComponent
          openModal={openModal}
          margin='40px 0px 0px 0px'
        />
      </div>
    </section>
  );
};

export default MainSection;
