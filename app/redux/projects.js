import thunkMiddleware from "redux-thunk";
import axios from "axios";

export const SET_PROJECTS = "SET_PROJECTS";
export const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects: projects,
  };
};

export function fetchProjects() {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/projects");
      const projects = await res.data;
      await dispatch(setProjects(projects));
    } catch (error) {
      console.log(error);
    }
  };
}

const initialState = [];

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      const projects = action.projects;
      return projects;
    default:
      return initialState;
  }
}
