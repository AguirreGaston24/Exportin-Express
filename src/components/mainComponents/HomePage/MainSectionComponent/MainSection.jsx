import React from "react";

// CSS
import "./MainSection.css";

// Components
import WebinarButtonComponent from "../../../secondaryComponents/WebinarButtonComponent/WebinarButtonComponent";
import MapWithHeatPoints from "../../../secondaryComponents/MapWithHeatPointsComponent/MapWithHeatPointsComponent";
import VideoPlayer from "../../../videoPlayer/video1";
import Button from "../../../principalButton/button";

const MainSection = ({ openModal, id }) => {
  return (
    <section id={id} className='HomePage-main-section'>
      <MapWithHeatPoints />
      <div className='HomePage-main-section-content-container'>
        <h1 className='HomePage-main-section-content-title'>
          Consigue trabajo en el extranjero
        </h1>
        <p className='HomePage-main-section-content-paragraph'>
          Únete a nuestra comunidad de IT Job Seekers y accedé a las mentorias
          con las que mis clientes han logrado trabajos hasta{" "}
          <span className='green-text'>+96k dólares al año.</span>
        </p>
      <Button label="Inicia tu masterclass"/>
      </div>
    </section>
  );
};

export default MainSection;
