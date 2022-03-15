
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Badge, Image, Button, Accordion, Navbar, NavDropdown } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { projectCategories } from '../data/project_categories';
import { dashboardRoutes } from "../pages/dashboard/dashboardRoutes";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";
import "../scss/home/Navigation.scss";
import Linkbar from "./Linkbar";

const Navigation = ({ loc }) => {
    const location = useLocation();
    const { pathname } = location;
    const [show, setShow] = useState(false);
    const showClass = show ? "show" : "";
    const [status, setStatus] = useState(false);
    const [togglestatus, setToggleStatus] = useState(false);
    let NavBgClass = "fixed-top px-4 multicolor";
    const toggleClass = togglestatus ? "custom_menu-btn" : "custom_menu-btn menu_btn-style";
    const menu = togglestatus ? "d-none d-lg-flex justify-content-md-between" : "d-none d-lg-flex justify-content-md-between active";
    const changeNavbarColor = () => {

        if (window.scrollY >= 80) {


            setStatus(true);

        }
        else {

            setStatus(false);
        }

    }
    window.addEventListener('scroll', changeNavbarColor);

    const handleMenu = (e) => {
        if (window.innerWidth >= 992) {
            setToggleStatus(e);

        } else {

            setShow(!show);



        }

    }


    const CollapsableNavItem = (props) => {
        const { eventKey, title, icon, children = null } = props;
        const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

        return (
            <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
                <Accordion.Item eventKey={eventKey}>
                    <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
                        <span>
                            <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
                            <span className="sidebar-text">{title}</span>
                        </span>
                    </Accordion.Button>
                    <Accordion.Body className="multi-level">
                        <Nav className="flex-column">
                            {children}
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        );
    };

    const NavItem = (props) => {
        const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
        const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
        const navItemClassName = link === pathname ? "active" : "";
        const linkProps = external ? { href: link } : { as: Link, to: link };

        return (
            <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
                <Nav.Link {...linkProps} target={target} className={classNames}>
                    <span>
                        {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
                        {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

                        <span className="sidebar-text">{title}</span>
                    </span>
                    {badgeText ? (
                        <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
                    ) : null}
                </Nav.Link>
            </Nav.Item>
        );
    };

    return (
        <>

            <Navbar expand={false} collapseOnSelect className={loc === "/" ? status === true ? NavBgClass.replace("multi", "single") : NavBgClass.replace("single", "multi") : NavBgClass.replace("multi", "single")}>

                <div className={menu} id="menus" style={{ width: "90%" }}>



                    <div className="left d-md-flex justify-content-md-between">
                        <Navbar.Brand className="me-lg-5" as={Link} to={"/"}>
                            Freelancer Web
                        </Navbar.Brand>
                        <NavItem title="Home" link={"/"} />
                        <NavItem title="About" link={"/about"} />
                        <NavItem title="Work" link={"/"} />
                        <NavDropdown title="Category" id="nav-dropdown">
                            {
                                (projectCategories.categories).map((i, index) => <NavDropdown.Item key={index} href={`/projects/${i.name}`} eventKey="Basic Pricing">{i.name}</NavDropdown.Item>)
                            }


                        </NavDropdown>

                    </div>

                    <div className="right">
                        <Link to="/projects" className='mx-3'>
                            <Button variant='outline-light' className='rounded-0'>Find Project</Button>
                        </Link>
                        <Link to="/postproject" className='mx-3'>
                            <Button variant='outline-light' className='rounded-0'>Post a project</Button>
                        </Link>
                        <Link to="/signup" className='mx-3'>
                            <Button variant='outline-light' className='rounded-0'>Signup</Button>
                        </Link>

                        <Link to="/login" className='mx-3 rounded-0'>
                            <Button variant='danger' className='rounded-0'>
                                Login
                            </Button>
                        </Link>
                    </div>





                </div>



                <Navbar.Toggle as={Button} aria-controls="main-navbar"  >
                    <div className={toggleClass}>
                        <button onClick={() => handleMenu(!togglestatus)}>
                            <span className=" s-1">

                            </span>
                            <span className="s-2">

                            </span>
                            <span className="s-3">

                            </span>
                        </button>
                    </div>
                </Navbar.Toggle>
            </Navbar>
            <Linkbar />
            <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
                <SimpleBar className={`collapse ${showClass} sidebar d-lg-none bg-primary text-white`}>

                    <Nav className="flex-column pt-3 pt-md-0" style={{ marginTop: 150 }}>

                        <NavItem title="Home" link={"/"} />
                        <NavItem title="About" link={"/about"} />
                        <NavItem title="Work" link={"/"} />
                        <NavDropdown title="Category" id="nav-dropdown">
                            {
                                (projectCategories.categories).map((i, index) => <NavDropdown.Item key={index} href={`/projects/${i.name}`} eventKey="Basic Pricing">{i.name}</NavDropdown.Item>)
                            }


                        </NavDropdown>









                    </Nav>

                </SimpleBar>
            </CSSTransition>
        </>
    );
};


export default Navigation;

























