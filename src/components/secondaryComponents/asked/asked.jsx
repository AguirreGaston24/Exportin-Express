import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className="border-b border-gray-300 pb-4 mb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">{question}</h1>
        <button
          className="toggle-btn px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          onClick={toggleContent}
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      {isVisible && (
        <p className="content mt-2 text-gray-700 pl-4 border-l-4 border-blue-300">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { question: "¿Cuándo comienza el programa?", answer: "El programa comienza en enero de 2024." },
    { question: "¿Cuál es la duración del programa?", answer: "El programa tiene una duración de 12 semanas." },
    { question: "¿Cualquiera puede aplicar al programa?", answer: "Sí, está abierto a cualquier persona interesada en mejorar sus habilidades profesionales." },
    { question: "¿Podés garantizarme resultados?", answer: "Aunque no podemos garantizar resultados específicos, ofrecemos las mejores herramientas y apoyo para asegurar tu éxito." },
  ];

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Preguntas frecuentes</h1>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </section>
  );
};

export default FAQSection;
