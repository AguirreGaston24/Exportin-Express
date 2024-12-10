import { FaLongArrowAltUp } from "react-icons/fa";

const ArrowButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // Posición inicial
            behavior: "smooth", // Desplazamiento suave
        });
    };


    return (
        <>
            <button onClick={scrollToTop} id="scrollToTopButton" className="scroll-to-top">
                <FaLongArrowAltUp />
            </button>
        </>
    )

}

export default ArrowButton;