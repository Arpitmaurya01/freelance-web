import React from 'react';
import { Button } from "@themesberg/react-bootstrap";
import "../scss/dash/switchbtn.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const SwitchBtn = ({ onChange, currentuser }) => {
    return (
        <div className="container  d-flex justify-content-center align-content-center switch-btn-wrapper">
            <Button className='rounded-0 switch-btn' active={currentuser.freelancer ? true : false} onClick={() => onChange("freelancer")}>
                As a Freelancer


            </Button>
            <Button onClick={() => onChange("client")} active={currentuser.client ? true : false} className='rounded-0  switch-btn'>

                As a Client


            </Button>

        </div>
    );
}

