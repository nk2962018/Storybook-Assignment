import propTypes from 'prop-types';
import './Button.css';

const Button = ({ buttonColor,label, onClick}) => {
    return(
        <button 
            className={`button button--${buttonColor}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    buttonColor:propTypes.oneOf(['primary','secondary','success','danger']),
    label:propTypes.string.isRequired,
    onClick:propTypes.func
}

Button.defaultProps = {
    buttonColor:'primary',
    label:'button',
    onClick:undefined
};

export default Button;