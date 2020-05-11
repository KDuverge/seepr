import * as ActionTypes from './actionTypes';

export const initialState = {
    theme: 'dark',
}

export default (state, action) => {
	switch (action.type) {
		case ActionTypes.TOGGLE_THEME_LIGHT:
			return {
				theme: 'light',
			}
		default:
			return state;
	}
}