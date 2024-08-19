import React, { createContext, useContext, useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

const CalendlyContext = createContext();

export const CalendlyProvider = ({ children }) => {
  const [calendlyWidget, setCalendlyWidget] = useState(null);

  useEffect(() => {
    const widget = (
      <InlineWidget url='https://calendly.com/gastonlegado1/sesion-asesoria-de-it' />
    );
    setCalendlyWidget(widget);
  }, []);

  return (
    <CalendlyContext.Provider value={calendlyWidget}>
      {children}
    </CalendlyContext.Provider>
  );
};

export const useCalendly = () => useContext(CalendlyContext);
