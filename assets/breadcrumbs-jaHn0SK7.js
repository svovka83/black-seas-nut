function e(){let e=document.querySelector(`.news-breadcrumbs`),n=document.querySelector(`.about-breadcrumbs`),r=document.querySelector(`.gallery-breadcrumbs`);e&&(e.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`Новости и статьи`,path:``}],`breadcrumbs_secondary`)),n&&(n.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`О производстве`,path:``}],`breadcrumbs_white`)),r&&(r.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`Галерея`,path:``}],`breadcrumbs_white`))}function t(e,t){return`
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