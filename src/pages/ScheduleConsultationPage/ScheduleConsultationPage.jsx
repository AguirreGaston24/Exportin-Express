import React, { useEffect } from 'react';
import './ScheduleConsultationPage.css';
import Logo from "../../components/layouts/logo/logo";
import { Link } from 'react-router-dom';

const ScheduleConsultationPage = () => {

  useEffect(() => {
    // Cargar el script de Calendly dinámicamente
    const loadCalendlyScript = () => {
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    };

    // Cargar el CSS de Calendly dinámicamente
    const loadCalendlyStyles = () => {
      const link = document.createElement('link');
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    };

    loadCalendlyStyles();
    loadCalendlyScript();
  }, []);

  return (
    <div className="schedule-consultation-page-container">
      <div className="box">
        <nav className="na">
          <Link to="/">
            <Logo />
          </Link>
        </nav>
      </div>
      <h1 className="schedule-consultation-page-title">Asesoría Estratégica</h1>
      {/* Incrusta el Inline Widget aquí */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/lucase-s-u97/30min"
        style={{ minWidth: '320px', height: '630px' }}
      ></div>
    </div>
  );
};

export default ScheduleConsultationPage;
