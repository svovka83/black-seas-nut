async function initApp() {
	const preloader = document.querySelector(".preloader");
	const page = document.body.dataset.page;

	try {
		if (page === "main") {
			const { initGeneral } = await import("../../init-general.js");
			const { lightMenuHeader, lightMenuFooter } = await import("../../utils/light-current-page.js");

			await initGeneral();
			lightMenuHeader();
			lightMenuFooter();
		}

		preloader.classList.add("preloader_hide");
		document.body.style.overflow = "";
	} catch (e) {
		console.error(e);
		console.log("error");
	}
}

initApp();
