import thunkMiddleware from "redux-thunk";
import axios from "axios";
export const SET_ROBOT = "SET_ROBOT";
export const SET_PROJECTS_ON_ROBOT = "SET_PROJECTS_ON_ROBOT";

export const setProjects = (projects) => {
  return {
    type: SET_PROJECTS_ON_ROBOT,
    projects: projects,
  };
};

export const setRobot = (robot) => {
  return {
    type: SET_ROBOT,
    robot: robot,
  };
};

export function fetchRobot(robotId) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/robots/${robotId}`);
      const robot = await res.data;
      await dispatch(setRobot(robot));
    } catch (error) {
      console.log(error);
    }
  };
}
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
    case SET_ROBOT:
      const robot = action.robot;
      return robot;
    case SET_PROJECTS_ON_ROBOT:
      const projects = action.projects;
      return projects;
    default:
      return state;
  }
}
