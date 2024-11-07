import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";

import backgroundWorldMap from "../../../../public/images/backgrounds/background-world-map1.svg";

import "./MapWithHeatPointsVariantComponent.css";

const MapWithHeatPointsVariantComponent = () => {
  const points = [
    { cx: 540, cy: 560 },
    { cx: 500, cy: 720 },
    { cx: 620, cy: 820 },
    { cx: 1000, cy: 720 },
    { cx: 1020, cy: 540 },
    { cx: 1360, cy: 620 },
    { cx: 1520, cy: 900 },
  ];

  const [radio, setRadio] = useState(10);
  const [growing, setGrowing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadio((prevRadio) => {
        if (growing) {
          if (prevRadio >= 15) {
            setGrowing(false);
            return prevRadio;
          }
          return prevRadio + 0.25;
        } else {
          if (prevRadio <= 10) {
            setGrowing(true);
            return prevRadio;
          }
          return prevRadio - 0.25;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [growing]);

  return (
    <div className='MapWithHeatPointsVariantComponent-container'>
      <ReactSVG
        src={backgroundWorldMap}
        className='map-svg'
        beforeInjection={(svg) => {
          svg.setAttribute("width", "100%");
          svg.setAttribute("height", "100%");
          svg.setAttribute("viewBox", "50 290 1800 3000");
          svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

          points.forEach((point) => {
            const outerCircle = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "circle"
            );
            outerCircle.setAttribute("cx", point.cx);
            outerCircle.setAttribute("cy", point.cy);
            outerCircle.setAttribute("r", radio);
            outerCircle.classList.add("MapWithHeatPointsVariantComponent-outer-circle");
            svg.appendChild(outerCircle);

            const innerCircle = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "circle"
            );
            innerCircle.setAttribute("cx", point.cx);
            innerCircle.setAttribute("cy", point.cy);
            innerCircle.setAttribute("r", 6);
            innerCircle.setAttribute("fill", "red");
            innerCircle.classList.add("MapWithHeatPointsVariantComponent-pulsating");
            svg.appendChild(innerCircle);
          });
        }}
      />
    </div>
  );
};

export default MapWithHeatPointsVariantComponent;
