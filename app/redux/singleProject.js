import axios from "axios";

export const SET_PROJECT = "SET_PROJECT";
export const setProject = (project, robots) => {
  return {
    type: SET_PROJECT,
    project: project,
    robots: robots,
  };
};

const initialState = {
  project: {},
  robots: [],
};
export function fetchProject(projectId) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/projects/${projectId}`);
      const project = await res.data;
      const robotRes = await axios.get(`/api/projects/${projectId}/robots`);
      const robots = await robotRes.data;
      await dispatch(setProject(project, robots));
    } catch (error) {
      console.log(error);
    }
  };
}

export default function singleProjectReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT:
      const project = action.project;
      const robots = action.robots;
      return {
        project: project,
        robots: robots,
      };
    default:
      return state;
  }
}
