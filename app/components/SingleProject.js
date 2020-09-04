import React from "react";
import axios from "axios";
import { fetchProject } from "../redux/singleProject";
import { connect } from "react-redux";
import UpdateProject from "./UpdateProject";
import { NavLink } from "react-router-dom";

export class SingleProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
    };
    this.updateProjects = this.updateProjects.bind(this);
  }
  async componentDidMount() {
    const projectId = await this.props.match.params.projectId;
    await this.props.getProject(projectId);
    await this.setState({
      project: this.props.project,
    });
  }

  updateProjects(project) {
    this.setState({
      project: project,
    });
  }

  render() {
    let project;

    const robots = this.props.robots;
    if (this.state.project === undefined) {
      project = this.props.project;
    } else {
      project = this.state.project;
    }
    return (
      <div id="single-project" className="body">
        <h3>{project.title}</h3>
        <h3>deadline: {project.deadline}</h3>
        <h3>priority: {project.priority}</h3>
        <h3>description: {project.description}</h3>
        <h3>completed: {project.completed}</h3>
        <h3>robots: </h3>
        {robots === "No Robots Currently" ? (
          <h3>No Robots Currently Assigned</h3>
        ) : (
          <ul>
            {robots.map((robot) => (
              <div key={robot.id}>
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
