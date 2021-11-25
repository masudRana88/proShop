import React from 'react';

const Rating = ({valu, text, color}) => {
    return (
        <div className="rating">
            <span>
                <i style={{color}} className={valu >= 1? "fas fa-star" : valu>= 0.5 ? 'fas fa-star-half-alt' : "far fa-star"} ></i>
            </span>
            <span>
                <i style={{color}} className={valu >= 2? "fas fa-star" : valu>= 1.5 ? 'fas fa-star-half-alt' : "far fa-star"} ></i>
            </span>
            <span>
                <i style={{color}} className={valu >= 3? "fas fa-star" : valu>= 2.5 ? 'fas fa-star-half-alt' : "far fa-star"} ></i>
            </span>
            <span>
                <i style={{color}} className={valu >= 4? "fas fa-star" : valu>= 3.5 ? 'fas fa-star-half-alt' : "far fa-star"} ></i>
            </span>
            <span>
                <i style={{color}} className={valu >= 5? "fas fa-star" : valu>= 4.5 ? 'fas fa-star-half-alt' : "far fa-star"} ></i>
            </span>
            <span>{ text && text}</span>
        </div>
    );
};

Rating.defaultProps = {
    color : '#f8e825'
}

export default Rating;