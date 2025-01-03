import React, { useState } from "react";
import WebinarButtonComponent from "../../components/secondaryComponents/WebinarButtonComponent/WebinarButtonComponent";
import SemanaList from "../../components/secondaryComponents/semanaList/semanaList"
import Logo from "../../components/layouts/logo/logo";
import MapWithHeatPointsVariantComponent from "../../components/secondaryComponents/MapWithHeatPointsVariantComponent/MapWithHeatPointsVariantComponent";
import "../../components/layouts/Footer/Footer.css";
import logo1 from "../../../public/images/logo/logo-negro-transparente.png";
// CSS
import "./FreeTrainingSessionPage.css"
import ArrowButton from "../../components/arrowButtonTop/arrowButton";
import FAQSection from "../../components/secondaryComponents/asked/asked";
import RecommendationsSection from "../../components/mainComponents/HomePage/RecommendationsSection/RecommendationsSection";
import FormModalContactDataComponent from "../../components/mainComponents/HomePage/FormModalContactDataComponent/FormModalContactDataComponent";


const FreeTrainingSessionPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [context, setContext] = useState("video"); // "video" o "schedule"

  // Abrir el modal si no se completó el formulario
  const openModal = () => {
    if (!formSubmitted) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSuccess = () => {
    setFormSubmitted(true); // Marcar el formulario como enviado
    setIsModalOpen(false); // Cerrar el modal


  };

  return (
    <section>

      <section>
        <div className="navbar-box">
          <nav className="nav">
            <Logo />
          </nav>

          <div className="section-container">
            <section className="section-container--box">
              <div className="first-section--container">
                <ArrowButton />
                <p className="first-section--paragraph">
                  Cómo podés obtener un<strong className="first-section--strong">trabajo remoto para el exterior</strong>de<strong className="first-section--strong">hasta 8.000 USD al mes,</strong>
                  sin aplicar a infinitas candidaturas y en <strong className="first-section--strong">menos de 3 meses,</strong>con el método "Hidden Market Framework</p>
                <p className="first-section--paragraph_red">Solo para profesionales IT</p>
              </div>

  {/* Contenedor del video */}
  <div
  className={`video-container ${formSubmitted ? 'enabled' : ''}`}
  onClick={!formSubmitted ? openModal : undefined} // Solo abre el modal si el formulario no se ha completado
>
<div id="video-player-wrapper" style={{ margin: '0 auto', width: '100%' }}>
      {/* Script del reproductor */}
      <script
        src="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js"
        data-id="671a35deab78ce000a3a9f28"
      ></script>

      {/* Contenedor del iframe */}
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          frameBorder="0"
          allowFullScreen
          src="https://scripts.converteai.net/2444b072-868f-44f5-9a35-c3664144ee10/players/671a35deab78ce000a3a9f28/embed.html"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          referrerPolicy="origin"
        ></iframe>
      </div>

      {/* Estilo personalizado */}
      <style>
        {`
          .elementor-element:has(#video-player-wrapper) {
            width: 100%;
          }
        `}
      </style>
    </div>

</div>

      {/* Botón para mostrar el formulario si el formulario no ha sido enviado */}
      {!formSubmitted && context === "video" && (
        <WebinarButtonComponent

        />
      )}

      {context === "schedule" && (
        <button className="cta-button" onClick={openModal}>
          Agendar una llamada
        </button>
      )}

      {/* Modal del formulario */}
      {isModalOpen && !formSubmitted && (
        <FormModalContactDataComponent
          closeModal={closeModal}
          onFormSuccess={handleFormSuccess}
        />
      )}
    </section>

            {/* Modal del formulario */}
            {isModalOpen && (
              <FormModalContactDataComponent
                closeModal={closeModal}
                onFormSuccess={handleFormSuccess}
              />
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="section-container">
          <div className="second-section">
            <div className="second-section-content">
            <h2 className="second-section-title" style={{ whiteSpace: "nowrap" }}>
                 Objetivo del <strong>programa:</strong>
            </h2>
              <p className="second-section--paragraph">
                Nuestro programa tiene un enfoque claro: <strong>conseguir un nuevo trabajo en menos de 3 meses.</strong>
                Para lograrlo, no podemos dejar las cosas al azar. Cada detalle es tenido en cuenta en este programa integral
                que puede apoyar tanto a quien necesita solo una leve guía, como a quien comienza desde el absoluto cero.
              </p>
              <WebinarButtonComponent />
            </div>
            <img
              className="second-section-img"
              src="/images/nico/3.jpg"
              alt="Imagen del programa"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="section-container">
          <div className="three-section-container">
            <RecommendationsSection />
          </div>
        </div>
      </section>

      <section>
        <div className="section-container">
          <div className="four-section-container">
            <div className="four-section-sessions">
              <h2 className="four-section-title">
                ¿Cómo <strong>te ayudamos</strong> a lograrlo?
              </h2>
              <div className="four-section-box">
                <p className="four-section-paragraph">
                  Tendrás 3 encuentros semanales, grabados para que puedas retomarlos en cualquier momento.
                  Cada semana nos encontraremos en una sesión 1 a 1 para ver a detalle tu proceso, revisar los pasos dados
                  y dejar claro cómo continuar. Además, tendrás acceso a una mentoría grupal todos los miércoles para catapultar
                  su proceso y acelerar tus resultados. Como bonus, te ponemos a disposición un taller de práctica de inglés
                  para que vayas poniendo en movimiento ese uso del lenguaje.
                </p>
                <WebinarButtonComponent className="four-section-button--desktop" />
              </div>
            </div>
            <div className="four-section-list">
              <SemanaList />
              <WebinarButtonComponent className="four-section-button--mobile" />
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="section-container">
          <div className="five-section-container">
            <h2 className="five-section-title">
            <strong> Preguntas Frecuentes</strong>
            </h2>
            <div>
              <FAQSection />
            </div>
            <WebinarButtonComponent />
          </div>
        </div>
      </section>

      <section className='HomePage-Footer-background'>
        <div className='HomePage-Footer-container'>
          <div className='HomePage-Footer-map'>
            <MapWithHeatPointsVariantComponent />
          </div>
          <div className='SecondPage-Footer-content'>
            <div className='SecondPage-Footer-logo'>
              <img src={logo1} alt='Logo' />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FreeTrainingSessionPage;