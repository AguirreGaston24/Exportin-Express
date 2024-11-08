import React from "react";
import "./ProgramSection.css";

const ProgramSection = ( {id} ) => {
  return (
    <section id={id} className='HomePage-ProgramSection'>
      <div className='HomePage-ProgramSection-content'>
        <h2 className='HomePage-ProgramSection-title'>Nuestro Programa</h2>
        <span className='HomePage-ProgramSection-graphic-element-gray'></span>
        <p className='HomePage-ProgramSection-description'>
          En el siguiente video te explicamos las etapas de nuestro programa con
          el que hemos ayudado a profesionales como tú a lograr sus trabajos
          soñados.
        </p>
      </div>
      <div className='HomePage-ProgramSection-video-container'>
        <img
          src='/images/backgrounds/background-program.png'
          alt='Fondo del video'
          className='HomePage-ProgramSection-video-background-image'
        />
        <video
          src='https://res.cloudinary.com/opnux/video/upload/Videos/video3.mp4'
          controls
          className='HomePage-ProgramSection-video'
        ></video>
      </div>
    </section>
  );
};

export default ProgramSection;
