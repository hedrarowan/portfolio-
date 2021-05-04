import React from 'react';
import { NavLink } from 'react-router-dom';
import NewNav from './NewNav'


export default class AllProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [{
        id: 1,

        title: 'BrainTeez',
        completed: 'September 2020 - October 2020',

        description: 'Mobile remote learning app for Kids grades K-2',

        mediaUrl: 'https://www.youtube.com/watch?v=J4UF711Ofc0',

        longDescription: 'In 2020, many kids found themselves learning remotely for the first time. For our capstone project at Grace Hopper,my team created an iOS app with educational games for young children. We ended up creating three games, each rendered with animations and original sound to create an immersive and fun learning experience. Children can practice pattern matching and math skills or improve their logical thinking. Each game has ten levels. I focused mainly on the interactivity of the app, written with React Native and Firebase, and the leveling process, written with Redux. It was great working as team on this to see an idea come to life from start to finish! See below for our presentation video.',

        mediaType: 'yt'
      },

      {
        id: 2,

        title: 'deadnameKiller',

        completed: 'November 2020',

        description: "Google Chrome Extension to replace Trans people's birth names (deadnames) and replace them with their real names",

        mediaUrl: 'https://www.github.com/hedrarowan/deadnamekiller',

        longDescription: 'For my first chrome extension, I built a tool that allows users to avoid seeing web content containing their deadnames or the deadnames of other people. It finds the instances of the name and replaces them with user-defined current name. It also makes facebook extremely buggy, which could be considered a feature.',

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
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
        }}>
        <div>
          <h1 style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '400%',
            textShadow: '0 0 3px #FF0000',
            textDecoration: 'underline'
          }}>PROJECTS
          </h1>
        </div>
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
            <li key="drawsynth">
              <NavLink to="/DrawSynth">
                <h3>DrawSynth</h3>
              </NavLink>
              <span>September 2020; April 2021</span>
            </li>
          </ul>
        </div>

        <NewNav page="projects" />
        </div>
      );
    }
  }
}

