async function initGalleryApp() {
	const preloader = document.querySelector(".preloader");
	const page = document.body.dataset.page;

	try {
		document.body.style.overflow = "hidden";

		if (page === "gallery") {
			const { initGeneral } = await import("../../init-general.js");
			const { lightMenuHeader, lightMenuFooter } = await import("../../utils/light-current-page.js");
			const { getBreadcrumbs } = await import("../../components/common/breadcrumbs.js");
			const { getRead } = await import("../../ui/read.js");
			const { manufacturerSlider } = await import("../../swipers/manufacturer-slider.js");
			const { newsSlider } = await import("../../swipers/news-slider.js");
			const { controlBannerVideo } = await import("../../controllers/control-banner-video.js");
			const { controlManufacturerVideos } = await import("../../controllers/control-manufacturer-videos.js");
			const { controlGaleryVideo } = await import("../../controllers/control-galery-video.js");

			await initGeneral();

			// breadcrumbs
			getBreadcrumbs();

			// light current page
			lightMenuHeader();
			lightMenuFooter();

			// slider
			// manufacturerSlider();
			// newsSlider();

			// ui and components
			// getRead();

			// controllers
			// controlBannerVideo();
			// controlManufacturerVideos();
			// controlGaleryVideo();
		}

		preloader.classList.add("preloader_hide");
		document.body.style.overflow = "";
	} catch (e) {
		console.error(e);
		console.log("error");
	}
}

initGalleryApp();
