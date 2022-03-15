import React from 'react';
import { Row, Card, Container, Col, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { userRoutes } from '../userRoutes';
const Resetstepone = ({ nextStep, handleFormData, values }) => {
    return (
        <main>
            <section className="d-flex align-items-center mb-lg-5" style={{ height: "100vh" }}>
                <Container>
                    <Row className="justify-content-center">
                        <p className="text-center">
                            <Card.Link as={Link} to={userRoutes.Login.path} className="text-gray-700">
                                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
                            </Card.Link>
                        </p>
                        <Col xs={12} className="d-flex align-items-center justify-content-center">
                            <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                <h3 className="mb-4">Reset password</h3>
                                <Form>
                                    <Form.Group id="email" className="mb-4">
                                        <Form.Label>Your Email</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </InputGroup.Text>
                                            <Form.Control autoFocus value={values.email} name="email" onChange={handleFormData("email")} required type="email" placeholder="example@company.com" />
                                        </InputGroup>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="w-100" onClick={nextStep}>
                                        Send Reset Link
                                    </Button>
                                </Form>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </main>
    );
}

export default Resetstepone;