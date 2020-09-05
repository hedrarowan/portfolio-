import React from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../redux/robots";

import { NavLink } from "react-router-dom";
import CreateRobot from "./CreateRobot";
import DeleteRobot from "./DeleteRobot";

export class AllRobots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
    };
    this.addRobot = this.addRobot.bind(this);
    this.deleteRobot = this.deleteRobot.bind(this);
  }

  async componentDidMount() {
    await this.props.getRobots();

    const robots = this.props.robots;

    this.setState({
      robots: robots,
    });
  }

  async addRobot(robot) {
    const copyOfState = this.state.robots.slice();
    this.setState({
      robots: [...copyOfState, robot],
    });
  }

  async deleteRobot(robot) {
    const currentRobot = robot;
    const copyRobots = this.state.robots.slice();
    copyRobots.map((robot, index) => {
      if (copyRobots[index] === currentRobot) {
        return copyRobots.splice(index, 1);
      } else {
        return robot;
      }
    });
    this.setState({
      robots: [...copyRobots],
    });
  }

  render() {
    if (
      this.props.robots.length === 0 ||
      this.props.robots === undefined ||
      this.state.robots === undefined ||
      this.state.robots === 0
    ) {
      return <h1>"No Robots"</h1>;
    } else {
      const robots = this.state.robots.slice();
      return (
        <div className="robots">
          <ul>
            {robots.map((robot, index) => (
              <div>
                <li className="single-robot" key={robot.id}>
                  <DeleteRobot
                    className="single-robot-delete"
                    robot={robot}
                    delete={this.deleteRobot}
                  />
                  <NavLink to={`/robots/${robot.id}`}>
                    <h3 className="single-robot-name">{robot.name}</h3>
                  </NavLink>
                  <img
                    className="robot-image"
                    src={robot.imageUrl}
                    width="150"
                    height="150"
                  ></img>
                </li>
              </div>
            ))}
          </ul>
          <CreateRobot robots={this.props.robots} addRobot={this.addRobot} />
        </div>
      );
    }
  }
}

const mapState = (state) => {
  return {
    robots: state.robots,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getRobots: () => dispatch(fetchRobots()),
  };
};

export default connect(mapState, mapDispatch)(AllRobots);
