import React from 'react';
import "../scss/dash/RatingBox.scss";
const RatingBox = ({ rating = 5 }) => {
    return (
        <p className='rating-box'>{rating}</p>
    );
}

export default RatingBox;