import React, { useEffect, useState } from "react";

// CSS
import "./NavBar.css";

// Components
import Button from "../../principalButton/button";
import Logo from "../logo/logo";

const NavBar = ({ scrollToSection }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Activa la animación al cargar la página
    setAnimate(true);
  }, []);

  return (
    <nav className={`navbar ${animate ? "slide-in-top" : ""}`}>
      <Logo />
      <div className="navbar-list-container">
        <ul className="navbar-list">
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
