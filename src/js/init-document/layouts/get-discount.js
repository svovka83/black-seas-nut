export function getDiscount() {
	const headerDiscountTop = document.querySelector(".header-top-desktop__discount");
	const headerDiscountBottom = document.querySelector(".header-bottom-mobile");
	if (!headerDiscountTop) return;
	if (!headerDiscountBottom) return;

	const isAuth = true;

	headerDiscountTop.innerText = isAuth ? "Ваша персональная скидка - 5%" : "";

	if (!isAuth) {
		headerDiscountBottom.style.display = "none";
	}
}
