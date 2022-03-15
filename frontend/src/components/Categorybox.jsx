import React from 'react';
const Categorybox = ({ title, children }) => {
    return (
        <div className="box">
            <div className="img-box">
                {children}
            </div>
            <div className="detail-box">
                <h5>
                    {title}

                </h5>
            </div>
        </div>
    );
}

export default Categorybox;