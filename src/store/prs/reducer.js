import * as ActionTypes from "./actionTypes";

export const initialState = {
  prs: [1, 2, 3],
  isFetching: false,
  error: {},
};

export default (state, action) => {
  switch (action.type) {
    case ActionTypes.GITHUB_PR_REQUEST:
    case ActionTypes.GITLAB_PR_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ActionTypes.GITHUB_PR_SUCCESS:
    case ActionTypes.GITLAB_PR_SUCCESS: {
      return {
        ...state,
        prs: [...state.prs, ...action.payload],
        isFetching: false,
      };
    }
    case ActionTypes.GITHUB_PR_FAILED:
    case ActionTypes.GITLAB_PR_FAILED: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
