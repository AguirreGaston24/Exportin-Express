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

    // Cambiar contexto si es necesario
    if (context === "schedule") {
      navigate("/schedule-consultation"); // Redirige después del éxito
    }
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
                  Cómo podés obtener un <strong className="first-section--strong">trabajo remoto para el exterior</strong> de <strong className="first-section--strong">hasta 8.000 USD al mes</strong>,
                  sin aplicar a infinitas candidaturas y en <strong className="first-section--strong">menos de 3 meses</strong> Con el método "Hidden Market Framework
                </p>
                <p className="first-section--paragraph_red">Solo para profesionales IT</p>
              </div>

              <div className="video-container" onClick={openModal}>
                {!formSubmitted && (
                  <div className="overlay">
                    Completa el formulario para continuar
                  </div>
                )}
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/S0Cme39D-PE"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {!formSubmitted && context === "video" && (
                <WebinarButtonComponent
                  className="cta-button"
                  onClick={openModal}
                />
              )}

              {context === "schedule" && (
                <button
                  className="cta-button"
                  onClick={openModal}
                >
                  Agendar una llamada
                </button>
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
              <h2 className="second-section-title">
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
              src="/images/nico/2.jpg"
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
              Preguntas Frecuentes
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
          <div className='HomePage-Footer-content'>
            <div className='HomePage-Footer-logo'>
              <img src={logo1} alt='Logo' />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FreeTrainingSessionPage;