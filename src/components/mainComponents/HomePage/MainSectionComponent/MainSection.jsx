import React, { useEffect, useState } from "react";

// CSS
import "./MainSection.css";

// Components
import MapWithHeatPoints from "../../../secondaryComponents/MapWithHeatPointsComponent/MapWithHeatPointsComponent";
import Button from "../../../principalButton/button";

const MainSection = ({ openModal, id }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Activa la animación al cargar la página
    setAnimate(true);
  }, []);

  return (
    <>

      <section id={id} className="HomePage-main-section">
        <div className="HomePage-subcontainer section-container">
          {/* Mapa como fondo */}
          <div className="HomePage-map-container">
            <MapWithHeatPoints />
          </div>

          {/* Contenido */}
          <div className="HomePage-main-section-content-container">
            <h1 className="HomePage-main-section-content-title">
              Consigue trabajo en el extranjero
            </h1>
            <p className="HomePage-main-section-content-paragraph">
              Únete a nuestra comunidad de IT Job Seekers y accedé a las mentorías con
              las que mis clientes han logrado trabajos hasta{" "}
              <span className="green-text">96k dólares al año.</span>
            </p>
            <Button label="Inicia tu masterclass" />
          </div>

          {/* Imagen de Nicolás */}
          <div className="HomePage-main-section-image"></div>
        </div>
      </section>

    </>


  );
};

export default MainSection;
