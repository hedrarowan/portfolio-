import React from "react";
import axios from "axios";

export default class UpdateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      completed: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      const res = await axios.put(
        `/api/projects/${this.props.project.id}`,
        this.state
      );
      await this.props.update(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <lable htmlFor="title">New Title</lable>
          <input type="text" name="title" onChange={this.handleChange} />
          <label htmlFor="completed">Completed</label>
          <input type="text" name="completed" onChange={this.handleChange} />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}
