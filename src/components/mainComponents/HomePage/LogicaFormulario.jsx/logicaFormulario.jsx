import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormModalContactDataComponent from "./FormModalContactDataComponent";
import "./LandingPage.css"; // Asegúrate de que los estilos estén separados

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleVideoClick = () => {
    if (!isUnlocked) {
      setIsModalOpen(true);
    }
  };

  const handleButtonClick = (event) => {
    if (!isUnlocked) {
      event.preventDefault(); // Evita la acción predeterminada
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  const handleFormSubmit = () => {
    setIsUnlocked(true); // Desbloquea el acceso
    setIsModalOpen(false); // Cierra el modal
  };

  return (
    <div className="landing-page">
      <section className="container">
        <div className="section-container--box">
          <p className="first-section--paragraph">
            Cómo podés obtener un trabajo remoto para el exterior de hasta 8.000 USD al mes, sin aplicar a infinitas candidaturas
            y en menos de 3 meses con el método "Hidden Market Framework".
          </p>

          {/* Video con capa bloqueadora */}
          <div className="video-wrapper" onClick={handleVideoClick}>
            {!isUnlocked && <div className="overlay">Completa el formulario</div>}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/S0Cme39D-PE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Botón bloqueado */}
          <button
            className="webinar-button"
            onClick={handleButtonClick}
          >
            Inscribirme al Webinar
          </button>
        </div>
      </section>

      {/* Formulario Modal */}
      {isModalOpen && (
        <FormModalContactDataComponent
          closeModal={closeModal}
          onFormSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default LandingPage;
