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
			},
		},
	},
	base: "/seedra/",
});

// const base = import.meta.env.BASE_URL;
