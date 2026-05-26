import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import { productCard } from "../../../components/cards/product-card";
import { initSliderInProduct } from "../../../swipers/slider-in-product.js";

export function getProducts() {
	const productsList = document.querySelector(".shop-products__products");
	if (!productsList) return;

	onSnapshot(
		collection(db, "products"),
		(snapshot) => {
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
		},
		(error) => {
			console.error("Error getting products:", error);
		}
	);
}
