import React from "react";
import axios from "axios";
import { fetchProject } from "../redux/singleProject";
import { connect } from "react-redux";
import UpdateProject from "./UpdateProject";
import { NavLink } from "react-router-dom";
import UnassignProject from "./UnassignProject";

export class SingleProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      robots: [],
    };
    this.updateProjects = this.updateProjects.bind(this);
    this.unassignProject = this.unassignProject.bind(this);
  }
  async componentDidMount() {
    const projectId = await this.props.match.params.projectId;
    await this.props.getProject(projectId);
    await this.setState({
      project: this.props.project,
      robots: this.props.robots,
    });
  }

  updateProjects(project) {
    this.setState({
      project: project,
      robots: [],
    });
  }

  unassignProject(robots) {
    this.setState({
      robots: robots,
    });
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
    return (
      <div id="single-project" className="body">
        <h3>
          <i>{project.title}</i>
        </h3>
        <h3>Deadline: {project.deadline}</h3>
        <h3>priority: {project.priority}</h3>
        <h3>description: {project.description}</h3>
        <h3>completed: {project.completed}</h3>
        <h3>
          <i>robots: </i>
        </h3>
        {robots === "No Robots Currently" ||
        robots === null ||
        robots === undefined ||
        robots.length === 0 ? (
          <h4 className="no-robots">No Robots Currently Assigned</h4>
        ) : (
          <ul className="project-robots">
            {robots.map((robot) => (
              <div key={robot.id}>
                <UnassignProject
                  project={project}
                  robot={robot}
                  robots={robots}
                  update={this.unassignProject}
                />
                <li>{robot.name}</li>
              </div>
            ))}
          </ul>
        )}
        <UpdateProject project={project} update={this.updateProjects} />
        <NavLink to="/projects">Back</NavLink>
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
