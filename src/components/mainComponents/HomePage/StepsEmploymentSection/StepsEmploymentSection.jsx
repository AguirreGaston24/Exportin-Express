import React from "react";
import "./StepsEmploymentSection.css";

export default function StepsEmploymentSection( {id} ) {
  return (
    <section id={id} className='HomePage-StepsEmploymentSection'>
      <h2 className='HomePage-StepsEmploymentSection-title'>
        Las 3 pasos para lograr tu empleo remoto en el extranjero
      </h2>
      <div className='HomePage-StepsEmploymentSection-steps'>
        <div className='HomePage-StepsEmploymentSection-step'>
          <p className='HomePage-StepsEmploymentSection-description'>
            <strong>Descubre</strong> oportunidades laborales invisibles
            analizando tendencias y aplicando el método{" "}
            <em>Hidden Market Framework</em>, mientras te abres paso hacia
            <strong> empleos altamente remunerados</strong> en el extranjero.
          </p>
          <div className='HomePage-StepsEmploymentSection-image-container'>
            <img
              src='/images/graphics/steps-employment-graphic1.png'
              alt='Paso 1'
              className='HomePage-StepsEmploymentSection-image start'
            />
          </div>
        </div>

        <div className='HomePage-StepsEmploymentSection-step reverse'>
          <p className='HomePage-StepsEmploymentSection-description'>
            <strong>Implementa</strong> un sistema de seguimiento para tu red de
            contactos que te conecte con oportunidades laborales reales de más
            de <strong>2500 USD</strong> al mes, antes que nadie.
          </p>
          <div className='HomePage-StepsEmploymentSection-image-container'>
            <img
              src='/images/graphics/steps-employment-graphic2.png'
              alt='Paso 2'
              className='HomePage-StepsEmploymentSection-image medium'
            />
          </div>
        </div>

        <div className='HomePage-StepsEmploymentSection-step'>
          <p className='HomePage-StepsEmploymentSection-description'>
            <strong>Optimiza</strong> tu Perfil Profesional de Alto Impacto para
            que brille ante los ojos de los reclutadores, incluso si no cumples
            con el <strong>100% de los requisitos</strong>.
          </p>
          <div className='HomePage-StepsEmploymentSection-image-container'>
            <img
              src='/images/graphics/steps-employment-graphic3.png'
              alt='Paso 3'
              className='HomePage-StepsEmploymentSection-image end'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
