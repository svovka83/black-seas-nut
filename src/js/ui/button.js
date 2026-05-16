export function getButton() {
	const headerButton = document.querySelector(".header-middle__button");
	const productButton = document.querySelector(".product-card__bottom-button");
	if (!headerButton) return;
	if (!productButton) return;

	headerButton.innerHTML = button(false, "Заказать звонок");
	productButton.innerHTML = button(false, "Купить");
}

function button(isActive = false, titleNormal = "Заказать звонок", titleActive = "") {
	return `
    <button class="button ${!isActive ? "button_normal" : "button_active"}">
      <span class="button__title">${!isActive ? titleNormal : titleActive}</span>
    </button>
  `;
}
