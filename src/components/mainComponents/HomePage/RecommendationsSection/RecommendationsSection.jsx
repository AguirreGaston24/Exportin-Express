import React from "react";

import RecommendationCarouselComponent from "../../../secondaryComponents/RecommendationsCarouselComponent/RecommendationsCarouselComponent";

// CSS
import "./RecommendationsSection.css";

const RecommendationsSection = () => {
  return (
    <section className='HomePage-RecommendationSection'>
      <div className='HomePage-RecommendationSection-title-container'>
        <h2 className='HomePage-RecommendationSection-title'>¿Listo para dar el salto?</h2>
        <span className='HomePage-Recommendation-graphic-element-gray'></span>
      </div>
      <RecommendationCarouselComponent />
    </section>
  );
};

export default RecommendationsSection;