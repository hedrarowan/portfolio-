import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../redux/projects";
import { NavLink } from "react-router-dom";


export class AllProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  async componentDidMount() {
    await this.props.getProjects();
    const projects = this.props.projects;
    this.setState({
      projects: projects,
    });
  }


  render() {
    if (
      this.props.projects.length === 0 ||
      this.props.projects === undefined ||
      this.state.projects === undefined ||
      this.state.projects === 0
    ) {
      return <h1>"No Projects"</h1>;
    } else {
      const projects = this.state.projects.slice();
      return (
        <div className="projects">
          <ul>
            {projects.map((project) => {
              return (
                <li key={project.id}>
                  <NavLink to={`/projects/${project.id}`}>
                    <h3>{project.title}</h3>
                  </NavLink>
                  <span>{project.completed}</span>
                </li>
              );
            })}
          </ul>
        </div>
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
