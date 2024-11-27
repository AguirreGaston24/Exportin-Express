import React from "react";
import { useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate
import "./WebinarButtonComponent.css";
import Button from "../../principalButton/button";


const WebinarButtonComponent = ({ openModal }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/schedule-consultation"); // Redirige a la página de consulta
  };

  return (
    <button
      className="WebinarButtonComponent"
      onClick={() => {
        handleRedirect(); // Llama a handleRedirect para redirigir
      }}
    >
        Agenda una llamada
    </button>
  );
};

export default WebinarButtonComponent;
