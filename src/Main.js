import React from "react";
import MainNav from "./Components/MainNav";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function Main () {

    // Returning array of components

    return [
        <MainNav />,
        <Body />,
        <Footer />
    ]

}

export default  Main;

