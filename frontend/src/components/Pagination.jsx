import React from 'react';
import _ from "lodash";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Pagination = ({ itemCount, currentPage, pageSize, onIncreament, onPageChange }) => {
    const pagesCount = Math.ceil(itemCount / pageSize);
    if (pagesCount <= 1) return null;
    const page = _.range(1, pagesCount + 1);




    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className={currentPage === 1 ? "page-item disabled" : "page-item"} onClick={() => onIncreament(-1, pagesCount)}>
                    <Link className="page-link" tabIndex="-1">Previous</Link>
                </li>

                {
                    page.map((i) => {
                        return (<li key={i} className={currentPage === i ? "page-item active" : "page-item"}>
                            <Link className="page-link" onClick={() => onPageChange(i)}>{i}</Link>
                        </li>)


                    })
                }

                <li className={currentPage === pagesCount ? "page-item disabled" : "page-item"} onClick={() => onIncreament(1, pagesCount)} >
                    <Link className="page-link">Next</Link>
                </li>
            </ul>
        </nav >
    );
}

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onIncreament: PropTypes.func.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;