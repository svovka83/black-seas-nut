var e=Object.defineProperty,t=((t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r})({button:()=>r,getButton:()=>n});function n(){let e=document.querySelector(`.header-middle__button`),t=document.querySelector(`.product-card__bottom-button`);e&&t&&(e.innerHTML=r(!1,`Заказать звонок`),t.innerHTML=r(!1,`Купить`))}function r(e=!1,t=`Заказать звонок`,n=``){return`
    <button class="button ${e?`button_active`:`button_normal`}">
      <span class="button__title">${e?n:t}</span>
    </button>
  `}export{t as n,r as t};