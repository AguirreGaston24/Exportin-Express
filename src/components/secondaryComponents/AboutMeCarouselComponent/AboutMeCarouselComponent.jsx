import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutMeCarouselComponent.css";

const AboutMeCarouselComponent = () => {
  const slides = [
    {
      imgSrc: "/images/profiles/profile1.png",
      label: "MI AVENTURA",
      description:
        "Ingeniero Mecánico argentino viviendo en España. Antes de conseguir mi primer trabajo remoto, enfrenté de primera mano los desafíos de insertarme profesionalmente en el extranjero. Desde competir en un mercado global hasta la falta de contactos.",
      additionalText:
        "Mi desafío fue diseñar un sistema que me permitiera encontrar el trabajo de mis sueños, independizándome de las irregularidades de mi país.",
    },
    {
      imgSrc: "/images/profiles/profile1.png",
      label: "MI PRIMER TRABAJO REMOTO",
      description:
        "Después de varios intentos fallidos, logré obtener mi primera posición remota. Esto no solo me dio estabilidad económica, sino también la libertad de trabajar desde cualquier lugar. Aprendí la importancia de la resiliencia y la adaptación en un entorno laboral cambiante.",
      additionalText:
        "El mayor aprendizaje fue entender cómo aprovechar mis habilidades en un contexto global, abriéndome nuevas oportunidades que antes parecían inalcanzables.",
    },
    {
      imgSrc: "/images/profiles/profile1.png",
      label: "COMPARTIENDO EXPERIENCIAS",
      description:
        "Con mi carrera ya en marcha, decidí compartir mi experiencia para ayudar a otros profesionales a conseguir trabajos remotos. Empecé a desarrollar recursos y estrategias que facilitaran la transición al trabajo remoto, especialmente para aquellos que se encontraban en situaciones similares a la mía.",
      additionalText:
        "Mi objetivo ahora es inspirar y guiar a otros en su camino hacia la independencia laboral, brindando las herramientas necesarias para prosperar en un mercado laboral competitivo.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showArrows, setShowArrows] = useState(true);
  const [showShadows, setShowShadows] = useState(false);
  const totalSlides = slides.length - 1;
  
  const handleSlideChange = (index) => {
    if (index >= 0 && index <= totalSlides) {
      setCurrentSlide(index);
    }
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className='AboutMeCarouselComponent-control next'
        onClick={onClick}
        style={{
          display:
            showArrows && currentSlide !== totalSlides ? "block" : "none",
        }}
      >
        <img src='/images/icons/arrowIcon.png' alt='Next' />
      </button>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className='AboutMeCarouselComponent-control prev'
        onClick={onClick}
        style={{ display: showArrows && currentSlide !== 0 ? "block" : "none" }}
      >
        <img src='/images/icons/arrowIcon.png' alt='Previous' />
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: handleSlideChange,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth >= 500);
      setShowShadows(window.innerWidth < 500);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='AboutMeCarouselComponent'>
      {showShadows && (
        <>
          {currentSlide === 0 ? (
            <div className='right-shadow'></div>
          ) : currentSlide === totalSlides ? (
            <div className='left-shadow'></div>
          ) : (
            <>
              <div className='left-shadow'></div>
              <div className='right-shadow'></div>
            </>
          )}
        </>
      )}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='AboutMeCarouselComponent-inner'>
            <div className='AboutMeCarouselComponent-item'>
              <img
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
                style={{ userSelect: "none" }}
                draggable={false}
              />
              <div className='AboutMeCarouselComponent-caption'>
                <div className='AboutMeCarouselComponent-caption-title-container'>
                  <h3 className='AboutMeCarouselComponent-caption-title'>
                    {slide.label}
                  </h3>
                  <span className='AboutMeCarouselComponent-caption-graphic-element-yellow'></span>
                </div>
                <div className='AboutMeCarouselComponent-caption-text-container'>
                  <p className='AboutMeCarouselComponent-caption-text'>
                    {slide.description}
                  </p>
                  {slide.additionalText && (
                    <p className='AboutMeCarouselComponent-caption-additional-text'>
                      {slide.additionalText}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='AboutMeCarouselComponent-indicator'>
        <span className='AboutMeCarouselComponent-caption-graphic-element-green'></span>
        <span className='AboutMeCarouselComponent-indicator-text'>
          {`${currentSlide + 1}/${slides.length}`}{" "}
        </span>
      </div>
    </div>
  );
};

export default AboutMeCarouselComponent;
