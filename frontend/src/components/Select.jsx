
import { useState } from "react";
import Option from "./Option";
import React from 'react';

const Select = ({ data, defaults, onchange, name }) => {

    return (
        <div className="input-group my-3">
            <select className="form-control form-select" id="inputGroupSelect02" name={name} onChange={onchange}>
                <option defaultValue value="">{defaults}</option>
                {

                    data.map((i, index) => <Option key={index} country={i.name} />)

                }


            </select>

        </div>
    );
}

export default Select;