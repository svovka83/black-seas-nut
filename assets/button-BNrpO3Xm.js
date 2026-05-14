function e(){let e=document.querySelector(`.header-middle__button`);e&&(e.innerHTML=t(!1,`Заказать звонок`))}function t(e=!1,t=`Заказать звонок`,n=``){return`
    <button class="button ${e?`button_active`:`button_normal`}">
      <span class="button__title">${e?n:t}</span>
    </button>
  `}export{e as getButton};