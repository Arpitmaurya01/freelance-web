
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt,faUserAlt,faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { userRoutes } from "../../userRoutes";
import { country } from '../../data/Country.jsx';


const BgImage="/static/assets/img/illustrations/signin.svg"


export default () => {
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container fluid>
          <p className="text-center">
            <Card.Link as={Link} to="/" className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-700">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form className="mt-4">
                  <Row>
                    <Col xs={12} md={6}>
                    <Form.Group id="first_name" className="mb-4">
                    <Form.Label>First Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUserAlt} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" placeholder="john" />
                    </InputGroup>
                  </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                    <Form.Group id="last_name" className="mb-4">
                    <Form.Label>Last Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUserAlt} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" placeholder="doe" />
                    </InputGroup>
                  </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12} md={6}>
                    <Form.Group id="mobile" className="mb-4">
                    <Form.Label>Mobile</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="number" placeholder="mobile number" />
                    </InputGroup>
                  </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                    <Form.Group id="email" className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="email" placeholder="doe@gmail.com" />
                    </InputGroup>
                  </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                    <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Password" />
                    </InputGroup>
                  </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                    <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Confirm Password" />
                    </InputGroup>
                  </Form.Group>

                    </Col>

                  </Row>

                  <Form.Group id="country" className="mb-4">
                    <Form.Select>
                      <option value="">Country</option>
                      {country.map(i=> <option key={i.code} value={i.name}>{i.name}</option>)}
                     
                    </Form.Select>
                   
                  </Form.Group>


                

                 <Row>
                 <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="mx-2" style={{width:30,height:20}} />
                    <FormCheck.Label htmlFor="terms">
                    Yes! Send me genuinely useful email every now and then to help me get the most out of company name
                   
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck>

                 </Row>
                 <Row>
                 <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="term2" className="mx-2" style={{width:30,height:20}} />
                    <FormCheck.Label htmlFor="terms2">
                    Yes! I understand and agree to company name, including the and .  
                   <span className="d-inline-block">Terms of Services</span>
                   <span className="d-inline" >User Agreement Privacy Policy</span>
                    </FormCheck.Label>
                  </FormCheck>

                 </Row>
                  
                 
                 
                 

                  <Button variant="primary" type="submit" className="w-100">
                    Sign up
                  </Button>
                </Form>

                <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link as={Link} to={userRoutes.Login.path} className="fw-bold">
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
