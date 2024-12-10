import React, { useEffect, useState } from "react";
import "./AboutMeCarouselSection.css";
import AboutMeCarouselComponent from "../../../secondaryComponents/AboutMeCarouselComponent/AboutMeCarouselComponent";

const AboutMeCarouselSection = ({ id }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id={id} className={`HomePage-about-me-section ${animate ? "slide-in-left" : ""}`}>
      <div className="HomePage-about-me-section-container">
        <div className="HomePage-about-me-section-title-container">
          <h2 className="HomePage-about-me-section-title">
            Soy Nicolás Bartoli
          </h2>
        </div>
        <div className="HomePage-about-me-section-carousel-container">
          <AboutMeCarouselComponent />
        </div>
      </div>
    </section>
  );
};

export default AboutMeCarouselSection;
