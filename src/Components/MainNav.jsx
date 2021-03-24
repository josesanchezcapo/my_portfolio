import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import './stylesheet.css';
import {NavLink} from "react-bootstrap";

function MainNav () {

    return (

        <nav className="main-nav">
            <NavLink className="nav-name" href="#">Jose Sanchez-Capo </NavLink>
            <section className="nav-aligment">
                <Nav.Link className="navbar-brand" href="#">Home</Nav.Link>
                <NavLink className="navbar-brand" href="./portfolio.html">My Porfolio</NavLink>
                <NavLink className="navbar-brand" href="./contact.html">Contact Me</NavLink>
                <NavLink className="navbar-brand" href="./resume.html">My Resume</NavLink>
            </section>
        </nav>
    );
}

export default MainNav;