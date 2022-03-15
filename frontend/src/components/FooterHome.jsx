
import { Link } from "react-router-dom"
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import "../scss/home/Footer.scss";
import React from 'react';
const Footer = () => {
    return (
        <>
            <section className="info_section ">
                <div className="info_container layout_padding-top">
                    <div className="container">


                        <div className="info_main">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="info_link-box">
                                        <ul>
                                            <li>
                                                <button className="button-red">
                                                    Request Services
                                                </button>
                                            </li>
                                            <li>
                                                <button className="button-white">
                                                    Become Freelancer
                                                </button>
                                            </li>
                                        </ul>
                                        <ul>

                                            <p>Get Queries ?</p>

                                            <li className="">
                                                <Link className="" to="/">Frequently Asked Question </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <h5>
                                        Services
                                    </h5>
                                    <ul>
                                        <li>
                                            <Link to="/projects/Website Design & Development">
                                                Website Design & Development







                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/projects/Mobile Application Design & Development">
                                                Mobile Application Design & Development</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects/Banner & Logo Design">
                                                Banner & Logo Design</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects/Landscape Design & AutoCAD">
                                                Landscape Design & AutoCAD</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects/Content Writting & Proof Reading">
                                                Content Writting & Proof Reading</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects/Digital Marketing">
                                                Digital Marketing</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects/Data Analysis">
                                                Data Analysis</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects/Consulting">
                                                Consulting</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-3">
                                    <h5>
                                        Freelancer By Skills
                                    </h5>
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                Freelancer Software Developer








                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Freelancer Data Scientist
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Freelancer Statistician
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Freelancer Consultant
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Freelancer Designer
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Freelancer Content Writer</Link>
                                        </li>

                                    </ul>
                                </div>

                                <div className="col-md-3 ">
                                    <div className="info_form ">
                                        <h5>
                                            Follow Us
                                        </h5>
                                        <ul className="follow">
                                            <li>
                                                <Link to="/">
                                                    <i>
                                                        <FaFacebookSquare />
                                                    </i>
                                                    <span>Facebook</span></Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <i>
                                                        <FaTwitterSquare />
                                                    </i>
                                                    <span>Twitter</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <i>
                                                        <FaInstagramSquare />

                                                    </i>
                                                    <span>Instagram</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <div className="Contact ">
                                        <h5>
                                            Email and Contact Us:
                                        </h5>
                                        <ul>
                                            <li>
                                                <Link to="/"><i><BsFillEnvelopeFill /></i><span>collabrate@gmail.com</span></Link>
                                            </li>
                                            <li>
                                                <Link to="/"><i><HiLocationMarker /></i><span> K 21/5 B-20, muscat,oman</span></Link>
                                            </li>
                                            <li>
                                                <Link to="/"><i><BiPhoneCall /></i><span>9848562312</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <div className="Contact ">
                                        <h5>
                                            Payment Partner
                                        </h5>
                                        <ul className="d-flex justify-content-between">
                                            <li>
                                                <Link to="/"><i></i><span>Paytm</span></Link>
                                            </li>
                                            <li>
                                                <Link to="/"><i></i><span> Phonepe</span></Link>
                                            </li>
                                            <li>
                                                <Link to="/"><i></i><span>AXIS</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 col-md-10 mx-auto">
                                <div className="info_contact layout_padding">
                                    <div className="Links">
                                        <ul className="d-flex justify-content-center flex-wrap">
                                            <li className="ml-2 p-2">
                                                <Link className="text-decoration-none" to="/">Home</Link>
                                            </li>
                                            <li className="ml-3 p-2">
                                                <Link className="text-decoration-none" to="/about">About Us</Link>
                                            </li>
                                            <li className="ml-3 p-2">

                                                <Link className="text-decoration-none" to="/">How It's Work</Link>
                                            </li>
                                            <li className="ml-3 p-2">
                                                <Link className="text-decoration-none" to="/">Browse Expert</Link>

                                            </li>
                                            <li className="ml-3 p-2">

                                                <Link className="text-decoration-none" to="/">Testimonial</Link>
                                            </li>
                                            <li className="ml-3 p-2">

                                                <Link className="text-decoration-none" to="/">Advertise With Us</Link>
                                            </li>
                                            <li className="ml-3 p-2">

                                                <Link className="text-decoration-none" to="/">Terms & Conditions</Link>
                                            </li>
                                            <li className="ml-3 p-2">

                                                <Link className="text-decoration-none" to="/">Privacy Policy</Link>
                                            </li>
                                            <li className="ml-3 p-2">

                                                <Link className="text-decoration-none" to="/">Cookies Policy</Link>
                                            </li>
                                            <li className="ml-3 p-2">
                                                <Link className="text-decoration-none" to="/">Code Of Conduct</Link>

                                            </li>


                                        </ul>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <footer className="container-fluid footer_section ">
                <div className="container">
                    <p>
                        &copy; <span id="displayDate"></span> All Rights Reserved By
                        <Link to="/">Freelancer Web</Link>
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;