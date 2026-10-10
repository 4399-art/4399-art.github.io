import { dateSorter } from "@vuepress/helper";

//#region src/presets/getSlides.ts
const getSlides = ({ path = "/slides/", locales = {} }) => ({
	key: "slides",
	filter: ({ frontmatter }) => frontmatter.layout === "Slides",
	sorter: (pageA, pageB) => {
		const prevKey = pageA.frontmatter.sticky;
		const nextKey = pageB.frontmatter.sticky;
		if (prevKey && nextKey && prevKey !== nextKey) return Number(nextKey) - Number(prevKey);
		if (prevKey && !nextKey) return -1;
		if (!prevKey && nextKey) return 1;
		return dateSorter(pageA.routeMeta.date, pageB.routeMeta.date);
	},
	path,
	layout: "Blog",
	frontmatter: (localePath) => ({
		title: locales[localePath] ?? "Slides",
		dir: { index: false },
		index: false,
		feed: false,
		sitemap: false
	})
});

//#endregion
export { getSlides };
//# sourceMappingURL=getSlides.js.map