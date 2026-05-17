import Swiper from "swiper";
import "swiper/css";

export function productsSlider() {
	const swiperSlider = new Swiper(".main-products__slider", {
		slidesPerView: 1,
		spaceBetween: 4,
		speed: 500,
	});
}
