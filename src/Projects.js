// src/Projects.js
import React from "react";
import MainNav from "./Components/MainNav";
// adding stylesheet * shared
import './Components/stylesheet.css';
import Footer from "./Components/Footer";

function Projects(props) {
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
            <link rel="stylesheet" href="./Assets/stylesheet/stylesheet.css" />
            {/* Add icon library */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            {/* Favicon */}
            <link rel="icon" href="https://icons.iconarchive.com/icons/google/noto-emoji-smileys/512/10101-alien-icon.png" type="image/png" sizes="16x16" />
            <title>JSC:My Porfolio</title>
            {/* Main Container */}
            <div className="container">
                <div className="card border-light mb-3" style={{maxWidth: '940px', marginTop: '15%'}}>
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4">
                            <div className="card h-100">
                                <a href="https://josesanchezcapo.github.io/bc01-code-refactor/" target="_blank">
                                    <img src="https://josesanchezcapo.github.io/bootcamp-porfolio/Assets/Images/first_project.png" className="card-img-top" alt="my first project , code refactor" />
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title">Code Refactoring</h5>
                                    <p className="card-text">The assignment's purpose was to re-factoring a single page using acquired knowledge
                                        and skills on HTML, CSS, semantic elements, Github, and more. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <a href="https://josesanchezcapo.github.io/bc05-work-day-scheduler" target="_blank">
                                    <img src="https://josesanchezcapo.github.io/bootcamp-porfolio/Assets/Images/screencap-schedualer.png" className="card-img-top" alt="Work Day schedualer" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">Work Day Scheduler</h5>
                                    <p className="card-text">A simple calendar application that allows a user to save events for each hour of the
                                        day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and
                                        CSS powered by jQuery.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <a href="https://josesanchezcapo.github.io/bc03-password-generator-app/" target="_blank">
                                    <img src="https://josesanchezcapo.github.io/bootcamp-porfolio/Assets/Images/screencap-password-generator.png" className="card-img-top" alt="Password Generator app" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">Password-Generator</h5>
                                    <p className="card-text">JavaScript: Password Generator.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <a href="https://josesanchezcapo.github.io/SMU-Project-01/" target="_blank">
                                    <img src="https://josesanchezcapo.github.io/bootcamp-porfolio/Assets/Images/screencap-tripcase.png" className="card-img-top" alt="Tripcase app" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">First group Project: Tripcase</h5>
                                    <p className="card-text">A weather app that takes the cities that you want to visit and gives you information
                                        about the weather, air quality, and Fema disaster information.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <a href="https://github.com/josesanchezcapo/bc10-Template-Engine-Employee/tree/main" target="_blank">
                                    <img src="https://josesanchezcapo.github.io/bootcamp-porfolio/Assets/Images/appNode.gif" className="card-img-top" alt="Template Engine-Employee Summary" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">Template Engine Employee Summary</h5>
                                    <p className="card-text">Console application that collect information from myteam and render the information on  a webpage,('team.html').
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <a href="https://doctorgo.herokuapp.com/" target="_blank">
                                    <img src="https://josesanchezcapo.github.io/bootcamp-porfolio/Assets/Images/doctogo.png" className="card-img-top" alt="Do-to-Go, (DoctorToGo)" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">Do-to-Go, (DoctorToGo)</h5>
                                    <p className="card-text">The purpose of the app is to help organize and schedule appointments for Doctors who perform house calls. Patients can enter info such as Name, age, address, illness, pain level. The info is entered in a database that will help schedule appointments. Doctors have the option of adding clients and removing clients that have been seen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Optional JavaScript */}
            {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>,
        <Footer />
    ]

}

export default Projects;