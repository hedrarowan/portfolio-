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

  async componentDidMount() {
    this.setState({
      project: this.props.project,
      robots: this.props.robots,
    });
  }

  async handleClick(event) {
    try {
      event.preventDefault();

      this.props.robot.projectId = null;

      await this.setState({
        project: this.props.project,
      });

      console.log(this.state);
      await axios.put(`../api/robots/${this.props.robot.id}`, this.props.robot);
      const res = await axios.get(
        `../api/projects/${this.props.project.id}/robots`
      );

      this.props.update(res.data);
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
