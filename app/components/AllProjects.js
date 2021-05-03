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
        <div>
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
            <li key='drawsynth'>
              <NavLink to={"/DrawSynth"}>
                <h3>DrawSynth</h3>
              </NavLink>
              <span>September 2020; April 2021</span>
            </li>
          </ul>
        </div>
      <div className='headshot'>


        <NavLink to="/resume"
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '15%',
            fontSize:'180%'
          }}>
          Resume
          </NavLink>


        <NavLink to="/about" style={{display: 'flex', alignItems: 'center',
        margin: '15%',
        fontSize:'180%'}}>About
        </NavLink>


        <img src="backgroundstars.jpg" width="33%" height="300" alignItems="right" onClick={this.handleClick}></img>


        </div>

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
