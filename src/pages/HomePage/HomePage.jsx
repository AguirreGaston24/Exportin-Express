import React from "react";

//CSS

import "./HomePage.css";

// Components
import NavBar from "../../components/layouts/NavBar/NavBar";
import MainSection from "../../components/mainComponents/HomePage/MainSectionComponent/MainSection";
import AboutMeCarouselSection from "../../components/mainComponents/HomePage/AboutMeCarouselSection/AboutMeCarouselSection";
import RecommendationsSection from "../../components/mainComponents/HomePage/RecommendationsSection/RecommendationsSection";

const HomePage = () => {
  return (
    <div>
      <header className='HomePage-header'>
        <NavBar />
      </header>
      <main className='HomePage-main'>
        <MainSection />
        <AboutMeCarouselSection />
        <RecommendationsSection />
      </main>
      <footer className="HomePage-footer">
        
      </footer>
    </div>
  );
};

export default HomePage;
