import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export function initOneProductSlider() {
	const swiper = new Swiper(".product-slider", {
		slidesPerView: 1,
		speed: 500,
		modules: [Navigation],
		navigation: {
			nextEl: ".product-slider__nav-button_next",
			prevEl: ".product-slider__nav-button_prev",
		},
	});
}
