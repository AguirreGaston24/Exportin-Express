import React from "react";
import { useNavigate } from "react-router-dom";
import WebinarButtonComponent from "../../components/secondaryComponents/WebinarButtonComponent/WebinarButtonComponent";
import  SemanaList  from "../../components/secondaryComponents/semanaList/semanaList" 
import  FAQSection  from "../../components/secondaryComponents/asked/asked" 
import  TestimonialsSection  from "../../components/secondaryComponents/customers/customers"

const FreeTrainingSessionPage = () => {

  return (
    <div>
      <header></header>
  <section>
    
        <p>
        <video src=''></video>
        Cómo podés obtener un trabajo remoto para el exterior de hasta 8.000 USD al mes, sin aplicar a infinitas candidaturas 
        y en menos de 3 meses Con el método Hidden Market Framework
        </p>
        *Sólo para profesionales IT en Latinoamérica que hablen inglés
  </section>
        
  <section>  
        <h1>Objetivo del programa:</h1>

        <p>
        Nuestro programa tiene un enfoque claro: conseguir un nuevo trabajo en menos de 3 meses. 
        Para lograrlo, no podemos dejar las cosas al azar. Cada detalle es tenido en cuenta en este programa integral 
        que puede apoyar tanto a quien necesita solo una leve guía, como a quien comienza desde el absoluto cero.
        </p>
  </section>

  <section>  
    <div>
    <TestimonialsSection />
    </div>
  </section>

  <section>  
          <h1>Sesiones:</h1>
          <description>
            Tendrás 3 encuentros semanales, grabados para que puedas retomarlos en cualquier momento. 
            Cada semana nos encontraremos en una sesión 1 a 1 para ver a detalle tu proceso, revisar los pasos dados 
            y dejar claro cómo continuar. Además, tendrás acceso a una mentoría grupal todos los miércoles para catapultar 
            su proceso y acelerar tus resultados. Como bonus, te ponemos a disposición un taller de práctica de inglés 
            para que vayas poniendo en movimiento ese uso del lenguaje.
            </description>  
  </section>

  <section class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
<div>
      <SemanaList />
    </div>
</section>


  <section>

  <div>
<FAQSection />
</div>
    </section>   
        <WebinarButtonComponent />
      
      <footer></footer>
    </div>
  );
};

export default FreeTrainingSessionPage;