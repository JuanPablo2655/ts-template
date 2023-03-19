import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	resolve: {
		alias: [{ find: '#root', replacement: `${resolve('src')}` }],
	},
	esbuild: { format: 'esm' },
	test: {
		globals: true,
		coverage: {
			reporter: ['text', 'lcov', 'clover'],
			include: ['src/**/*.ts'],
			exclude: [],
		},
	},
});
