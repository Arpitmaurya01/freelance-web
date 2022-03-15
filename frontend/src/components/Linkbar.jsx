import React from 'react';
import { Container, Navbar, Nav } from '@themesberg/react-bootstrap';
const Linkbar = () => {
    return (
        <div className='w-100' style={{ position: "relative", top: 90, marginBottom: 80, zIndex: 999, }}>
            <Navbar style={{ background: "rgba(255,255,255,0.25)!important" }}>
                <Nav.Link href="#home" style={{ color: "#000" }}>Website Development</Nav.Link>
                <Nav.Link href="#features" style={{ color: "#000" }}>Mobile Application</Nav.Link>
                <Nav.Link href="#pricing" style={{ color: "#000" }}>Banner & Logo Design</Nav.Link>
                <Nav.Link href="#pricing" style={{ color: "#000" }}>Digital Marketing</Nav.Link>
                <Nav.Link href="#pricing" style={{ color: "#000" }}>Consulting</Nav.Link>
            </Navbar>
        </div>

    );
}

export default Linkbar;