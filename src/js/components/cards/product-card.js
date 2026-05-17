import { search } from "../../ui/search";
import { button } from "../../ui/button";

export function productCard(id, name, imagesUrl, discount, sales) {
	const base = import.meta.env.BASE_URL;

	return `
    <div class="product-card" data-id=${id}>
      <div class="product-card__slider">
        <div class="swiper-wrapper">
        ${imagesUrl
			.map(
				(url) => `              
            <div class="swiper-slide">
              <img class="product-card__img" src="${url}" alt="product" />
            </div>
            `
			)
			.join("")}
        </div>

        <button class="product-card__nav-button product-card__nav-button_prev">
          <svg class="product-card__nav-button-icon">
            <use href="${base}images/sprites.svg#arrow-left-icon"></use>
          </svg>
        </button>

        <button class="product-card__nav-button product-card__nav-button_next">
          <svg class="product-card__nav-button-icon">
            <use href="${base}images/sprites.svg#arrow-right-icon"></use>
          </svg>
        </button>

        <div class="product-card__search">
          ${search()}
        </div>
      </div>

      <div class="product-card__content">
        <h4 class="product-card__title">${name}</h4>

        <p class="product-card__art">Арт: <span>0091</span></p>

        <p class="product-card__tags">Орех <span>сладкий, классический, очищенный</span></p>

        <div class="product-card__info">
          <div class="product-card__info-item">
            <svg class="product-card__info-icon">
              <use href="${base}images/sprites.svg#scale-icon"></use>
            </svg>
            <dl class="product-card__info-list">
              <dt class="product-card__info-term">Масса:</dt>
              <dd class="product-card__info-definition">40г.</dd>
            </dl>
          </div>
          <div class="product-card__info-item">
            <svg class="product-card__info-icon">
              <use href="${base}images/sprites.svg#product-bag-icon"></use>
            </svg>
            <dl class="product-card__info-list">
              <dt class="product-card__info-term">Упаковка</dt>
              <dd class="product-card__info-definition">вакуумная</dd>
            </dl>
          </div>
        </div>

        <hr class="product-card__hr" />

        <div class="product-card__bottom">
          ${
				discount
					? `<p class="product-card__bottom-price">
              Цена:
              <span class="product-card__bottom-cost">
                19 
                <span class="product-card__bottom-cost-ua">грн.</span>
              </span>
              <span class="product-card__bottom-discount">
                21 
                <span class="product-card__bottom-discount-ua">грн.</span>
              </span>
            </p>`
					: `<p class="product-card__bottom-price">
              Цена:
              <span class="product-card__bottom-cost">
                <span class="product-card__bottom-cost-ua">от </span>
                21
                <span class="product-card__bottom-cost-ua">грн.</span>
              </span>
            </p>`
			}

          <div class="product-card__bottom-button">
            ${button(false, "Купить")}
          </div>
        </div>
      </div>

      ${
			sales === "promotion"
				? `<div class="product-card__promotion-new">
            <svg class="product-card__promotion-new-icon product-card__promotion-new-icon_red">
              <use href="${base}images/sprites.svg#prmotion-new-icon"></use>
            </svg>
            <span class="product-card__promotion-new-text">АКЦИЯ</span>
          </div>`
				: ""
		}

      ${
			sales === "new"
				? `<div class="product-card__promotion-new">
            <svg class="product-card__promotion-new-icon product-card__promotion-new-icon_orange">
              <use href="${base}images/sprites.svg#prmotion-new-icon"></use>
            </svg>
            <span class="product-card__promotion-new-text">НОВИНКА</span>
          </div>`
				: ""
		}
    </div>
  `;
}
