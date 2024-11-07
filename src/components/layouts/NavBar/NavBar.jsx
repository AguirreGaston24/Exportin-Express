import React from "react";

// CSS
import "./NavBar.css";

// Images
import logo from "../../../../public/images/logo/logo-negro-transparente.png";

const NavBar = ({ openModal, scrollToSection }) => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo-container'>
        <img
          className='navbar-logo'
          src={logo}
          alt='Logo'
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className='navbar-list-container'>
        <ul className='navbar-list'>
          <li onClick={() => scrollToSection("HomePage-section1")}>Sobre mí</li>
          <li onClick={() => scrollToSection("HomePage-section2")}>
            Tres claves de éxito
          </li>
          <li onClick={() => scrollToSection("HomePage-section3")}>
            Nuestro programa
          </li>
        </ul>
      </div>
      <div className='navbar-button-container'>
        <button className='navbar-button' onClick={openModal}>
          Webinar
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
