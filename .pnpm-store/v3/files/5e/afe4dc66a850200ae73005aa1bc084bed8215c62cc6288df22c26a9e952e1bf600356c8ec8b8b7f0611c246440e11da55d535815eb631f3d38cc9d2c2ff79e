import { dateSorter } from "@vuepress/helper";

//#region src/presets/getRecentUpdatedArticles.ts
const getRecentUpdatedArticles = ({ path = "/recent-updated/", locales = {} }) => ({
	key: "recentUpdated",
	filter: ({ frontmatter, filePathRelative }) => frontmatter.article ?? (Boolean(filePathRelative) && !frontmatter.home),
	sorter: (pageA, pageB) => dateSorter(pageA.data.git?.updatedTime, pageB.data.git?.updatedTime),
	path,
	layout: "Blog",
	frontmatter: (localePath) => ({
		title: locales[localePath] ?? "Recent Updated",
		dir: { index: false },
		index: false,
		feed: false,
		sitemap: false
	})
});

//#endregion
export { getRecentUpdatedArticles };
//# sourceMappingURL=getRecentUpdatedArticles.js.map