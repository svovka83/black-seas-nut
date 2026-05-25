function e(){let e=document.querySelector(`.about-breadcrumbs`),n=document.querySelector(`.payment-breadcrumbs`),r=document.querySelector(`.wholesales-breadcrumbs`),i=document.querySelector(`.news-breadcrumbs`),a=document.querySelector(`.gallery-breadcrumbs`);e&&(e.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`О производстве`,path:``}],`breadcrumbs_white`)),n&&(n.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`Оплата и доставка`,path:``}],`breadcrumbs_white`)),r&&(r.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`Оптовым и корпоративным клиентам`,path:``}],`breadcrumbs_white`)),i&&(i.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`Новости и статьи`,path:``}],`breadcrumbs_secondary`)),a&&(a.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`Галерея`,path:``}],`breadcrumbs_white`))}function t(e,t){return`
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