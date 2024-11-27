import { useNavigate } from "react-router-dom";


const Button = () => {

    const navigate = useNavigate();
    const navigation = () => {
        navigate("/free-training-session");
    }

    return (
        <>
            <div className='navbar-button-container'>
                <button className='navbar-button' onClick={navigation}>
                    Webinar
                </button>
            </div>
        </>
    )

}


export default Button;