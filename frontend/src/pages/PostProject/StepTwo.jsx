import React, { useState } from "react";
import { Form, Card, Button } from "@themesberg/react-bootstrap";
import validator from "validator";
import { Row, Col } from "@themesberg/react-bootstrap";
import { Languages } from './../../data/Languages.jsx';
import { country } from './../../data/Country.jsx';

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
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
                <Card.Header>Submit Your Requirement</Card.Header>
                <Card.Body>
                    <Form onSubmit={submitFormData}>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col lg={3}>
                                    <Form.Label>Freelancer Availablity </Form.Label>
                                </Col>
                                <Col lg={9}>

                                    <Form.Check
                                        inline
                                        label="On site"
                                        name="availablity"
                                        type={"radio"}
                                        value={"onsite"}
                                        id={`inline-1`}
                                        onChange={handleFormData("availablity")}



                                    />
                                    <Form.Check
                                        inline
                                        label="Remote"
                                        name="availablity"
                                        type={"radio"}
                                        value={"remote"}
                                        id={`inline-2`}
                                        onChange={handleFormData("availablity")}

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
                                <Col lg={3}>

                                    <Form.Label>Languages</Form.Label>
                                </Col>
                                <Col lg={9}>

                                    <Form.Select
                                        name="language"
                                        type={"select"}

                                        onChange={handleFormData("language")}

                                    >
                                        <option value="">Languages</option>
                                        {
                                            Languages.map(i => <option key={i.code} value={i.name}>{i.name}</option>)
                                        }
                                    </Form.Select>
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

                                    <Form.Label>Gender </Form.Label>
                                </Col>
                                <Col lg={9}>

                                    <Form.Select
                                        name="gender"
                                        type={"select"}

                                        onChange={handleFormData("gender")}

                                    >
                                        <option value="">Gender</option>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                        <option value="others">others</option>

                                    </Form.Select>

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

                                    <Form.Label>Nationality of Project Owner</Form.Label>
                                </Col>
                                <Col lg={9}>

                                    <Form.Select
                                        name="country"
                                        type={"select"}

                                        onChange={handleFormData("country")}

                                    >
                                        <option value="">country</option>
                                        {country.map(i => <option key={i.code} value={i.name}>{i.name}</option>)}

                                    </Form.Select>

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

                                    <Form.Label>Nationality of Freelancer </Form.Label>
                                </Col>
                                <Col lg={9}>

                                    <Form.Select
                                        name="nationality"
                                        type={"select"}

                                        onChange={handleFormData("nationality")}

                                    >
                                        <option value="">Nationality</option>
                                        {country.map(i => <option key={i.code} value={i.name}>{i.name}</option>)}

                                        <option value="female">female</option>
                                        <option value="others">others</option>

                                    </Form.Select>

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


                        <Row className="d-flex justify-content-end">
                            <div className=" w-50 d-flex justify-content-end">

                                <Button variant="primary" className="m-2" onClick={prevStep}>
                                    Previous
                                </Button>

                                <Button className="m-2" variant="primary" type="submit" onClick={nextStep}>
                                    Next
                                </Button>
                            </div>

                        </Row>


                    </Form>
                </Card.Body>

            </Card >
        </div >


    );
};

export default StepTwo;
