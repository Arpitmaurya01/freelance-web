import { useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import "../scss/home/Like.scss";
import React from 'react';
function Like() {
    const [likecount, setlikecount] = useState(0);
    const handleLike = () => {

        setlikecount(likecount + 1);
        console.log(likecount)

    }
    return (
        <button className='btn btn-danger btn-circle' >
            <BsHeartFill onClick={handleLike} />
        </button>
    );
}


export default Like;
