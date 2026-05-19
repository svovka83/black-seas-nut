function e(){let e=document.querySelector(`.news-card__link`);e&&(e.innerHTML=t())}function t(){return`
    <a class="read" href="#!">
      <span class="read__text">Читать</span>
      <svg class="read__icon">
        <use href="/black-seas-nut/images/sprites.svg#arrow-link-icon"></use>
      </svg>
    </a>
  `}export{e as getRead};