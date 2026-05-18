import { debounce } from "../utils/debounce.js";

export function controlManufacturerVideos() {
	const base = import.meta.env.BASE_URL;

	const screen = document.querySelector(".manufacturer-slider");
	const eclipse = document.querySelector(".manufacturer-slider__eclipse");
	const navBtns = document.querySelectorAll(".manufacturer-slider__nav-button");
	const btn = document.getElementById("play_manufacturer");
	const btnWrapper = btn.parentElement;
	const icon = btn.querySelector(".play__use");

	btn.addEventListener("click", () => {
		const swiper = btn.closest(".manufacturer-slider");
		const slide = swiper.querySelector(".swiper-slide.swiper-slide-active");
		const video = slide.querySelector(".manufacturer-slider__slide");

		if (video.paused) {
			video.play();

			btnWrapper.classList.add("manufacturer-slider__play_onplay");
			eclipse.classList.add("manufacturer-slider__eclipse_onplay");
			icon.setAttribute("href", `${base}images/sprites.svg#${icon.dataset.stop}`);
		} else {
			video.pause();
			video.currentTime = 0;
			video.load();

			btnWrapper.classList.remove("manufacturer-slider__play_onplay");
			eclipse.classList.remove("manufacturer-slider__eclipse_onplay");
			icon.setAttribute("href", `${base}images/sprites.svg#${icon.dataset.play}`);
		}
	});

	const hideVideoElements = debounce(() => {
		const slide = screen.querySelector(".swiper-slide.swiper-slide-active");
		const video = slide.querySelector(".manufacturer-slider__slide");
		if (!video.paused) {
			btnWrapper.classList.add("manufacturer-slider__play_onplay");
			eclipse.classList.remove("manufacturer-slider__eclipse_onplay");
		}
	}, 3000);

	// "mousemove" - є важкий - можливо треба використати "трелоу"
	screen.addEventListener("mousemove", (e) => {
		const slide = screen.querySelector(".swiper-slide.swiper-slide-active");
		const video = slide.querySelector(".manufacturer-slider__slide");
		if (!video.paused) {
			btnWrapper.classList.remove("manufacturer-slider__play_onplay");
			eclipse.classList.add("manufacturer-slider__eclipse_onplay");
			hideVideoElements();
		}
	});

	screen.addEventListener("mouseout", () => {
		const slide = screen.querySelector(".swiper-slide.swiper-slide-active");
		const video = slide.querySelector(".manufacturer-slider__slide");
		if (!video.paused) {
			btnWrapper.classList.add("manufacturer-slider__play_onplay");
			eclipse.classList.remove("manufacturer-slider__eclipse_onplay");
		}
	});

	navBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			eclipse.classList.remove("manufacturer-slider__eclipse_onplay");
			btnWrapper.classList.remove("manufacturer-slider__play_onplay");
			icon.setAttribute("href", `${base}images/sprites.svg#${icon.dataset.play}`);

			const slidePrev = screen.querySelector(".swiper-slide.swiper-slide-prev");
			const slideNext = screen.querySelector(".swiper-slide.swiper-slide-next");
			const videoPrev = slidePrev?.querySelector(".manufacturer-slider__slide");
			const videoNext = slideNext?.querySelector(".manufacturer-slider__slide");

			if (videoPrev && !videoPrev.paused) {
				videoPrev.pause();
				videoPrev.currentTime = 0;
				videoPrev.load();
			}
			if (videoNext && !videoNext.paused) {
				videoNext.pause();
				videoNext.currentTime = 0;
				videoNext.load();
			}
		});
	});
}
