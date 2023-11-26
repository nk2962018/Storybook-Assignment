import './Image.css';
import propTypes from 'prop-types';

const Image = ({src,alt,imageStyle}) =>{
    return(
        <img src={src} alt={alt} className={`image--${imageStyle}`} />
    )
}

Image.propTypes = {
    src : propTypes.string.isRequired,
    alt : propTypes.string,
    imageStyle : propTypes.oneOf(['logo','card-image'])   
}
export default Image;