
import ReactCountryFlag from "react-country-flag";
import Bidbtn from './BidBtn';
import StarGroup from './StarGroup';
import Status from './Status';
import { BsCheckLg } from "react-icons/bs";
import "../scss/dash/HireList.scss";
import Pagination from './Pagination';
import React from 'react';
const InviteListOwner = ({ data, onPagechange, onIncreament, pagesize, currentPage, Totalitem }) => {

    return (
        <>


            {
                data.map((i, index) => {
                    console.log(i);
                    return (
                        <div className="card my-2" key={i.__id}>

                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">

                                        <div className="row">
                                            <div className="col-2">
                                                <div className="avtar">
                                                    <img src={`https://i.pravatar.cc/150?u=${i.__id}`} alt={`freelancer_${i.__id}`} />
                                                </div>
                                            </div>
                                            <div className="col-10">
                                                <div className="d-flex flex-start">

                                                    <h5 className="card-title">{i.name}</h5>
                                                    <span className="mx-4">
                                                        <ReactCountryFlag
                                                            countryCode={i.countrycode}
                                                            svg
                                                            style={{
                                                                width: '2em',
                                                                height: '2em',
                                                                display: 'inline-block',
                                                            }}
                                                            title={i.countrycode}
                                                        />
                                                    </span>

                                                </div>
                                                <p className='status'>
                                                    <span>Status</span>
                                                    <Status status={i.status} />
                                                    <span>{i.status}</span>
                                                </p>
                                                <div className='d-flex flex-start'>
                                                    <StarGroup rating={i.rating} />
                                                    <p className="text-primary font-weight-bold mx-4">{i.reviews + " reviews"}</p>
                                                    <p className="text-secondary font-weight-bold mx-4">{i.charge}</p>

                                                </div>

                                            </div>

                                        </div>




                                    </div>
                                    <div className="col-12">
                                        <div className="skill my-4">
                                            {
                                                i.skills.map((value) => {
                                                    return (<b className="my-4" key={value}> <span>{value}</span> <span className="mx-2"><BsCheckLg className="text-primary" /></span></b>);
                                                })
                                            }
                                        </div>
                                        <p className='desc my-4'>{i.desc}</p>

                                    </div>
                                    <div className="col-3 offset-9">
                                        <div className="action">
                                            <Bidbtn text="View Profile" btnstyle="bid-btn" className="bg-info" />
                                            <Bidbtn text="Invite" btnstyle="bid-btn" />

                                        </div>

                                    </div>
                                </div>



                            </div>



                        </div>
                    )
                }
                )}





            <Pagination itemCount={Totalitem} currentPage={currentPage} pageSize={pagesize} onIncreament={onIncreament} onPageChange={onPagechange} />


        </>
    );
}

export default InviteListOwner;