async function initRegistrationApp() {
	const preloader = document.querySelector(".preloader");
	const page = document.body.dataset.page;

	try {
		document.body.style.overflow = "hidden";

		if (page === "registration") {
			const { initGeneral } = await import("../../../init-general.js");
			const { getBreadcrumbs } = await import("../../../components/common/breadcrumbs.js");
			const { getSelect } = await import("../../../ui/select.js");
			const { controlSelect } = await import("../../../controllers/control-select.js");

			await initGeneral();

			// breadcrumbs
			getBreadcrumbs();

			// ui and components
			getSelect();

			// controllers
			controlSelect();
		}

		preloader.classList.add("preloader_hide");
		document.body.style.overflow = "";
	} catch (e) {
		console.error(e);
		console.log("error");
	}
}

initRegistrationApp();
