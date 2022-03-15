import React from 'react';
import "../scss/dash/cardheader.scss";
const CardHeader = ({ label }) => {
    return (
        <div className="card-header">{label}</div>
    );
}

export default CardHeader;