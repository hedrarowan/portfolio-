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

export const setRobot = (robot, projects) => {
  return {
    type: SET_ROBOT,
    robot: robot,
    projects: projects,
  };
};

export function fetchRobot(robotId) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/robots/${robotId}`);
      const robot = await res.data;
      const projectRes = await axios.get(`/api/robots/${robotId}/projects`);
      const projects = await projectRes.data;
      await dispatch(setRobot(robot, projects));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteRobot(robotId) {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`/api/robots/${robotId}`, robotId);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
}
const initialState = {
  robot: {},
  projects: [],
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function singleRobotReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOT:
      const robot = action.robot;
      const projects = action.projects;
      return {
        robot: robot,
        projects: projects,
      };

    default:
      return state;
  }
}
