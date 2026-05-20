export function getBag() {
	const headerBag = document.querySelector(".header-middle__bag");
	if (!headerBag) return;

	headerBag.innerHTML = bag(0);
}

function bag(quantity) {
	const base = import.meta.env.BASE_URL;

	return `
    <div class="bag">
      <svg class="bag__icon">
        <use href="${base}images/sprites.svg#bag-icon"></use>
      </svg>
      <span class="bag__quantity">${quantity}</span>
    </div>
  `;
}
