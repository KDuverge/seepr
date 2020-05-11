import React, { useContext } from 'react';

import { ThemeDispatchContext } from '../../store';
import { toggleThemeLight } from '../../store/theme/service';

import './Toggle.css';

export default function Toggle() {
	const themeDispatch = useContext(ThemeDispatchContext);
	const handleThemeUpdate = toggleThemeLight(themeDispatch);

	return ( 
		<div class="theme-switch-wrapper">
			<label class="theme-switch" for="checkbox">
				<input type="checkbox" id="checkbox" onClick={handleThemeUpdate} />
				<div class="slider round"></div>
			</label>
		</div>
	)
}