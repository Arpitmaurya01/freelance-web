import React from 'react';

const FilterItem = ({ unique, category, children, onSelect, type }) => {

    return (
        <div className="input-group d-flex align-items-start flex-nowrap filter_item my-2">
            <input className={"form-check " + type} type="checkbox" name="" id={unique} onChange={(e) => onSelect(category, unique, e, type)} />
            {
                category !== "rating" ?
                    <label className="form-label mx-3" htmlFor={unique}>{category}</label> :
                    children
            }
        </div >
    );
}

export default FilterItem;