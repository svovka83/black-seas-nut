function e(){let e=document.querySelector(`.header-top-desktop__sign`);e&&(e.innerHTML=t(!1))}function t(e){let t=`/black-seas-nut/`,n=`
		<ul class="sign">
			<li class="sign__item">
				<svg class="sign__icon">
					<use href="${t}images/sprites.svg#signin-icon"></use>
				</svg>
				Выход
			</li>
		</ul>
	`,r=`
		<ul class="sign">
			<li class="sign__item">
				<a href="${t}src/pages/sign/sign-in/index.html">
					<svg class="sign__icon">
						<use href="${t}images/sprites.svg#signin-icon"></use>
					</svg>
					Вход
				</a>
			</li>
			<li class="sign__item">Регистрация</li>
		</ul>
	`;return e?n:r}export{e as getSign};