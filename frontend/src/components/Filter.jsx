import Bidbtn from "../components/BidBtn";
import "./../scss/home/Filter.scss";
import FilterItem from "../components/FilterItem";
import StarGroup from "../components/StarGroup";
import React from 'react';

const Filter = ({ categories, status, cost, rating, onSelect }) => {
    return (
        <div className="filter">
            <div className="sortby py-4 px-3">
                <h5>Sort Result By</h5>
                <div className="price">
                    <span className="d-block">Price</span>
                    <div className="sort-btn-wrap d-flex justify-content-between flex-wrap align-item-center my-3">
                        <Bidbtn text="Low To High" btnstyle="btn-round my-md-2" />

                        <Bidbtn text="High To Low" btnstyle="btn-round my-md-2" />
                    </div>

                </div>
            </div>

            <div className="dropdown-divider"></div>
            <div className="partition filterBy">
                <h5>Filter Result By</h5>
                <span className="d-block sub_title">Categories</span>



                {categories.map((item, ind) => <FilterItem key={item.__id} unique={item.__id} type="category" onSelect={onSelect} category={item.name} />)}




            </div>
            <div className="dropdown-divider"></div>
            <div className="partition status">
                <span className="d-block sub_title">Status</span>

                {status.map((item, ind) => <FilterItem key={item.__id} unique={item.__id} type="status" onSelect={onSelect} category={item.name} />)}




            </div>
            <div className="dropdown-divider"></div>

            <div className="partition status">
                <span className="d-block sub_title">Cost</span>

                {cost.map((item, ind) => <FilterItem key={item.__id} unique={item.__id} type="cost" onSelect={onSelect} category={item.name} />)}




            </div>
            <div className="dropdown-divider"></div>

            <div className="partition rating">
                <span className="d-block sub_title">Project Owner Rating</span>




                {
                    rating.map((i) => <FilterItem text="" onSelect={onSelect} unique={"rat" + (i + 1)} type="rating" key={i} category="rating"><div className="rating mx-3"><StarGroup rating={i + 1} /></div></FilterItem>)
                }





            </div>
        </div>
    );
}

export default Filter;