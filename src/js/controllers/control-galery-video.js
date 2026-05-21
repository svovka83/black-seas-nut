import { debounce } from "../utils/debounce.js";

export function controlGaleryVideo() {
	const base = import.meta.env.BASE_URL;

	const video = document.querySelector(".galery-card-video__video");
	const eclipse = document.querySelector(".galery-card-video__eclipse");
	const content = document.querySelector(".galery-card-video__content");
	const title = document.querySelector(".galery-card-video__title");
	const text = document.querySelector(".galery-card-video__text");
	const btn = document.getElementById("galery-big-play");
	const icon = btn.querySelector(".play__use");

	btn.addEventListener("click", () => {
		if (video.paused) {
			video.play();

			title.style.display = "none";
			text.style.display = "none";
			content.classList.add("galery-card-video__content_onplay");
			eclipse.classList.add("galery-card-video__eclipse_onplay");
			icon.setAttribute("href", `${base}images/sprites.svg#${icon.dataset.stop}`);
		} else {
			video.pause();
			video.currentTime = 0;
			// video.poster = `${base}/images/jpg/produce/produce-video.jpg`;
			video.load();

			title.style.display = "block";
			text.style.display = "block";
			content.classList.remove("galery-card-video__content_onplay");
			eclipse.classList.remove("galery-card-video__eclipse_onplay");
			icon.setAttribute("href", `${base}images/sprites.svg#${icon.dataset.play}`);
		}
	});

	const hideVideoElements = debounce(() => {
		if (!video.paused) {
			content.classList.add("galery-card-video__content_onplay");
			eclipse.classList.remove("galery-card-video__eclipse_onplay");
		}
	}, 3000);

	// "mousemove" - є важкий - можливо треба використати "трелоу"
	video.addEventListener("mousemove", () => {
		if (!video.paused) {
			content.classList.remove("galery-card-video__content_onplay");
			eclipse.classList.add("galery-card-video__eclipse_onplay");
			hideVideoElements();
		}
	});

	video.addEventListener("mouseout", (e) => {
		if (!video.paused) {
			if (content.contains(e.relatedTarget)) return;
			content.classList.add("galery-card-video__content_onplay");
			eclipse.classList.remove("galery-card-video__eclipse_onplay");
		}
	});
}
