import propTypes from 'prop-types';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    const copyrightSymbol = '\u00A9'
    const footerText = `${copyrightSymbol} ${year} Copyright:FoodApp`;
    return(
        <div className='footer-body'>
            <p className='footer'>{footerText}</p>
        </div>
    )
}

Footer.propTypes = {
    footerText:propTypes.string
}
export default Footer;