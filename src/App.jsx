import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FreeTrainingSessionPage from "./pages/FreeTrainingSessionPage/FreeTrainingSessionPage";
import ScheduleConsultationPage from "./pages/ScheduleConsultationPage/ScheduleConsultationPage";
import "./index.css";

function App() {
  return (
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
  );
}

export default App;
