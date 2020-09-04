import React from "react";
import { connect } from "react-redux";
import robotsReducer, { fetchRobots } from "../redux/robots";
import SingleRobot from "./SingleRobot";
import { NavLink } from "react-router-dom";
import CreateRobot from "./CreateRobot";
// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
    };
    this.addRobot = this.addRobot.bind(this);
  }

  async componentDidMount() {
    await this.props.getRobots();
    console.log("PROPS FRM ALLROBOTS", this.props);
  }

  addRobot(robot) {
    console.log("IM ADDING A ROBOT");
    this.setState({
      robots: [...this.props.robots, robot],
    });
    console.log("IMIMI", this.props, robot);
  }

  render() {
    if (this.props.robots.length === 0 || this.props.robots === undefined) {
      return <h1>"No Robots"</h1>;
    } else {
      return (
        <div className="robots">
          <ul>
            {this.props.robots.map((robot, index) => (
              <div>
                <li className="single-robot" key={robot.id}>
                  <NavLink to={`/robots/${robot.id}`}>
                    <h3>{robot.name}</h3>
                  </NavLink>
                  <img src={robot.imageUrl}></img>
                </li>
              </div>
            ))}
          </ul>
          <CreateRobot addRobot={this.addRobot} />
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
