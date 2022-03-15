import React from 'react';
import _ from "lodash";

const PaginationDot = ({ onPagechange, pagesize, currentPage, Totalitem }) => {

    const pagesCount = Math.ceil(Totalitem / pagesize);
    if (pagesCount <= 1) return null;
    const page = _.range(1, pagesCount + 1);
    console.log(pagesize);
    return (

        <nav aria-label="Page">
            <ul className="pagination">

                {
                    page.map((i) => {
                        return (

                            <li key={i} className="dot-item">
                                <button className={currentPage === i ? "dot-btn active" : "dot-btn"} onClick={() => onPagechange(i)}></button>
                            </li>
                        )


                    })
                }





            </ul>
        </nav>
    );
}

export default PaginationDot;