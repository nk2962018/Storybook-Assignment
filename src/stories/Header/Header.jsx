import Image from '../Image/Image';
import './Header.css';
import propTypes from 'prop-types';
import logo from '../assets/logo.jpg'

const Header = ({text,headerStyle}) => {
    return(
        <div className='header'>
            <Image src={logo} alt='logo' imageStyle='logo'/>
            <p className={`header--${headerStyle}`}>{text}</p>
        </div>
    )
}

Header.propTypes = {
    headerStyle:propTypes.string,
    text:propTypes.string
}

export default Header;





