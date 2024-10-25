import React from "react";

// CSS
import "./MainSection.css";

// Components
import WebinarButtonComponent from "../../../secondaryComponents/WebinarButtonComponent/WebinarButtonComponent";

const MainSection = () => {
  return (
    <section className='HomePage-main-section'>
      <div className='HomePage-main-section-content-container'>
        <h1 className='HomePage-main-section-content-title'>
          Potenciá tus Resultados <br />
          En el Extranjero <br />
          Con el Trabajo de tus Sueños.
        </h1>
        <p className='HomePage-main-section-content-paragraph'>
          Únete a nuestra comunidad de IT Job Seekers y accedé a las mentorias
          con las que mis clientes han logrado trabajos de{" "}
          <span className='green-text'>+30k dólares al año.</span>
        </p>
        <WebinarButtonComponent
          onClick={() => alert("Webinar button clicked!")}
          margin='40px 0px 0px 0px'
        />
      </div>
    </section>
  );
};

export default MainSection;
