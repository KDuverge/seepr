import * as ActionTypes from './actionTypes';

export const toggleThemeLight = (dispatch) => () => {
	dispatch({ type: ActionTypes.TOGGLE_THEME_LIGHT })
}