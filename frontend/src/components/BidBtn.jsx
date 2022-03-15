import React from 'react';
const Bidbtn = ({ text, btnstyle, onSearchClick }) => {
    const cls = "btn " + btnstyle;

    return (
        <button type="button" onClick={onSearchClick} className={cls}>{text}</button >
    );
}

export default Bidbtn;