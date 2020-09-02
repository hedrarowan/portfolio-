import { combineReducers } from "redux";
import projectsReducer from "./projects";
import robotsReducer from "./robots";
import singleRobotReducer from "./singleRobot";

const appReducer = combineReducers({
  projects: projectsReducer,
  robots: robotsReducer,
  singleRobot: singleRobotReducer,
});

export default appReducer;
