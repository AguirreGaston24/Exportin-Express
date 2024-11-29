import React, { useState } from 'react';
import { IoMdPaper } from "react-icons/io";
import "./semanaList.css";
import WebinarButtonComponent from '../WebinarButtonComponent/WebinarButtonComponent';

const SemanaContent = ({ semana, contenido }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className={`six-section-container ${isVisible ? 'open' : ''}`}>
      <div className="six-section-box">
        <IoMdPaper className="six-section-logo" />
        <h1>{semana}:</h1>
        <button onClick={toggleContent}>
          {isVisible ? '-' : '+'}
        </button>
      </div>
      {isVisible && (
        <p className="six-section-paragraph">
          {contenido}
        </p>
      )}
    </div>

  );
};

const SemanaList = () => {
  const semanas = [
    { semana: "Semana 1: Organizacion", contenido: "Trabajaremos en tu organización semanal y productividad, para poder establecer un marco de trabajo controlado y poder predecir los resultados esperados." },
    { semana: "Semana 2: Mercado Objetivo", contenido: "Analizaremos a fondo tu mercado objetivo para tener una clara idea de qué es lo que las empresas están buscando y definir DÓNDE ESTÁ TU DIFERENCIADOR." },
    { semana: "Semana 3: Perfil", contenido: "A partir del análisis de mercado es que podremos construir y optimizar tu perfil profesional de alto impacto." },
    { semana: "Semana 4: Tus Contactos", contenido: "Ya podemos comenzar a trabajar tus contactos para generar oportunidades laborales de imposible acceso según los esquemas tradicionales de búsqueda." },
    { semana: "Semana 5: Venta Personal", contenido: "Este camino no puede concluir sin definir estrategias claras de venta personal, que inviten al reclutador o tomador de decisión a quererte cuanto antes en su equipo de trabajo. Para ello veremos técnicas avanzadas de entrevistas, venta personal, persuasión, lenguaje no verbal y negociación." },
    { semana: "Semana 6 a semana 12: Seguimiento", contenido: "Control y seguimiento hasta lograr el objetivo." }
  ];

  return (
    <section className='six-section'>
      <h1 className='six-section-title'>Lista de pasos</h1>
      <div className='h'>
        {semanas.map((semanaData, index) => (
          <SemanaContent
            key={index}
            semana={semanaData.semana}
            contenido={semanaData.contenido}
          />
        ))}
      </div>
        <WebinarButtonComponent />
    </section>
  );
};

export default SemanaList;  // Exportación por defecto
