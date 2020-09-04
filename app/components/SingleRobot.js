import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { Robot, Project } from "../../server/db";
import { fetchRobot } from "../redux/singleRobot";
import { connect } from "react-redux";
import UpdateRobot from "./UpdateRobot";
import axios from "axios";
// import robot from "../../server/db/robot";

class SingleRobot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robot: {},
    };
    this.updateRobots = this.updateRobots.bind(this);
  }
  async componentDidMount() {
    const robotId = await this.props.match.params.robotId;
    await this.props.getRobot(robotId);

    await this.setState({
      robot: this.props.robot,
    });
  }

  updateRobots(robot) {
    this.setState({
      robot: robot,
    });
  }

  render() {
    let robot;
    const projects = this.props.projects;
    if (this.state.robot === undefined) {
      robot = this.props.robot;
    } else {
      robot = this.state.robot;
    }
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
                <button type="submit">Unassign</button>
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
    // projects: state.projects,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getRobot: (robotId) => dispatch(fetchRobot(robotId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRobot);
