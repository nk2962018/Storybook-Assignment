import propTypes from 'prop-types';
import './Input.css';

const Input = ({type,label,placeholder,onChange,size}) => {
    return(
        <>
            {/* <label className='input'>{label}</label> */}
            <input 
                type={type=== 'text' ? 'text': 'password'}
                label={label}
                placeholder={placeholder}
                onChange={onChange}
                className={`input input--${size}`}
            />
        </>
    )
}

Input.propTypes = {
    type : propTypes.oneOf(['text','password']),
    label : propTypes.string,
    placeholder : propTypes.string,
    onChange : propTypes.func,
    size:propTypes.oneOf(['small','medium','large'])
}

export default Input;