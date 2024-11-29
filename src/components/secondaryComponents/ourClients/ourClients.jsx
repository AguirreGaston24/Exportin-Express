import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecommmendationsCarouselComponent.css";
import InterviewVideoModalComponent from "../InterviewVideoModalComponent/InterviewVideoModalComponent";

// const recommendations = [
//   {
//     id: 1,
//     name: "Ana Martínez",
//     comment: "¡Una experiencia absolutamente increíble y enriquecedora!",
//     profileImage: "/images/profiles/recommendations/profile1.webp",
//     videoUrl: "https://res.cloudinary.com/opnux/video/upload/Videos/video1.mp4",
//   },
//   {
//     id: 2,
//     name: "Juan Pérez",
//     comment: "Aprendí mucho de esta entrevista.",
//     profileImage: "/images/profiles/recommendations/profile2.jpg",
//     videoUrl: "https://res.cloudinary.com/opnux/video/upload/Videos/video1.mp4",
//   },
//   {
//     id: 3,
//     name: "Miguel Gómez",
//     comment: "¡Muy perspicaz e inspirador!",
//     profileImage: "/images/profiles/recommendations/profile3.jpg",
//     videoUrl: "https://res.cloudinary.com/opnux/video/upload/Videos/video1.mp4",
//   },
// ];

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="RecommendationsCarouselComponent-control next"
      onClick={onClick}
    >
      <img src="/images/icons/arrowIcon.png" alt="Next" />
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="RecommendationsCarouselComponent-control prev"
      onClick={onClick}
    >
      <img src="/images/icons/arrowIcon.png" alt="Previous" />
    </button>
  );
};

export default function OurClients() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [autoplay, setAutoplay] = useState(true); // Estado para manejar el autoplay
  const sliderRef = useRef(null); // Referencia al slider

  const openModal = (url) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setVideoUrl(null);
    setIsModalOpen(false);
  };

  // Maneja la interacción del usuario y desactiva el autoplay
  const handleUserInteraction = (action) => {
    setAutoplay(false); // Desactiva el autoplay

    if (action === "prev" && sliderRef.current) {
      sliderRef.current.slickPrev();
    }
    if (action === "next" && sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: autoplay, // Controla el autoplay dinámicamente
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
