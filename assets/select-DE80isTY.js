function e(){let e=document.querySelector(`.shop-filter__taste`),n=document.querySelector(`.shop-filter__mass`);e&&(e.innerHTML=t(`Вкус`,[{name:`сладкий`,option:`sweet`},{name:`классический`,option:`classic`},{name:`очищенный`,option:`refined`}])),n&&(n.innerHTML=t(`Масса`,[{name:`20 г.`,option:`twenty`},{name:`40 г.`,option:`forty`},{name:`60 г.`,option:`sixty`},{name:`80 г.`,option:`eighty`}]))}function t(e,t){return`
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