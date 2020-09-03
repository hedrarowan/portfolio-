import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { Robot, Project } from "../../server/db";
import { fetchRobot } from "../redux/singleRobot";
import { connect } from "react-redux";
import axios from "axios";
// import robot from "../../server/db/robot";

class SingleRobot extends React.Component {
  componentDidMount() {
    const robotId = this.props.match.params.robotId;
    this.props.getRobot(robotId);
  }

  render() {
    console.log(
      this.props.robot,
      "this props robot",
      this.props.project,
      "thisprojectprops"
    );

    const robotId = this.props.match.params.robotId;
    const robot = this.props.robot;
    const projects = this.props.projects;
    console.log(projects, "projects");
    return (
      <div className="body">
        <h3>{robot.name}</h3>
        <img src={robot.imageUrl} />
        <h3>Fuel Type: {robot.fuelType}</h3>
        <h3>Fuel Level: {robot.fuelLevel}</h3>
        <p>Projects</p>
        {projects === "No Projects Currently" ? (
          <h3>Sorry, No Projects at this Time</h3>
        ) : (
          <ul>
            {projects.map((project) => (
              <div key={project.id}>
                <li>{project.title}</li>
              </div>
            ))}
          </ul>
        )}
      </div>
    );
  }

  // }
}
const mapStateToProps = (state) => {
  return {
    robot: state.singleRobot.robot,
    projects: state.singleRobot.projects,
    // projects: state.projects,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getRobot: (robotId) => dispatch(fetchRobot(robotId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRobot);
