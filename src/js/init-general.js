import { db } from "./firebase";

export async function initGeneral() {
	const { getDiscount } = await import("./init-document/layouts/get-discount.js");
	const { getSign } = await import("./components/layouts/sign.js");
	const { getButton } = await import("./ui/button.js");
	const { getBag } = await import("./components/layouts/bag.js");

	getDiscount();
	getSign();
	getButton();
	getBag();
}
