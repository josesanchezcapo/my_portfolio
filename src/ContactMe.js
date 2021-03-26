// src/ContactMe.js
import React from "react"
import MainNav from "./Components/MainNav";
import Footer from "./Components/Footer";

function ContactMe(props) {
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
            <title>JSC:Contact Me</title>
            {/* Main Container */}
            <div className="container">
                <div className="card border-light mb-3" style={{maxWidth: '940px', maxHeight: 'fit-content', marginTop: '15%'}}>
                    <form className="needs-validation" noValidate>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationCustom01">First name</label>
                                <input type="text" className="form-control" id="validationCustom01" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationCustom02">Last name</label>
                                <input type="text" className="form-control" id="validationCustom02" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationCustom03">City</label>
                                <input type="text" className="form-control" id="validationCustom03" required />
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="validationCustom04">State</label>
                                <select className="custom-select" id="validationCustom04" required>
                                    <option selected disabled value>Choose...</option>
                                    <option>TX</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="validationCustom05">Zip</label>
                                <input type="text" className="form-control" id="validationCustom05" required />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Topic?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                        </div>
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </form>
                </div>
            </div>
            {/* Optional JavaScript */}
            {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>,
        <Footer />
    ]
}

export default ContactMe;