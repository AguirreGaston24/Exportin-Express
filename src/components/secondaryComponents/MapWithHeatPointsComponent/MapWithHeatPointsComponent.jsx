import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import backgroundWorldMap from "../../../../public/images/backgrounds/background-world-map.svg";
import "./MapWithHeatPoints.css";

const MapWithHeatPointsComponent = () => {
  const points = [
    { cx: 850, cy: 1000 },
    { cx: 1050, cy: 1620 },
    { cx: 1500, cy: 2000 },
    { cx: 3600, cy: 1200 },
    { cx: 4200, cy: 2200 },
    { cx: 2600, cy: 1700 },
    { cx: 2700, cy: 1100 },
  ];

  const [radio, setRadio] = useState(30);
  const [growing, setGrowing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadio((prevRadio) => {
        if (growing) {
          if (prevRadio >= 50) {
            setGrowing(false);
            return prevRadio;
          }
          return prevRadio + 0.5;
        } else {
          if (prevRadio <= 30) {
            setGrowing(true);
            return prevRadio;
          }
          return prevRadio - 0.5;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [growing]);

  return (
    <div className="MapWithHeatPointsComponent-container">
      <ReactSVG
        src={backgroundWorldMap}
        className="MapWithHeatPoints-svg"
        beforeInjection={(svg) => {
          svg.setAttribute("width", "100%");
          svg.setAttribute("height", "100%");
          svg.setAttribute("viewBox", "150 100 4500 3000");
          svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

          points.forEach((point) => {
            const outerCircle = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "circle"
            );
            outerCircle.setAttribute("cx", point.cx);
            outerCircle.setAttribute("cy", point.cy);
            outerCircle.setAttribute("r", radio);
            outerCircle.classList.add("MapWithHeatPointsComponent-outer-circle");
            svg.appendChild(outerCircle);

            const innerCircle = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "circle"
            );
            innerCircle.setAttribute("cx", point.cx);
            innerCircle.setAttribute("cy", point.cy);
            innerCircle.setAttribute("r", 20);
            innerCircle.setAttribute("fill", "red");
            innerCircle.classList.add("MapWithHeatPointsComponent-pulsating");
            svg.appendChild(innerCircle);
          });
        }}
      />
    </div>
  );
};

export default MapWithHeatPointsComponent;
