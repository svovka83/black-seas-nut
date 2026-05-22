import{t as e}from"./button-BsNcIjFM.js";import{i as t,r as n,t as r}from"./firebase-D81A6M0E.js";import{t as i}from"./swiper-C8DQO-UQ.js";import{t as a}from"./navigation-CtvSgd4N.js";function o(){return`
    <div class="search">
      <svg class="search__icon">
        <use href="/black-seas-nut/images/sprites.svg#search-icon"></use>
      </svg>
    </div>
  `}function s(t,n,r,i,a){let s=`/black-seas-nut/`;return`
    <div class="product-card" data-id=${t}>
      <div class="product-card__slider">
        <div class="swiper-wrapper">
        ${r.map(e=>`              
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
          ${o()}
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
          ${i?`<p class="product-card__bottom-price">
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

      ${a===`promotion`?`<div class="product-card__promotion-new">
            <svg class="product-card__promotion-new-icon product-card__promotion-new-icon_red">
              <use href="${s}images/sprites.svg#prmotion-new-icon"></use>
            </svg>
            <span class="product-card__promotion-new-text">АКЦИЯ</span>
          </div>`:``}

      ${a===`new`?`<div class="product-card__promotion-new">
            <svg class="product-card__promotion-new-icon product-card__promotion-new-icon_orange">
              <use href="${s}images/sprites.svg#prmotion-new-icon"></use>
            </svg>
            <span class="product-card__promotion-new-text">НОВИНКА</span>
          </div>`:``}
    </div>
  `}function c(){let e=document.querySelectorAll(`.product-card__img`);e&&(new i(`.product-card__slider`,{slidesPerView:1,speed:500,modules:[a],navigation:{nextEl:`.product-card__nav-button_next`,prevEl:`.product-card__nav-button_prev`}}),e.forEach(e=>{e.addEventListener(`mouseover`,e=>{let t=e.target.closest(`.product-card__slider`).querySelector(`.product-card__search`);t.style.visibility=`visible`,t.style.opacity=`1`,t.addEventListener(`click`,()=>{t.style.visibility=`hidden`,t.style.opacity=`0`})})}),e.forEach(e=>{e.addEventListener(`mouseout`,e=>{let t=e.target.closest(`.product-card__slider`).querySelector(`.product-card__search`);t.contains(e.relatedTarget)||(t.style.visibility=`hidden`,t.style.opacity=`0`)})}))}async function l(){let e=document.querySelector(`.main-products__cards`);if(e)try{let i=await n(t(r,`products`)),a=``;i.forEach(e=>{a+=s(e.id,e.data().name,e.data().imagesUrl,e.data().discount,e.data().sales)}),e.innerHTML=a,c()}catch(e){console.error(`Error getting products:`,e)}}async function u(){let e=document.querySelector(`.main-products__slider-wrapper`);if(e)try{let i=await n(t(r,`products`)),a=``;i.forEach(e=>{a+=`
        <div class="swiper-slide">
          ${s(e.id,e.data().name,e.data().imagesUrl,e.data().discount,e.data().sales)}
        </div>
      `}),e.innerHTML=a,c()}catch(e){console.error(`Error getting products:`,e)}}export{l as getProductsMain,u as getProductsSlider};