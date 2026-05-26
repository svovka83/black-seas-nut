export function getSelect() {
	const taste = document.querySelector(".shop-filter__taste");
	const mass = document.querySelector(".shop-filter__mass");

	if (taste) {
		taste.innerHTML = select("Вкус", [
			{ name: "сладкий", option: "sweet" },
			{ name: "классический", option: "classic" },
			{ name: "очищенный", option: "refined" },
		]);
	}

	if (mass) {
		mass.innerHTML = select("Масса", [
			{ name: "20 г.", option: "twenty" },
			{ name: "40 г.", option: "forty" },
			{ name: "60 г.", option: "sixty" },
			{ name: "80 г.", option: "eighty" },
		]);
	}
}

function select(initial, data) {
	const base = import.meta.env.BASE_URL;

	return `
    <div class="select">
      <div class="select__control">
        <span class="select__text">${initial}</span>
        <svg class="select__icon">
          <use href="${base}images/sprites.svg#chevron-icon"></use>
        </svg>
      </div>

      <div class="select__list">
        ${data
			.map((d) => {
				return `
            <div class="select__option" data-option="${d.option}">
              <span class="select__value">${d.name}</span>
            </div>`;
			})
			.join("")}
      </div>
    </div>
  `;
}
