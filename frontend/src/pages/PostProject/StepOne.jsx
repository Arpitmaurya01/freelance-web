import React, { useState, useCallback, useEffect, useMemo } from "react";
import { Form, Card, Button, Row, Col } from "@themesberg/react-bootstrap";
import validator from "validator";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useDropzone } from 'react-dropzone';
import { FileIcon, defaultStyles } from 'react-file-icon';
import Multiselect from 'multiselect-react-dropdown';
import { skills } from './../../data/Skillset.jsx';
import { projectCategories } from './../../data/project_categories.jsx';


const StepOne = ({ nextStep, handleFormData, values, onbidchange, onSkillchange, onFilechange }) => {
    //creating error state for validation
    const [error, setError] = useState(false);
    const { categories } = projectCategories;
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to step 2
        nextStep();
        // if (
        //     validator.isEmpty(values.projectTitle) ||
        //     validator.isEmpty(values.desc) ||
        //     validator.isEmpty(values.category) ||
        //     validator.isEmpty(values.currencytype) ||
        //     validator.isEmpty(values.customizedbudget) ||
        //     validator.isEmpty(values.minbudget) ||
        //     validator.isEmpty(values.maxbudget) ||
        //     validator.isEmpty(values.desc)
        // ) {
        //     setError(true);
        // } else {
        // }
    };

    const baseStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        transition: 'border .3s ease-in-out'
    };

    const activeStyle = {
        borderColor: '#2196f3'
    };

    const acceptStyle = {
        borderColor: '#00e676'
    };

    const rejectStyle = {
        borderColor: '#ff1744'
    };

    const [files, setFiles] = useState([]);

    useEffect(() => {
        onFilechange(files);
    }, [files]);

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel'
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }));


    const typethumb = (file) => {
        const imageFormat = ["image/jpeg", "image/jpg", "image/png"];

        const render = () => {
            if (imageFormat.includes(file.type)) {
                return (
                    <div key={file.preview} >
                        <img
                            style={{ width: "150px", margin: "20px", float: "left" }}
                            src={file.preview}
                            alt={file.name}
                        />
                    </div >
                );
            }
            else if (file.type === "application/pdf") {

                return (
                    <div key={file.preview} >
                        <iframe src={file.preview} width="300px" height="400px">{file.name}</iframe>
                    </div>

                );


            }
            else if (file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {

                return (
                    <div className="box m-4" key={file.preview} style={{
                        maxWidth: 150, float: "left"
                    }
                    }>
                        <div className="inner-box" >
                            <FileIcon extension={"doc"}{...defaultStyles['doc']} />
                        </div>
                        <p className="file text-capitalize small my-3">{file.name}</p>



                    </div >
                );

            }
            else if (file.type === "application/vnd.ms-excel" || file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {

                return (
                    <div className="box m-4" key={file.preview} style={{
                        maxWidth: 150, float: "left"
                    }
                    }>
                        <div className="inner-box" >
                            <FileIcon extension={"xls"}{...defaultStyles['xls']} />
                        </div>
                        <p className="file text-capitalize small my-3">{file.name}</p>



                    </div >
                );

            }
        }



        return render();
    }
    const thumbs = files.slice(0, 3).map(file => (



        typethumb(file)



    ));



    // clean up
    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <div className="wrapper" style={{ marginTop: 90 }}>
            <Card>
                <Card.Header>Submit Your Requirement</Card.Header>
                <Card.Body>
                    <Form onSubmit={submitFormData}>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col lg={3}>
                                    <Form.Label>Project Title <span className="text-danger">*</span></Form.Label>
                                </Col>
                                <Col lg={9}>
                                    <Form.Control
                                        style={{ border: error ? "2px solid red" : "" }}
                                        name="projectTitle"
                                        defaultValue={values.projectTitle}
                                        type="text"
                                        placeholder="Your Project Title"
                                        onChange={handleFormData("projectTitle")}
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

                                    <Form.Label>Project Discription <span className="text-danger">*</span></Form.Label>
                                </Col>
                                <Col lg={9}>

                                    <Form.Control
                                        style={{ border: error ? "2px solid red" : "" }}
                                        name="Discription"
                                        defaultValue={values.desc}
                                        type="text"
                                        placeholder="Project Discription"
                                        onChange={handleFormData("desc")}
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
                                <Col lg={3}>

                                    <Form.Label>Project Category <span className="text-danger">*</span></Form.Label>
                                </Col>
                                <Col lg={9}>

                                    <div className="category-wrap">

                                        {
                                            categories.map(i => {

                                                return (

                                                    <div className={`box ${i.name === values.category ? "active" : ""}`} key={i.__id} id={i.__id} onClick={handleFormData("category", i.name)}>
                                                        <p>

                                                            {i.name}
                                                        </p>
                                                    </div>
                                                );


                                            })
                                        }
                                    </div>


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
                                    <label htmlFor="skill">Select Required Skills for Project</label>
                                </Col>
                                <Col lg={9}>



                                    <Multiselect
                                        displayValue="key"
                                        onKeyPressFn={function noRefCheck() { }}
                                        onRemove={onSkillchange}
                                        onSearch={function noRefCheck() { }}
                                        onSelect={onSkillchange}
                                        options={skills}
                                        selectionLimit={5}
                                        placeholder="Select Skills"

                                    />

                                </Col>
                            </Row>

                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Row>
                                <Col xl={3}>
                                    <Form.Label>Bidding Period <span className="text-danger">*</span></Form.Label>
                                </Col>
                                <Col xl={9}>
                                    <Row>
                                        <Col md={6} xs={12} >
                                            <DatePicker selected={values.bidstart} dateFormat="dd/MM/yyyy"
                                                onChange={(dt) => onbidchange("bidstart", dt)} selectsStart
                                                minDate={new Date()}
                                                showDisabledMonthNavigation
                                                startDate={values.bidstart} endDate={values.bidend}
                                                className="form-control mb-3"
                                                placeholderText="select Start Bid Date"
                                            />

                                        </Col>
                                        <Col md={6} xs={12}  >
                                            <DatePicker selected={values.bidend}
                                                onChange={(dt) => onbidchange("bidend", dt)}
                                                dateFormat="dd/MM/yyyy"
                                                selectsEnd
                                                startDate={values.bidstart}
                                                endDate={values.bidend}
                                                minDate={new Date()}
                                                showDisabledMonthNavigation
                                                className="form-control mb-3"
                                                placeholderText="select End Bid Date"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Row>

                                <Col lg={{ span: 9, offset: 3 }}>
                                    <Form.Label className="my-4 h5">What is your Estimated Budget ? <span className="text-danger">*</span></Form.Label>
                                    <Row>
                                        <Col md={4}>
                                            <select className="form-select mb-3" name="currencytype" onChange={handleFormData("currencytype",)}>
                                                <option value="USD">USD</option>
                                                <option value="INR">INR</option>
                                                <option value="OMR">OMR</option>
                                                <option value="Euro">Euro</option>

                                            </select>
                                            {error ? (
                                                <Form.Text style={{ color: "red" }}>
                                                    This is a required field
                                                </Form.Text>
                                            ) : (
                                                ""
                                            )}
                                        </Col>
                                        <Col md={8}>
                                            <select className="form-select mb-3" onChange={handleFormData("customizedbudget")}>
                                                <option value="">Cutomized Budget</option>
                                                <option value="5">5 $ </option>
                                                <option value="10">10 $ </option>
                                                <option value="15 ">15 $</option>
                                                <option value="20 ">20 $</option>
                                                <option value="25 ">25 $</option>
                                                <option value="30 ">30 $</option>
                                                <option value="35 ">35 $</option>
                                                <option value="40 ">40 $</option>
                                                <option value="45 ">45 $</option>
                                                <option value="50 ">50 $</option>
                                                <option value="60 ">60 $</option>
                                                <option value="70 ">70 $</option>
                                                <option value="80 ">80 $</option>
                                                <option value="90 ">90 $</option>
                                                <option value="100">100 $</option>
                                                <option value="200">200 $</option>
                                                <option value="Above 200">Above 200 $</option>

                                            </select>
                                            {error ? (
                                                <Form.Text style={{ color: "red" }}>
                                                    This is a required field
                                                </Form.Text>
                                            ) : (
                                                ""
                                            )}
                                        </Col>

                                        <Col md={6}>
                                            <b>Minimum Budget</b>
                                            <Form.Control
                                                style={{ border: error ? "2px solid red" : "" }}
                                                name="mixbudget"
                                                defaultValue={values.desc}
                                                type="number"
                                                placeholder="100"
                                                onChange={handleFormData("minbudget")}
                                                className="mb-3"

                                            />
                                            {error ? (
                                                <Form.Text style={{ color: "red" }}>
                                                    This is a required field
                                                </Form.Text>
                                            ) : (
                                                ""
                                            )}
                                        </Col>
                                        <Col md={6}>
                                            <b>Maximum Budget</b>
                                            <Form.Control
                                                style={{ border: error ? "2px solid red" : "" }}
                                                name="maxbudget"
                                                defaultValue={values.lastName}
                                                type="number"
                                                placeholder="200"
                                                onChange={handleFormData("maxbudget")}

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

                                </Col>
                            </Row>

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Row>

                                <Col lg={12}>
                                    <h5 className="my-2">Add your Attachment</h5>
                                    <small className="my-2"><span className="text-danger">Note </span> maximum three attachment are allowed</small>
                                    <section>
                                        <div {...getRootProps({ style })}>
                                            <input {...getInputProps()} />
                                            <div>Drag and drop your Files here.</div>
                                        </div>
                                        <aside>
                                            {thumbs}
                                        </aside>
                                    </section>
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

                        <Row className="d-flex justify-content-end mt-5">
                            <Button variant="primary" type="submit" style={{ width: 150 }}>
                                Next
                            </Button>

                        </Row>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default StepOne;
