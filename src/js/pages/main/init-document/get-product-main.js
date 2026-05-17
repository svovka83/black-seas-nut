import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { productCard } from "../../../components/cards/product-card";
import { initSliderInProduct } from "../../../swipers/slider-in-product.js";

export async function getProductsMain() {
	const productsList = document.querySelector(".main-products__cards");
	if (!productsList) return;

	try {
		const snapshot = await getDocs(collection(db, "products"));

		let productsString = "";

		snapshot.forEach((doc) => {
			productsString += productCard(
				doc.id,
				doc.data().name,
				doc.data().imagesUrl,
				doc.data().discount,
				doc.data().sales
			);
		});

		productsList.innerHTML = productsString;

		initSliderInProduct();
	} catch (e) {
		console.error("Error getting products:", e);
	}
}

export async function getProductsSlider() {
	const productsList = document.querySelector(".main-products__slider-wrapper");
	if (!productsList) return;

	try {
		const snapshot = await getDocs(collection(db, "products"));

		let productsString = "";

		snapshot.forEach((doc) => {
			productsString += `
        <div class="swiper-slide">
          ${productCard(doc.id, doc.data().name, doc.data().imagesUrl, doc.data().discount, doc.data().sales)}
        </div>
      `;
		});

		productsList.innerHTML = productsString;

		initSliderInProduct();
	} catch (e) {
		console.error("Error getting products:", e);
	}
}
