import React from "react";
import axios from "axios";

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: {},
    };
  }

  async componentDidMount() {
    console.log(this.props);
    const projectId = this.props.match.params.projectId;
    const res = await axios.get(`/api/projects/${projectId}`);
    const currentProject = res.data;
    this.setState({
      currentProject: currentProject,
    });
  }

  render() {
    return (
      <div id="single-project" className="body">
        <h1>{this.state.currentProject}</h1>
      </div>
    );
  }
}

export default SingleProject;
