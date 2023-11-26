import propTypes from 'prop-types';
import './Button.css';

const Button = ({primary , buttonColor,label, onClick}) => {
    return(
        <button 
            className={`button button--${buttonColor}`}
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    buttonColor:propTypes.oneOf(['primary','secondary','success']),
    label:propTypes.string.isRequired,
    onClick:propTypes.func
}

Button.defaultProps = {
    buttonColor:'primary',
    label:'button',
    onClick:undefined
};

export default Button;