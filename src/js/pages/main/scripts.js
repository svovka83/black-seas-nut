const page = document.body.dataset.page;

if (page === "main") {
	const { initGeneral } = await import("../../init-general.js");
	const { lightCurrentPageHeader, lightCurrentPageFooter } = await import("../../utils/light-current-page.js");

	await initGeneral();
	lightCurrentPageHeader();
	lightCurrentPageFooter();
}
