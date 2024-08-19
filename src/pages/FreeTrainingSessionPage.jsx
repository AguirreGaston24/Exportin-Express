import React from "react";

import { PrimaryButtonComponent } from "../components/secondaryComponents/PrimaryButtonComponent";

const FreeTrainingSessionPage = () => {
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
        <PrimaryButtonComponent width="50px" height="50px" fontSize="10px" backgroundColor="red" />
      </section>
      <footer></footer>
    </div>
  );
};

export default FreeTrainingSessionPage;