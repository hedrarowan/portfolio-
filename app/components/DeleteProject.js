import React from "react";
import axios from "axios";

export default class DeleteProject extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(event) {
    try {
      event.preventDefault();
      await axios.delete(
        `/api/projects/${this.props.project.id}`,
        this.props.project
      );
      await this.props.delete(this.props.project);
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
