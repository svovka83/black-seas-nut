import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { resolve } from "path";

export default defineConfig({
	plugins: [
		nunjucks(),
		ViteImageOptimizer({
			png: {
				quality: 40,
			},
			jpg: {
				quality: 40,
			},
		}),
	],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				shop: resolve(__dirname, "src/pages/shop/index.html"),
				product: resolve(__dirname, "src/pages/product/index.html"),
				about: resolve(__dirname, "src/pages/about/index.html"),
				payment: resolve(__dirname, "src/pages/payment/index.html"),
				wholesales: resolve(__dirname, "src/pages/wholesales/index.html"),
				news: resolve(__dirname, "src/pages/news/index.html"),
				oneNews: resolve(__dirname, "src/pages/one-news/index.html"),
				gallery: resolve(__dirname, "src/pages/gallery/index.html"),

				notFound: resolve(__dirname, "404.html"),

				signIn: resolve(__dirname, "src/pages/sign/sign-in/index.html"),
				registration: resolve(__dirname, "src/pages/sign/registration/index.html"),
				passwordRecovery: resolve(__dirname, "src/pages/sign/password-recovery/index.html"),

				personalAccount: resolve(__dirname, "src/pages/account/personal-account/index.html"),
				contactInfo: resolve(__dirname, "src/pages/account/contact-info/index.html"),
				passwordChange: resolve(__dirname, "src/pages/account/password-change/index.html"),
				address: resolve(__dirname, "src/pages/account/address/index.html"),

				cart: resolve(__dirname, "src/pages/order/cart/index.html"),
				placed: resolve(__dirname, "src/pages/order/placed/index.html"),
			},
		},
	},
	base: "/black-seas-nut/",
});

// const base = import.meta.env.BASE_URL;
