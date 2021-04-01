import React from "react";

import { fetchProject } from "../redux/singleProject";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";

import YouTube from 'react-youtube';

let projects = [
  {
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
  }


]

export class SingleProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},

    };

  }
  async componentDidMount() {
    let project = {}

    const projectId = await this.props.match.params.projectId;

    for (let i = 0; i < projects.length; i++) {
      if(projects[i].id === Number(projectId)) {
        project = projects[i]
        console.log(project)
      } else {
        console.log(projects[i].id, projectId, 'waittt')
      }
    }
    await this.setState({
      project: project

    });

    console.log(project)

  }


  render() {
    let project;
    let robots;


    if (this.state.project === undefined) {
      project = this.props.project;

    } else {
      project = this.state.project;
      robots = this.state.robots;

    }

    let videoId = String(String(project.mediaUrl).slice(String(project.mediaUrl).lastIndexOf('=') + 1))


    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <div id="single-project" className="body">
        <h3>
          <i>{project.title}</i>
        </h3>
        <h3>{project.description}</h3>
        <h3>{project.completed}</h3>

        <div id='long'>
          <h4><i>{project.longDescription}</i></h4>
        </div>
        {project.mediaType === 'yt' ? <YouTube videoId={videoId} opts={opts} /> : <a href={project.mediaUrl}>{project.mediaUrl}</a>}
        <div>
        <NavLink to="/projects">Back</NavLink>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    project: state.singleProject.project,
    robots: state.singleProject.robots,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getProject: (projectId) => dispatch(fetchProject(projectId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProject);
