import React from 'react';
import "../scss/home/attachment.scss";
import { FileIcon, defaultStyles } from 'react-file-icon';
import { Modal, Button } from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
const Attachment = ({ data }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const docs = [
        { uri: require("../Files/dummy.xls") },

    ];
    return (
        <div className="attachment-wrapper">
            <h4 className='title'>Attachement</h4>
            <div className="box-conatiner">
                {data.map((value, ind) => {

                    const ext = value.filename.split(".")[1];

                    return (
                        <div className="box" key={ind}>
                            <div className="inner-box">
                                <FileIcon extension={ext}{...defaultStyles[ext]} />
                            </div>
                            <p className="file text-capitalize">{value.filename}</p>
                            <div className="actions d-flex justify-content-between align-items-center">

                                <Link to="#" onClick={() => setModalShow(true)}>View</Link>
                                <Link to="../Files/dummy.xls" target="_" download>Download</Link>

                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    docs={docs}
                                />

                            </div>


                        </div>
                    );

                })
                }



            </div>
        </div>
    );
}

export default Attachment;

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    View Document
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DocViewer pluginRenderers={DocViewerRenderers} config={{
                    header: {
                        disableHeader: false,
                        disableFileName: false,
                        retainURLParams: false
                    }
                }} documents={props.docs} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}