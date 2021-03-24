import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import './stylesheet.css';

function MainNav () {


    return (

        <Navbar className={"main-nav"}>
            <Navbar className={"nav-name"}>Jose Sanchez-Capo</Navbar>
                <Nav className={"nav-menu"}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#Resume">Resume</Nav.Link>
                </Nav>
        </Navbar>

    );
}

export default MainNav;