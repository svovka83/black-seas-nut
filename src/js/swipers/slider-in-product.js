import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export function initSliderInProduct() {
	const productsImg = document.querySelectorAll(".product-card__img");
	if (!productsImg) return;

	const swiper = new Swiper(".product-card__slider", {
		slidesPerView: 1,
		speed: 500,
		modules: [Navigation],
		navigation: {
			nextEl: ".product-card__nav-button_next",
			prevEl: ".product-card__nav-button_prev",
		},
	});

	productsImg.forEach((img) => {
		img.addEventListener("mouseover", (e) => {
			const productImg = e.target.closest(".product-card__slider");
			const search = productImg.querySelector(".product-card__search");
			search.style.visibility = "visible";
			search.style.opacity = "1";
			search.addEventListener("click", () => {
				search.style.visibility = "hidden";
				search.style.opacity = "0";
			});
		});
	});

	productsImg.forEach((img) => {
		img.addEventListener("mouseout", (e) => {
			const productImg = e.target.closest(".product-card__slider");
			const search = productImg.querySelector(".product-card__search");
			if (search.contains(e.relatedTarget)) return;
			search.style.visibility = "hidden";
			search.style.opacity = "0";
		});
	});
}
