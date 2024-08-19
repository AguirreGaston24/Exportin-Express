import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FreeTrainingSessionPage from "./pages/FreeTrainingSessionPage";
import ScheduleConsultationPage from "./pages/ScheduleConsultationPage";
import "./App.css";
import { CalendlyProvider } from "./contexts/CalendlyContext";

function App() {
  return (
    <CalendlyProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/schedule-consultation'
            element={<ScheduleConsultationPage />}
          />
          <Route
            path='/free-training-session'
            element={<FreeTrainingSessionPage />}
          />
        </Routes>
      </Router>
    </CalendlyProvider>
  );
}

export default App;
