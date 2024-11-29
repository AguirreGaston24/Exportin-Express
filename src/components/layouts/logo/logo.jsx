import logo from "../../../../public/images/logo/logo-negro-transparente.png";



const Logo = () => {

    return (
        <>
            <div className='navbar-logo-container'>
                <img
                    className='navbar-logo'
                    src={logo}
                    alt='Logo'
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </>
    )


}

export default Logo;