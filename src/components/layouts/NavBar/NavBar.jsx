import React from "react";

// CSS
import "./NavBar.css";

// Images
import Button from "../../principalButton/button";
import Logo from "../logo/logo";

const NavBar = ({ scrollToSection }) => {

  return (
    <nav className='navbar'>
   <Logo/>
      <div className='navbar-list-container'>
        <ul className='navbar-list'>
          <li onClick={() => scrollToSection("HomePage-section1")}>Sobre mi</li>
          <li onClick={() => scrollToSection("HomePage-section2")}>
            Tres claves de éxito
          </li>
          <li onClick={() => scrollToSection("HomePage-section3")}>
            Nuestro programa
          </li>
        </ul>
      </div>
      <Button label="Masterclass" />
    </nav>
  );
};

export default NavBar;
