import React from "react";
import axios from "axios";
import { fetchProject } from "../redux/singleProject";
import { connect } from "react-redux";
export class SingleProject extends React.Component {
  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    this.props.getProject(projectId);
  }

  render() {
    const project = this.props.project;
    const robots = this.props.robots;
    return (
      <div id="single-project" className="body">
        <h3>{project.title}</h3>
        <h3>deadline: {project.deadline}</h3>
        <h3>priority: {project.priority}</h3>
        <h3>description: {project.description}</h3>
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