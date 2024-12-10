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
        "Ingeniero Mecánico argentino viviendo en España, enfrentando desafíos laborales en el extranjero, desde competir en un mercado global hasta la falta de contactos.",
      additionalText:
        "Diseñé un sistema para encontrar el trabajo de mis sueños y ganar independencia.",
    },
    {
      imgSrc: "/images/profiles/profile1.png",
      label: "MI PRIMER TRABAJO REMOTO",
      description:
        "Después de varios intentos, conseguí mi primera posición remota, lo que me brindó estabilidad y libertad de ubicación. Aprendí la importancia de la resiliencia.",
      additionalText:
        "Entendí cómo aprovechar mis habilidades en un contexto global, abriendo oportunidades antes inalcanzables.",
    },
    {
      imgSrc: "/images/profiles/profile1.png",
      label: "COMPARTIENDO EXPERIENCIAS",
      description:
        "Decidí ayudar a otros profesionales a conseguir trabajos remotos, desarrollando recursos para facilitar esa transición.",
      additionalText:
        "Mi objetivo es inspirar y guiar a otros hacia la independencia laboral en un mercado competitivo.",
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

  return (
    <section className="AboutMe-Container">
      <div className='AboutMeCarouselComponent'>
        {showShadows && (
          <>
            {currentSlide === 0 ? (
              <div className='shadow right-shadow'></div>
            ) : currentSlide === totalSlides ? (
              <div className='shadow left-shadow'></div>
            ) : (
              <>
                <div className='shadow left-shadow'></div>
                <div className='shadow right-shadow'></div>
              </>
            )}
          </>
        )}
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className='AboutMeCarouselComponent-inner'>
              <div className='AboutMeCarouselComponent-item'>
                <div className='AboutMeCarouselComponent-item-image-container'>
                  <img
                    src={slide.imgSrc}
                    alt={`Slide ${index + 1}`}
                    style={{ userSelect: "none" }}
                    draggable={false}
                  />
                </div>

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
    </section>
  );
};

export default AboutMeCarouselComponent;
