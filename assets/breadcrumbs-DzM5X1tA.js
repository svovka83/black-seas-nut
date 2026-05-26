function e(){let e=document.querySelector(`.shop-breadcrumbs`),n=document.querySelector(`.product-breadcrumbs`),r=document.querySelector(`.about-breadcrumbs`),i=document.querySelector(`.payment-breadcrumbs`),a=document.querySelector(`.wholesales-breadcrumbs`),o=document.querySelector(`.news-breadcrumbs`),s=document.querySelector(`.gallery-breadcrumbs`);e&&(e.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`Магазин`,path:``}],`breadcrumbs_white`)),n&&(n.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`Карточка товара`,path:``}],`breadcrumbs_secondary`)),r&&(r.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`О производстве`,path:``}],`breadcrumbs_white`)),i&&(i.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`Оплата и доставка`,path:``}],`breadcrumbs_white`)),a&&(a.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`Оптовым и корпоративным клиентам`,path:``}],`breadcrumbs_white`)),o&&(o.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`Новости и статьи`,path:``}],`breadcrumbs_secondary`)),s&&(s.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`Галерея`,path:``}],`breadcrumbs_white`))}function t(e,t){return`
		<ul class="breadcrumbs ${t}">
			${e.map(e=>`
						<li class="breadcrumbs__item">
							<svg class="breadcrumbs__icon">
								<use href="/black-seas-nut/images/sprites.svg#breadcrumbs-icon"></use>
							</svg>
							<a class="breadcrumbs__link" href="${e.path}">${e.name}</a>
						</li>
					`).join(``)}
		</ul>
	`}export{e as getBreadcrumbs};