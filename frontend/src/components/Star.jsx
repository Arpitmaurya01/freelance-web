import React from 'react';
import { FaStar } from 'react-icons/fa';
import "../scss/home/Star.scss";

function Star({ type }) {
    return (
        <FaStar className={"star_" + type} />
    );
}

export default Star;
