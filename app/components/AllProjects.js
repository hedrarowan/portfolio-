import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../redux/projects";
import { NavLink } from "react-router-dom";
import CreateProject from "./CreateProject";
import DeleteProject from "./DeleteProject";

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
    this.addProject = this.addProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  }

  async componentDidMount() {
    await this.props.getProjects();
    const projects = this.props.projects;
    this.setState({
      projects: projects,
    });
  }

  addProject(project) {
    this.setState({
      projects: [...this.props.projects, project],
    });

    console.log("IAMSID", this.state.projects);
  }

  async deleteProject(project) {
    const copyProjects = this.state.projects.slice();
    copyProjects.map((project, index) => {
      if (project === copyProjects[index]) {
        return copyProjects.splice(index, 1);
      } else {
        return project;
      }
    });
    this.setState({
      projects: [...copyProjects],
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
      console.log(this.state);
      const projects = this.state.projects.slice();
      return (
        <div className="projects">
          <ul>
            {projects.map((project) => {
              return (
                <li key={project.id}>
                  <DeleteProject
                    project={project}
                    delete={this.deleteProject}
                  />
                  <NavLink to={`/projects/${project.id}`}>
                    <h3>{project.title}</h3>
                  </NavLink>
                  <span>Deadline: {project.deadline}</span>
                </li>
              );
            })}
          </ul>
          <CreateProject
            projects={this.props.projects}
            addProject={this.addProject}
          />
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
