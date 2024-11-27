import { useNavigate } from "react-router-dom";


const Button = ({label}) => {

    const navigate = useNavigate();
    const navigation = () => {
        navigate("/free-training-session");
    }

    return (
        <>
            <div className='navbar-button-container'>
                <button className='navbar-button' onClick={navigation}>
                    {label}
                </button>
            </div>
        </>
    )

}


export default Button;