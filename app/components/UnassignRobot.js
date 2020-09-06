import React from "react";
import axios from "axios";

export default class UnassignRobot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robot: {},
      projects: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    this.setState({
      robot: this.props.robot,
      projects: this.props.projects,
    });
  }

  async handleClick(event) {
    try {
      event.preventDefault();

      const copyProjects = this.props.projects.slice();
      const newProjects = copyProjects.filter(
        (project) => project.id !== this.props.robot.projectId
      );

      this.props.robot.projectId = null;

      await this.setState({
        robot: this.props.robot,
        projects: newProjects,
      });

      await axios.put(`../api/robots/${this.props.robot.id}`, this.state.robot);

      const res = await axios.get(
        `../api/robots/${this.props.robot.id}/projects`
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
