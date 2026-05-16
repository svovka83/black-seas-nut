export function selectDemo() {
	const demo = document.querySelector(".select-demo");
	if (!demo) return;

	demo.innerHTML = select([
		{ name: "Украина", option: "ukraine" },
		{ name: "Польша", option: "poland" },
		{ name: "Чехия", option: "czech" },
		{ name: "США", option: "usa" },
	]);
}

function select(data) {
	const base = import.meta.env.BASE_URL;

	return `
    <div class="select">
      <div class="select__control">
        <span class="select__text">Страна</span>
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
