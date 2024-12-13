import React from "react";

import RecommendationsCarousel from "../../../secondaryComponents/RecommendationsCarouselComponent/RecommendationsCarouselComponent";


// CSS
import "./RecommendationsSection.css";

const RecommendationsSection = () => {
  return (
    <section className='HomePage-RecommendationSection section-container section-margin-bottom'>
      <div className='HomePage-RecommendationSection-title-container'>
        <h2 className='HomePage-RecommendationSection-title'>¿Listo para trabajar en el extranjero?</h2>
        <span className='HomePage-Recommendation-graphic-element-gray'></span>
      </div>
      <RecommendationsCarousel />
    </section>
  );
};

export default RecommendationsSection;
