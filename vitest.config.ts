import { defineConfig } from 'vitest/config';

export default defineConfig({
	esbuild: { format: 'esm' },
	test: {
		globals: true,
		coverage: {
			reporter: ['text', 'lcov', 'clover'],
			include: ['src/lib/**/*.ts'],
			exclude: [],
		},
	},
});
