export function getButton() {
	const headerButton = document.querySelector(".header-middle__button");
	if (!headerButton) return;

	headerButton.innerHTML = button(false, "Заказать звонок");
}

export function button(isActive = false, titleNormal = "Заказать звонок", titleActive = "") {
	return `
    <button class="button ${!isActive ? "button_normal" : "button_active"}">
      <span class="button__title">${!isActive ? titleNormal : titleActive}</span>
    </button>
  `;
}
