const page = document.body.dataset.page;

if (page === "main") {
	const { initGeneral } = await import("../../init-general.js");

	await initGeneral();
}
