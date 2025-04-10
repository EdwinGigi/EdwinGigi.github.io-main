let themeStored = localStorage.getItem('theme');

// First time user default dark mode
if (themeStored === null) {
	setLightMode();
} else {
	if (themeStored === "true")
		setDarkMode();
	else
		setLightMode();
}

// Listens for change to switch and updates theme
$("#darkModeSwitch").change(modeSwitcher);

function setDarkMode() {
	document.documentElement.setAttribute('data-theme', 'dark');
	localStorage.setItem('theme', true);
	$("#darkModeSwitch")[0].checked = true;
}

function setLightMode() {
	document.documentElement.setAttribute('data-theme', 'light');
	localStorage.setItem('theme', false);
	$("#darkModeSwitch")[0].checked = false;
}

function modeSwitcher() {
	debugPrint("user switching theme")
	let theme = $("#darkModeSwitch")[0].checked;
	if (theme === true)
		setDarkMode();
	else
		setLightMode();
}
