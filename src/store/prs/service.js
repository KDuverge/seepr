import GitHub from 'github-api';
import * as ActionTypes from './actionTypes';
import axios from 'axios';

const gh = new GitHub();

const me = gh.getUser('kduverge');

me.listFollowers().then(data => {
  console.log(data);
  return axios.get('https://github.com/dashboard/recent-activity').then(data => console.log(data))
}).catch(err => console.log(err));

me.getProfile().then(data => console.log(data))

export const githubLogin = (dispatch) => async () => {
  dispatch({ type: ActionTypes.GITHUB_PR_REQUEST });
  
  const payload = await Promise.resolve([1, 2, 3]);

  dispatch({
    type: ActionTypes.GITHUB_PR_SUCCESS,
    payload,
  })
};
