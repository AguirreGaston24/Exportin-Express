import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./InterviewVideoModalComponent.css";

const InterviewVideoModalComponent = ({ closeModal, videoUrl }) => {
  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.paddingRight = "0";
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="InterviewVideoModalComponent-overlay"
      onClick={() => closeModal()}
    >
      <div
        className="InterviewVideoModalComponent-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="InterviewVideoModalComponent-close"
          onClick={closeModal}
        >
          <AiOutlineClose />
        </span>
        <iframe
          className="InterviewVideoModalComponent-video"
          src={videoUrl}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default InterviewVideoModalComponent;
