async function initOneNewsApp() {
	const preloader = document.querySelector(".preloader");
	const page = document.body.dataset.page;

	try {
		document.body.style.overflow = "hidden";

		if (page === "one-news") {
			const { initGeneral } = await import("../../init-general.js");
			const { lightMenuHeader, lightMenuFooter } = await import("../../utils/light-current-page.js");
			const { getBreadcrumbs } = await import("../../components/common/breadcrumbs.js");
			const { getRead } = await import("../../ui/read.js");

			await initGeneral();

			// breadcrumbs
			getBreadcrumbs();

			// light current page
			lightMenuHeader();
			lightMenuFooter();

			// ui and components
			getRead();
		}

		preloader.classList.add("preloader_hide");
		document.body.style.overflow = "";
	} catch (e) {
		console.error(e);
		console.log("error");
	}
}

initOneNewsApp();
