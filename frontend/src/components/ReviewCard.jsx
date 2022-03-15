import React, { useState } from 'react';
import { Card, Col, Row } from "@themesberg/react-bootstrap";
import { ReactCountryFlag } from 'react-country-flag';
import StarGroup from './StarGroup';
import RatingBox from './RatingBox';
import { Paginate } from './../Utils/Paginate';
import Pagination from "../components/Pagination";
const ReviewCard = ({ reviews }) => {
    const [pagesize, SetPagesize] = useState(2);
    const [currentPage, SetcurrentPage] = useState(1);
    const [TotalItem, SetTotalItem] = useState(reviews.length);


    const handlePagechange = (pageno) => {

        SetcurrentPage(pageno);

    };
    const handleincreament = (val, pagescount) => {

        if (val === 1 && currentPage < pagescount) {

            SetcurrentPage(currentPage + 1);

        }
        if (val === -1 && currentPage > 1) {

            SetcurrentPage(currentPage - 1);

        }


    };

    const data = Paginate(reviews, currentPage, pagesize);


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
                                    <Card.Title className='text-capitalize'>{i.name}
                                        <ReactCountryFlag
                                            className='mx-2 flag-circle'
                                            countryCode={i.countrycode}
                                            svg
                                            style={{
                                                width: '2em',
                                                height: '2em',
                                            }}
                                            title={i.countrycode}
                                        />
                                    </Card.Title>

                                    <div className="row my-2">
                                        <div className="col-lg-3 d-flex">
                                            <RatingBox rating={i.ratecount} />
                                            <StarGroup rating={i.ratecount} />
                                        </div>


                                        <div className="col-12">
                                            <div className="park-info">
                                                <p className='park_desc'>

                                                    {
                                                        i.reviewdesc
                                                    }

                                                </p>

                                                <p>
                                                    {
                                                        i.reviewdate
                                                    }
                                                </p>
                                            </div>
                                        </div>




                                    </div>

                                </Card.Body>
                            </Col>
                        </Row>



                    </Card>
                );
            })}
            <Pagination itemCount={TotalItem} currentPage={currentPage} pageSize={pagesize} onIncreament={handleincreament} onPageChange={handlePagechange} />

        </>
    );
}

export default ReviewCard;