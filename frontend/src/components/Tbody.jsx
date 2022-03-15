import React from 'react';
import { Dropdown, FormSelect, Button, ButtonGroup } from '@themesberg/react-bootstrap';
import { ImMenu3 } from 'react-icons/im';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEllipsisH, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const Tbody = ({ userId, data }) => {


    return (<tbody>

        {
            data.map((i, index) => {

                return (


                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{i.accountHolderName}</td>
                        <td>{i.accountNumber}</td>
                        <td>{i.accounttype}</td>
                        <td>{i.bankName}</td>
                        <td>{i.country}</td>
                        <td>{i.ifsc}</td>
                        <td>{i.swift}</td>
                        <td>
                            <FormSelect>

                                <option value="" selected={i.isPrimary}>Primary</option>
                                <option value="" selected={i.isPrimary}>Secondary</option>
                            </FormSelect>
                        </td>
                        <td>
                            <Dropdown as={ButtonGroup}>
                                <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                                    <span className="icon icon-sm">
                                        <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/dashboard/bank">
                                        <FontAwesomeIcon icon={faPlus} className="me-2" /> Add
                                    </Dropdown.Item >
                                    <Dropdown.Item href={`/dashboard/bank?id=${userId}`}>
                                        <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
                                    </Dropdown.Item>
                                    <Dropdown.Item className="text-danger">
                                        <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </td>



                    </tr>
                );

            })
        }

    </tbody>);
}

export default Tbody;