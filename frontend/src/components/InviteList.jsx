import React from 'react';
import { Card, Button, Row, Col } from '@themesberg/react-bootstrap';
import Status from './Status';
import ReactCountryFlag from "react-country-flag";
import "../scss/dash/Invitelist.scss";
import RatingBox from './RatingBox';
import StarGroup from './StarGroup';
import Pagination from './Pagination';
const InviteList = ({ data, onPagechange, onIncreament, pagesize, currentPage, Totalitem }) => {


    return (
        <>
            {data.map((i) => {

                return (
                    <Card key={i.__id}>

                        <Row>
                            <Col md={2} sm={12} className="d-flex  justify-content-start">
                                <Card.Img src={`https://i.pravatar.cc/150?u=${i.__id}`} className="profile mt-lg-3" />

                            </Col>
                            <Col md={10}>
                                <Card.Body>
                                    <Card.Title className='text-capitalize'>{i.project_owner.name}
                                        <ReactCountryFlag
                                            className='mx-2 flag-circle'
                                            countryCode={i.project_owner.countrycode}
                                            svg
                                            style={{
                                                width: '2em',
                                                height: '2em',
                                            }}
                                            title={i.project_owner.countrycode}
                                        />
                                    </Card.Title>
                                    <Card.Text>

                                        <div className='d-flex align-items-center'> <Status status={i.project_owner.status} />
                                            <span className='mx-2'>{i.project_owner.status}</span>

                                        </div>


                                    </Card.Text>
                                    <div className="row my-2">
                                        <div className="col-lg-3 d-flex">
                                            <RatingBox />
                                            <StarGroup rating={i.project_owner.rating} />

                                        </div>
                                        <div className="col-lg-3">{(i.project_owner.reviews).length}<span className='ml-1'> Reviews</span></div>
                                        <div className="col-lg-3">{i.project_owner.project_done} <span className='ml-1'> Project Completed</span></div>
                                        <div className="col-lg-3">Estimated Budget {i.project_owner.Estimated_Budget}</div>

                                        <div className="col-12">
                                            <div className="park-info">

                                                <h4 className='park_title'>{i.name}</h4>
                                                <p className='park_desc'>

                                                    {i.desc}

                                                </p>
                                            </div>
                                        </div>




                                    </div>

                                    <Button variant="info">Accept</Button>
                                    <Button variant="danger" className='mx-4'>Cancel</Button>
                                </Card.Body>
                            </Col>
                        </Row>


                    </Card>

                );


            })
            }
            <Pagination itemCount={Totalitem} currentPage={currentPage} pageSize={pagesize} onIncreament={onIncreament} onPageChange={onPagechange} />
        </>




    );
}

export default InviteList;