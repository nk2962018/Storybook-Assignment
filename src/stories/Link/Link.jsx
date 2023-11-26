import propTypes from 'prop-types';
import './Link.css';

const Link = ({href,target,link_text}) => {
    return(
        <>
            <a href={href} target={target} className='linkStyle'>{link_text}</a>
        </>
    )
}

Link.propTypes = {
    href : propTypes.string.isRequired,
    target : propTypes.oneOf(['_blank','']),
    link_text : propTypes.string.isRequired,
}

export default Link;