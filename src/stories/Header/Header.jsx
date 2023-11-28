import Image from '../Image/Image';
import './Header.css';
import propTypes from 'prop-types';
import logo from '../assets/logo.jpg';
import LoginForm from '../Form/Form';

const Header = ({text,headerStyle}) => {
    return(
        <>
            <nav class="navbar navbar-inverse header">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <Image src={logo} alt='logo' imageStyle='logo'/> 
                        <span className={`header--${headerStyle}`}>{text}</span>
                    </div>
                    <ul class="nav  navbar-right">
                    <LoginForm/>
                    </ul>
                </div>
            </nav>
        </>
    )
}

Header.propTypes = {
    headerStyle:propTypes.string,
    text:propTypes.string
}

export default Header;





