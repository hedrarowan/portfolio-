import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import projects from '../components/projectsinfo'


export class AllProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [{
        id: 1,

        title: 'BrainTeez',
        completed: 'September 2020 - October 2020',

        description: "Mobile remote learning app for Kids grades K-2",

        mediaUrl: "https://www.youtube.com/watch?v=J4UF711Ofc0",

        longDescription: "Mobile remote learning app for Kids grades K-2",

        mediaType: "yt"
      },

      {
        id: 2,

        title: "deadnameKiller",

        completed: 'November 2020',

        description: "Google Chrome Extension to replace Trans people's birth names (deadnames) and replace them with their real names",

        mediaUrl : 'https://www.github.com/hedrarowan/deadnamekiller',

        longDescription: "Google Chrome Extension to replace Trans people's birth names (deadnames) and replace them with their real names",

        mediaType: 'gh'
      }],
    };
  }





  render() {
    if (
      this.state.projects === undefined ||
      this.state.projects === 0
    ) {
      return <h1>"No Projects"</h1>;
    } else {
      const projects = this.state.projects.slice();
      return (
        <div className="projects">
          <ul>
            {projects.map((project) => {
              return (
                <li key={project.id}>
                  <NavLink to={`/projects/${project.id}`}>
                    <h3>{project.title}</h3>
                  </NavLink>
                  <span>{project.completed}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchProjects()),
  };
};

export default connect(mapState, mapDispatch)(AllProjects);
