import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import About from "./About";
import AllProjects from "./AllProjects";
import SingleProject from "./SingleProject";

const Routes = () => {
  return (
    <Router>
      <div>
        <main>
          <h1>Hedra Rowan</h1>
          <img></img>
          <nav>
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              ...Home...
            </NavLink>
            <NavLink
              to="/about"
              activeStyle={{
                fontWeight: "bold",
                color: "pink",
              }}
            >
              ...About...
            </NavLink>
            <NavLink
              to="/projects"
              activeStyle={{
                fontWeight: "bold",
                color: "pink",
              }}
            >
              ...Projects...
            </NavLink>
          </nav>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={AllProjects} />
          <Route path="/projects/:projectId" component={SingleProject} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
