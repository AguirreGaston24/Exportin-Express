import React, { useState, useEffect } from "react";
import "./StepsEmploymentSection.css";

const steps = [
  {
    text: "Descubre cómo puedes obtener un trabajo remoto altamente remunerado con el método Hidden Market Framework, que te brinde estabilidad económica y libertad geográfica, sin invertir miles de horas aplicando a cualquier candidatura.",
    image: {
      src: "/images/graphics/steps_employment_aligned1.png",
      alt: "Gráfico paso 1",
    },
  },
  {
    text: "Optimiza tu Perfil Profesional de Alto Impacto para que brille ante los ojos de los reclutadores, incluso si no cumples con el 100% de los requisitos.",
    image: {
      src: "/images/graphics/steps_employment_aligned2.png",
      alt: "Gráfico paso 2",
    },
  },
  {
    text: "Implementa un sistema de seguimiento para tu red de contactos que te conecte con oportunidades laborales reales de más de 2500 USD al mes, antes que nadie.",
    image: {
      src: "/images/graphics/steps_employment_aligned3.png",
      alt: "Gráfico paso 3",
    },
  },
];

export default function StepsEmploymentSection({ id }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressWidth((prevWidth) => {
        const newWidth = (prevWidth + 1) % 101; // Reinicia a 0 cuando alcanza 100

        // Cambia el paso en los puntos 33.33%, 66.66% y 100%
        if (newWidth >= 33 && newWidth < 66 && currentStep !== 1) {
          setCurrentStep(1);
        } else if (newWidth >= 66 && newWidth < 100 && currentStep !== 2) {
          setCurrentStep(2);
        } else if (newWidth === 0 && currentStep !== 0) {
          setCurrentStep(0);
        }

        return newWidth;
      });
    }, 30); // Cada 30ms para una animación fluida

    return () => clearInterval(interval); // Limpieza al desmontar
  }, [currentStep]);

  return (
    <section
      id={id}
      className="HomePage-StepsEmploymentSection section-container section-margin-bottom"
    >
      <h2 className="HomePage-StepsEmploymentSection-title">
        Los 3 pasos para lograr tu empleo remoto en el extranjero
      </h2>
      <div className="HomePage-StepsEmploymentSection-content">
        {/* Barra de progreso */}
        <div className="HomePage-StepsEmploymentSection-progress">
          <div
            className="HomePage-StepsEmploymentSection-progress-bar"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>

        <div className="HomePage-StepsEmploymentSection-text">
          <p>{steps[currentStep].text}</p>
        </div>
        <div className="HomePage-StepsEmploymentSection-image">
          <img
            src={steps[currentStep].image.src}
            alt={steps[currentStep].image.alt}
            className="HomePage-StepsEmploymentSection-graphic"
          />
        </div>
      </div>
    </section>
  );
}
