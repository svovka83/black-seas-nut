function e(){let e=document.querySelector(`.shop-filter__taste`),n=document.querySelector(`.shop-filter__mass`),r=document.querySelector(`.address-content__country`),i=document.querySelector(`.address-content__region`);e&&(e.innerHTML=t(`Вкус`,[{name:`сладкий`,option:`sweet`},{name:`классический`,option:`classic`},{name:`очищенный`,option:`refined`}])),n&&(n.innerHTML=t(`Масса`,[{name:`20 г.`,option:`twenty`},{name:`40 г.`,option:`forty`},{name:`60 г.`,option:`sixty`},{name:`80 г.`,option:`eighty`}])),r&&(r.innerHTML=t(`Страна`,[{name:`Украина`,option:`ukraine`},{name:`США`,option:`usa`},{name:`Чехия`,option:`czech-republic`},{name:`Великобритания`,option:`united-kingdom`}])),i&&(i.innerHTML=t(`Область`,[{name:`Большая`,option:`big-region`},{name:`Средняя`,option:`meddium-region`},{name:`Маленькая`,option:`small-region`}]))}function t(e,t){return`
    <div class="select">
      <div class="select__control">
        <span class="select__text">${e}</span>
        <svg class="select__icon">
          <use href="/black-seas-nut/images/sprites.svg#chevron-icon"></use>
        </svg>
      </div>

      <div class="select__list">
        ${t.map(e=>`
            <div class="select__option" data-option="${e.option}">
              <span class="select__value">${e.name}</span>
            </div>`).join(``)}
      </div>
    </div>
  `}export{e as getSelect};