import propTypes from 'prop-types';
import './Eyebrow.css';

const Eyebrow = ({eyebrowText,color}) => {
    return(
        <p className={`eyebrowText--${color}`}>{eyebrowText}</p>
    )
}

Eyebrow.propTypes = {
    eyebrowText : propTypes.string.isRequired,
    color:propTypes.oneOf(['grey','lightgrey'])
}

Eyebrow.defaultProps = {
    eyebrowText:'Card Heading',
    color:'red'
}

export default Eyebrow;