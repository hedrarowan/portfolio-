import React from "react";
import axios from "axios";

export default class UnassignProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      robots: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    this.setState({
      project: this.props.project,
      robots: this.props.robots,
    });
  }

  async handleClick(event) {
    try {
      console.log(this.state, "thisstate");
      event.preventDefault();
      const copyRobots = this.props.robots.slice();
      const newRobots = copyRobots.filter(
        (robot) => robot.projectId !== this.props.project.id
      );
      await this.setState({
        project: this.props.project,
        robots: newRobots,
      });

      const res = await axios.put(
        `../api/projects/${this.state.project.id}`,
        this.state
      );

      const res2 = await axios.get(`../api/robots/${this.props.project.id}`);
      this.props.update(res2.data, this.state.robots);
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
