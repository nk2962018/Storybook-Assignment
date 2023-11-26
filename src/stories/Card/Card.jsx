import Body from "../Body/Body";
import Eyebrow from "../Eyebrow/Eyebrow";
import Headline from "../Headline/Headline";
import Link from "../Link/Link";
import propTypes from 'prop-types';
import './Card.css';

const Card = ({
    id,
    eyebrowText,
    eyebrowTextColor,
    headlineText,
    headlineTextColor,
    descriptionStyle,
    descriptionText,
    src,
    alt,
    href,
    target,
    linkText

}) => {
    return(
       <div className="card" key={id}>
        <Eyebrow eyebrowText={eyebrowText} color={eyebrowTextColor}/>
        <Headline headlineText={headlineText} color={headlineTextColor}/>
        <Body descriptionText={descriptionText} src={src} alt={alt} descriptionStyle={descriptionStyle} imageStyle='card-image'/>
        <Link href={href} target={target} link_text={linkText}/>
       </div>
    )
}

Card.propTypes = {
    id : propTypes.number,
    eyebrowText:propTypes.string,
    eyebrowTextColor:propTypes.string,
    headlineText:propTypes.string,
    headlineTextColor :propTypes.string,
    descriptionText:propTypes.string,
    descriptionStyle:propTypes.string,
    src:propTypes.string.isRequired,
    alt:propTypes.string,
    href : propTypes.string.isRequired,
    target:propTypes.string,
    linkText:propTypes.string
}

export default Card;