import{t as e}from"./button-DEInOqcS.js";import{t}from"./swiper-C_K6ailm.js";import{t as n}from"./navigation-l89tnztZ.js";function r(){return`
    <div class="search">
      <svg class="search__icon">
        <use href="/black-seas-nut/images/sprites.svg#search-icon"></use>
      </svg>
    </div>
  `}function i(t,n,i,a,o){let s=`/black-seas-nut/`;return`
    <div class="product-card" data-id=${t}>
      <a class="product-card__link" href="${s}src/pages/product/index.html?id=${t}"></a>

      <div class="product-card__slider">
        <div class="swiper-wrapper">
        ${i.map(e=>`              
            <div class="swiper-slide">
              <img class="product-card__img" src="${e}" alt="product" />
            </div>
            `).join(``)}
        </div>

        <button class="product-card__nav-button product-card__nav-button_prev">
          <svg class="product-card__nav-button-icon">
            <use href="${s}images/sprites.svg#arrow-left-icon"></use>
          </svg>
        </button>

        <button class="product-card__nav-button product-card__nav-button_next">
          <svg class="product-card__nav-button-icon">
            <use href="${s}images/sprites.svg#arrow-right-icon"></use>
          </svg>
        </button>

        <div class="product-card__search">
          ${r()}
        </div>
      </div>

      <div class="product-card__content">
        <h4 class="product-card__title">${n}</h4>

        <p class="product-card__art">Арт: <span>0091</span></p>

        <p class="product-card__tags">Орех <span>сладкий, классический, очищенный</span></p>

        <div class="product-card__info">
          <div class="product-card__info-item">
            <svg class="product-card__info-icon">
              <use href="${s}images/sprites.svg#scale-icon"></use>
            </svg>
            <dl class="product-card__info-list">
              <dt class="product-card__info-term">Масса:</dt>
              <dd class="product-card__info-definition">40г.</dd>
            </dl>
          </div>
          <div class="product-card__info-item">
            <svg class="product-card__info-icon">
              <use href="${s}images/sprites.svg#product-bag-icon"></use>
            </svg>
            <dl class="product-card__info-list">
              <dt class="product-card__info-term">Упаковка</dt>
              <dd class="product-card__info-definition">вакуумная</dd>
            </dl>
          </div>
        </div>

        <hr class="product-card__hr" />

        <div class="product-card__bottom">
          ${a?`<p class="product-card__bottom-price">
              Цена:
              <span class="product-card__bottom-cost">
                19 
                <span class="product-card__bottom-cost-ua">грн.</span>
              </span>
              <span class="product-card__bottom-discount">
                21 
                <span class="product-card__bottom-discount-ua">грн.</span>
              </span>
            </p>`:`<p class="product-card__bottom-price">
              Цена:
              <span class="product-card__bottom-cost">
                <span class="product-card__bottom-cost-ua">от </span>
                21
                <span class="product-card__bottom-cost-ua">грн.</span>
              </span>
            </p>`}

          <div class="product-card__bottom-button">
            ${e(!1,`Купить`)}
          </div>
        </div>
      </div>

      ${o===`promotion`?`<div class="product-card__promotion-new">
            <svg class="product-card__promotion-new-icon product-card__promotion-new-icon_red">
              <use href="${s}images/sprites.svg#prmotion-new-icon"></use>
            </svg>
            <span class="product-card__promotion-new-text">АКЦИЯ</span>
          </div>`:``}

      ${o===`new`?`<div class="product-card__promotion-new">
            <svg class="product-card__promotion-new-icon product-card__promotion-new-icon_orange">
              <use href="${s}images/sprites.svg#prmotion-new-icon"></use>
            </svg>
            <span class="product-card__promotion-new-text">НОВИНКА</span>
          </div>`:``}
    </div>
  `}function a(){let e=document.querySelectorAll(`.product-card__img`);e&&(new t(`.product-card__slider`,{slidesPerView:1,speed:500,modules:[n],navigation:{nextEl:`.product-card__nav-button_next`,prevEl:`.product-card__nav-button_prev`}}),e.forEach(e=>{e.addEventListener(`mouseover`,e=>{let t=e.target.closest(`.product-card__slider`).querySelector(`.product-card__search`);t.style.visibility=`visible`,t.style.opacity=`1`,t.addEventListener(`click`,()=>{t.style.visibility=`hidden`,t.style.opacity=`0`})})}),e.forEach(e=>{e.addEventListener(`mouseout`,e=>{let t=e.target.closest(`.product-card__slider`).querySelector(`.product-card__search`);t.contains(e.relatedTarget)||(t.style.visibility=`hidden`,t.style.opacity=`0`)})}))}export{i as n,a as t};