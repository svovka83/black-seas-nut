import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export function newsSlider() {
	const newsSlider = new Swiper(".news-slider__slider", {
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 500,
		modules: [Navigation],
		navigation: {
			nextEl: ".news-slider__top-nav-button_next",
			prevEl: ".news-slider__top-nav-button_prev",
		},

		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 31,
			},
		},
	});
}
