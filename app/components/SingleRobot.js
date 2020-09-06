import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { Robot, Project } from "../../server/db";
import { fetchRobot } from "../redux/singleRobot";
import { connect } from "react-redux";
import UpdateRobot from "./UpdateRobot";
import UnassignRobot from "./UnassignRobot";
import axios from "axios";
// import robot from "../../server/db/robot";

class SingleRobot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robot: {},
      projects: [],
    };
    this.updateRobots = this.updateRobots.bind(this);
    this.unassignRobot = this.unassignRobot.bind(this);
  }
  async componentDidMount() {
    const robotId = await this.props.match.params.robotId;
    await this.props.getRobot(robotId);

    await this.setState({
      robot: this.props.robot,
      projects: this.props.projects,
    });
  }

  updateRobots(robot) {
    this.setState({
      robot: robot,
      projects: [],
    });
  }

  unassignRobot(projects) {
    this.setState({
      projects: projects,
    });
  }

  render() {
    let robot;
    let projects;
    if (this.state.robot === undefined) {
      robot = this.props.robot;
    } else {
      robot = this.state.robot;
      projects = this.state.projects;
    }
    return (
      <div className="body">
        <h3>{robot.name}</h3>
        <img src={robot.imageUrl} />
        <h3>Fuel Type: {robot.fuelType}</h3>
        <h3>Fuel Level: {robot.fuelLevel}</h3>
        <h3>Projects:</h3>
        {projects === "No Projects Currently" ||
        projects === null ||
        projects === undefined ||
        projects.length === 0 ? (
          <h4>No Projects Currently</h4>
        ) : (
          <ul>
            {projects.map((project) => (
              <div key={project.id}>
                <UnassignRobot
                  robot={robot}
                  project={project}
                  projects={projects}
                  update={this.unassignRobot}
                />
                <li>{project.title}</li>
              </div>
            ))}
          </ul>
        )}
        <UpdateRobot robot={robot} update={this.updateRobots} />
        <NavLink to="/robots">Back</NavLink>
      </div>
    );
  }

  // }
}
const mapStateToProps = (state) => {
  return {
    robot: state.singleRobot.robot,
    projects: state.singleRobot.projects,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getRobot: (robotId) => dispatch(fetchRobot(robotId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRobot);
