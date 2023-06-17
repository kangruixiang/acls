import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const defaultConfig = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default defaultConfig;
