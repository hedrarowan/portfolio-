import React from "react";
import axios from "axios";
import { connect } from "react-redux";

export class UpdateRobot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      fuelLevel: 0,
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
      this.props.robot.name = this.state.name;
      this.props.robot.fuelLevel = this.state.fuelLevel;
      const res = await axios.put(
        `/api/robots/${this.props.robot.id}`,
        this.props.robot
      );

      await this.props.update(this.props.robot);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">New Name</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <label htmlFor="fuelLevel">Fuel Level</label>
          <input type="number" name="fuelLevel" onChange={this.handleChange} />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    robot: state.singleRobot.robot,
  };
};

export default connect(mapStateToProps, null)(UpdateRobot);
