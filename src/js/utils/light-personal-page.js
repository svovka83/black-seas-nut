export function lightPersonalPage() {
	const links = document.querySelectorAll(".personal-account-bottom__link");
	if (!links) return;

	const currentPath = window.location.pathname;

	links.forEach((link) => {
		const linkPath = new URL(link.href).pathname;
		const item = link.parentElement;

		const normalize = (path) => path.replace("index.html", "");

		if (normalize(linkPath) === normalize(currentPath)) {
			item.classList.add("personal-account-bottom__item_active");
		}
	});
}
