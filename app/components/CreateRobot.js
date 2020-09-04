import React from "react";
import axios from "axios";

export default class CreateRobot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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

      const res = await axios.post("/api/robots", this.state);
      console.log(this.state);
      await this.props.addRobot(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h3>Create New Robot:</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Robot Name</label>
          <input type="text" name="name" onChange={this.handleChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
