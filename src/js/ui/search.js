export function search() {
	const base = import.meta.env.BASE_URL;

	return `
    <div class="search">
      <svg class="search__icon">
        <use href="${base}images/sprites.svg#search-icon"></use>
      </svg>
    </div>
  `;
}
