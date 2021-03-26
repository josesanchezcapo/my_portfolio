// adding imports
import React from "react";
import {Nav , NavLink} from 'react-bootstrap';
import  {LinkContainer} from 'react-router-bootstrap';

// adding stylesheet * shared
import './stylesheet.css';

function MainNav () {

    return [

        <Nav className="main-nav">
            <a className="nav-name" href="#">Jose Sanchez-Capo </a>

            <section className={"nav-alignment"}>
                <LinkContainer to="/" >
                    <NavLink>Home</NavLink>
                </LinkContainer>
                <LinkContainer to="/projects" >
                    <NavLink>Projects</NavLink>
                </LinkContainer>
                <LinkContainer to="/contact_me" >
                    <NavLink>Contact Me</NavLink>
                </LinkContainer>
            </section>
        </Nav>
    ]
}

export default MainNav;