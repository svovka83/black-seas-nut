import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

export function manufacturerSlider() {
	const manufacturerSlider = new Swiper(".manufacturer-slider", {
		slidesPerView: 1,
		speed: 500,
		modules: [Navigation],
		navigation: {
			nextEl: ".manufacturer-slider__nav-button_next",
			prevEl: ".manufacturer-slider__nav-button_prev",
		},
	});
}
