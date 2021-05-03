import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import About from "./About";
import AllProjects from "./AllProjects";
import SingleProject from "./SingleProject";
import Resume from './resume'
import Home from './DrawSynth'
import NewNav from './NewNav'


const Routes = () => {
  return (
    <Router>
      <div>
        <main>
          {/* <nav>
            <NavLink
              to="/resume"
              activeStyle={{
                fontWeight: "bold",
                // color: white,

              }}
            >
              ...Resume...
            </NavLink>
            <NavLink
              to="/about"
              activeStyle={{
                fontWeight: "bold",
                // color: white,

              }}
            >
              ...About...
            </NavLink>
            <NavLink
              to="/projects"
              activeStyle={{
                fontWeight: "bold",
                // color:white,
              }}
            >
              ...Projects...
            </NavLink>
          </nav> */}
          <Route exact path='/' component={NewNav} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={AllProjects} />
          <Route exact path="/newnav" component={NewNav} />
          <Route path="/projects/:projectId" component={SingleProject} />
          <Route path="/DrawSynth" component={Home}/>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
