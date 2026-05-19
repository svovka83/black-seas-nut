async function initApp() {
	const preloader = document.querySelector(".preloader");
	const page = document.body.dataset.page;

	try {
		document.body.style.overflow = "hidden";

		if (page === "main") {
			const { initGeneral } = await import("../../init-general.js");
			const { lightMenuHeader, lightMenuFooter } = await import("../../utils/light-current-page.js");
			const { getProductsMain, getProductsSlider } = await import("./init-document/get-product-main.js");
			const { productsSlider } = await import("../../swipers/products-slider.js");
			const { manufacturerSlider } = await import("../../swipers/manufacturer-slider.js");
			const { controlBannerVideo } = await import("../../controllers/control-banner-video.js");
			const { controlModalProductSlider } = await import("../../controllers/control-modal-product-slider.js");
			const { controlManufacturerVideos } = await import("../../controllers/control-manufacturer-videos.js");
			const { controlProduceVideo } = await import("../../controllers/control-produce-video.js");

			await initGeneral();
			lightMenuHeader();
			lightMenuFooter();

			// slider
			productsSlider();
			manufacturerSlider();
			// firestore
			getProductsMain();
			getProductsSlider();
			// controllers
			controlBannerVideo();
			controlModalProductSlider();
			controlManufacturerVideos();
			controlProduceVideo();
		}

		preloader.classList.add("preloader_hide");
		document.body.style.overflow = "";
	} catch (e) {
		console.error(e);
		console.log("error");
	}
}

initApp();
