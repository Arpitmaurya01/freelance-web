import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
const Location = ({ place }) => {
    return (
        <div className="location">
            <FaMapMarkerAlt />
            <span>{place}</span>
        </div>
    );
}

export default Location;