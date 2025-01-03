import React from "react";

import MapWithHeatPointsVariantComponent from "../../secondaryComponents/MapWithHeatPointsVariantComponent/MapWithHeatPointsVariantComponent";

import "./Footer.css";

import logo from "../../../../public/images/logo/logo-negro-transparente.png";

const Footer = () => {
  return (
    <section className='HomePage-Footer-background'>
      <div className='HomePage-Footer-container'>
        <div className='HomePage-Footer-map'>
          <MapWithHeatPointsVariantComponent />
        </div>
        <div className='HomePage-Footer-content'>
          <div className='HomePage-Footer-logo'>
            <img src={logo} alt='Logo' />
          </div>
          <div className='HomePage-Footer-links-social'>
            <div className='HomePage-Footer-social'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='HomePage-Footer-icon'
              >
                <img src='/images/icons/tiktok-icon.png' alt='Facebook' />
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='HomePage-Footer-icon'
              >
                <img src='/images/icons/instagram-icon.png' alt='Instagram' />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='HomePage-Footer-icon'
              >
                <img src='/images/icons/linkedin-icon.png' alt='LinkedIn' />
              </a>
            </div>
            <div className='HomePage-Footer-copy'>
              <p className='HomePage-Footer-copy-text'>
                © {new Date().getFullYear()} <strong className="HomePage-Footer--strong">Exporting Express</strong>. Todos los
                derechos reservados.
              </p>
              <p className='HomePage-Footer-copy-creator'>
                Creado por <a target="blank" href="https://obxel.vercel.app">Obxel</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
