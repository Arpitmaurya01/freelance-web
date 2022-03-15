
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faThumbsUp, faBuilding, faChartPie, faCog, faFileAlt, faHandHoldingUsd, faSignOutAlt,  faTimes, faCalendarAlt, faMapPin, faInbox, faBars} from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { dashboardRoutes } from "../pages/dashboard/dashboardRoutes";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

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
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={dashboardRoutes.Dashboard.path}>
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button as={Link} variant="secondary" size="xs" to={dashboardRoutes.Signin.path} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
             

              <NavItem title="Dashboard" link={dashboardRoutes.Dashboard.path} icon={faChartPie} />
              <NavItem title="All" link={dashboardRoutes.All.path} icon={faBars} />
              <NavItem  title="Invited" link={dashboardRoutes.Inivites.path}   icon={faEnvelope} />
              <NavItem title="Accepted" icon={faThumbsUp} link={dashboardRoutes.Accepted.path} />
              <NavItem title="My Feeds" icon={faCog} link={dashboardRoutes.Feed.path} />
              <NavItem  title="In Progress" link={dashboardRoutes.Progress.path}  icon={faCalendarAlt} />
              <NavItem  title="Completed" link={dashboardRoutes.completed.path}   icon={faMapPin} />
              <NavItem  title="Drafted" link={dashboardRoutes.Drafted.path}  icon={faMapPin} />

              <CollapsableNavItem eventKey="examples/" title="Bank" icon={faBuilding }>
              <NavItem  title="Add Bank Account" link={dashboardRoutes.Bank.path}  />
              <NavItem  title="View All Account" link={dashboardRoutes.ViewAccount.path}    />
              <NavItem  title="Transactions" link={dashboardRoutes.Transactions.path}    />
                </CollapsableNavItem>

             

              <CollapsableNavItem eventKey="examples/" title="dummy" icon={faFileAlt}>
              <NavItem title="Bootstrap Table" link={dashboardRoutes.BootstrapTables.path} />
              <NavItem title="Sign In" link={dashboardRoutes.Signin.path} />
                <NavItem title="Sign Up" link={dashboardRoutes.Signup.path} />
                <NavItem title="Forgot password" link={dashboardRoutes.ForgotPassword.path} />
                <NavItem title="Reset password" link={dashboardRoutes.ResetPassword.path} />
                <NavItem title="Lock" link={dashboardRoutes.Lock.path} />
                <NavItem title="404 Not Found" link={dashboardRoutes.NotFound.path} />
                <NavItem title="500 Server Error" link={dashboardRoutes.ServerError.path} />
                <NavItem title="Overview" link={dashboardRoutes.DocsOverview.path} />
                <NavItem title="Download" link={dashboardRoutes.DocsDownload.path} />
                <NavItem title="Quick Start" link={dashboardRoutes.DocsQuickStart.path} />
                <NavItem title="License" link={dashboardRoutes.DocsLicense.path} />
                <NavItem title="Folder Structure" link={dashboardRoutes.DocsFolderStructure.path} />
                <NavItem title="Build Tools" link={dashboardRoutes.DocsBuild.path} />
                <NavItem title="Changelog" link={dashboardRoutes.DocsChangelog.path} />
                <NavItem title="Accordion" link={dashboardRoutes.Accordions.path} />
                <NavItem title="Alerts" link={dashboardRoutes.Alerts.path} />
                <NavItem title="Badges" link={dashboardRoutes.Badges.path} />
                <NavItem external title="Widgets" link="https://demo.themesberg.com/volt-pro-react/#/components/widgets" target="_blank"  />
                <NavItem title="Breadcrumbs" link={dashboardRoutes.Breadcrumbs.path} />
                <NavItem title="Buttons" link={dashboardRoutes.Buttons.path} />
                <NavItem title="Forms" link={dashboardRoutes.Forms.path} />
                <NavItem title="Modals" link={dashboardRoutes.Modals.path} />
                <NavItem title="Navbars" link={dashboardRoutes.Navbars.path} />
                <NavItem title="Navs" link={dashboardRoutes.Navs.path} />
                <NavItem title="Pagination" link={dashboardRoutes.Pagination.path} />
                <NavItem title="Popovers" link={dashboardRoutes.Popovers.path} />
                <NavItem title="Progress" link={dashboardRoutes.Progress.path} />
                <NavItem title="Tables" link={dashboardRoutes.Tables.path} />
                <NavItem title="Tabs" link={dashboardRoutes.Tabs.path} />
                <NavItem title="Toasts" link={dashboardRoutes.Toasts.path} />
                <NavItem title="Tooltips" link={dashboardRoutes.Tooltips.path} />
              <NavItem title="table" icon={faHandHoldingUsd} link={dashboardRoutes.Transactions.path} />

              </CollapsableNavItem>


            

              
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
