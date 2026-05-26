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
			},
		},
	},
	base: "/black-seas-nut/",
});

// const base = import.meta.env.BASE_URL;
