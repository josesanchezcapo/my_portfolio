import React from "react";
import MainNav from "./Components/MainNav";
// adding stylesheet * shared
import './Components/stylesheet.css';
import Footer from "./Components/Footer";

function Main () {

    // Returning array of components

    return [
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
            <MainNav />,
            {/* Main Container */}
            <div className="container">
                <article className="main-article">
                    <div className="card border-primary mb-3" style={{marginTop: '10%'}}>
                        <div className="card-header">
                            <h2>About Me</h2>
                        </div>
                        <div className="card-body">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="https://josesanchezcapo.github.io/bootcamp-porfolio/Assets/Images/me_yall.JPG" className="card-img" alt="my selft and my son, always together" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">My Name is Jose...</h5>
                                        <p className="card-text">I'm a NetSuite Administrator / Javascript developer with over 15 years of extensive experience in diverse technologies, focused on the past five years on the design, development, and implementation of multiples solutions and integrations (Dell Boomi, Celigo) within NetSuite. Additional, development
                                            of BI solutions using Power BI or Tableau. Knowledge in SQL, C#, Javascript, Node.js, and React. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></article>
            </div>
            {/* Main Footer*/}
            {/* Optional JavaScript */}
            {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>,
        <Footer />
    ]

}
export default  Main;

