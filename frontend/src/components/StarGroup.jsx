import React from 'react';
import _ from "lodash";
import Star from './Star';
function StarGroup({ rating }) {
    let active = _.map(new Array(5), (el, i) => i);




    return (
        <div className='rating mx-2'>

            {
                active.map((i) => {
                    return (i < rating ? <Star key={i} type="active" /> : <Star key={i} type="notactive" />)
                })



            }

        </div>
    );
}

export default StarGroup;
