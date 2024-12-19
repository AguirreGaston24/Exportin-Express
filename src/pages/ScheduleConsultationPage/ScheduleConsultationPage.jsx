import React, { useEffect } from 'react';
import './ScheduleConsultationPage.css';

const ScheduleConsultationPage = () => {

  useEffect(() => {
    // Cargar el script de Calendly dinámicamente
    const loadCalendlyScript = () => {
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/lucase-s-u97/30min',
            text: 'Agenda una llamada',
            color: '#0069ff',
            textColor: '#ffffff',
          });
        }
      };

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
      <h1 className="schedule-consultation-page-title">Asesoría Estratégica</h1>
      <div id="calendly-badge" />
    </div>
  );
};

export default ScheduleConsultationPage;
