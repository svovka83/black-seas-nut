export function controlTabs() {
	const tabBtns = document.querySelectorAll(".tab, .tab-simple");

	document.addEventListener("click", (e) => {
		const tabBtn = e.target.closest(".tab, .tab-simple");

		tabBtns.forEach((btn) => {
			if (btn.classList.contains("active")) {
				btn.classList.remove("active");
			}
		});

		if (!tabBtn.classList.contains("active")) {
			tabBtn.classList.add("active");
		}
	});
}
