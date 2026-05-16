export function controlSelect() {
	const selects = document.querySelectorAll(".select");

	selects.forEach((select) => {
		const control = select.querySelector(".select__control");
		const initial = select.querySelector(".select__text");
		const icon = select.querySelector(".select__icon");
		const list = select.querySelector(".select__list");
		const options = select.querySelectorAll(".select__option");

		control.addEventListener("click", () => {
			if (!control.classList.contains("select__control_active")) {
				control.classList.add("select__control_active");
				icon.classList.add("select__icon_open");
				list.classList.add("select__list_open");
			} else {
				control.classList.remove("select__control_active");
				icon.classList.remove("select__icon_open");
				list.classList.remove("select__list_open");
			}
		});

		options.forEach((option) => {
			option.addEventListener("click", () => {
				initial.textContent = option.querySelector(".select__value").textContent;
				control.classList.remove("select__control_active");
				icon.classList.remove("select__icon_open");
				list.classList.remove("select__list_open");
			});
		});
	});
}
