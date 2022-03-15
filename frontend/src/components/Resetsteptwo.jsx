import React from 'react';
import { Container, Card, Row, Col, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from "react-router-dom";
// import { dashboardRoutes } from "../dashboard/dashboardRoutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
const Resetsteptwo = ({ nextStep, handleFormData, values }) => {
    console.log(values);
    return (
        <main>
            <section className="d-flex align-items-center mb-lg-5" style={{ height: "100vh" }}>
                <Container>
                    <Row className="justify-content-center">

                        <Col xs={12} className="d-flex align-items-center justify-content-center">
                            <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                <h3 className="mb-4">Reset password</h3>
                                <Form.Group id="password" className="mb-4">
                                    <Form.Label>Your Password</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faUnlockAlt} />
                                        </InputGroup.Text>
                                        <Form.Control required value={values.pass} name="pass" onChange={handleFormData("pass")} type="password" placeholder="Password" />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group id="confirmPassword" className="mb-4">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faUnlockAlt} />
                                        </InputGroup.Text>
                                        <Form.Control required value={values.cpass} name="cpass" onChange={handleFormData("cpass")} type="password" placeholder="Confirm Password" />
                                    </InputGroup>
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100" onClick={nextStep}>
                                    Reset
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}

export default Resetsteptwo;