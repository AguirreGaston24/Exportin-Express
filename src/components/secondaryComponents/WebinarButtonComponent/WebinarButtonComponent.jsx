import React from "react";
import { useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate
import "./WebinarButtonComponent.css";

const WebinarButtonComponent = ({ onClick, className }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/schedule-consultation"); // Redirige a la página de consulta
  };

  return (
    <button className={`WebinarButtonComponent ${className}`} onClick={onClick}>
      Agenda una llamada
    </button>
  );
};

export default WebinarButtonComponent;
