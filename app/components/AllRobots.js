import React from "react";
import { connect } from "react-redux";
import robotsReducer, { fetchRobots } from "../redux/robots";
import SingleRobot from "./SingleRobot";
import { NavLink } from "react-router-dom";
// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
    };
  }

  async componentDidMount() {
    await this.props.getRobots();
    console.log("PROPS FRM ALLROBOTS", this.props);
  }

  render() {
    if (this.props.robots.length === 0 || this.props.robots === undefined) {
      return <h1>"No Robots"</h1>;
    } else {
      return (
        <div>
          <ul>
            {this.props.robots.map((robot, index) => (
              <div>
                <li className="single-robot" key={robot.id}>
                  <NavLink to={`/robots/${robot.id}`}>
                    <h3>{robot.name}</h3>
                  </NavLink>
                </li>
              </div>
            ))}
          </ul>
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
