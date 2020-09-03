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
        <nav>Welcome!</nav>
        <main>
          <h1>
            Welcome to StackBot Project Management: your robot employees are
            awaiting assignments!
          </h1>
          <p>This seems like a nice place to get started with some Routes!</p>
          <nav>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/robots"> Robots </NavLink>
            <NavLink to="/projects"> Projects </NavLink>
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
