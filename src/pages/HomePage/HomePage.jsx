import React, { useState } from "react";

// CSS
import "./HomePage.css";

// Components
import NavBar from "../../components/layouts/NavBar/NavBar";
import MainSection from "../../components/mainComponents/HomePage/MainSectionComponent/MainSection";
import AboutMeCarouselSection from "../../components/mainComponents/HomePage/AboutMeCarouselSection/AboutMeCarouselSection";
import RecommendationsSection from "../../components/mainComponents/HomePage/RecommendationsSection/RecommendationsSection";
import FormModalContactDataComponent from "../../components/mainComponents/HomePage/FormModalContactDataComponent/FormModalContactDataComponent";

const HomePage = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div>
      <header className='HomePage-header'>
        <NavBar openModal={openModal}/>
      </header>
      <main className='HomePage-main'>
        {isModalVisible && (
          <FormModalContactDataComponent closeModal={closeModal} />
        )}

        <MainSection openModal={openModal} />
        <AboutMeCarouselSection />
        <RecommendationsSection />
      </main>
      <footer className='HomePage-footer'></footer>
    </div>
  );
};

export default HomePage;
