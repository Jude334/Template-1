/* Toggle between showing and hiding the nav menu when user clicks hamburger menu icon */
function showLinks() {
	let links = document.getElementById('links');
	if(links.style.display === 'block') {
		links.style.display = 'none';
	} else {
		links.style.display = 'block';
	}
}