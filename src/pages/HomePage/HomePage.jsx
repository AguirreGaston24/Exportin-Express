import React, { useState } from "react";

// CSS
import "./HomePage.css";

// Layouts
import NavBar from "../../components/layouts/NavBar/NavBar";
import Footer from "../../components/layouts/Footer/Footer";

// Sections
import MainSection from "../../components/mainComponents/HomePage/MainSectionComponent/MainSection";
import AboutMeCarouselSection from "../../components/mainComponents/HomePage/AboutMeCarouselSection/AboutMeCarouselSection";
import RecommendationsSection from "../../components/mainComponents/HomePage/RecommendationsSection/RecommendationsSection";
import FormModalContactDataComponent from "../../components/mainComponents/HomePage/FormModalContactDataComponent/FormModalContactDataComponent";
import StepsEmploymentSection from "../../components/mainComponents/HomePage/StepsEmploymentSection/StepsEmploymentSection";
import ProgramSection from "../../components/mainComponents/HomePage/ProgramSection/ProgramSection";
import WebinarAccessSection from "../../components/mainComponents/HomePage/WebinarAccessSection/WebinarAccessSection";

const HomePage = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const navItems = [
    { label: 'Sobre mí', target: 'HomePage-section1' },
    { label: 'Tres claves de éxito', target: 'HomePage-section2' },
    { label: 'Nuestro programa', target: 'HomePage-section3' },
  ];

  return (
    <div>
      <header className='HomePage-header'>
        <NavBar openModal={openModal} scrollToSection={scrollToSection} />
      </header>
      <main className='HomePage-main'>
        {isModalVisible && (
          <FormModalContactDataComponent closeModal={closeModal} />
        )}

        <MainSection openModal={openModal} />
        <AboutMeCarouselSection id='HomePage-section1' />
        <RecommendationsSection />
        <StepsEmploymentSection id='HomePage-section2' />
        <ProgramSection id='HomePage-section3' />
        <WebinarAccessSection openModal={openModal} />
      </main>
      <footer className='HomePage-footer'>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
