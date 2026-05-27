async function initPasswordChangeApp() {
	const preloader = document.querySelector(".preloader");
	const page = document.body.dataset.page;

	try {
		document.body.style.overflow = "hidden";

		if (page === "password-change") {
			const { initGeneral } = await import("../../../init-general.js");
			const { getBreadcrumbs } = await import("../../../components/common/breadcrumbs.js");

			await initGeneral();

			// breadcrumbs
			getBreadcrumbs();
		}

		preloader.classList.add("preloader_hide");
		document.body.style.overflow = "";
	} catch (e) {
		console.error(e);
		console.log("error");
	}
}

initPasswordChangeApp();
