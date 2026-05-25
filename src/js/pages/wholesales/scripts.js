async function initWholesalesApp() {
	const preloader = document.querySelector(".preloader");
	const page = document.body.dataset.page;

	try {
		document.body.style.overflow = "hidden";

		if (page === "wholesales") {
			const { initGeneral } = await import("../../init-general.js");
			const { lightMenuHeader, lightMenuFooter } = await import("../../utils/light-current-page.js");
			const { getBreadcrumbs } = await import("../../components/common/breadcrumbs.js");
			const { controlTabs } = await import("../../controllers/control-tabs.js");

			await initGeneral();

			// breadcrumbs
			getBreadcrumbs();

			// light current page
			lightMenuHeader();
			lightMenuFooter();

			// controllers
			controlTabs();
		}

		preloader.classList.add("preloader_hide");
		document.body.style.overflow = "";
	} catch (e) {
		console.error(e);
		console.log("error");
	}
}

initWholesalesApp();
