import Image from "../Image/Image";
import propTypes from 'prop-types';
import './Body.css';

const Body = ({src,alt,imageStyle,descriptionText,descriptionStyle}) => {
    return(
        <>
            <Image 
                src={src} 
                alt={alt} 
                imageStyle={imageStyle}
            />
            <p className={`description-text--${descriptionStyle}`}>{descriptionText}</p>

        </>
    )
}

Body.propTypes = {
    descriptionText : propTypes.string.isRequired,
    descriptionStyle : propTypes.oneOf(['greyish','green']),
    alt:propTypes.string,
    src:propTypes.string.isRequired,
    imageStyle:propTypes.string  
}

export default Body;