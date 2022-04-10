import React from "react";
import { Card, Col, Row, Form, Button, Modal } from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

const Final = ({ values, handleFormData, prevStep }) => {

    //destructuring the object from values
    const [modalShow, setModalShow] = React.useState(false);

    const { projectTitle, desc, category, minbudget, maxbudget, bidstart, bidend, bidvalue, proposal, attachment, termsandcondition } = values;


    return (

        <div className="wrapper" style={{ marginTop: 90 }}>
            <Card >

                <Card.Header>
                    <Button variant={"danger"} className="m-2 btn-sm " onClick={prevStep}>
                        Back
                    </Button>


                </Card.Header>
                <Card.Body>
                    <h4>Are these details is correct ?</h4>




                    <Row className="my-2">
                        <Col lg={4}>
                            <div className="d-flex flex-column justify-content-center align-content-center">

                                <p className="text-center my-2">
                                    Bid Period  $ {bidstart} - $ {bidend}

                                </p>
                                <p className="text-center my-2">

                                    Min/Max Budget    $ {minbudget} - $ {maxbudget}

                                </p>


                            </div>

                        </Col>
                        <Col lg={8}>

                            <h4 className="my-2">
                                {projectTitle}{" "}
                            </h4>
                            <p className="my-2">
                                {desc}{" "}
                            </p>
                            <div className="category-wrap">
                                <div className={`box `} >
                                    <p>

                                        {category}
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={12}>
                            <Form.Group className="mb-3" controlId="termsandcondition">
                                <Form.Check type="checkbox" onClick={() => setModalShow(true)} label="Terms and Conditions" name="finaltermsandcondition" value={values.finaltermsandcondition === "false" ? true : false} onChange={handleFormData("finaltermsandcondition")} />
                            </Form.Group>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Col>
                        <Col lg={12} className="d-flex justify-content-end my-2">
                            <div className=" w-50 d-flex justify-content-end">

                                <Button variant="info" className="m-2">
                                    Save As Draft
                                </Button>

                                <Button className="m-2" variant="success" type="submit">
                                    Yes Post My Project
                                </Button>
                                <Button className="m-2" variant="danger" type="submit">
                                    Cancel
                                </Button>
                            </div>
                        </Col>



                        <Row>

                            <Col md={4}>


                                attachement preview 1


                            </Col>
                            <Col md={4}>


                                attachement preview 2


                            </Col>
                            <Col md={4}>


                                attachement preview 3


                            </Col>

                        </Row>

                        <Col className="my-2">
                            <div className="dropdown-divider my-3"></div>
                            <p className="h6 text-muted">
                                By Clicking ‘Yes my Project ’, you agree to the Terms & Conditions & Privacy Policy

                                Copyright @2021 Collabrate technology pvt Ltd.
                            </p>
                        </Col>
                    </Row>




                </Card.Body>
            </Card>


        </div>

    );
};


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Terms and Conditions
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Freelancer</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam hic, facere nostrum amet esse impedit facilis tenetur non ratione nihil sed praesentium nemo magni ipsa architecto excepturi soluta, rem sequi.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Final;
