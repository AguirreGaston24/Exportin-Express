import React, { useState } from 'react';
import "./asked.css"


const FAQItem = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className="faq-item">
      <div className="faq-header">
        <h1 className="faq-question">{question}</h1>
        <button
          className="faq-toggle-btn"
          onClick={toggleContent}
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      {isVisible && (
        <p className="faq-answer">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { question: "¿Cuándo comienza el programa?", answer: "Si hay cupos disponibles, podemos iniciar con tu proceso inmediatamente tras haber confirmado que estás listo para comenzar. Para ello el primer paso es ver el video de esta página y agendar una sesión de claridad con nosotros para ver si podemos ayudarte." },
    { question: "¿Cuál es la duración del programa?", answer: "Hasta conseguir el objetivo. Estimamos que se logre antes de los 3 meses. Para los casos que pasados los 3 meses no lo logran, se plantea una revisión del caso, para entender los por qué detrás del resultado. En caso que hayas demostrado tu compromiso, te seguiremos acompañando hasta lograrlo, porque estamos seguros que es una cuestión de tiempo. Pero si el problema fue que no estuviste presente ni tomaste acción en lo que se te propuso, no seguiremos con la ayuda.  En este sentido, pedimos a nuestros clientes el mismo compromiso que tenemos nosotros con ellos, por lo que si no estás listo para comprometerne con el proceso, te sugerimos que no avances." },
    { question: "¿Cualquiera puede aplicar al programa?", answer: "No, El programa es SOLO para profesionales de IT con o sin experiencia pero con conocimientos demostrables. Además, debes manejar, al menos, un B2 de inglés oral. No importa si necesitas retomar tus prácticas, te ayudamos con eso con talleres semanales de conversación. Otro requisito importante es ser una persona comprometida con lograrlo, no importa los problemas que tengas, pero sí que importa que estés listo para seguir un paso a paso claro que te ayude a lograrlo." },
    { question: "¿Podés garantizarme resultados?", answer: "Puedo garantizarte dos cosas: la primera es que tendrás a tu disposición un método paso a paso y la guía de profesionales que han servido a muchos otros profesionales para conseguir el trabajo de sus sueños. Y la segunda es que, si cumples con las tareas que se te asignan, te acompañaremos hasta cumplir tu objetivo.  Sin embargo, el logro de resultados dependerá de tu compromiso y dedicación.  No se trata de magia" },
  ];

  return (
    <div className="faq-section">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
