async function initShopApp() {
	const preloader = document.querySelector(".preloader");
	const page = document.body.dataset.page;

	try {
		document.body.style.overflow = "hidden";

		if (page === "shop") {
			const { initGeneral } = await import("../../init-general.js");
			const { lightMenuHeader, lightMenuFooter } = await import("../../utils/light-current-page.js");
			const { getBreadcrumbs } = await import("../../components/common/breadcrumbs.js");
			const { getProducts } = await import("./init-document/get-products.js");
			const { manufacturerSlider } = await import("../../swipers/manufacturer-slider.js");
			const { getSelect } = await import("../../ui/select.js");
			const { controlSelect } = await import("../../controllers/control-select.js");
			const { controlModalProductSlider } = await import("../../controllers/control-modal-product-slider.js");
			const { controlManufacturerVideos } = await import("../../controllers/control-manufacturer-videos.js");

			await initGeneral();

			// light current page
			lightMenuHeader();
			lightMenuFooter();

			// breadcrumbs
			getBreadcrumbs();

			// slider
			getProducts();

			// firestore
			manufacturerSlider();

			// ui and components
			getSelect();

			// controllers
			controlSelect();
			controlModalProductSlider();
			controlManufacturerVideos();
		}

		preloader.classList.add("preloader_hide");
		document.body.style.overflow = "";
	} catch (e) {
		console.error(e);
		console.log("error");
	}
}

initShopApp();
