import SearchBox from './SearchBox';
import React from 'react';

const Searchbar = ({ input, onSearch, onSearchClick }) => {
    return (
        <div className="searchbar d-flex justify-content-center align-center my-4">

            <SearchBox data={input} onSearch={onSearch} onSearchClick={onSearchClick} />
        </div>
    );
}

export default Searchbar;