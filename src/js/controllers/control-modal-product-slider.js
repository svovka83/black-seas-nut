import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import { getModalProductSlider } from "../init-document/modals/get-modal-product-slides";

export function controlModalProductSlider() {
	const modal = document.querySelector(".modal-product-slider");
	const inner = document.querySelector(".modal-product-slider__inner");
	const close = document.querySelector(".modal-product-slider__close-btn");

	document.addEventListener("click", async (e) => {
		const btn = e.target.closest(".product-card__search");
		if (!btn) return;
		const product = btn.closest(".product-card");
		const id = product.dataset.id;

		if (!modal.classList.contains("modal-product-slider_open")) {
			await getModalProductSlider(id);
			modal.classList.add("modal-product-slider_open");
			inner.classList.add("modal-product-slider__inner_open");
			disablePageScroll();
		}
	});

	modal.addEventListener("click", (e) => {
		if (modal.classList.contains("modal-product-slider_open") && !inner.contains(e.target)) {
			modal.classList.remove("modal-product-slider_open");
			inner.classList.remove("modal-product-slider__inner_open");
			enablePageScroll();
		}
	});

	close.addEventListener("click", () => {
		if (modal.classList.contains("modal-product-slider_open")) {
			modal.classList.remove("modal-product-slider_open");
			inner.classList.remove("modal-product-slider__inner_open");
			enablePageScroll();
		}
	});

	window.addEventListener("resize", () => {
		if (modal.classList.contains("modal-product-slider_open")) {
			modal.classList.remove("modal-product-slider_open");
			inner.classList.remove("modal-product-slider__inner_open");
			enablePageScroll();
		}
	});
}
