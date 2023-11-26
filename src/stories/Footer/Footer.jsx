import propTypes from 'prop-types';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    const copyrightSymbol = '\u00A9'
    const footerText = `${copyrightSymbol} ${year} Copyright:FoodApp`;
    return(
        <>
            <p className='footer'>{footerText}</p>
        </>
    )
}

Footer.propTypes = {
    footerText:propTypes.string
}
export default Footer;