import './Header.css';
import propTypes from 'prop-types';

const Header = ({text,headerStyle}) => {
    return(
        <p className={`header header--${headerStyle}`}>{text}</p>
    )
}

Header.propTypes = {
    headerStyle:propTypes.oneOf(['simple','food']),
    text:propTypes.string
}

export default Header;





