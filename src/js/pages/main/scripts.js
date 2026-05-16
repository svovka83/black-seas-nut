async function initApp() {
	const preloader = document.querySelector(".preloader");
	const page = document.body.dataset.page;

	try {
		document.body.style.overflow = "hidden";

		if (page === "main") {
			const { initGeneral } = await import("../../init-general.js");
			const { lightMenuHeader, lightMenuFooter } = await import("../../utils/light-current-page.js");
			const { initSliderInProduct } = await import("../../swipers/slider-in-product.js");
			const { controlBannerVideo } = await import("../../controllers/control-banner-video.js");

			await initGeneral();
			lightMenuHeader();
			lightMenuFooter();
			// slider
			initSliderInProduct();
			// controllers
			controlBannerVideo();
		}

		preloader.classList.add("preloader_hide");
		document.body.style.overflow = "";
	} catch (e) {
		console.error(e);
		console.log("error");
	}
}

initApp();
