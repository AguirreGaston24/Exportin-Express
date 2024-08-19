import React from 'react';
import CalendlyWidgetComponent from '../components/mainComponents/strategicConsultation/CalendlyWidgetComponent';

const ScheduleConsultationPage = () => {
    return (
        <div className="schedule-consultation-page-container">
            <h1 className="schedule-consultation-page-title">Asesoría Estratégica</h1>
            <CalendlyWidgetComponent />
        </div>
    );
}

export default ScheduleConsultationPage;