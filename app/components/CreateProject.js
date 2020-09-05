import React from "react";
import axios from "axios";

export default class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      deadline: "",
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
      await axios.post("/api/projects", this.state);
      await this.props.addProject(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Create New Project:</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Project Title</label>
          <input type="text" name="title" onChange={this.handleChange} />
          <label htmlFor="date">Deadline</label>
          <input type="text" name="deadline" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
