import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export function initModalProductSlider() {
	const swiper = new Swiper(".modal-product-slider__slider", {
		slidesPerView: 1,
		speed: 500,
		modules: [Navigation],
		navigation: {
			nextEl: ".modal-product-slider__nav-button_next",
			prevEl: ".modal-product-slider__nav-button_prev",
		},
	});
}
