import React from 'react';
const Option = (props) => {
    return (
        <option value={props.name}>{props.country}</option>
    );
}

export default Option;