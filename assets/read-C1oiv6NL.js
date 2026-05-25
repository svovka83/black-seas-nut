function e(){let e=document.querySelectorAll(`.news-card__link`),n=document.querySelectorAll(`.news-article__read`),r=document.querySelectorAll(`.one-news-card__read`);e&&e.forEach(e=>{e.innerHTML=t()}),n&&n.forEach(e=>{e.innerHTML=t()}),r&&r.forEach(e=>{e.innerHTML=t()})}function t(){let e=`/black-seas-nut/`;return`
    <a class="read" href="${e}src/pages/one-news/index.html">
      <span class="read__text">Читать</span>
      <svg class="read__icon">
        <use href="${e}images/sprites.svg#arrow-link-icon"></use>
      </svg>
    </a>
  `}export{e as getRead};