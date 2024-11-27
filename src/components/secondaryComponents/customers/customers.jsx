import React, { useState } from 'react';

const TestimonialItem = ({ name, videoUrl, testimonial }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className="border-b border-gray-300 pb-4 mb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
        {videoUrl && (
          <button
            className="toggle-btn px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            onClick={toggleContent}
          >
            {isVisible ? '−' : '+'}
          </button>
        )}
      </div>

      {videoUrl ? (
        <div className="mt-4">
          {isVisible && (
            <iframe
              className="w-full max-w-4xl mx-auto"
              width="560"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {isVisible && (
            <p className="content mt-2 text-gray-700 pl-4 border-l-4 border-blue-300">
              {testimonial}
            </p>
          )}
        </div>
      ) : (
        <p className="content mt-2 text-gray-700 pl-4 border-l-4 border-blue-300">
          {testimonial}
        </p>
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ezequiel G.',
      videoUrl: 'https://www.youtube.com/embed/zX7MgzucDV0',
      testimonial: 'Hoy trabajo remoto de lo que me apasiona y para España. Me despierto todos los días motivado.',
    },
    {
      name: 'Alixon F.',
      videoUrl: 'https://www.youtube.com/embed/92CnZHU4tL8',
      testimonial: 'El trabajo que conseguí es un trabajo soñado.',
    },
    {
      name: 'Hugo L.',
      videoUrl: '',
      testimonial: 'Aquí encontré el impulso y la motivación que necesitaba.',
    },
    {
      name: 'Francisco K.',
      videoUrl: '',
      testimonial: 'La confianza que me transmitió Nicolás fue determinante.',
    },
    {
      name: 'Joaquín R.',
      videoUrl: 'https://www.youtube.com/embed/X5BbVyywEIA',
      testimonial: 'En 2 meses conseguí trabajo para una empresa de USA. El lunes es mi primer día.',
    },
    {
      name: 'Miguel Ángel C.',
      videoUrl: '',
      testimonial: 'Nicolás es una gran persona cuya vocación de verdad se nota.',
    },
    {
      name: 'Emilio R.',
      videoUrl: 'https://www.youtube.com/embed/S0Cme39D-PE',
      testimonial: 'Conseguí el trabajo de mis sueños para Canadá.',
    },
    {
      name: 'Alex D.',
      videoUrl: '',
      testimonial: 'La mentoría de Nicolás ha sido una experiencia increíble.',
    },
    {
      name: 'Daniel G.',
      videoUrl: 'https://www.youtube.com/embed/2u3DyR2b6cM',
      testimonial: 'En un mes después de comenzar conseguí los resultados que buscaba.',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">¿Qué dicen nuestros clientes?</h1>
      {testimonials.map((testimonial, index) => (
        <TestimonialItem
          key={index}
          name={testimonial.name}
          videoUrl={testimonial.videoUrl}
          testimonial={testimonial.testimonial}
        />
      ))}
    </section>
  );
};

export default TestimonialsSection;
