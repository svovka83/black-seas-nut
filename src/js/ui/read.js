export function getRead() {
	const mainReads = document.querySelectorAll(".news-card__link");
	if (mainReads) {
		mainReads.forEach((link) => {
			link.innerHTML = read();
		});
	}
}

function read() {
	const base = import.meta.env.BASE_URL;

	return `
    <a class="read" href="#!">
      <span class="read__text">Читать</span>
      <svg class="read__icon">
        <use href="${base}images/sprites.svg#arrow-link-icon"></use>
      </svg>
    </a>
  `;
}
