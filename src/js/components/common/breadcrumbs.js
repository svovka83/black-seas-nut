export function getBreadcrumbs() {
	const shop = document.querySelector(".shop-breadcrumbs");
	const product = document.querySelector(".product-breadcrumbs");
	const about = document.querySelector(".about-breadcrumbs");
	const payment = document.querySelector(".payment-breadcrumbs");
	const wholesales = document.querySelector(".wholesales-breadcrumbs");
	const news = document.querySelector(".news-breadcrumbs");
	const gallery = document.querySelector(".gallery-breadcrumbs");

	const signIn = document.querySelector(".sign-in-breadcrumbs");
	const passwordRecovery = document.querySelector(".password-recovery-breadcrumbs");
	const personalAccount = document.querySelector(".personal-account-breadcrumbs");

	if (shop) {
		shop.innerHTML = breadcrumbs(
			[
				{ name: "Главная", path: "/black-seas-nut/" },
				{ name: "Магазин", path: "" },
			],
			"breadcrumbs_white"
		);
	}

	if (product) {
		product.innerHTML = breadcrumbs(
			[
				{ name: "Главная", path: "/black-seas-nut/" },
				{ name: "Карточка товара", path: "" },
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

	if (payment) {
		payment.innerHTML = breadcrumbs(
			[
				{ name: "Главная", path: "/black-seas-nut/" },
				{ name: "Оплата и доставка", path: "" },
			],
			"breadcrumbs_white"
		);
	}

	if (wholesales) {
		wholesales.innerHTML = breadcrumbs(
			[
				{ name: "Главная", path: "/black-seas-nut/" },
				{ name: "Оптовым и корпоративным клиентам", path: "" },
			],
			"breadcrumbs_white"
		);
	}

	if (news) {
		news.innerHTML = breadcrumbs(
			[
				{ name: "Главная", path: "/black-seas-nut/" },
				{ name: "Новости и статьи", path: "" },
			],
			"breadcrumbs_secondary"
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

	// form
	if (signIn) {
		signIn.innerHTML = breadcrumbs(
			[
				{ name: "Главная", path: "/black-seas-nut/" },
				{ name: "Вход", path: "" },
			],
			"breadcrumbs_secondary"
		);
	}
	if (passwordRecovery) {
		passwordRecovery.innerHTML = breadcrumbs(
			[
				{ name: "Главная", path: "/black-seas-nut/" },
				{ name: "Вход", path: "/black-seas-nut/src/pages/sign/sign-in/index.html" },
				{ name: "Восстановление пароля", path: "" },
			],
			"breadcrumbs_secondary"
		);
	}

	if (personalAccount) {
		personalAccount.innerHTML = breadcrumbs(
			[
				{ name: "Главная", path: "/black-seas-nut/" },
				{ name: "Личный кабинет", path: "" },
			],
			"breadcrumbs_secondary"
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
