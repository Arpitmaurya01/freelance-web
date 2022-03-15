import React from 'react';
const Thead = ({ data }) => {
    return (
        <thead>
            <tr>
                {data.map((i, index) => <th key={index}>{i}</th>)}

            </tr>
        </thead>
    );
}

export default Thead;