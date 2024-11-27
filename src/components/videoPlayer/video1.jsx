import React, { useEffect } from "react";

const VideoPlayer = () => {
    useEffect(() => {
        // Agregar el script dinámicamente al cargar el componente
        const script = document.createElement("script");
        script.src = "https://scripts.converteai.net/2444b072-868f-44f5-9a35-c3664144ee10/players/671a35deab78ce000a3a9f28/player.js";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            // Eliminar el script al desmontar el componente
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div
                id="vid_671a35deab78ce000a3a9f28"
                style={{ position: "relative", width: "100%", padding: "56.25% 0 0" }}
            >
                <img
                    id="thumb_671a35deab78ce000a3a9f28"
                    src="https://images.converteai.net/2444b072-868f-44f5-9a35-c3664144ee10/players/671a35deab78ce000a3a9f28/thumbnail.jpg"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                    alt="thumbnail"
                />
                <div
                    id="backdrop_671a35deab78ce000a3a9f28"
                    style={{
                        WebkitBackdropFilter: "blur(5px)",
                        backdropFilter: "blur(5px)",
                        position: "absolute",
                        top: 0,
                        height: "100%",
                        width: "100%",
                    }}
                ></div>
            </div>
            <style>
                {`
          .elementor-element:has(#smartplayer) {
            width: 100%;
          }
        `}
            </style>
        </div>
    );
};

export default VideoPlayer;
