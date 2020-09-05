import React from "react";
import axios from "axios";
import { connect } from "react-redux";

export class UnassignProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      robots: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // async componentDidMount() {
  //   this.setState({
  //     project: this.props.project,
  //     robots: this.props.robots,
  //   });
  // }

  async handleClick(event) {
    try {
      console.log(this.state, "thisstate");
      console.log("props", this.props);
      event.preventDefault();
      const copyRobots = this.props.robots.slice();
      console.log(copyRobots, "copyRobots");
      const newRobots = copyRobots.filter(
        (robot) => robot.projectId !== this.props.project.id
      );
      console.log(newRobots);
      await this.setState({
        project: this.props.project,
        robots: newRobots,
      });

      console.log("PROPS", this.state);

      const res = await axios.put(
        `../api/projects/${this.state.project.id}`,
        this.state
      );
      // const res2 = await axios.put(
      //   `../api/projects/${this.state.project.id}/robots`,
      //   this.state.robots
      // );
      // // const res3 = await axios.get(
      //   `../api/robots/${this.props.robot.id}/projects`
      // );
      console.log(res, "ressss");
      this.props.update(this.state.project, this.state.robots);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <button type="click" onClick={this.handleClick}>
          Unassign
        </button>
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

export default connect(mapStateToProps, null)(UnassignProject);
