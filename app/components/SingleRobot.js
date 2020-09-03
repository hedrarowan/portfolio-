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
  // let robotId;
  // const robot = props.robot;

  // if (props.robot !== undefined) {
  //   robotId = props.robot.id;
  //   robot = props.robot;
  //   console.log(props, "THESE PROPS");
  // } else if (props.match !== undefined) {
  //   robotId = props.match.params.robotId;
  //   robot = {
  //     name: "badger",
  //     imageUrl: "www.happy.com",
  //     fuelType: "gas",
  //     fuelLevel: 10,
  //   };
  //   console.log(props.dispatch, "PROPS");
  // } else {
  //   return <div>The Robot Does Not Exist</div>;
  // }

  // console.log("IM ROBOT ID", robotId);

  // componentDidMount() {
  //   const robotId = props.match.params.robotId;
  //   const fetchedRobot = props.getRobot(robotId);
  //   console.log(fetchedRobot);
  // }

  // console.log(props.getProjects(robotId), "BONOININ");

  // useEffect(() => {
  //   props.getProjects(robotId);
  //   console.log(getProjects);
  // }

  //   console.log(fetchedRobot);
  // }
  // let robot = props.robot;
  // console.log(robot, props, "right here");
  // async componentDidMount() {
  //   // const fetched = await Robot.findByPk(this.props.match.params.robotId);
  //   // this.props.fetchProjects(this.props.robot);
  //   console.log(fetched, "fetched");
  // }
  // render() {
  // // console.log(this.props, "my props");
  // const robotId = this.props.match.params.robotId;
  // const projects = this.state.projects;
  // const robot = this.state.robot;
  render() {
    console.log(this.props);
    const robotId = this.props.match.params.robotId;
    const robot = this.props.robot;
    return (
      <div className="body">
        <img src={robot.imageUrl} />
        <h3>Fuel Type: {robot.fuelType}</h3>
        <h3>Fuel Level: {robot.fuelLevel}</h3>
        <p>Projects</p>
        {/* {projects.length < 0 || projects === undefined ? (
          <h1>Sorry, No Projects at this Time</h1>
        ) : (
          <ul>
            {projects.map((project) => (
              <div key={project.id}>
                <li>{project.title}</li>
              </div>
            ))}
          </ul>
        )} */}
      </div>
    );
  }

  // }
}
const mapStateToProps = (state) => {
  return {
    robot: state.singleRobot,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getRobot: (robotId) => dispatch(fetchRobot(robotId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRobot);
