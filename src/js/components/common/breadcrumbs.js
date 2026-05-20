export function getBreadcrumbs() {
	const about = document.querySelector(".about-breadcrumbs");

	if (about) {
		about.innerHTML = breadcrumbs([
			{ name: "Главная", path: "/black-seas-nut/" },
			{ name: "О производстве", path: "" },
		]);
	}
}

function breadcrumbs(links) {
	const base = import.meta.env.BASE_URL;

	return `
		<ul class="breadcrumbs">
			${links
				.map(
					(link) => `
						<li class="breadcrumbs__item">
							<svg class="breadcrumbs__icon">
								<use href="${base}images/sprites.svg#breadcrumbs-icon"></use>
							</svg>
							<a class="breadcrumbs__link" href="${link.path}">${link.name}</a>
						</li>
					`
				)
				.join("")}
		</ul>
	`;
}
