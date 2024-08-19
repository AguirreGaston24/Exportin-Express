import React from "react";
import { useCalendly } from "../../../contexts/CalendlyContext";

const CalendlyWidgetComponent = () => {
  const calendlyWidget = useCalendly();

  return (
    <div className='strategic-consultation-page-calendly'>{calendlyWidget}</div>
  );
};

export default CalendlyWidgetComponent;
