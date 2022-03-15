import BidBtn from './BidBtn';
import React from 'react';
const Searchbox = ({ data, onSearch, onSearchClick }) => {
    return (
        <div className="input-group w-75">

            <input type="text" name="searchbar" onChange={onSearch} className="form-control" placeholder="Find Project" value={data || ""} />
            <div className="input-append bg-danger">
                <BidBtn text="Search" btnstyle="text-white px-4" onSearchClick={onSearchClick} />

            </div>

        </div>
    );
}

export default Searchbox;