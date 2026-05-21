function e(){let e=document.querySelector(`.header-middle__bag`);e&&(e.innerHTML=t(0))}function t(e){return`
    <div class="bag">
      <svg class="bag__icon">
        <use href="/black-seas-nut/images/sprites.svg#bag-icon"></use>
      </svg>
      <span class="bag__quantity">${e}</span>
    </div>
  `}export{e as getBag};