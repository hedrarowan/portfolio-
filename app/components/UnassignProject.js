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

  async handleClick(event) {
    try {
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
