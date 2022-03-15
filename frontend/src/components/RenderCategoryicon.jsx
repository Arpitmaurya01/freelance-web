import React from 'react';
import Categorybox from "./Categorybox";
const Rendercategoryicon = ({ title, src }) => {
    return (
        <Categorybox title={title}>

            <img src={src} alt="" />

        </Categorybox>
    );
}

export default Rendercategoryicon;