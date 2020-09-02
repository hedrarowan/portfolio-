import React from "react";
import { NavLink } from "react-router-dom";
// import { Robot, Project } from "../../server/db";
// import { fetchRobot } from "../redux/singleRobot";
// import { connect } from "react-redux";
// import robot from "../../server/db/robot";

const SingleRobot = (props) => {
  const robotId = props.robot.id;
  const robot = props.robot;
  console.log(robotId);
  console.log(props, "PROPS");

  // componentDidMount() {
  //   const robotId = props.match.params.robotId;
  //   const fetchedRobot = props.getRobot(robotId);
  //   console.log(fetchedRobot);
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
  return (
    <div className="body">
      <NavLink to={`/robots/${robotId}`}>
        <h3>{robot.name}</h3>
      </NavLink>
      <img src={robot.imageUrl} />
      /* <h3>Fuel Type: {robot.fuelType}</h3>
      <h3>Fuel Level: {robot.fuelLevel}</h3>
      <p>Projects</p>
      {projects.length < 0 || projects === undefined ? (
        <h1>Sorry, No Projects at this Time</h1>
      ) : (
        <ul>
          {projects.map((project) => (
            <div key={project.id}>
              <li>{project.title}</li>
            </div>
          ))}
        </ul>
      )}{" "}
      */
    </div>
  );

  // }
};
// const mapStateToProps = (state) => {
//   return {
//     robots: state.robots,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getRobot: () => dispatch(fetchRobot()),
//   };
// };

// export const connectedRobot = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SingleRobot);

// export default SingleRobot;

export default SingleRobot;
