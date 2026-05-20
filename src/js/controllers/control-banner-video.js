import { debounce } from "../utils/debounce.js";

export function controlBannerVideo() {
	const base = import.meta.env.BASE_URL;

	const video = document.querySelector(".banner-video");
	const eclipse = document.querySelector(".banner-eclipse");
	const content = document.querySelector(".banner-content");
	const title = document.querySelector(".banner-content__title");
	const text = document.querySelector(".banner-content__text");
	const btn = document.getElementById("play_banner");
	const icon = btn.querySelector(".play__use");

	btn.addEventListener("click", () => {
		if (video.paused) {
			video.play();

			title.style.display = "none";
			text.style.display = "none";
			content.classList.add("banner-content_onplay");
			eclipse.classList.add("banner-eclipse_onplay");
			icon.setAttribute("href", `${base}images/sprites.svg#${icon.dataset.stop}`);
		} else {
			video.pause();
			video.currentTime = 0;
			// video.poster = `${base}images/jpg/top/main.jpg`;
			video.load();

			title.style.display = "block";
			text.style.display = "block";
			content.classList.remove("banner-content_onplay");
			eclipse.classList.remove("banner-eclipse_onplay");
			icon.setAttribute("href", `${base}images/sprites.svg#${icon.dataset.play}`);
		}
	});

	const hideVideoElements = debounce(() => {
		if (!video.paused) {
			content.classList.add("banner-content_onplay");
			eclipse.classList.remove("banner-eclipse_onplay");
		}
	}, 3000);

	// "mousemove" - є важкий - можливо треба використати "трелоу"
	video.addEventListener("mousemove", () => {
		if (!video.paused) {
			content.classList.remove("banner-content_onplay");
			eclipse.classList.add("banner-eclipse_onplay");
			hideVideoElements();
		}
	});

	video.addEventListener("mouseout", (e) => {
		if (!video.paused) {
			if (content.contains(e.relatedTarget)) return;
			content.classList.add("banner-content_onplay");
			eclipse.classList.remove("banner-eclipse_onplay");
		}
	});
}
