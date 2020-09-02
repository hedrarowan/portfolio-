// import thunkMiddleware from "redux-thunk";
// import axios from "axios";

export const SET_PROJECTS_ON_ROBOT = "SET_PROJECTS_ON_ROBOT";

export const setProjects = (projects) => {
  return {
    type: SET_PROJECTS_ON_ROBOT,
    projects: projects,
  };
};

export function fetchProjects(robotId) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/robots/${robotId}/projects`);
      const projects = await res.data;
      console.log(res.data, "RESDATA");
      await dispatch(setProjects(projects));
    } catch (error) {
      console.log(error);
    }
  };
}

const initialState = {};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function singleRobotReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS_ON_ROBOT:
      const projects = action.projects;
      return projects;
    default:
      return state;
  }
}
