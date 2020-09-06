import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import AllRobots from "./AllRobots";
import AllProjects from "./AllProjects";
import SingleRobot from "./SingleRobot";
import SingleProject from "./SingleProject";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav></nav>
        <main>
          <h1>StackBot Project Management</h1>
          <img src="unnamed.jpg"></img>
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
              to="/robots"
              activeStyle={{
                fontWeight: "bold",
                color: "pink",
              }}
            >
              ...Robots...
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
          <Route exact path="/robots" component={AllRobots} />
          <Route exact path="/projects" component={AllProjects} />
          <Route path="/robots/:robotId" component={SingleRobot} />
          <Route path="/projects/:projectId" component={SingleProject} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
