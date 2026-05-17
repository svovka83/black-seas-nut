import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { initModalProductSlider } from "../../swipers/modal-product-slider";

export async function getModalProductSlider(id) {
	const productSlides = document.querySelector(".modal-product-slider__slides");
	if (!productSlides) return;

	try {
		const productRef = doc(db, "products", id);
		const product = await getDoc(productRef);
		const imagesUrl = product.data().imagesUrl;

		let productsString = `${imagesUrl
			.map(
				(url) => `
        <div class="swiper-slide">
          <img class="modal-product-slider__img" src="${url}" alt="product" />
        </div>
        `
			)
			.join("")}`;

		productSlides.innerHTML = productsString;

		initModalProductSlider();
	} catch (e) {
		console.error("Error getting products:", e);
	}
}
