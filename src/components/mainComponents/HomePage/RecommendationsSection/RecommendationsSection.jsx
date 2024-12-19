import React from "react";

import RecommendationsCarousel from "../../../secondaryComponents/RecommendationsCarouselComponent/RecommendationsCarouselComponent";


// CSS
import "./RecommendationsSection.css";

const RecommendationsSection = () => {
  return (
    <section className='HomePage-RecommendationSection section-container section-margin-bottom'>
      <div className='HomePage-RecommendationSection-title-container'>
        <h2 className='HomePage-RecommendationSection-title'>¿Listo para <strong> trabajar en el extranjero?</strong></h2>
        <span className='HomePage-Recommendation-graphic-element-gray'></span>
      </div>
      <RecommendationsCarousel />
    </section>
  );
};

export default RecommendationsSection;
