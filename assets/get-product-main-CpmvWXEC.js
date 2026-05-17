const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slider-in-product-9OsqVAqe.js","assets/swiper-C9THp1Lp.js","assets/swiper-Bdbi0viN.css"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-B7ggkqts.js";import{n as t,r as n,t as r}from"./firebase-Dt862HSq.js";import{t as i}from"./button-tjxm2zXF.js";function a(){return`
    <div class="search">
      <svg class="search__icon">
        <use href="/black-seas-nut/images/sprites.svg#search-icon"></use>
      </svg>
    </div>
  `}function o(e,t,n){let r=`/black-seas-nut/`;return`
    <div class="product-card">
      <div class="product-card__slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="product-card__img" src="${r}images/png/product_1.png" alt="product" />
          </div>
          <div class="swiper-slide">
            <img class="product-card__img" src="${r}images/png/product_2.png" alt="product" />
          </div>
          <div class="swiper-slide">
            <img class="product-card__img" src="${r}images/png/product_3.png" alt="product" />
          </div>
          <div class="swiper-slide">
            <img class="product-card__img" src="${r}images/png/product_4.png" alt="product" />
          </div>
          <div class="swiper-slide">
            <img class="product-card__img" src="${r}images/png/product_5.png" alt="product" />
          </div>
          <div class="swiper-slide">
            <img class="product-card__img" src="${r}images/png/product_6.png" alt="product" />
          </div>
        </div>

        <button class="product-card__nav-button product-card__nav-button_prev">
          <svg class="product-card__nav-button-icon">
            <use href="${r}images/sprites.svg#arrow-left-icon"></use>
          </svg>
        </button>

        <button class="product-card__nav-button product-card__nav-button_next">
          <svg class="product-card__nav-button-icon">
            <use href="${r}images/sprites.svg#arrow-right-icon"></use>
          </svg>
        </button>

        <div class="product-card__search">
          ${a()}
        </div>
      </div>

      <div class="product-card__content">
        <h4 class="product-card__title">${e}</h4>

        <p class="product-card__art">Арт: <span>0091</span></p>

        <p class="product-card__tags">Орех <span>сладкий, классический, очищенный</span></p>

        <div class="product-card__info">
          <div class="product-card__info-item">
            <svg class="product-card__info-icon">
              <use href="${r}images/sprites.svg#scale-icon"></use>
            </svg>
            <dl class="product-card__info-list">
              <dt class="product-card__info-term">Масса:</dt>
              <dd class="product-card__info-definition">40г.</dd>
            </dl>
          </div>
          <div class="product-card__info-item">
            <svg class="product-card__info-icon">
              <use href="${r}images/sprites.svg#product-bag-icon"></use>
            </svg>
            <dl class="product-card__info-list">
              <dt class="product-card__info-term">Упаковка</dt>
              <dd class="product-card__info-definition">вакуумная</dd>
            </dl>
          </div>
        </div>

        <hr class="product-card__hr" />

        <div class="product-card__bottom">
          ${t?`<p class="product-card__bottom-price">
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
            ${i(!1,`Купить`)}
          </div>
        </div>
      </div>

      ${n===`promotion`?`<div class="product-card__promotion-new">
            <svg class="product-card__promotion-new-icon product-card__promotion-new-icon_red">
              <use href="${r}images/sprites.svg#prmotion-new-icon"></use>
            </svg>
            <span class="product-card__promotion-new-text">АКЦИЯ</span>
          </div>`:``}

      ${n===`new`?`<div class="product-card__promotion-new">
            <svg class="product-card__promotion-new-icon product-card__promotion-new-icon_orange">
              <use href="${r}images/sprites.svg#prmotion-new-icon"></use>
            </svg>
            <span class="product-card__promotion-new-text">НОВИНКА</span>
          </div>`:``}
    </div>
  `}var{initSliderInProduct:s}=await e(async()=>{let{initSliderInProduct:e}=await import(`./slider-in-product-9OsqVAqe.js`);return{initSliderInProduct:e}},__vite__mapDeps([0,1,2]));async function c(){let e=document.querySelector(`.main-products__cards`);if(e)try{let i=await t(n(r,`products`)),a=``;i.forEach(e=>{a+=o(e.data().name,e.data().discount,e.data().sales)}),e.innerHTML=a,s()}catch(e){console.error(`Error getting products:`,e)}}async function l(){let e=document.querySelector(`.main-products__slider-wrapper`);if(e)try{let i=await t(n(r,`products`)),a=``;i.forEach(e=>{a+=`
        <div class="swiper-slide">
          ${o(e.data().name,e.data().discount,e.data().sales)}
        </div>
      `}),e.innerHTML=a,s()}catch(e){console.error(`Error getting products:`,e)}}export{c as getProductsMain,l as getProductsSlider};