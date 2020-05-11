export function updateCssProperties({ theme }) {
	if (document.body.classList.contains('light')) {
		document.body.classList.remove(theme);
	} else {
		document.body.classList.add(theme);
	}
}