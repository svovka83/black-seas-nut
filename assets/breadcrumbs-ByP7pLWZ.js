function e(){let e=document.querySelector(`.about-breadcrumbs`);e&&(e.innerHTML=t([{name:`Главная`,path:`/black-seas-nut/`},{name:`О производстве`,path:``}]))}function t(e){return`
		<ul class="breadcrumbs">
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