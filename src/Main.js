import React from "react";
import MainNav from "./Components/MainNav";
import {Container, Row , Col, Card, Image} from 'react-bootstrap';

// adding stylesheet * shared
import './Components/stylesheet.css';




function Main () {

    // Returning array of components

    return [
        <MainNav />,
        <Container>
            <Card className={"main-card"}>
                <Card.Header className={"card-header"}><h2>About Me</h2></Card.Header>
                <Card.Body className={"mai-article"}>
                    <Card.Title></Card.Title>
                    <Image className={"card-img"} src="https://josesanchezcapo.github.io/bootcamp-porfolio/Assets/Images/me_yall.JPG" fluid />
                    <Card.Text>
                        <p className="card-text"><h3>My Name is Jose Sanchez...</h3>I'm a NetSuite Administrator / Javascript developer with over 15 years
                            of extensive experience in diverse technologies, focused on the past five years on the
                            design, development, and implementation of multiples solutions and integrations (Dell Boomi,
                            Celigo) within NetSuite. Additional, development
                            of BI solutions using Power BI or Tableau. Knowledge in SQL, C#, Javascript, Node.js, and
                            React. </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    ]


}
export default  Main;

