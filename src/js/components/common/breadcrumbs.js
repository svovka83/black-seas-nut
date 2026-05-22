export function getBreadcrumbs() {
	const news = document.querySelector(".news-breadcrumbs");
	const about = document.querySelector(".about-breadcrumbs");
	const gallery = document.querySelector(".gallery-breadcrumbs");

	if (news) {
		news.innerHTML = breadcrumbs(
			[
				{ name: "Главная", path: "/black-seas-nut/" },
				{ name: "Новости и статьи", path: "" },
			],
			"breadcrumbs_secondary"
		);
	}

	if (about) {
		about.innerHTML = breadcrumbs(
			[
				{ name: "Главная", path: "/black-seas-nut/" },
				{ name: "О производстве", path: "" },
			],
			"breadcrumbs_white"
		);
	}

	if (gallery) {
		gallery.innerHTML = breadcrumbs(
			[
				{ name: "Главная", path: "/black-seas-nut/" },
				{ name: "Галерея", path: "" },
			],
			"breadcrumbs_white"
		);
	}
}

function breadcrumbs(links, className) {
	const base = import.meta.env.BASE_URL;

	return `
		<ul class="breadcrumbs ${className}">
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
