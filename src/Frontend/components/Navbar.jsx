import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const MyNavbar = () => {
    const [acitveKey, setActiveKey] = useState('home');
    const [expanded, setExpanded] = useState(false);

    const scrollToSection = (event, id) => {
        event.preventDefault();
        const section = document.getElementById(id);
        setActiveKey(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth",
            });
        }
        setExpanded(false);
    };
    return (
        <Navbar expand="lg" className="custom-navbar position-fixed align-text-right" expanded={expanded}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" activeKey={acitveKey}>
                        <Nav.Link eventKey="home" className="NavLink" href="#" onClick={(e) => scrollToSection(e, 'home')}>Home</Nav.Link>
                        <Nav.Link eventKey="about" className="NavLink" href="#" onClick={(e) => scrollToSection(e, 'about')}>About</Nav.Link>
                        <Nav.Link eventKey="skills" className="NavLink" href="#" onClick={(e) => scrollToSection(e, 'skills')}>Skills</Nav.Link>
                        <Nav.Link eventKey="projects" className="NavLink" href="#" onClick={(e) => scrollToSection(e, 'projects')}>Projects</Nav.Link>
                        <Nav.Link eventKey="contact" className="NavLink" href="#" onClick={(e) => scrollToSection(e, 'contact')}>Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};