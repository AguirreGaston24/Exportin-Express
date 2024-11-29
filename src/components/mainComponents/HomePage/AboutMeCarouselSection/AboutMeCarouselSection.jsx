import React from "react";
import "./AboutMeCarouselSection.css";
import AboutMeCarouselComponent from "../../../secondaryComponents/AboutMeCarouselComponent/AboutMeCarouselComponent";

const AboutMeCarouselSection = ({ id }) => {
  return (
    <section id={id} className='HomePage-about-me-section'>
      <div className='HomePage-about-me-section-container'>
        <div className='HomePage-about-me-section-title-container'>
          <h2 className='HomePage-about-me-section-title'>
            Soy Nicolás Bartoli
          </h2>
        </div>
        <div className='HomePage-about-me-section-carousel-container'>
          <AboutMeCarouselComponent />
        </div>
      </div>
    </section>
    // <section className="section-container">
    //   <div className="card">
    //     <div className="image-container">
    //       <img
    //         src="./1.jpg"
    //         alt="Emerge"
    //         className="card-image"
    //       />
    //       {/* <div className="overlay">
    //         <p>Pioneering Humane Innovation</p>
    //       </div> */}
    //     </div>
    //     <h3 >EMERGE</h3>
    //     <p>
    //       An award-winning experimental technology lab innovating at the
    //       convergence of sustainable development, technological innovation, and
    //       re-imagined socio-economics.
    //     </p>
    //   </div>
    //   <div className="card">
    //     <div className="image-container">
    //       <img
    //         src="./2.jpg"
    //         title="The Æternals"
    //         className="card-video"
    //       ></img>
    //     </div>
    //     <h3>THE ÆTERNALS</h3>
    //     <p>
    //       A collection of digital collectibles that uniquely combines beautiful
    //       digital art, interactive gamification, and metamorphic change driven
    //       by impact objectives.
    //     </p>
    //   </div>
    //   <div className="card">
    //     <div className="image-container">
    //       <img
    //         src="3.jpg"
    //         alt="Dona un libro"
    //         className="card-image"
    //       />
    //     </div>
    //     <h3>DONA UN LIBRO</h3>
    //     <p>
    //       A non-profit organisation operating across Central America to support
    //       public education systems through original, issue-based content,
    //       teacher training, and new libraries.
    //     </p>
    //   </div>
    // </section>
  );
};

export default AboutMeCarouselSection;
