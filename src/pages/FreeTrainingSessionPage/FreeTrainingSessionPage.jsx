import React from "react";
import WebinarButtonComponent from "../../components/secondaryComponents/WebinarButtonComponent/WebinarButtonComponent";
import SemanaList from "../../components/secondaryComponents/semanaList/semanaList"
// import FAQSection from "../../components/secondaryComponents/asked/asked"
import Logo from "../../components/layouts/logo/logo";

// CSS
import "./FreeTrainingSessionPage.css"
import Menu from "../../components/layouts/menu/menu";
import Footer from "../../components/layouts/Footer/Footer";


const FreeTrainingSessionPage = () => {

  return (
    <section>
      <div className='navbar-box'>
        <nav className="nav">
          <Logo />
          <Menu />
          <ul>
            <li onClick={() => scrollToSection("HomePage-section1")}>Trabajo Remoto</li>
            <li onClick={() => scrollToSection("HomePage-section2")}>
              Objetivo
            </li>
            <li onClick={() => scrollToSection("HomePage-section3")}>
              Nuestros clientes
            </li>
          </ul>
        </nav>
        <section className="container">
          <div className="section-container--box">
            <p className="first-section--paragraph">
              Cómo podés obtener un trabajo remoto para el exterior de hasta 8.000 USD al mes, sin aplicar a infinitas candidaturas
              y en menos de 3 meses Con el método "Hidden Market Framework".
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/S0Cme39D-PE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
            <WebinarButtonComponent />
          </div>
        </section>
      </div>

      <section>
        <div className="second-section">
          <div className="second-section-content">
            <h2>
              Objetivo del <strong>programa:</strong>
            </h2>
            <p className="second-section--paragraph">
              Nuestro programa tiene un enfoque claro: <strong>conseguir un nuevo trabajo en menos de 3 meses.</strong>
              Para lograrlo, no podemos dejar las cosas al azar. Cada detalle es tenido en cuenta en este programa integral
              que puede apoyar tanto a quien necesita solo una leve guía, como a quien comienza desde el absoluto cero.
            </p>
            <WebinarButtonComponent />
          </div>

          <img className="second-section-img" src="/images/nico/2.jpg" alt="Imagen del programa" />
        </div>
      </section>

      {/* <section>
        <div className="customers-container">
          <h1 className="customer-tittle">¿Qué dicen nuestros clientes?</h1>
        </div>
      </section> */}

      <section>
        <div className="four-section-container">
          <h1 className="four-section-title">Sesiones</h1>
          <div className="four-section-box">
            <p className="four-section-paragraph">
              Tendrás 3 encuentros semanales, grabados para que puedas retomarlos en cualquier momento.
              Cada semana nos encontraremos en una sesión 1 a 1 para ver a detalle tu proceso, revisar los pasos dados
              y dejar claro cómo continuar. Además, tendrás acceso a una mentoría grupal todos los miércoles para catapultar
              su proceso y acelerar tus resultados. Como bonus, te ponemos a disposición un taller de práctica de inglés
              para que vayas poniendo en movimiento ese uso del lenguaje.
            </p>
          </div>
          <WebinarButtonComponent />
        </div>
      </section>

      <SemanaList />

      {/* <section>

        <div>
          <FAQSection />
        </div>
      </section>
      <WebinarButtonComponent /> */}

      <Footer />
    </section>
  );
};

export default FreeTrainingSessionPage;