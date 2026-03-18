// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://flamingmachturtle.github.io',
	// Use base '/' for username.github.io; use '/repo-name/' for project pages
	base: '/',
	output: 'static',
});
