import React, { useState } from 'react';

const SemanaContent = ({ semana, contenido }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className="border-b border-gray-300 pb-4 mb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-700">{semana}:</h1>
        <button
          className="toggle-btn px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          onClick={toggleContent}
        >
          {isVisible ? '-' : '+'}
        </button>
      </div>
      {isVisible && (
        <p className="content mt-2 text-gray-600">
          {contenido}
        </p>
      )}
    </div>
  );
};

const SemanaList = () => {
  const semanas = [
    { semana: "Semana 1", contenido: "Trabajaremos en tu organización semanal y productividad, para poder establecer un marco de trabajo controlado y poder predecir los resultados esperados." },
    { semana: "Semana 2", contenido: "Analizaremos a fondo tu mercado objetivo para tener una clara idea de qué es lo que las empresas están buscando y definir DÓNDE ESTÁ TU DIFERENCIADOR." },
    { semana: "Semana 3", contenido: "A partir del análisis de mercado es que podremos construir y optimizar tu perfil profesional de alto impacto." },
    { semana: "Semana 4", contenido: "Ya podemos comenzar a trabajar tus contactos para generar oportunidades laborales de imposible acceso según los esquemas tradicionales de búsqueda." },
    { semana: "Semana 5", contenido: "Este camino no puede concluir sin definir estrategias claras de venta personal, que inviten al reclutador o tomador de decisión a quererte cuanto antes en su equipo de trabajo. Para ello veremos técnicas avanzadas de entrevistas, venta personal, persuasión, lenguaje no verbal y negociación." },
    { semana: "Semana 6 a semana 12", contenido: "Control y seguimiento hasta lograr el objetivo." }
  ];

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {semanas.map((semanaData, index) => (
        <SemanaContent
          key={index}
          semana={semanaData.semana}
          contenido={semanaData.contenido}
        />
      ))}
    </section>
  );
};

export default SemanaList;  // Exportación por defecto
