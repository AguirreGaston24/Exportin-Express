import React from "react";
import { useNavigate } from "react-router-dom";

import { PrimaryButtonComponent } from "../components/secondaryComponents/PrimaryButtonComponent";

const FreeTrainingSessionPage = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/schedule-consultation");
  };

  return (
    <div>
      <header></header>
      <section>
        <p>
          Paso (1/2) Haz click en el video y descubre cómo podemos ayudarte a
          ganar 2500 USD al mes trabajando remoto para el exterior con el método
          Hidden Market Framework.
        </p>
        <video src=''></video>
        <p>
          Paso (2/2) SOLO DESPUÉS de ver el taller, si quieres que te ayudemos a
          obtener tu empleo en el exterior de 2500 USD al mes dale click al
          siguiente BOTÓN.
        </p>
        <PrimaryButtonComponent onClick={handleRedirect} width="200px" height="200px" fontSize="20px" backgroundColor="red" type="button" textButton="Hola"/>
      </section>
      <footer></footer>
    </div>
  );
};

export default FreeTrainingSessionPage;