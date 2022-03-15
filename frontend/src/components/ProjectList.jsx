import React from 'react';
import Like from '../components/Like';
import StarGroup from '../components/StarGroup';
import BidBtn from '../components/BidBtn';
import Location from '../components/Location';
import ProfileVerify from '../components/ProfileVerify';
import Status from '../components/Status';
import { Link } from 'react-router-dom';
import { ImClock } from "react-icons/im";
import Pagination from '../components/Pagination';
import "../scss/home/ProjectList.scss";


function ProjectList({ projects, onPagechange, onIncreament, pagesize, currentPage, Totalitem, btntext = "Bid on Project", btnhide = false }) {





    return (
        <>
            <div className='container  m-0 p-0' style={{ minHeight: "100vh" }}>
                {
                    projects.map((i) => {
                        return (
                            <div className="card" key={i.__id}>

                                <div className="card-body">
                                    <div className="d-flex justify-content-between">

                                        <h5 className="card-title">
                                            <Link to={`/details/${i.__id}`}>
                                                {i.name}
                                            </Link>
                                        </h5>
                                        <Like />
                                    </div>
                                    <div className="main-info d-flex justify-content-between">
                                        <div className='left'>
                                            <p className="card-text">{i.type}</p>
                                            <p className='status'>
                                                <span>Status</span>
                                                <Status status={i.status} />
                                                <span>{i.status}</span>
                                            </p>
                                        </div>

                                        <div className='budget right'>
                                            <p>

                                                Estimate Budget USD {i.Estimated_budget_min}-{i.Estimated_budget_max}
                                            </p>
                                            <p>
                                                {i.bidcount} Bids
                                            </p>

                                        </div>


                                    </div>
                                    <p className='desc'>{i.desc}</p>
                                    <div className="link_wrap">
                                        <Link to={`/details/${i.__id}`}>View attachment</Link>
                                        <Link to="">Send  Message to Project Owner</Link>
                                    </div>
                                    <div className='action'>
                                        <ProfileVerify />
                                        <StarGroup rating={i.rating} />
                                        <Location place={i.location} />
                                        {
                                            btnhide && <BidBtn text={btntext} btnstyle="bid-btn" />
                                        }
                                    </div>
                                </div>


                                <div className="card-footer text-muted">
                                    <ImClock /> <span className='ml-4'> <span>{i.timeStamp}</span></span>
                                </div>
                            </div>)
                    }
                    )}



                <Pagination itemCount={Totalitem} currentPage={currentPage} pageSize={pagesize} onIncreament={onIncreament} onPageChange={onPagechange} />
            </div >

        </>
    );


}

export default ProjectList;
