import React, { useState } from "react";
import { Form, Card, Button } from "@themesberg/react-bootstrap";
import validator from "validator";
import { Row, Col } from "@themesberg/react-bootstrap";
import { Languages } from './../../data/Languages.jsx';
import { country } from './../../data/Country.jsx';
import { Link } from "react-router-dom";

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, handleFormData, prevStep, values }) => {
    //creating error state for validation
    const [error, setError] = useState(false);

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to next step
        if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
            setError(true);
        } else {
            nextStep();
        }
    };
    return (

        <div className="wrapper" style={{ marginTop: 90 }}>
            <Card>
                <Card.Header>Complete your Bid</Card.Header>
                <Card.Body>
                    <Form onSubmit={submitFormData}>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col lg={3}>
                                    <Form.Label>Bid Value <span className="text-danger">*</span></Form.Label>
                                </Col>
                                <Col lg={9}>

                                    <Form.Control
                                        label="On site"
                                        name="bidvalue"
                                        type={"number"}
                                        placeholder="bidvalue"
                                        onChange={handleFormData("bidvalue")}



                                    />

                                    <small>
                                        recoverable amount USD 0
                                    </small>


                                    {error ? (
                                        <Form.Text style={{ color: "red" }}>
                                            This is a required field
                                        </Form.Text>
                                    ) : (
                                        ""
                                    )}
                                </Col>
                            </Row>

                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Row>
                                <Col lg={3}>

                                    <Form.Label>Your Proposal <span className="text-danger">*</span></Form.Label>
                                </Col>
                                <Col lg={9}>

                                    <Form.Control
                                        style={{ border: error ? "2px solid red" : "" }}
                                        name="proposal"
                                        defaultValue={values.proposal}
                                        type="text"
                                        placeholder="Your Proposal"
                                        onChange={handleFormData("proposal")}
                                        as="textarea" rows={5}
                                    />
                                    {error ? (
                                        <Form.Text style={{ color: "red" }}>
                                            This is a required field
                                        </Form.Text>
                                    ) : (
                                        ""
                                    )}
                                </Col>
                            </Row>

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Row>

                                <Col lg={12}>
                                    <Form.Group controlId="formFileMultiple" className="mb-3">
                                        <Form.Label>Multiple attachment are allowed</Form.Label>
                                        <Form.Control type="file" multiple onChange={handleFormData("attachment")} />
                                    </Form.Group>

                                    {error ? (
                                        <Form.Text style={{ color: "red" }}>
                                            This is a required field
                                        </Form.Text>
                                    ) : (
                                        ""
                                    )}
                                </Col>
                            </Row>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="termsandcondition">
                            <div style={{ marginLeft: 20, marginBottom: 10 }}>
                                <Link to="/" className="text-info h6">Terms And Conditions</Link>
                            </div>
                            <Form.Check type="checkbox" label="Your account will be suspended if you share personal contact (email, phone/mobile, etc.) without the approval." name="termsandcondition" value={values.termsandcondition === "false" ? true : false} onChange={handleFormData("termsandcondition")} />
                        </Form.Group>






                        <Row className="d-flex justify-content-end">
                            <div className=" w-50 d-flex justify-content-end">

                                <Button variant="primary" className="m-2" onClick={prevStep}>
                                    Previous
                                </Button>

                                <Button className="m-2" variant="primary" type="submit" onClick={nextStep}>
                                    submit
                                </Button>
                            </div>

                        </Row>


                    </Form>
                </Card.Body>

            </Card >
        </div >


    );
};

export default StepThree;
