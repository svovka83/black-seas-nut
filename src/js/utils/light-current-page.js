export function lightMenuHeader() {
	const links = document.querySelectorAll(".menu-header__link");
	if (!links) return;

	const currentPath = window.location.pathname;

	links.forEach((link) => {
		const linkPath = new URL(link.href).pathname;
		const item = link.parentElement;

		const normalize = (path) => path.replace("index.html", "");

		if (normalize(linkPath) === normalize(currentPath)) {
			item.classList.add("menu-header__item_active");
		}
	});
}

export function lightMenuFooter() {
	const links = document.querySelectorAll(".menu-footer__link");
	if (!links) return;

	const currentPath = window.location.pathname;

	links.forEach((link) => {
		const linkPath = new URL(link.href).pathname;
		const item = link.parentElement;

		const normalize = (path) => path.replace("index.html", "");

		if (normalize(linkPath) === normalize(currentPath)) {
			item.classList.add("menu-footer__item_active");
		}
	});
}
