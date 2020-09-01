import React from "react";
import { connect } from "react-redux";
import { fetchRobotsThunk } from "../redux/robots";

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
  }

  render() {
    if (this.props.robots.length === 0 || this.props.robots === undefined) {
      return <h1>"No Robots"</h1>;
    } else {
      return (
        <ul>
          {this.props.robots.map((robot) => {
            return (
              <li key={robot.id}>
                <img src={robot.imageUrl} />
                <span>{robot.name}</span>
                {/* <span></span> */}
              </li>
            );
          })}
        </ul>
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
