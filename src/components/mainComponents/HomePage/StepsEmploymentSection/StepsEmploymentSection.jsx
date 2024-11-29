import React, { useState, useEffect } from "react";
import "./StepsEmploymentSection.css";

const steps = [
  {
    text: "Descubre oportunidades laborales invisibles analizando tendencias y aplicando el método Hidden Market Framework, mientras te abres paso hacia empleos altamente remunerados en el extranjero.",
    image: "/images/graphics/steps-employment-graphic1.png",
  },
  {
    text: "Implementa un sistema de seguimiento para tu red de contactos que te conecte con oportunidades laborales reales de más de 2500 USD al mes, antes que nadie.",
    image: "/images/graphics/steps-employment-graphic2.png",
  },
  {
    text: "Optimiza tu Perfil Profesional de Alto Impacto para que brille ante los ojos de los reclutadores, incluso si no cumples con el 100% de los requisitos.",
    image: "/images/graphics/steps-employment-graphic3.png",
  },
];

export default function StepsEmploymentSection({ id }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleScroll = () => {
    const section = document.getElementById(id);
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;

    // Calcular el progreso del scroll en la sección
    const scrollProgress = Math.min(
      Math.max((Math.abs(sectionTop) / (sectionHeight - viewportHeight)), 0),
      1
    );

    // Dividir el progreso entre los pasos
    const stepIndex = Math.floor(scrollProgress * steps.length);
    setCurrentStep(Math.min(stepIndex, steps.length - 1));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id={id} className="HomePage-StepsEmploymentSection">
      <h2 className="HomePage-StepsEmploymentSection-title">
        Las 3 pasos para lograr tu empleo remoto en el extranjero
      </h2>
      <div className="HomePage-StepsEmploymentSection-content">
        {/* Texto dinámico */}
        <div className="HomePage-StepsEmploymentSection-text">
          <p>{steps[currentStep].text}</p>
        </div>

        {/* Imagen dinámica */}
        <div className="HomePage-StepsEmploymentSection-image">
          <img
            src={steps[currentStep].image}
            alt={`Paso ${currentStep + 1}`}
            className="HomePage-StepsEmploymentSection-graphic"
          />
        </div>
      </div>
    </section>
  );
}
