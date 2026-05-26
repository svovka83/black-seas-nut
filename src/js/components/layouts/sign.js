export function getSign() {
	const headerSign = document.querySelector(".header-top-desktop__sign");
	if (!headerSign) return;

	headerSign.innerHTML = sign(false);
}

function sign(isAuth) {
	const base = import.meta.env.BASE_URL;

	const signOut = `
		<ul class="sign">
			<li class="sign__item">
				<svg class="sign__icon">
					<use href="${base}images/sprites.svg#signin-icon"></use>
				</svg>
				Выход
			</li>
		</ul>
	`;

	const signIn = `
		<ul class="sign">
			<li class="sign__item">
				<a href="${base}src/pages/sign/sign-in/index.html">
					<svg class="sign__icon">
						<use href="${base}images/sprites.svg#signin-icon"></use>
					</svg>
					Вход
				</a>
			</li>
			<li class="sign__item">Регистрация</li>
		</ul>
	`;

	return isAuth ? signOut : signIn;
}
