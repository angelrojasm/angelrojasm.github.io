const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');

function toggleActive(name) {
	if (name === 'home') {
		homeLink.classList.add('active');
		aboutLink.classList.remove('active');
	}

	if (name === 'about') {
		homeLink.classList.remove('active');
		aboutLink.classList.add('active');
	}
}

homeLink.onclick = () => {
	toggleActive('home');
};
aboutLink.onclick = () => {
	toggleActive('about');
};
