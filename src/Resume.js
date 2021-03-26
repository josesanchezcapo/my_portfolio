// src/Resume.js
import React from "react"
import ReactDOM from "react-dom";
import MainNav from "./Components/MainNav";
import Footer from "./Components/Footer";
// adding stylesheet * shared
import './Components/stylesheet.css';
import './images/Resume_Jose_Sanchez_Capo.pdf';

function Resume(props) {
    return [
        <MainNav />,
        <div>
            {/* Required meta tags */}
            <meta charSet="utf-8" />
            {/* Setting The Viewport */}
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            {/* css files reference */}
            <link rel="stylesheet" type="text/css" href="./assets/css/reset.css" />
            {/* Bootstrap CSS */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
            {/* Overwrite bootstrap elements with my own css*/}
            <link rel="stylesheet" href="stylesheet.css" />
            {/* Add icon library */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            {/* Favicon */}
            <link rel="icon" href="https://icons.iconarchive.com/icons/google/noto-emoji-smileys/512/10101-alien-icon.png" type="image/png" sizes="16x16" />
            <title>JSC:My Resume</title>
            <div className="container">
                {/* Display My Resume*/}
                <div className>
                    <iframe src="Resume_Jose_Sanchez_Capo.pdf" style={{width: '1200px', height: '1000px', marginTop: '30px'}} />
                </div>
            </div>
            {/* Optional JavaScript */}
            {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>,
        <Footer />
    ]
}

export default Resume;