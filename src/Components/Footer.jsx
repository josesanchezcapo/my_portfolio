import React from "react";
// adding stylesheet * shared
import {Container, Row , Col, Image} from 'react-bootstrap';
import './stylesheet.css';

function Footer() {
    return (
        <div>
            <footer className="footer">
                {/* Add font awesome icons */}
                <a href="https://github.com/josesanchezcapo" target="_blank" className="fa fa-github" />
                <a href="https://twitter.com/josesanchezcapo" target="_blank" className="fa fa-twitter" />
                <a href="https://www.linkedin.com/in/josesanchezcapo/" target="_blank" className="fa fa-linkedin" />
            </footer>
            {/* Optional JavaScript */}
            {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>
    );
}

export default Footer;