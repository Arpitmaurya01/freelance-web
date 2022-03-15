import { BsFillCircleFill } from 'react-icons/bs';
import "../scss/home/Status.scss";
import React from 'react';

const Status = ({ status }) => {

    let className = status === "Opened" || status === "Bidding" || status === "Online" ? 'active' : 'inactive';
    return (
        <i className={className}>

            < BsFillCircleFill />
        </i>
    );
}

export default Status;