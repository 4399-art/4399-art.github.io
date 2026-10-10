import { i as getTag, n as getCategory, t as getAuthor } from "./infoGetter-CiYuSeA7.js";
import { c as usePure, d as useThemeLocale, l as useData$1, r as useNavigate, t as PageInfo_default } from "./PageInfo-DTBGvCmc.js";
import { i as MarkdownContent_default, n as HeroSlideDownButton, o as MainLayout_default, r as SkipLink_default, s as useWindowSize, t as DropTransition_default } from "./DropTransition-CPVR6Hkk.js";
import { t as LockIcon } from "./LockIcon-CC7XxocU.js";
import { computed, defineComponent, h, inject, nextTick, onMounted, provide, ref, resolveComponent, toRef, watch } from "vue";
import { RouteLink, resolveRoute, useFrontmatter, useLang, usePage, useRoute, useRouter, withBase } from "vuepress/client";
import { Message, entries, getDate, isLinkAbsolute, isLinkHttp, isString, keys } from "@vuepress/helper/client";
import { getReadingTimeLocale, useReadingTimeLocaleConfig } from "@vuepress/plugin-reading-time/client";
import { IconBase, generateIndexFromHash } from "vuepress-shared/client";
import cssVariables from "./client/styles/variables.module.scss";
import { isSupported, usePageview } from "@vuepress/plugin-comment/pageview";
import { icons } from "@temp/theme-hope/socialMedia.js";
import "./client/styles/blog/social-medias.scss";
import { useBlogCategory, useBlogType } from "@vuepress/plugin-blog/client";
import "./client/styles/blog/blogger-info.scss";
import "./client/styles/blog/article-item.scss";
import "@vuepress/helper/message.css";
import "./client/styles/blog/pagination.scss";
import "./client/styles/blog/article-list.scss";
import "./client/styles/blog/blog-hero.scss";
import "./client/styles/blog/category-list.scss";
import "./client/styles/blog/tag-list.scss";
import "./client/styles/blog/timeline-list.scss";
import "./client/styles/blog/info-list.scss";
import "./client/styles/blog/info-panel.scss";
import "./client/styles/blog/project-panel.scss";
import "./client/styles/blog/blog-home.scss";
import "./client/styles/blog/blog-main-layout.scss";
import "./client/styles/blog/timeline-items.scss";
import "./client/styles/blog/article-type.scss";

//#region src/client/composables/blog/useBlogOptions.ts
const useBlogOptions = () => {
	const { theme, themeLocale } = useData$1();
	return computed(() => ({
		...theme.value.blog,
		...themeLocale.value.blog
	}));
};

//#endregion
//#region src/client/components/blog/SocialMedias.ts
var SocialMedias_default = defineComponent({
	name: "SocialMedias",
	setup() {
		const blogOptions = useBlogOptions();
		const isPure = usePure();
		const mediaLinks = computed(() => entries(blogOptions.value.medias ?? {}).map(([media, config]) => typeof config === "string" ? {
			name: media,
			icon: icons[media],
			link: config
		} : Object.assign({ name: media }, config)));
		return () => mediaLinks.value.length > 0 ? h("div", { class: "vp-social-medias" }, mediaLinks.value.map(({ name, icon, link }) => h("a", {
			class: "vp-social-media",
			href: link,
			rel: "noopener noreferrer",
			target: "_blank",
			"aria-label": name || "",
			...isPure.value ? {} : { "data-balloon-pos": "up" },
			innerHTML: isLinkHttp(icon) ? `<img class="vp-social-media-icon ${name}-icon" src="${icon}">` : icon
		}))) : null;
	}
});

//#endregion
//#region src/client/composables/blog/useArticles.ts
const articlesSymbol = Symbol(__VUEPRESS_DEV__ ? "articles" : "");
/**
* Inject articles
*
* @returns articles global computed
*/
const useArticles = () => {
	const articles = inject(articlesSymbol);
	if (!articles) throw new Error("useArticles() is called without provider.");
	return articles;
};
const setupArticles = () => {
	provide(articlesSymbol, useBlogType("article"));
};

//#endregion
//#region src/client/composables/blog/useBlogLocale.ts
const useBlogLocale = () => {
	const themeLocale = useThemeLocale();
	return computed(() => themeLocale.value.blogLocales);
};

//#endregion
//#region src/client/composables/blog/useCategoryMap.ts
const categoryMapSymbol = Symbol.for("categoryMap");
/**
* Inject categoryMap
*
* @returns categoryMap global computed
*/
const useCategoryMap = () => {
	const categoryMap = inject(categoryMapSymbol);
	if (!categoryMap) throw new Error("useCategoryMap() is called without provider.");
	return categoryMap;
};
/**
* Provide categoryMap
*/
const setupCategoryMap = () => {
	provide(categoryMapSymbol, useBlogCategory("category"));
};

//#endregion
//#region src/client/composables/blog/useTagMap.ts
const tagMapSymbol = Symbol.for("tagMap");
/**
* Inject tagMap
*
* @returns tagMap global computed
*/
const useTagMap = () => {
	const tagMap = inject(tagMapSymbol);
	if (!tagMap) throw new Error("useTagMap() is called without provider.");
	return tagMap;
};
/**
* Provide tagMap
*/
const setupTagMap = () => {
	provide(tagMapSymbol, useBlogCategory("tag"));
};

//#endregion
//#region src/client/composables/blog/useTimeline.ts
const timelineSymbol = Symbol(__VUEPRESS_DEV__ ? "timeline" : "");
/**
* Inject timeline
*
* @returns Timeline global computed
*/
const useTimeline = () => {
	const timeline = inject(timelineSymbol);
	if (!timeline) throw new Error("useTimeline() is called without provider.");
	return timeline;
};
/**
* Provide timelines
*/
const setupTimeline = () => {
	const timeline = useBlogType("timeline");
	const pageLang = useLang();
	provide(timelineSymbol, computed(() => {
		const results = [];
		timeline.value.items.forEach(({ info, path }) => {
			const result = getDate(info.date);
			if (result) {
				const year = result.getFullYear();
				if (results[0]?.year !== year) results.unshift({
					year,
					items: []
				});
				results[0].items.push({
					date: result.toLocaleDateString(pageLang.value, {
						month: "numeric",
						day: "numeric"
					}),
					info,
					path
				});
			}
		});
		return {
			...timeline.value,
			config: results.reverse()
		};
	}));
};

//#endregion
//#region src/client/components/blog/BloggerInfo.ts
var BloggerInfo_default = defineComponent({
	name: "BloggerInfo",
	slots: Object,
	setup(_props, { slots }) {
		const blogLocale = useBlogLocale();
		const blogOptions = useBlogOptions();
		const { siteLocale, themeLocale } = useData$1();
		const articles = useArticles();
		const categoryMap = useCategoryMap();
		const tagMap = useTagMap();
		const timelines = useTimeline();
		const navigate = useNavigate();
		const bloggerInfo = computed(() => ({
			name: blogOptions.value.name ?? getAuthor(themeLocale.value.author)[0]?.name ?? siteLocale.value.title,
			avatar: blogOptions.value.avatar ?? themeLocale.value.logo ?? null,
			description: blogOptions.value.description ?? null
		}));
		const intro = computed(() => blogOptions.value.intro);
		return () => {
			const { article, category, tag, timeline } = blogLocale.value;
			const countItems = [
				[
					articles.value.path,
					articles.value.items.length,
					article
				],
				[
					categoryMap.value.path,
					keys(categoryMap.value.map).length,
					category
				],
				[
					tagMap.value.path,
					keys(tagMap.value.map).length,
					tag
				],
				[
					timelines.value.path,
					timelines.value.items.length,
					timeline
				]
			];
			return h("div", {
				class: "vp-blogger-info",
				vocab: "https://schema.org/",
				typeof: "Person"
			}, slots.bloggerInfo?.(bloggerInfo.value) ?? [
				h("div", {
					class: "vp-blogger",
					...intro.value ? {
						"aria-label": blogLocale.value.intro,
						"data-balloon-pos": "down",
						role: "link",
						onClick: () => {
							navigate(intro.value);
						}
					} : {}
				}, [
					bloggerInfo.value.avatar ? h("img", {
						class: "vp-blogger-avatar",
						src: withBase(bloggerInfo.value.avatar),
						property: "image",
						alt: "Blogger Avatar",
						loading: "lazy"
					}) : null,
					bloggerInfo.value.name ? h("div", {
						class: "vp-blogger-name",
						property: "name"
					}, bloggerInfo.value.name) : null,
					bloggerInfo.value.description ? h("div", {
						class: "vp-blogger-description",
						innerHTML: bloggerInfo.value.description
					}) : null,
					intro.value ? h("meta", {
						property: "url",
						content: withBase(intro.value)
					}) : null
				]),
				h("div", { class: "vp-blog-counts" }, countItems.map(([path, count, locale]) => h(RouteLink, {
					class: "vp-blog-count",
					to: path
				}, () => [h("div", { class: "count" }, count), h("div", locale)]))),
				h(SocialMedias_default)
			]);
		};
	}
});

//#endregion
//#region src/client/composables/blog/useStars.ts
const starsSymbol = Symbol(__VUEPRESS_DEV__ ? "stars" : "");
/**
* Inject stars
*
* @returns Stars global computed
*/
const useStars = () => {
	const stars = inject(starsSymbol);
	if (!stars) throw new Error("useStars() is called without provider.");
	return stars;
};
const setupStars = () => {
	provide(starsSymbol, useBlogType("star"));
};

//#endregion
//#region src/client/components/blog/icons.ts
const CategoryIcon = () => h(IconBase, { name: "category" }, () => h("path", { d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z" }));
CategoryIcon.displayName = "CategoryIcon";
const TagIcon = () => h(IconBase, { name: "tag" }, () => h("path", { d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z" }));
TagIcon.displayName = "TagIcon";
const TimelineIcon = () => h(IconBase, { name: "timeline" }, () => h("path", { d: "M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0" }));
TimelineIcon.displayName = "TimelineIcon";
const SlideIcon = () => h(IconBase, { name: "slides" }, () => h("path", { d: "M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z" }));
SlideIcon.displayName = "SlideIcon";
const StickyIcon = () => h(IconBase, { name: "sticky" }, () => [h("path", { d: "m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z" })]);
StickyIcon.displayName = "StickyIcon";
const ArticleIcon = () => h(IconBase, { name: "article" }, () => h("path", { d: "M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z" }));
ArticleIcon.displayName = "ArticleIcon";

//#endregion
//#region src/client/composables/blog/useArticleInfo.ts
const useArticleAuthor = (info) => {
	const themeLocale = useThemeLocale();
	return computed(() => {
		const { author } = info.value;
		if (author) return getAuthor(author);
		if (author === false) return [];
		return getAuthor(themeLocale.value.author, false);
	});
};
const useArticleCategory = (info) => {
	const categoryMap = useCategoryMap();
	return computed(() => getCategory(info.value.category).map((name) => ({
		name,
		path: categoryMap.value.map[name].path
	})));
};
const useArticleTag = (info) => {
	const tagMap = useTagMap();
	return computed(() => getTag(info.value.tag).map((name) => ({
		name,
		path: tagMap.value.map[name].path
	})));
};
const useArticleDate = (info) => computed(() => getDate(info.value.date));
const useArticleInfo = (props) => {
	const articleInfo = toRef(props, "info");
	const blogOptions = useBlogOptions();
	const author = useArticleAuthor(articleInfo);
	const category = useArticleCategory(articleInfo);
	const tag = useArticleTag(articleInfo);
	const date = useArticleDate(articleInfo);
	const readingTimeLocaleConfig = useReadingTimeLocaleConfig();
	return {
		info: computed(() => ({
			author: author.value,
			category: category.value,
			date: date.value,
			tag: tag.value,
			isOriginal: articleInfo.value.isOriginal ?? false,
			readingTime: articleInfo.value.readingTime ?? null,
			readingTimeLocale: articleInfo.value.readingTime && readingTimeLocaleConfig.value ? getReadingTimeLocale(articleInfo.value.readingTime, readingTimeLocaleConfig.value) : null,
			pageview: props.path
		})),
		items: computed(() => blogOptions.value.articleInfo ?? null)
	};
};

//#endregion
//#region src/client/components/blog/ArticleItem.ts
var ArticleItem_default = defineComponent({
	name: "ArticleItem",
	props: {
		info: {
			type: Object,
			required: true
		},
		path: {
			type: String,
			required: true
		}
	},
	slots: Object,
	setup(props, { slots }) {
		const articleInfo = toRef(props, "info");
		const { info: pageInfo, items } = useArticleInfo(props);
		const router = useRouter();
		return () => {
			const { title, type, isEncrypted = false, cover = null, excerpt, sticky } = articleInfo.value;
			const info = pageInfo.value;
			return h("div", {
				class: "vp-article-wrapper",
				onClick: (event) => {
					if (event.target?.matches("summary")) return;
					event.preventDefault();
					router.push(props.path);
				}
			}, h("article", {
				class: "vp-article-item",
				vocab: "https://schema.org/",
				typeof: "Article"
			}, [
				slots.articleCover?.({ cover }) ?? (cover ? [h("img", {
					class: "vp-article-cover",
					src: withBase(cover),
					alt: "",
					loading: "lazy"
				}), h("meta", {
					property: "image",
					content: withBase(cover)
				})] : []),
				sticky ? h(StickyIcon) : null,
				h(RouteLink, { to: props.path }, () => slots.articleTitle?.({
					title,
					isEncrypted,
					type
				}) ?? h("header", { class: "vp-article-title" }, [
					isEncrypted ? h(LockIcon) : null,
					type === "slide" ? h(SlideIcon) : null,
					h("span", { property: "headline" }, title)
				])),
				slots.articleExcerpt?.({ excerpt }) ?? (excerpt ? h("div", {
					class: "vp-article-excerpt",
					innerHTML: excerpt
				}) : null),
				h("hr", { class: "vp-article-hr" }),
				slots.articleInfo?.(info) ?? h(PageInfo_default, {
					info,
					items: items.value,
					onClick: (event) => {
						event.stopPropagation();
					}
				})
			]));
		};
	}
});

//#endregion
//#region src/client/components/blog/Pagination.ts
const ERROR_SVG = `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>`;
var Pagination_default = defineComponent({
	name: "Pagination",
	props: {
		total: {
			type: Number,
			default: 10
		},
		perPage: {
			type: Number,
			default: 10
		},
		current: {
			type: Number,
			default: 1
		}
	},
	emits: ["updateCurrentPage"],
	setup(props, { emit }) {
		const message = new Message();
		const themeLocale = useThemeLocale();
		const input = ref("");
		const paginationLocale = computed(() => themeLocale.value.paginationLocales);
		const totalPages = computed(() => Math.ceil(props.total / props.perPage));
		const enable = computed(() => Boolean(totalPages.value) && totalPages.value !== 1);
		const displayLeftEllipsis = computed(() => {
			if (totalPages.value < 7) return false;
			return props.current > 4;
		});
		const displayRightEllipsis = computed(() => {
			if (totalPages.value < 7) return false;
			return props.current < totalPages.value - 3;
		});
		/** Page indexes */
		const indexes = computed(() => {
			const { current: currentPage } = props;
			let min = 1;
			let max = totalPages.value;
			const arr = [];
			if (totalPages.value >= 7) {
				if (currentPage <= 4 && currentPage < totalPages.value - 3) {
					min = 1;
					max = 5;
				} else if (currentPage > 4 && currentPage >= totalPages.value - 3) {
					max = totalPages.value;
					min = totalPages.value - 4;
				} else if (totalPages.value > 7) {
					min = currentPage - 2;
					max = currentPage + 2;
				}
			}
			for (let i = min; i <= max; i++) arr.push(i);
			return arr;
		});
		/**
		* Navigate to certain page
		*
		* @param index - Page index
		*/
		const navigate = (index) => {
			emit("updateCurrentPage", index);
		};
		/**
		* Check and navigate to certain page
		*
		* @param index - Page index
		*/
		const jumpPage = (index) => {
			const pageNum = Number.parseInt(index, 10);
			if (pageNum <= totalPages.value && pageNum > 0) navigate(pageNum);
			else message.pop(`${ERROR_SVG}${paginationLocale.value.errorText.replaceAll(String.raw`\$page`, totalPages.value.toString())}`);
		};
		return () => h("div", { class: "vp-pagination" }, enable.value ? h("nav", { class: "vp-pagination-list" }, [h("div", { class: "vp-pagination-number " }, [
			props.current > 1 ? h("div", {
				class: "prev",
				role: "navigation",
				unselectable: "on",
				onClick: () => {
					navigate(props.current - 1);
				}
			}, paginationLocale.value.prev) : null,
			displayLeftEllipsis.value ? [h("div", {
				role: "navigation",
				onClick: () => {
					navigate(1);
				}
			}, 1), h("div", { class: "ellipsis" }, "...")] : null,
			indexes.value.map((num) => h("div", {
				key: num,
				class: { active: props.current === num },
				role: "navigation",
				onClick: () => {
					navigate(num);
				}
			}, num)),
			displayRightEllipsis.value ? [h("div", { class: "ellipsis" }, "..."), h("div", {
				role: "navigation",
				onClick: () => {
					navigate(totalPages.value);
				}
			}, totalPages.value)] : null,
			props.current < totalPages.value ? h("div", {
				class: "next",
				role: "navigation",
				unselectable: "on",
				onClick: () => {
					navigate(props.current + 1);
				}
			}, paginationLocale.value.next) : null
		]), h("div", { class: "vp-pagination-nav" }, [
			h("label", { for: "navigation-text" }, `${paginationLocale.value.navigate}: `),
			h("input", {
				id: "navigation-text",
				value: input.value,
				onInput: ({ target }) => {
					input.value = target.value;
				},
				onKeydown: (event) => {
					if (event.key === "Enter") {
						event.preventDefault();
						jumpPage(input.value);
					}
				}
			}),
			h("button", {
				class: "vp-pagination-button",
				type: "button",
				role: "navigation",
				title: paginationLocale.value.action,
				onClick: () => {
					jumpPage(input.value);
				}
			}, paginationLocale.value.action)
		])]) : []);
	}
});

//#endregion
//#region src/client/components/blog/ArticleList.ts
const DEFAULT_ARTICLES_PER_PAGE = 10;
var ArticleList_default = defineComponent({
	name: "ArticleList",
	props: { items: {
		type: Array,
		required: true
	} },
	slots: Object,
	setup(props, { slots }) {
		const route = useRoute();
		const router = useRouter();
		const blogLocale = useBlogLocale();
		const blogOptions = useBlogOptions();
		const updatePageview = usePageview();
		const currentPage = ref(1);
		const articlePerPage = computed(() => blogOptions.value.articlePerPage ?? DEFAULT_ARTICLES_PER_PAGE);
		const currentArticles = computed(() => props.items.slice((currentPage.value - 1) * articlePerPage.value, currentPage.value * articlePerPage.value));
		const updatePage = async (page) => {
			currentPage.value = page;
			const query = { ...route.query };
			if (!(query.page === page.toString() || page === 1 && !query.page)) {
				if (page === 1) delete query.page;
				else query.page = page.toString();
				await router.push({
					path: route.path,
					query
				});
			}
			if (isSupported) {
				await nextTick();
				updatePageview({ selector: ".vp-pageview" });
			}
		};
		onMounted(() => {
			const { page } = route.query;
			updatePage(page ? Number(page) : 1);
			watch(currentPage, () => {
				const distance = document.querySelector("#article-list").getBoundingClientRect().top + window.scrollY;
				setTimeout(() => {
					window.scrollTo(0, distance);
				}, 100);
			});
		});
		return () => h("div", {
			id: "article-list",
			class: "vp-article-list",
			role: "feed"
		}, currentArticles.value.length > 0 ? [...currentArticles.value.map(({ info, path }, index) => h(DropTransition_default, {
			appear: true,
			delay: index * .04
		}, () => h(ArticleItem_default, {
			key: path,
			info,
			path
		}, slots))), h(Pagination_default, {
			current: currentPage.value,
			perPage: articlePerPage.value,
			total: props.items.length,
			onUpdateCurrentPage: updatePage
		})] : h("h2", { class: "vp-empty-hint" }, blogLocale.value.empty.replace("$text", blogLocale.value.article.toLocaleLowerCase())));
	}
});

//#endregion
//#region src/client/components/blog/BlogHero.ts
const DEFAULT_HERO = "//theme-hope-assets.vuejs.press/hero/default.jpg";
var BlogHero_default = defineComponent({
	name: "BlogHero",
	slots: Object,
	setup(_props, { slots }) {
		const { frontmatter, siteLocale } = useData$1();
		const info = computed(() => {
			const { heroText, heroStyle, tagline, heroFullScreen = false } = frontmatter.value;
			return {
				text: heroText ?? (siteLocale.value.title || "Hello"),
				tagline: tagline ?? "",
				style: heroStyle ?? null,
				isFullScreen: heroFullScreen
			};
		});
		const image = computed(() => {
			const { heroImage, heroImageDark, heroAlt, heroImageStyle } = frontmatter.value;
			return {
				image: heroImage ? withBase(heroImage) : null,
				imageDark: heroImageDark ? withBase(heroImageDark) : null,
				style: heroImageStyle ?? null,
				alt: heroAlt ?? ""
			};
		});
		const bg = computed(() => {
			const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;
			return {
				image: isString(bgImage) ? withBase(bgImage) : bgImage === false ? null : DEFAULT_HERO,
				imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
				style: bgImageStyle ?? null
			};
		});
		return () => frontmatter.value.hero === false ? null : h("div", { class: ["vp-blog-hero", {
			"hero-fullscreen": frontmatter.value.heroFullScreen,
			"no-bg": !bg.value.image
		}] }, [
			slots.heroBg?.(bg.value) ?? [bg.value.image ? h("div", {
				class: ["vp-blog-mask", { light: bg.value.imageDark }],
				style: [{ background: `url(${bg.value.image}) center/cover no-repeat` }, bg.value.style]
			}) : null, bg.value.imageDark ? h("div", {
				class: "vp-blog-mask dark",
				style: [{ background: `url(${bg.value.imageDark}) center/cover no-repeat` }, bg.value.style]
			}) : null],
			slots.heroLogo?.(image.value) ?? h(DropTransition_default, {
				appear: true,
				group: true,
				delay: .04
			}, () => {
				const { image: imageLight, imageDark, style: imageStyle, alt } = image.value;
				return [imageLight ? h("img", {
					key: "light",
					class: ["vp-blog-hero-image", { light: imageDark }],
					style: imageStyle,
					src: imageLight,
					alt
				}) : null, imageDark ? h("img", {
					key: "dark",
					class: "vp-blog-hero-image dark",
					style: imageStyle,
					src: imageDark,
					alt
				}) : null];
			}),
			slots.heroInfo?.(info.value) ?? h("div", { class: "vp-blog-hero-info" }, [h(DropTransition_default, {
				appear: true,
				delay: .08
			}, () => info.value.text ? h("h1", { class: "vp-blog-hero-title" }, info.value.text) : null), h(DropTransition_default, {
				appear: true,
				delay: .12
			}, () => info.value.tagline ? h("div", {
				class: "vp-blog-hero-description",
				innerHTML: info.value.tagline
			}) : null)]),
			frontmatter.value.heroFullScreen ? h(HeroSlideDownButton, { onClick: () => {
				window.scrollTo({
					top: window.innerHeight - (document.querySelector("[vp-navbar]")?.clientHeight ?? 0),
					behavior: "smooth"
				});
			} }) : null
		]);
	}
});

//#endregion
//#region src/client/components/blog/ArticlesInfo.ts
var ArticlesInfo_default = defineComponent({
	name: "ArticlesInfo",
	setup() {
		const articles = useArticles();
		const blogLocale = useBlogLocale();
		const stars = useStars();
		const navigate = useNavigate();
		const articleCount = computed(() => articles.value.items.length);
		const starredArticles = computed(() => stars.value.items);
		return () => h(DropTransition_default, () => h("div", { class: "vp-star-article-wrapper" }, [
			h("div", {
				class: "title",
				onClick: () => {
					navigate(articles.value.path);
				}
			}, [
				h(ArticleIcon),
				h("span", { class: "num" }, articleCount.value),
				blogLocale.value.article
			]),
			h("hr"),
			starredArticles.value.length > 0 ? h("ul", { class: "vp-star-articles" }, starredArticles.value.map(({ info, path }, index) => h(DropTransition_default, {
				appear: true,
				delay: .08 * (index + 1)
			}, () => h("li", { class: "vp-star-article" }, h(RouteLink, { to: path }, () => info.title))))) : h("div", { class: "vp-star-article-empty" }, blogLocale.value.empty.replace("$text", blogLocale.value.star))
		]));
	}
});

//#endregion
//#region src/client/components/blog/CategoryList.ts
var CategoryList_default = defineComponent({
	name: "CategoryList",
	setup() {
		const page = usePage();
		const categoryMap = useCategoryMap();
		return () => h("ul", { class: "vp-category-list" }, entries(categoryMap.value.map).sort(([, a], [, b]) => b.items.length - a.items.length).map(([category, { path, items }]) => h("li", { class: "vp-category-item" }, h(RouteLink, {
			class: [
				"vp-category",
				`color${generateIndexFromHash(category, Number(cssVariables.colorNumber))}`,
				{ active: path === page.value.path }
			],
			to: path
		}, () => [category, h("span", { class: "vp-category-count" }, items.length)]))));
	}
});

//#endregion
//#region src/client/components/blog/CategoriesInfo.ts
var CategoriesInfo_default = defineComponent({
	name: "CategoriesInfo",
	setup() {
		const blogLocale = useBlogLocale();
		const categoryMap = useCategoryMap();
		const navigate = useNavigate();
		const categoryNumber = computed(() => keys(categoryMap.value.map).length);
		return () => h("div", { class: "vp-category-wrapper" }, [categoryNumber.value ? [
			h("div", {
				class: "title",
				onClick: () => {
					navigate(categoryMap.value.path);
				}
			}, [
				h(CategoryIcon),
				h("span", { class: "num" }, categoryNumber.value),
				blogLocale.value.category
			]),
			h("hr"),
			h(DropTransition_default, { delay: .04 }, () => h(CategoryList_default))
		] : h("div", { class: "vp-category-empty" }, blogLocale.value.empty.replace("$text", blogLocale.value.category))]);
	}
});

//#endregion
//#region src/client/components/blog/TagList.ts
var TagList_default = defineComponent({
	name: "TagList",
	setup() {
		const frontmatter = useFrontmatter();
		const tagMap = useTagMap();
		const isActive = (name) => name === frontmatter.value.blog?.name;
		return () => h("ul", { class: "vp-tag-list" }, entries(tagMap.value.map).sort(([, a], [, b]) => b.items.length - a.items.length).map(([tag, { path, items }]) => h("li", { class: "vp-tag-item" }, h(RouteLink, {
			class: [
				"vp-tag",
				`color${generateIndexFromHash(tag, Number(cssVariables.colorNumber))}`,
				{ active: isActive(tag) }
			],
			to: path
		}, () => [tag, h("span", { class: "vp-tag-count" }, items.length)]))));
	}
});

//#endregion
//#region src/client/components/blog/TagsInfo.ts
var TagsInfo_default = defineComponent({
	name: "TagsInfo",
	setup() {
		const blogLocale = useBlogLocale();
		const tagMap = useTagMap();
		const navigate = useNavigate();
		const tagNumber = computed(() => keys(tagMap.value.map).length);
		return () => h("div", { class: "vp-tag-wrapper" }, [tagNumber.value ? [
			h("div", {
				class: "title",
				onClick: () => {
					navigate(tagMap.value.path);
				}
			}, [
				h(TagIcon),
				h("span", { class: "num" }, tagNumber.value),
				blogLocale.value.tag
			]),
			h("hr"),
			h(DropTransition_default, { delay: .04 }, () => h(TagList_default))
		] : h("div", { class: "vp-tag-empty" }, blogLocale.value.empty.replace("$text", blogLocale.value.tag))]);
	}
});

//#endregion
//#region src/client/components/blog/TimelineList.ts
var TimelineList_default = defineComponent({
	name: "TimelineList",
	setup() {
		const blogLocale = useBlogLocale();
		const timelines = useTimeline();
		const navigate = useNavigate();
		return () => h("div", { class: "timeline-list-wrapper" }, [
			h("div", {
				class: "title",
				onClick: () => {
					navigate(timelines.value.path);
				}
			}, [
				h(TimelineIcon),
				h("span", { class: "num" }, timelines.value.items.length),
				blogLocale.value.timeline
			]),
			h("hr"),
			h("div", { class: "timeline-content" }, h("ul", { class: "timeline-list" }, timelines.value.config.map(({ year, items }, index) => h(DropTransition_default, {
				appear: true,
				delay: .08 * (index + 1)
			}, () => h("li", [h("h3", { class: "timeline-year" }, year), h("ul", { class: "timeline-year-wrapper" }, items.map(({ date, info, path }) => h("li", { class: "timeline-item" }, [h("span", { class: "timeline-date" }, date), h(RouteLink, {
				class: "timeline-title",
				to: path
			}, () => info.title)])))])))))
		]);
	}
});

//#endregion
//#region src/client/components/blog/InfoList.ts
const buttons = {
	article: ArticleIcon,
	category: CategoryIcon,
	tag: TagIcon,
	timeline: TimelineIcon
};
var InfoList_default = defineComponent({
	name: "InfoList",
	setup() {
		const blogLocale = useBlogLocale();
		const activeType = ref("article");
		return () => h("div", { class: "vp-blog-infos" }, [h("div", { class: "vp-blog-type-switcher" }, entries(buttons).map(([key, Icon]) => h("button", {
			type: "button",
			class: "vp-blog-type-button",
			onClick: () => {
				activeType.value = key;
			}
		}, h("div", {
			class: ["vp-blog-type-icon-wrapper", { active: activeType.value === key }],
			"aria-label": blogLocale.value[key],
			"data-balloon-pos": "down"
		}, h(Icon))))), h(DropTransition_default, () => activeType.value === "article" ? h(ArticlesInfo_default) : activeType.value === "category" ? h(CategoriesInfo_default) : activeType.value === "tag" ? h(TagsInfo_default) : h(TimelineList_default))]);
	}
});

//#endregion
//#region src/client/components/blog/InfoPanel.ts
const InfoPanel = (_props, { slots }) => h("aside", { class: "vp-blog-info-wrapper" }, [
	slots.infoBefore?.(),
	h(DropTransition_default, () => h(BloggerInfo_default, {}, slots)),
	h(DropTransition_default, { delay: .04 }, () => h(InfoList_default)),
	slots.infoAfter?.()
]);
InfoPanel.displayName = "InfoPanel";

//#endregion
//#region src/client/components/blog/ProjectPanel.ts
var ProjectPanel_default = defineComponent({
	name: "ProjectPanel",
	props: { items: {
		type: Array,
		required: true
	} },
	setup(props) {
		const isPure = usePure();
		const navigate = useNavigate();
		return () => h("div", { class: "vp-project-panel" }, props.items.map(({ icon, link, name, desc, background }) => h("a", {
			class: ["vp-project-card", { [`color${generateIndexFromHash(name, Number(cssVariables.colorNumber))}`]: !isPure.value && !background }],
			...background ? { style: background } : {},
			href: isLinkAbsolute(link) ? withBase(link) : link,
			onClick: (event) => {
				navigate(link);
				event.preventDefault();
			}
		}, [
			icon ? h(resolveComponent("VPIcon"), {
				class: "vp-project-icon",
				icon
			}) : null,
			h("div", { class: "vp-project-name" }, name),
			h("div", { class: "vp-project-desc" }, desc)
		])));
	}
});

//#endregion
//#region src/client/components/blog/BlogHome.ts
var BlogHome_default = defineComponent({
	name: "BlogHome",
	slots: Object,
	setup(_props, { slots }) {
		const articles = useArticles();
		const frontmatter = useFrontmatter();
		const projects = computed(() => frontmatter.value.projects ?? []);
		return () => h("div", { class: "vp-page vp-blog-home" }, [
			slots.heroBefore?.(),
			h(BlogHero_default, {}, slots),
			slots.heroAfter?.(),
			h("div", { class: "blog-page-wrapper" }, [h("main", {
				id: "main-content",
				class: "vp-blog-main"
			}, [
				slots.articlesBefore?.() ?? (projects.value.length > 0 ? h(DropTransition_default, {
					appear: true,
					delay: .16
				}, () => h(ProjectPanel_default, { items: projects.value })) : null),
				h(DropTransition_default, {
					appear: true,
					delay: .24
				}, () => h(ArticleList_default, { items: articles.value.items }, slots)),
				slots.articlesAfter?.()
			]), h(DropTransition_default, {
				appear: true,
				delay: .16
			}, () => h(InfoPanel, { key: "blog" }, slots))]),
			slots.content?.() ?? h(DropTransition_default, {
				appear: true,
				delay: .28
			}, () => h(MarkdownContent_default, {}, slots))
		]);
	}
});

//#endregion
//#region src/client/components/blog/BlogMainLayout.ts
var BlogMainLayout_default = defineComponent({
	name: "BlogMainLayout",
	slots: Object,
	setup(_props, { slots }) {
		const { isMobile } = useWindowSize();
		return () => [h(SkipLink_default), h(MainLayout_default, {
			noSidebar: !isMobile.value,
			noToc: true
		}, {
			...slots,
			navScreenBottom: () => slots.navScreenBottom?.() ?? h(BloggerInfo_default, {}, slots),
			sidebarItems: (sidebarItems) => slots.sidebarItems?.(sidebarItems) ?? (isMobile.value ? h(InfoList_default) : null)
		})];
	}
});

//#endregion
//#region src/client/components/blog/CategoryPage.ts
var CategoryPage_default = defineComponent({
	name: "CategoryPage",
	slots: Object,
	setup(_props, { slots }) {
		const page = usePage();
		const frontmatter = useFrontmatter();
		const categoryMap = useCategoryMap();
		const tagMap = useTagMap();
		const blogData = computed(() => {
			const blogConfig = frontmatter.value.blog;
			if (blogConfig?.type !== "category") return null;
			const { name, key } = blogConfig;
			return key === "category" ? {
				component: CategoryList_default,
				items: name ? categoryMap.value.map[name].items : null
			} : key === "tag" ? {
				component: TagList_default,
				items: name ? tagMap.value.map[name].items : null
			} : null;
		});
		return () => h("div", { class: "vp-page vp-blog" }, h("div", { class: "blog-page-wrapper" }, [h("main", {
			id: "main-content",
			class: "vp-blog-main"
		}, slots.default?.() ?? [
			h(DropTransition_default, { appear: true }, () => blogData.value ? h(blogData.value.component) : null),
			slots.articlesBefore?.(),
			blogData.value?.items ? h(DropTransition_default, {
				appear: true,
				delay: .08
			}, () => [h(ArticleList_default, {
				key: page.value.path,
				items: blogData.value.items
			}, slots)]) : null,
			slots.articlesAfter?.()
		]), h(DropTransition_default, { delay: .16 }, () => h(InfoPanel, { key: "blog" }, slots))]));
	}
});

//#endregion
//#region src/client/components/blog/TimelineItems.ts
var TimelineItems_default = defineComponent({
	name: "TimelineItems",
	setup() {
		const blogOptions = useBlogOptions();
		const blogLocale = useBlogLocale();
		const timelines = useTimeline();
		const hint = computed(() => blogOptions.value.timeline ?? blogLocale.value.timelineTitle);
		return () => h("div", { class: "timeline-wrapper" }, h("ul", { class: "timeline-content" }, [h(DropTransition_default, () => h("li", { class: "motto" }, hint.value)), timelines.value.config.map(({ year, items }, index) => h(DropTransition_default, {
			appear: true,
			delay: .08 * (index + 1),
			group: true
		}, () => [h("h3", {
			key: "title",
			id: year,
			class: "timeline-year-title"
		}, h("span", year)), h("li", {
			key: "content",
			class: "timeline-year-list"
		}, [h("ul", { class: "timeline-year-wrapper" }, items.map(({ date, info, path }) => h("li", { class: "timeline-item" }, [h("span", { class: "timeline-date" }, date), h(RouteLink, {
			class: "timeline-title",
			to: path
		}, () => info.title)])))])]))]));
	}
});

//#endregion
//#region src/client/components/blog/TimelinePage.ts
const TimelinePage = (_props, { slots }) => h("div", { class: "vp-page vp-blog" }, h("div", { class: "blog-page-wrapper" }, [h("main", {
	id: "main-content",
	class: "vp-blog-main"
}, [
	slots.articlesBefore?.(),
	h(DropTransition_default, { appear: true }, () => h(TimelineItems_default)),
	slots.articlesAfter?.()
]), h(DropTransition_default, { appear: true }, () => h(InfoPanel, { key: "blog" }, slots))]));
TimelinePage.displayName = "TimelinePage";

//#endregion
//#region src/client/components/blog/ArticleType.ts
var ArticleType_default = defineComponent({
	name: "ArticleType",
	setup() {
		const { page, routeLocale } = useData$1();
		const articles = useArticles();
		const stars = useStars();
		const blogLocale = useBlogLocale();
		const types = computed(() => [
			{
				text: blogLocale.value.all,
				path: articles.value.path
			},
			{
				text: blogLocale.value.star,
				path: stars.value.path
			},
			...__VP_BLOG_TYPES__.map(({ key, path }) => {
				const routePath = path.replace(/^\//, routeLocale.value);
				return {
					text: blogLocale.value[key] ?? resolveRoute(routePath).meta.title ?? key,
					path: routePath
				};
			})
		]);
		return () => h("ul", { class: "vp-article-type-wrapper" }, types.value.map((type) => h("li", { class: ["vp-article-type", { active: type.path === page.value.path }] }, h(RouteLink, { to: type.path }, () => type.text))));
	}
});

//#endregion
//#region src/client/components/blog/TypePage.ts
var TypePage_default = defineComponent({
	name: "TypePage",
	slots: Object,
	setup(_props, { slots }) {
		const blogType = useBlogType();
		const frontmatter = useFrontmatter();
		const page = usePage();
		const articles = useArticles();
		const stars = useStars();
		const items = computed(() => {
			const blogConfig = frontmatter.value.blog;
			if (blogConfig?.type !== "type" || !blogConfig.key) return articles.value.items;
			return blogConfig.key === "star" ? stars.value.items : blogType.value.items;
		});
		return () => h("div", { class: "vp-page vp-blog" }, h("div", { class: "blog-page-wrapper" }, [h("main", {
			id: "main-content",
			class: "vp-blog-main"
		}, slots.default?.() ?? [
			h(DropTransition_default, () => h(ArticleType_default)),
			slots.articlesBefore?.(),
			h(DropTransition_default, {
				appear: true,
				delay: .08
			}, () => h(ArticleList_default, {
				key: page.value.path,
				items: items.value
			})),
			slots.articlesAfter?.()
		]), h(DropTransition_default, {
			appear: true,
			delay: .08
		}, () => h(InfoPanel, { key: "blog" }, slots))]));
	}
});

//#endregion
//#region src/client/layouts/blog/Blog.ts
var Blog_default = defineComponent({
	name: "Blog",
	slots: Object,
	setup(_props, { slots }) {
		const frontmatter = useFrontmatter();
		return () => {
			const { type, key } = frontmatter.value.blog ?? {};
			return h(BlogMainLayout_default, null, {
				...slots,
				default: () => slots.default?.() ?? (type === "category" ? h(CategoryPage_default, null, slots) : type === "type" ? key === "timeline" ? h(TimelinePage, null, slots) : h(TypePage_default, null, slots) : h(BlogHome_default, null, slots))
			});
		};
	}
});

//#endregion
export { setupTagMap as A, TagIcon as C, BloggerInfo_default as D, useStars as E, setupArticles as F, useArticles as I, SocialMedias_default as L, setupCategoryMap as M, useCategoryMap as N, setupTimeline as O, useBlogLocale as P, useBlogOptions as R, StickyIcon as S, setupStars as T, ArticleItem_default as _, ProjectPanel_default as a, CategoryIcon as b, TimelineList_default as c, CategoriesInfo_default as d, CategoryList_default as f, Pagination_default as g, ArticleList_default as h, BlogHome_default as i, useTagMap as j, useTimeline as k, TagsInfo_default as l, BlogHero_default as m, ArticleType_default as n, InfoPanel as o, ArticlesInfo_default as p, TimelineItems_default as r, InfoList_default as s, Blog_default as t, TagList_default as u, useArticleInfo as v, TimelineIcon as w, SlideIcon as x, ArticleIcon as y };
//# sourceMappingURL=Blog-r39_oreq.js.map