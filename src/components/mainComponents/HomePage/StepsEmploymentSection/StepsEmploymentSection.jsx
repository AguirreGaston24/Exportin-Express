import React, { useState, useEffect } from "react";
import "./StepsEmploymentSection.css";

const steps = [
  {
    text: "Descubre oportunidades laborales invisibles analizando tendencias y aplicando el método Hidden Market Framework, mientras te abres paso hacia empleos altamente remunerados en el extranjero.",
    image: {
      src: "/images/graphics/steps_employment_aligned1.png",
      alt: "Gráfico paso 1",
    },
  },
  {
    text: "Implementa un sistema de seguimiento para tu red de contactos que te conecte con oportunidades laborales reales de más de 2500 USD al mes, antes que nadie.",
    image: {
      src: "/images/graphics/steps_employment_aligned2.png",
      alt: "Gráfico paso 2",
    },
  },
  {
    text: "Optimiza tu Perfil Profesional de Alto Impacto para que brille ante los ojos de los reclutadores, incluso si no cumples con el 100% de los requisitos.",
    image: {
      src: "/images/graphics/steps_employment_aligned3.png",
      alt: "Gráfico paso 3",
    },
  },
];

export default function StepsEmploymentSection({ id }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleScroll = () => {
    const section = document.getElementById(id);
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;

    const sensitivity = 0.4;
    const scrollProgress = Math.min(
      Math.max(Math.abs(sectionTop) / (sectionHeight * sensitivity), 0),
      1
    );

    const stepIndex = Math.floor(scrollProgress * steps.length);
    setCurrentStep(Math.min(stepIndex, steps.length - 1));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { src, alt } = steps[currentStep].image;

  return (
    <section id={id} className="HomePage-StepsEmploymentSection">
      <h2 className="HomePage-StepsEmploymentSection-title">
        Los 3 pasos para lograr tu empleo remoto en el extranjero
      </h2>
      <div className="HomePage-StepsEmploymentSection-content">
        <div className="HomePage-StepsEmploymentSection-text">
          <p>{steps[currentStep].text}</p>
        </div>
        <div className="HomePage-StepsEmploymentSection-image">
          <img
            src={src}
            alt={alt}
            className="HomePage-StepsEmploymentSection-graphic"
          />
        </div>
      </div>
    </section>
  );
}
