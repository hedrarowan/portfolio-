import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../redux/projects";
import { NavLink } from "react-router-dom";

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  async componentDidMount() {
    await this.props.getProjects();
  }

  render() {
    if (this.props.projects.length === 0 || this.props.projects === undefined) {
      return <h1>"No Projects"</h1>;
    } else {
      return (
        <ul>
          {this.props.projects.map((project) => {
            return (
              <li key={project.id}>
                <span>{project.title}</span>
                <NavLink to={`/projects/${project.id}`}>
                  <h3>{project.title}</h3>
                </NavLink>
                <span>Deadline: {project.deadline}</span>
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchProjects()),
  };
};

export default connect(mapState, mapDispatch)(AllProjects);
