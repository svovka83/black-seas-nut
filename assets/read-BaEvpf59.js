function e(){let e=document.querySelectorAll(`.news-card__link`),n=document.querySelectorAll(`.news-article__read`);e&&e.forEach(e=>{e.innerHTML=t()}),n&&n.forEach(e=>{e.innerHTML=t()})}function t(){return`
    <a class="read" href="#!">
      <span class="read__text">Читать</span>
      <svg class="read__icon">
        <use href="/black-seas-nut/images/sprites.svg#arrow-link-icon"></use>
      </svg>
    </a>
  `}export{e as getRead};