import React from "react";
import { useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate
import "./WebinarButtonComponent.css";
import { FaArrowRightLong } from "react-icons/fa6";

const WebinarButtonComponent = ({ openModal }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/schedule-consultation"); // Redirige a la página de consulta
  };

  return (
    <>
    <div className="WebinarButtonComponent" onClick={() => {
          handleRedirect(); // Llama a handleRedirect para redirigir
        }}>
      <FaArrowRightLong />
     Agenda una llamada
    </div>
    </>

  );
};

export default WebinarButtonComponent;
