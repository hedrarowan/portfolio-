import thunkMiddleware from "redux-thunk";
import axios from "axios";
export const SET_ROBOTS = "SET_ROBOTS";
export const setRobots = (robots) => {
  return {
    type: SET_ROBOTS,
    robots: robots,
  };
};

export const ROBOT_ERROR = "ROBOT_ERROR";

export const robotError = (error) => {
  return {
    type: ROBOT_ERROR,
    error: error,
  };
};

export function fetchRobots() {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/robots");
      const robots = await res.data;
      await dispatch(setRobots(robots));
    } catch (error) {
      dispatch(robotError(error));
    }
  };
}

const initialState = [];

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOTS:
      const robots = action.robots;
      return robots;
    default:
      return initialState;
  }
}
