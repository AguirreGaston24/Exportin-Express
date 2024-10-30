import React, { useState } from "react";

// CSS
import "./NavBar.css";

// Images
import logo from "../../../../public/images/logo/logo-negro-transparente.png";

const NavBar = ({ openModal }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo-container'>
        <img className='navbar-logo' src={logo} alt='Logo' />
      </div>
      <div className='navbar-list-container'>
        <ul className='navbar-list'>
          <li onClick={() => scrollToSection("section1")}>Sobre mí</li>
          <li onClick={() => scrollToSection("section2")}>
            Tres claves de éxito
          </li>
          <li onClick={() => scrollToSection("section3")}>Nuestro programa</li>
        </ul>
      </div>
      <div className='navbar-button-container'>
        <button
          className='navbar-button'
          onClick={() => {
            openModal();
          }}
        >
          Webinar
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
