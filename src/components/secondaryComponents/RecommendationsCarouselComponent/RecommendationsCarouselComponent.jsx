import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecommmendationsCarouselComponent.css";
import InterviewVideoModalComponent from "../InterviewVideoModalComponent/InterviewVideoModalComponent";

const recommendations = [
  {
    id: 1,
    name: "Ana Martínez",
    comment: "¡Una experiencia absolutamente increíble y enriquecedora!",
    profileImage: "/images/profiles/recommendations/profile1.webp",
    videoUrl: "../../../../public/videos/interviews/video1.mp4",
  },
  {
    id: 2,
    name: "Juan Pérez",
    comment: "Aprendí mucho de esta entrevista.",
    profileImage: "/images/profiles/recommendations/profile2.jpg",
    videoUrl: "../../../../public/videos/interviews/video1.mp4",
  },
  {
    id: 3,
    name: "Miguel Gómez",
    comment: "¡Muy perspicaz e inspirador!",
    profileImage: "/images/profiles/recommendations/profile3.jpg",
    videoUrl: "../../../../public/videos/interviews/video1.mp4",
  },
];

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className='RecommendationsCarouselComponent-control next'
      onClick={onClick}
    >
      <img src='/images/icons/arrowIcon.png' alt='Next' />
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className='RecommendationsCarouselComponent-control prev'
      onClick={onClick}
    >
      <img src='images/icons/arrowIcon.png' alt='Previous' />
    </button>
  );
};

export default function RecommendationsCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const openModal = (url) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setVideoUrl(null);
    setIsModalOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1150, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 750, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className='RecommendationsCarouselComponent-container'>
      <Slider {...settings} className='RecommendationsCarouselComponent-slider'>
        {recommendations.map((item) => (
          <div
            key={item.id}
            className='RecommendationsCarouselComponent-slide-container'
          >
            <div className='RecommendationsCarouselComponent-slide'>
              <img
                src={item.profileImage}
                alt={item.name}
                className='RecommendationsCarouselComponent-profile-image'
              />
              <p className='RecommendationsCarouselComponent-comment'>
                {item.comment}
              </p>
              <div className='RecommendationsCarouselComponent-content'>
                <h3 className='RecommendationsCarouselComponent-name'>
                  {item.name}
                </h3>
                <button
                  className='RecommendationsCarouselComponent-button'
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
