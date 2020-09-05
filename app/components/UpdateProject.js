import React from "react";
import axios from "axios";
import { connect } from "react-redux";

export class UpdateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      completed: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentDidMount() {
  //   console.log(this.props);
  //   console.log(this.state);
  //   this.setState({
  //     project: this.props.project,
  //   });
  //   console.log("immediate state", this.state);
  // }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      if (this.state.title !== "") {
        this.props.project.title = this.state.title;
      }

      this.props.project.completed = this.state.completed;

      const res = await axios.put(
        `../api/projects/${this.props.project.id}`,
        this.props.project
      );
      await this.props.update(this.props.project);
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">New Title</label>
          <input type="text" name="title" onChange={this.handleChange} />
          <label htmlFor="completed">Completed</label>
          <input type="text" name="completed" onChange={this.handleChange} />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    project: state.singleProject.project,
  };
};

export default connect(mapStateToProps, null)(UpdateProject);
