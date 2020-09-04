import React from "react";
import axios from "axios";

export default class DeleteRobot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  async handleClick(event) {
    try {
      event.preventDefault();
      await axios.delete(
        `/api/robots/${this.props.robot.id}`,
        this.props.robot
      );
      await this.props.delete(this.props.robot);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          X
        </button>
      </div>
    );
  }
}
