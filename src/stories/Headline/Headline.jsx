
import propTypes from 'prop-types';
import './Headline.css';

const Headline = ({headlineText,color}) => {
    return(
        <p className={`headlineText--${color}`}>{headlineText}</p>
    )
}

Headline.propTypes = {
    headlineText : propTypes.string.isRequired,
    color:propTypes.oneOf(['red','green'])
}

Headline.defaultProps = {
    headlineText:'Card Heading',
    color:'red'
}

export default Headline;