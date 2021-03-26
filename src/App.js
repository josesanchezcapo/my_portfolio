import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Main from "./Main";
import Projects from "./Projects";
import Resume from "./Resume";
import ContactMe from "./ContactMe";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <Route exact path ="/" component = {Main} />
                    <Route exact path ="/projects" component = {Projects} />
                    <Route exact path ="/resume" component = {Resume} />
                    <Route exact path ="/contact_me" component = {ContactMe} />
                </div>
            </Router>
            <di>
            </di>
        </div>
    );
}

export default App;