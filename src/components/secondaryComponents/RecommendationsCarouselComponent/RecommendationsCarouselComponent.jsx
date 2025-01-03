import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecommmendationsCarouselComponent.css";
import InterviewVideoModalComponent from "../InterviewVideoModalComponent/InterviewVideoModalComponent";

const CustomNextArrow = ({ onClick }) => (
  <button
    className="RecommendationsCarouselComponent-control next"
    onClick={onClick}
  >
    <img src="/images/icons/arrowIcon.png" alt="Next" />
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="RecommendationsCarouselComponent-control prev"
    onClick={onClick}
  >
    <img src="/images/icons/arrowIcon.png" alt="Previous" />
  </button>
);

export default function RecommendationsCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const sliderRef = useRef(null); // Referencia al slider
  const [autoplayDisabled, setAutoplayDisabled] = useState(false); // Maneja si el autoplay está desactivado

  const recommendations = [
    {
      id: 1,
      name: "Ezequiel G.",
      comment: "¡Hoy trabajo remoto de lo que me apasiona y para España. Me despierto todos los días motivado.!",
      profileImage: "/images/profiles/recommendations/profile3.jpg",
      videoUrl: "https://www.youtube.com/embed/zX7MgzucDV0",
    },
    {
      id: 2,
      name: "Alixon F.",
      comment: "El trabajo que conseguí es un trabajo soñado.",
      profileImage: "/images/profiles/recommendations/profile1.jpg",
      videoUrl: "https://www.youtube.com/embed/92CnZHU4tL8",
    },
    {
      id: 3,
      name: "Joaquín R.",
      comment: "¡En 2 meses conseguí trabajo para una empresa de USA. El lunes es mi primer día.!",
      profileImage: "/images/profiles/recommendations/profile5.jpg",
      videoUrl: "https://www.youtube.com/embed/X5BbVyywEIA",
    },
    {
      id: 4,
      name: "Emilio R.",
      comment: "¡Conseguí el trabajo de mis sueños para Canadá.!",
      profileImage: "/images/profiles/recommendations/profile2.jpg",
      videoUrl: "https://www.youtube.com/embed/S0Cme39D-PE",
    },
    {
      id: 5,
      name: "Daniel G.",
      comment: "En un mes después de comenzar conseguí los resultados que buscaba",
      profileImage: "/images/profiles/recommendations/profile4.jpg",
      videoUrl: "https://www.youtube.com/embed/2u3DyR2b6cM",
    },
  ];

  const openModal = (url) => {
    setVideoUrl(url);
    setIsModalOpen(true);

    // Pausa el autoplay cuando se abre el modal
    if (sliderRef.current) {
      sliderRef.current.slickPause();
      setAutoplayDisabled(true); // Desactiva permanentemente el autoplay
    }
  };

  const closeModal = () => {
    setVideoUrl(null);
    setIsModalOpen(false);
  };

  const handleUserInteraction = (action) => {
    if (sliderRef.current) {
      // Desactiva el autoplay al interactuar
      sliderRef.current.slickPause();
      setAutoplayDisabled(true); // Desactiva permanentemente el autoplay

      // Navega entre las diapositivas
      if (action === "prev") sliderRef.current.slickPrev();
      if (action === "next") sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: !autoplayDisabled, // El autoplay depende del estado
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: (
      <CustomPrevArrow onClick={() => handleUserInteraction("prev")} />
    ),
    nextArrow: (
      <CustomNextArrow onClick={() => handleUserInteraction("next")} />
    ),
    responsive: [
      { breakpoint: 1150, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 750, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="RecommendationsCarouselComponent-container">
      <Slider
        ref={sliderRef} // Conecta la referencia al slider
        {...settings}
        className="RecommendationsCarouselComponent-slider"
      >
        {recommendations.map((item) => (
          <div
            key={item.id}
            className="RecommendationsCarouselComponent-slide-container"
          >
            <div className="RecommendationsCarouselComponent-slide">
              <img
                src={item.profileImage}
                alt={item.name}
                className="RecommendationsCarouselComponent-profile-image"
              />
              <p className="RecommendationsCarouselComponent-comment">
                {item.comment}
              </p>
              <div className="RecommendationsCarouselComponent-content">
                <h3 className="RecommendationsCarouselComponent-name">
                  {item.name}
                </h3>
                <button
                  className="RecommendationsCarouselComponent-button"
                  onClick={() => openModal(item.videoUrl)}
                >
                  Ver Entrevista
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {isModalOpen && (
        <InterviewVideoModalComponent
          videoUrl={videoUrl}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
