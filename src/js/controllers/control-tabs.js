export function controlTabs() {
	const tabBtns = document.querySelectorAll(".tab");

	document.addEventListener("click", (e) => {
		const tabBtn = e.target.closest(".tab");

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
