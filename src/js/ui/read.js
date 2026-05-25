export function getRead() {
	const mainReads = document.querySelectorAll(".news-card__link");
	const newsReads = document.querySelectorAll(".news-article__read");

	if (mainReads) {
		mainReads.forEach((link) => {
			link.innerHTML = read();
		});
	}

	if (newsReads) {
		newsReads.forEach((link) => {
			link.innerHTML = read();
		});
	}
}

function read() {
	const base = import.meta.env.BASE_URL;

	return `
    <a class="read" href="${base}src/pages/one-news/index.html">
      <span class="read__text">Читать</span>
      <svg class="read__icon">
        <use href="${base}images/sprites.svg#arrow-link-icon"></use>
      </svg>
    </a>
  `;
}
