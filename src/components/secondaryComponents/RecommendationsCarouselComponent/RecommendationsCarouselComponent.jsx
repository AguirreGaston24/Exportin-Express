import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecommmendationsCarouselComponent.css";

const recommendations = [
  {
    id: 1,
    name: "Ana Martínez",
    comment:
      "¡Una experiencia absolutamente increíble y enriquecedora! Cada momento fue único y se ofrecieron perspectivas que realmente me hicieron reflexionar.",
    profileImage: "/src/assets/images/profiles/recommendations/profile1.webp",
  },
  {
    id: 2,
    name: "Juan Pérez",
    comment: "Aprendí mucho de esta entrevista.",
    profileImage: "/src/assets/images/profiles/recommendations/profile2.jpg",
  },
  {
    id: 3,
    name: "Miguel Gómez",
    comment: "¡Muy perspicaz e inspirador!",
    profileImage: "/src/assets/images/profiles/recommendations/profile3.jpg",
  },
  {
    id: 4,
    name: "David Ramírez",
    comment: "¡Perspectivas fantásticas sobre la industria!",
    profileImage: "/src/assets/images/profiles/recommendations/profile4.jpg",
  },
  {
    id: 5,
    name: "Cristian López",
    comment: "Una entrevista que no te puedes perder.",
    profileImage: "/src/assets/images/profiles/recommendations/profile5.jpg",
  },
  {
    id: 6,
    name: "Sara Wilson",
    comment: "¡Recomiendo encarecidamente esta sesión!",
    profileImage: "/src/assets/images/profiles/recommendations/profile6.jpg",
  },
];

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className='RecommendationsCarouselComponent-control next'
      onClick={onClick}
    >
      <img src='/src/assets/images/icons/arrowIcon.png' alt='Next' />
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
      <img src='/src/assets/images/icons/arrowIcon.png' alt='Previous' />
    </button>
  );
};

export default function RecommendationsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1150, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 2, 
        },
      },
      {
        breakpoint: 750, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1, 
        },
      },
    ],
  };

  return (
    <div className='RecommendationsCarouselComponent-container'>
      <Slider {...settings} className='RecommendationsCarouselComponent-slider'>
        {recommendations.map((item) => (
          <div
            className='RecommendationsCarouselComponent-slide-container'
            key={item.id}
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
                <button className='RecommendationsCarouselComponent-button'>
                  Ver Entrevista
                </button>
                <h3 className='RecommendationsCarouselComponent-name'>
                  {item.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
