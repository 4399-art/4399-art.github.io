import { i as getTag, n as getCategory, t as getAuthor } from "./infoGetter-CiYuSeA7.js";
import { useMutationObserver } from "@vueuse/core";
import { computed, defineComponent, h, inject, ref, resolveComponent, shallowRef } from "vue";
import { useThemeData, useThemeLocaleData } from "@vuepress/plugin-theme-data/client";
import { useData, useFrontmatter, useLang, useRoute, useRoutePath, useRouter } from "vuepress/client";
import { getDate, isLinkAbsolute, isLinkWithProtocol, isString } from "@vuepress/helper/client";
import { useReadingTimeData, useReadingTimeLocale } from "@vuepress/plugin-reading-time/client";
import noopComponent from "@vuepress/helper/noopComponent";
import { IconBase, generateIndexFromHash } from "vuepress-shared/client";
import cssVariables from "./client/styles/variables.module.scss";
import { isSupported } from "@vuepress/plugin-comment/pageview";
import "./client/styles/info/author-info.scss";
import "./client/styles/info/category-info.scss";
import "./client/styles/info/original-info.scss";
import "./client/styles/info/tag-info.scss";
import "balloon-css/balloon.css";
import "./client/styles/info/page-info.scss";

//#region src/client/composables/useTheme.ts
const useTheme = () => useThemeData();
const useThemeLocale = () => useThemeLocaleData();

//#endregion
//#region src/client/composables/useData.ts
const useData$1 = () => ({
	...useData(),
	theme: useTheme(),
	themeLocale: useThemeLocale()
});

//#endregion
//#region src/client/composables/usePure.ts
const usePure = () => {
	const theme = useTheme();
	return computed(() => Boolean(theme.value.pure));
};

//#endregion
//#region src/client/composables/useAuthorInfo.ts
const useAuthorInfo = () => {
	const themeLocale = useThemeLocale();
	return computed(() => themeLocale.value.author);
};

//#endregion
//#region src/client/composables/usePageInfo.ts
const usePageAuthor = () => {
	const frontmatter = useFrontmatter();
	const authorInfo = useAuthorInfo();
	return computed(() => {
		const { author } = frontmatter.value;
		if (author) return getAuthor(author);
		if (author === false) return [];
		return getAuthor(authorInfo.value, false);
	});
};
const usePageCategory = () => {
	const frontmatter = useFrontmatter();
	const categoryMap = inject(Symbol.for("categoryMap"), null);
	return computed(() => getCategory(frontmatter.value.category ?? frontmatter.value.categories).map((name) => ({
		name,
		path: categoryMap?.value.map[name]?.path ?? ""
	})));
};
const usePageTag = () => {
	const frontmatter = useFrontmatter();
	const tagMap = inject(Symbol.for("tagMap"), null);
	return computed(() => getTag(frontmatter.value.tag ?? frontmatter.value.tags).map((name) => ({
		name,
		path: tagMap?.value.map[name]?.path ?? ""
	})));
};
const usePageDate = () => {
	const { frontmatter, page } = useData$1();
	return computed(() => {
		const date = getDate(frontmatter.value.date);
		if (date) return date;
		const { createdTime } = page.value.git ?? {};
		if (createdTime) return new Date(createdTime);
		return null;
	});
};
const usePageInfo = () => {
	const { frontmatter, themeLocale } = useData$1();
	const author = usePageAuthor();
	const category = usePageCategory();
	const tag = usePageTag();
	const date = usePageDate();
	const readingTimeData = useReadingTimeData();
	const readingTimeLocale = useReadingTimeLocale();
	return {
		info: computed(() => ({
			author: author.value,
			category: category.value,
			date: date.value,
			tag: tag.value,
			isOriginal: frontmatter.value.isOriginal ?? false,
			readingTime: readingTimeData.value,
			readingTimeLocale: readingTimeLocale.value,
			pageview: frontmatter.value.pageview ?? true
		})),
		items: computed(() => frontmatter.value.pageInfo ?? themeLocale.value.pageInfo ?? null)
	};
};

//#endregion
//#region src/client/composables/info/useMetaLocale.ts
const useMetaLocale = () => {
	const themeLocale = useThemeLocale();
	return computed(() => themeLocale.value.metaLocales);
};

//#endregion
//#region src/client/composables/useNavigate.ts
const FAKE_HOST = "http://.";
const useNavigate = () => {
	const router = useRouter();
	const route = useRoute();
	return (url) => {
		if (!url) return;
		if (isLinkWithProtocol(url)) return window.open(url);
		if (isLinkAbsolute(url)) {
			if (route.fullPath === url) return;
			router.push(url);
			return;
		}
		const loc = route.path.slice(0, route.path.lastIndexOf("/"));
		router.push(new URL(`${loc}/${encodeURI(url)}`, FAKE_HOST).pathname);
	};
};

//#endregion
//#region src/client/components/info/icons.ts
const AuthorIcon = () => h(IconBase, { name: "author" }, () => h("path", { d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z" }));
AuthorIcon.displayName = "AuthorIcon";
const CalendarIcon = () => h(IconBase, { name: "calendar" }, () => h("path", { d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z" }));
CalendarIcon.displayName = "CalendarIcon";
const CategoryIcon = () => h(IconBase, { name: "category" }, () => h("path", { d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z" }));
CategoryIcon.displayName = "CategoryIcon";
const EyeIcon = () => h(IconBase, { name: "eye" }, () => h("path", { d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z" }));
EyeIcon.displayName = "EyeIcon";
const FireIcon = () => h(IconBase, { name: "fire" }, () => h("path", { d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z" }));
FireIcon.displayName = "FireIcon";
const PrintIcon = () => h(IconBase, { name: "print" }, () => h("path", { d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z" }));
PrintIcon.displayName = "PrintIcon";
const TagIcon = () => h(IconBase, { name: "tag" }, () => h("path", { d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z" }));
TagIcon.displayName = "TagIcon";
const TimerIcon = () => h(IconBase, { name: "timer" }, () => h("path", { d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z" }));
TimerIcon.displayName = "TimerIcon";
const WordIcon = () => h(IconBase, { name: "word" }, () => [h("path", { d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z" }), h("path", { d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z" })]);
WordIcon.displayName = "WordIcon";

//#endregion
//#region src/client/components/info/AuthorInfo.ts
var AuthorInfo_default = defineComponent({
	name: "AuthorInfo",
	inheritAttrs: false,
	props: { author: {
		type: Array,
		required: true
	} },
	setup(props) {
		const metaLocale = useMetaLocale();
		const isPure = usePure();
		return () => props.author.length > 0 ? h("span", {
			class: "page-author-info",
			"aria-label": `${metaLocale.value.author}${isPure.value ? "" : "🖊"}`,
			...isPure.value ? {} : { "data-balloon-pos": "up" }
		}, [
			h(AuthorIcon),
			h("span", props.author.map((item) => item.url ? h("a", {
				class: "page-author-item",
				href: item.url,
				target: "_blank",
				rel: "noopener noreferrer"
			}, item.name) : h("span", { class: "page-author-item" }, item.name))),
			h("span", {
				property: "author",
				content: props.author.map((item) => item.name).join(", ")
			})
		]) : null;
	}
});

//#endregion
//#region src/client/components/info/CategoryInfo.ts
var CategoryInfo_default = defineComponent({
	name: "CategoryInfo",
	inheritAttrs: false,
	props: { category: {
		type: Array,
		required: true
	} },
	setup(props) {
		const metaLocale = useMetaLocale();
		const navigate = useNavigate();
		const isPure = usePure();
		return () => props.category.length > 0 ? h("span", {
			class: "page-category-info",
			"aria-label": `${metaLocale.value.category}${isPure.value ? "" : "🌈"}`,
			...isPure.value ? {} : { "data-balloon-pos": "up" }
		}, [
			h(CategoryIcon),
			props.category.map(({ name, path }) => h("span", {
				class: ["page-category-item", {
					[`color${generateIndexFromHash(name, Number(cssVariables.colorNumber))}`]: !isPure.value,
					clickable: path
				}],
				role: path ? "navigation" : "",
				onClick: () => {
					if (path) navigate(path);
				}
			}, name)),
			h("meta", {
				property: "articleSection",
				content: props.category.map(({ name }) => name).join(",")
			})
		]) : null;
	}
});

//#endregion
//#region src/client/components/info/DateInfo.ts
var DateInfo_default = defineComponent({
	name: "DateInfo",
	inheritAttrs: false,
	props: { date: Object },
	setup(props) {
		const lang = useLang();
		const metaLocale = useMetaLocale();
		const isPure = usePure();
		const formatter = computed(() => new Intl.DateTimeFormat(lang.value, { dateStyle: "short" }));
		const formattedDate = computed(() => {
			if (!props.date) return null;
			return formatter.value.format(props.date);
		});
		return () => props.date ? h("span", {
			class: "page-date-info",
			"aria-label": `${metaLocale.value.date}${isPure.value ? "" : "📅"}`,
			...isPure.value ? {} : { "data-balloon-pos": "up" }
		}, [
			h(CalendarIcon),
			h("span", { "data-allow-mismatch": "text" }, formattedDate.value),
			h("meta", {
				property: "datePublished",
				content: props.date.toISOString() || ""
			})
		]) : null;
	}
});

//#endregion
//#region src/client/components/info/OriginalInfo.ts
var OriginalInfo_default = defineComponent({
	name: "OriginalInfo",
	inheritAttrs: false,
	props: { isOriginal: Boolean },
	setup(props) {
		const metaLocale = useMetaLocale();
		return () => props.isOriginal ? h("span", { class: "page-original-info" }, metaLocale.value.origin) : null;
	}
});

//#endregion
//#region src/client/components/info/PageViewInfo.ts
const HOT_VIEW_THRESHOLD = 1e3;
var PageViewInfo_default = defineComponent({
	name: "PageViewInfo",
	inheritAttrs: false,
	props: { pageview: [Boolean, String] },
	setup(props) {
		const routePath = useRoutePath();
		const metaLocale = useMetaLocale();
		const isPure = usePure();
		const pageviewElement = shallowRef();
		const pageViews = ref(0);
		useMutationObserver(pageviewElement, () => {
			const count = pageviewElement.value.textContent;
			if (count && !Number.isNaN(Number(count))) pageViews.value = Number(count);
		}, { childList: true });
		return () => props.pageview ? h("span", {
			class: "page-pageview-info",
			"aria-label": `${metaLocale.value.views}${isPure.value ? "" : "🔢"}`,
			...isPure.value ? {} : { "data-balloon-pos": "up" }
		}, [h(pageViews.value < HOT_VIEW_THRESHOLD ? EyeIcon : FireIcon), h("span", {
			ref: pageviewElement,
			id: "ArtalkPV",
			class: "vp-pageview waline-pageview-count",
			"data-path": isString(props.pageview) ? props.pageview : routePath.value,
			"data-page-key": isString(props.pageview) ? props.pageview : routePath.value
		}, "...")]) : null;
	}
});

//#endregion
//#region src/client/components/info/ReadingTimeInfo.ts
var ReadingTimeInfo_default = defineComponent({
	name: "ReadingTimeInfo",
	inheritAttrs: false,
	props: {
		readingTime: Object,
		readingTimeLocale: Object
	},
	setup(props) {
		const metaLocale = useMetaLocale();
		const isPure = usePure();
		const readingTimeMeta = computed(() => {
			if (!props.readingTime) return null;
			const { minutes } = props.readingTime;
			return minutes < 1 ? "PT1M" : `PT${Math.round(minutes)}M`;
		});
		return () => props.readingTimeLocale?.time ? h("span", {
			class: "page-reading-time-info",
			"aria-label": `${metaLocale.value.readingTime}${isPure.value ? "" : "⌛"}`,
			...isPure.value ? {} : { "data-balloon-pos": "up" }
		}, [
			h(TimerIcon),
			h("span", props.readingTimeLocale.time),
			h("meta", {
				property: "timeRequired",
				content: readingTimeMeta.value
			})
		]) : null;
	}
});

//#endregion
//#region src/client/components/info/TagInfo.ts
var TagInfo_default = defineComponent({
	name: "TagInfo",
	inheritAttrs: false,
	props: { tag: Array },
	setup(props) {
		const metaLocale = useMetaLocale();
		const navigate = useNavigate();
		const isPure = usePure();
		return () => props.tag?.length ? h("span", {
			class: "page-tag-info",
			"aria-label": `${metaLocale.value.tag}${isPure.value ? "" : "🏷"}`,
			...isPure.value ? {} : { "data-balloon-pos": "up" }
		}, [
			h(TagIcon),
			props.tag.map(({ name, path }) => h("span", {
				class: ["page-tag-item", {
					[`color${generateIndexFromHash(name, Number(cssVariables.colorNumber))}`]: !isPure.value,
					clickable: path
				}],
				role: path ? "navigation" : "",
				onClick: () => {
					if (path) navigate(path);
				}
			}, name)),
			h("meta", {
				property: "keywords",
				content: props.tag.map(({ name }) => name).join(",")
			})
		]) : null;
	}
});

//#endregion
//#region src/client/components/info/WordInfo.ts
var WordInfo_default = defineComponent({
	name: "ReadTimeInfo",
	inheritAttrs: false,
	props: {
		readingTime: Object,
		readingTimeLocale: Object
	},
	setup(props) {
		const metaLocale = useMetaLocale();
		const isPure = usePure();
		return () => props.readingTimeLocale?.words ? h("span", {
			class: "page-word-info",
			"aria-label": `${metaLocale.value.words}${isPure.value ? "" : "🔠"}`,
			...isPure.value ? {} : { "data-balloon-pos": "up" }
		}, [
			h(WordIcon),
			h("span", props.readingTimeLocale.words),
			h("meta", {
				property: "wordCount",
				content: props.readingTime?.words
			})
		]) : null;
	}
});

//#endregion
//#region src/client/components/info/PageInfo.ts
var PageInfo_default = defineComponent({
	name: "PageInfo",
	components: {
		AuthorInfo: AuthorInfo_default,
		CategoryInfo: CategoryInfo_default,
		DateInfo: DateInfo_default,
		OriginalInfo: OriginalInfo_default,
		PageViewInfo: isSupported ? PageViewInfo_default : noopComponent,
		ReadingTimeInfo: __VP_READING_TIME__ ? ReadingTimeInfo_default : noopComponent,
		TagInfo: TagInfo_default,
		WordInfo: __VP_READING_TIME__ ? WordInfo_default : noopComponent
	},
	props: {
		items: [Boolean, Array],
		info: {
			type: Object,
			required: true
		}
	},
	setup(props) {
		const isPure = usePure();
		return () => {
			const items = props.items ?? [
				"Author",
				"Original",
				"Date",
				"PageView",
				"ReadingTime",
				"Category",
				"Tag"
			];
			return items ? h("div", { class: "page-info" }, items.map((item) => h(resolveComponent(`${item}Info`), {
				...props.info,
				isPure: isPure.value
			}))) : null;
		};
	}
});

//#endregion
export { usePageAuthor as a, usePure as c, useThemeLocale as d, useMetaLocale as i, useData$1 as l, PrintIcon as n, usePageInfo as o, useNavigate as r, useAuthorInfo as s, PageInfo_default as t, useTheme as u };
//# sourceMappingURL=PageInfo-DTBGvCmc.js.map