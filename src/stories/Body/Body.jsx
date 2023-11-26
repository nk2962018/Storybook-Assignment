import Image from "../Image/Image";
import propTypes from 'prop-types';

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
    descriptionStyle : propTypes.string,
    alt:propTypes.string,
    src:propTypes.string.isRequired,
    imageStyle:propTypes.string  
}

export default Body;