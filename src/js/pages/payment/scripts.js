async function initPaymentApp() {
	const preloader = document.querySelector(".preloader");
	const page = document.body.dataset.page;

	try {
		document.body.style.overflow = "hidden";

		if (page === "payment") {
			const { initGeneral } = await import("../../init-general.js");
			const { lightMenuHeader, lightMenuFooter } = await import("../../utils/light-current-page.js");
			const { getBreadcrumbs } = await import("../../components/common/breadcrumbs.js");
			const { controlProduceVideo } = await import("../../controllers/control-produce-video.js");

			await initGeneral();

			// breadcrumbs
			// getBreadcrumbs();

			// light current page
			lightMenuHeader();
			lightMenuFooter();

			// controllers
			controlProduceVideo();
		}

		preloader.classList.add("preloader_hide");
		document.body.style.overflow = "";
	} catch (e) {
		console.error(e);
		console.log("error");
	}
}

initPaymentApp();
