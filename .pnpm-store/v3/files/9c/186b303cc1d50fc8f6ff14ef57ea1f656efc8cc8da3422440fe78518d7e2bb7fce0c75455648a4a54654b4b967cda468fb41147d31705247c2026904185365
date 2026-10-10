import { i as useMetaLocale, l as useData$1, n as PrintIcon, r as useNavigate, s as useAuthorInfo, u as useTheme } from "./PageInfo-DTBGvCmc.js";
import { _ as useDarkMode, a as useMetaInfo, c as AutoLink$1, i as MarkdownContent_default, m as resolveLinkInfo, n as HeroSlideDownButton, o as MainLayout_default, p as useSidebarItems, r as SkipLink_default, t as DropTransition_default } from "./DropTransition-CPVR6Hkk.js";
import { n as MainFadeInUpTransition_default, t as PageTitle_default } from "./PageTitle--p5MJTUs.js";
import { useEventListener, useToggle, watchImmediate } from "@vueuse/core";
import { computed, defineComponent, h, nextTick, onMounted, ref, resolveComponent, shallowRef } from "vue";
import { ClientOnly, RouteLink, resolveRoute, useFrontmatter, useRoute, useRouter, withBase } from "vuepress/client";
import { RenderDefault, hasGlobalComponent, isArray, isLinkExternal, isLinkHttp, isPlainObject, isSlotContentEmpty, isString, removeEndingSlash, removeLeadingSlash, useHeaders } from "@vuepress/helper/client";
import { IconBase, resolveRepoType } from "vuepress-shared/client";
import "./client/styles/base/breadcrumb.scss";
import "./client/styles/base/page-nav.scss";
import "./client/styles/info/print-button.scss";
import "./client/styles/info/toc.scss";
import { useContributors, useLastUpdated } from "@vuepress/plugin-git/client";
import "./client/styles/info/page-meta.scss";
import "./client/styles/base/page-content.scss";
import "./client/styles/home/feature-panel.scss";
import "./client/styles/home/hero-info.scss";
import "./client/styles/home/highlight-panel.scss";
import "./client/styles/home/home-page.scss";
import "./client/styles/home/portfolio-hero.scss";
import "./client/styles/home/portfolio-home.scss";

//#region src/client/utils/getAncestorLinks.ts
const getAncestorLinks = (path, routeLocale) => {
	const routePaths = path.replace(routeLocale, "/").split("/");
	const result = [];
	let link = removeEndingSlash(routeLocale);
	routePaths.forEach((name, index) => {
		if (index !== routePaths.length - 1) {
			link += `${name}/`;
			result.push({
				link,
				name: name || "Home"
			});
		} else if (name !== "") {
			link += name;
			result.push({
				link,
				name
			});
		}
	});
	return result;
};

//#endregion
//#region src/client/components/base/BreadCrumb.ts
var BreadCrumb_default = defineComponent({
	name: "BreadCrumb",
	setup() {
		const { frontmatter, page, routeLocale, routePath, themeLocale } = useData$1();
		const config = shallowRef([]);
		const enable = computed(() => (frontmatter.value.breadcrumb ?? themeLocale.value.breadcrumb ?? true) && config.value.length > 1);
		const enableIcon = computed(() => frontmatter.value.breadcrumbIcon ?? themeLocale.value.breadcrumbIcon ?? true);
		const getBreadCrumbConfig = () => {
			const breadcrumbConfig = getAncestorLinks(page.value.path, routeLocale.value).map(({ link, name }) => {
				const { path, meta, notFound } = resolveRoute(link);
				if (notFound || meta.breadcrumbExclude) return null;
				return {
					title: meta.shortTitle || meta.title || name,
					icon: meta.icon,
					path
				};
			}).filter((item) => item != null);
			if (breadcrumbConfig.length > 1) config.value = breadcrumbConfig;
		};
		onMounted(() => {
			watchImmediate(routePath, getBreadCrumbConfig);
		});
		return () => h("nav", { class: ["vp-breadcrumb", { disable: !enable.value }] }, enable.value ? h("ol", {
			vocab: "https://schema.org/",
			typeof: "BreadcrumbList"
		}, config.value.map((item, index) => h("li", {
			class: { "is-active": config.value.length - 1 === index },
			property: "itemListElement",
			typeof: "ListItem"
		}, [h(RouteLink, {
			to: item.path,
			property: "item",
			typeof: "WebPage"
		}, () => [enableIcon.value ? h(resolveComponent("VPIcon"), { icon: item.icon }) : null, h("span", { property: "name" }, item.title || "Unknown")]), h("meta", {
			property: "position",
			content: index + 1
		})]))) : []);
	}
});

//#endregion
//#region src/client/composables/useRelatedLinks.ts
const resolveFromFrontmatterConfig = (config, currentPath) => config === false ? config : isPlainObject(config) ? {
	...config,
	link: resolveLinkInfo(config.link, true, currentPath).link
} : isString(config) ? resolveLinkInfo(config, true, currentPath) : null;
/**
* Resolve `prev` or `next` config from sidebar items
*
* @param sidebarItems - sidebar items
* @param currentPath - current route path
* @param offset - offset to the target link
*
* @returns resolved link config or null
*/
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
	const linkIndex = sidebarItems.findIndex((item) => item.link === currentPath);
	if (linkIndex !== -1) {
		if (!sidebarItems[linkIndex + offset]) return null;
		const targetItem = sidebarItems[linkIndex + offset];
		if (targetItem.link) return targetItem;
		if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound) return {
			...targetItem,
			link: targetItem.prefix
		};
		return null;
	}
	for (const item of sidebarItems) if ("children" in item) {
		const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
		if (childResult) return childResult;
	}
	const prefixIndex = sidebarItems.findIndex((item) => "prefix" in item && item.prefix === currentPath);
	if (prefixIndex !== -1) {
		if (!sidebarItems[prefixIndex + offset]) return null;
		const targetItem = sidebarItems[prefixIndex + offset];
		if (targetItem.link) return targetItem;
		if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound) return {
			...targetItem,
			link: targetItem.prefix
		};
		return null;
	}
	return null;
};
const useRelatedLinks = () => {
	const { frontmatter, routePath, themeLocale } = useData$1();
	const sidebarItems = useSidebarItems();
	return {
		prevLink: computed(() => {
			const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev, routePath.value);
			return prevConfig === false ? null : prevConfig ?? (themeLocale.value.prevLink === false ? null : resolveFromSidebarItems(sidebarItems.value, routePath.value, -1));
		}),
		nextLink: computed(() => {
			const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next, routePath.value);
			return nextConfig === false ? null : nextConfig ?? (themeLocale.value.nextLink === false ? null : resolveFromSidebarItems(sidebarItems.value, routePath.value, 1));
		})
	};
};

//#endregion
//#region src/client/components/base/PageNav.ts
var PageNav_default = defineComponent({
	name: "PageNav",
	setup() {
		const metaLocale = useMetaLocale();
		const navigate = useNavigate();
		const { prevLink, nextLink } = useRelatedLinks();
		useEventListener("keydown", (event) => {
			if (event.altKey) switch (event.key) {
				case "ArrowRight":
					if (nextLink.value) {
						navigate(nextLink.value.link);
						event.preventDefault();
					}
					break;
				case "ArrowLeft":
					if (prevLink.value) {
						navigate(prevLink.value.link);
						event.preventDefault();
					}
					break;
				default:
			}
		});
		return () => prevLink.value || nextLink.value ? h("nav", { class: "vp-page-nav" }, [prevLink.value ? h(AutoLink$1, {
			class: "prev",
			config: prevLink.value
		}, () => [h("div", { class: "hint" }, [h("span", { class: "arrow start" }), metaLocale.value.prev]), h("div", { class: "link" }, [h(resolveComponent("VPIcon"), { icon: prevLink.value?.icon }), prevLink.value?.text])]) : null, nextLink.value ? h(AutoLink$1, {
			class: "next",
			config: nextLink.value
		}, () => [h("div", { class: "hint" }, [metaLocale.value.next, h("span", { class: "arrow end" })]), h("div", { class: "link" }, [nextLink.value?.text, h(resolveComponent("VPIcon"), { icon: nextLink.value?.icon })])]) : null]) : null;
	}
});

//#endregion
//#region src/client/components/base/PrintButton.ts
var PrintButton_default = defineComponent({
	name: "PrintButton",
	setup() {
		const metaLocale = useMetaLocale();
		const theme = useTheme();
		return () => theme.value.print === false ? null : h("button", {
			type: "button",
			class: "print-button",
			title: metaLocale.value.print,
			onClick: () => {
				globalThis.print();
			}
		}, h(PrintIcon));
	}
});

//#endregion
//#region src/client/components/base/TOC.ts
const DEFAULT_TOC_OPTIONS = {
	selector: [...Array.from({ length: 6 }).map((_, i) => `#markdown-content > h${i + 1}`), "[vp-content] > h2"].join(", "),
	levels: "deep",
	ignore: [".vp-badge", ".vp-icon"]
};
var TOC_default = defineComponent({
	name: "TOC",
	props: { items: Array },
	slots: Object,
	setup(props, { slots }) {
		const { frontmatter, themeLocale } = useData$1();
		const tocOptions = computed(() => {
			const config = frontmatter.value.toc ?? themeLocale.value.toc;
			return isPlainObject(config) ? {
				...DEFAULT_TOC_OPTIONS,
				...config
			} : config ?? true ? DEFAULT_TOC_OPTIONS : void 0;
		});
		const headers = useHeaders(tocOptions);
		const route = useRoute();
		const metaLocale = useMetaLocale();
		const [isExpanded, toggleExpanded] = useToggle();
		const toc = shallowRef();
		const tocMarkerTop = ref("-2rem");
		const scrollTo = (top) => {
			toc.value?.scrollTo({
				top,
				behavior: "smooth"
			});
		};
		const updateTocMarker = () => {
			if (toc.value) {
				const activeTocItem = document.querySelector(".vp-toc-item.active");
				if (activeTocItem) tocMarkerTop.value = `${activeTocItem.getBoundingClientRect().top - toc.value.getBoundingClientRect().top + toc.value.scrollTop}px`;
				else tocMarkerTop.value = "-2rem";
			} else tocMarkerTop.value = "-2rem";
		};
		onMounted(() => {
			watchImmediate(() => route.hash, (hash) => {
				if (toc.value) {
					const activeTocItem = document.querySelector(`#toc a.vp-toc-link[href$="${hash}"]`);
					if (!activeTocItem) return;
					const { top: tocTop, height: tocHeight } = toc.value.getBoundingClientRect();
					const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
					if (activeTocItemTop < tocTop) scrollTo(toc.value.scrollTop + activeTocItemTop - tocTop);
					else if (activeTocItemTop + activeTocItemHeight > tocTop + tocHeight) scrollTo(toc.value.scrollTop + activeTocItemTop + activeTocItemHeight - tocTop - tocHeight);
				}
			}, { flush: "post" });
			watchImmediate(() => route.fullPath, updateTocMarker, { flush: "post" });
		});
		const renderHeader = ({ title, level, slug }) => h(RouteLink, {
			to: `#${slug}`,
			class: ["vp-toc-link", `level${level}`],
			onClick: () => {
				toggleExpanded();
			}
		}, () => title);
		const renderChildren = (pageHeaders) => pageHeaders.length > 0 ? h("ul", { class: "vp-toc-list" }, pageHeaders.map((header) => {
			const children = renderChildren(header.children);
			return [h("li", { class: ["vp-toc-item", { active: route.hash === `#${header.slug}` }] }, renderHeader(header)), children ? h("li", children) : null];
		})) : null;
		return () => tocOptions.value || props.items?.length ? h(ClientOnly, () => {
			const tocHeaders = props.items?.length ? renderChildren(props.items) : renderChildren(headers.value);
			const defaultContent = slots.toc?.(headers.value) ?? (tocHeaders ? [h("div", {
				class: "vp-toc-header",
				onClick: () => {
					toggleExpanded();
				}
			}, [
				metaLocale.value.toc,
				h(PrintButton_default),
				h("div", { class: ["arrow", isExpanded.value ? "down" : "end"] })
			]), h("div", {
				class: ["vp-toc-wrapper", isExpanded.value ? "open" : ""],
				ref: toc
			}, [tocHeaders, h("div", {
				class: "vp-toc-marker",
				style: { top: tocMarkerTop.value }
			})])] : null);
			const beforeContent = slots.tocBefore?.();
			const afterContent = slots.tocAfter?.();
			return isSlotContentEmpty(defaultContent) && isSlotContentEmpty(beforeContent) && isSlotContentEmpty(afterContent) ? null : h("div", { class: "vp-toc-placeholder" }, [h("aside", {
				id: "toc",
				"vp-toc": ""
			}, [
				beforeContent,
				defaultContent,
				afterContent
			])]);
		}) : null;
	}
});

//#endregion
//#region src/client/components/base/EditIcon.ts
const EditIcon = () => h(IconBase, { name: "edit" }, () => [h("path", { d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z" }), h("path", { d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z" })]);
EditIcon.displayName = "EditIcon";

//#endregion
//#region src/client/utils/info/resolveEditLink.ts
const editLinkPatterns = {
	GitHub: ":repo/edit/:branch/:path",
	GitLab: ":repo/-/edit/:branch/:path",
	Gitee: ":repo/edit/:branch/:path",
	Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
	if (!filePathRelative) return null;
	const repoType = resolveRepoType(docsRepo);
	let pattern = "";
	if (editLinkPattern) pattern = editLinkPattern;
	else if (repoType != null) pattern = editLinkPatterns[repoType];
	if (!pattern) return null;
	return pattern.replace(/:repo/u, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/u, docsBranch).replace(/:path/u, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};

//#endregion
//#region src/client/composables/info/useEditLink.ts
const useEditLink = () => {
	const { frontmatter, page, themeLocale } = useData$1();
	const metaLocale = useMetaLocale();
	return computed(() => {
		const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern = "" } = themeLocale.value;
		if (!(frontmatter.value.editLink ?? editLink ?? true)) return null;
		if (!docsRepo) return null;
		const link = resolveEditLink({
			docsRepo,
			docsBranch,
			docsDir,
			editLinkPattern,
			filePathRelative: page.value.filePathRelative
		});
		if (!link) return null;
		return {
			text: metaLocale.value.editLink,
			link
		};
	});
};

//#endregion
//#region src/client/components/info/PageMeta.ts
var PageMeta_default = defineComponent({
	name: "PageMeta",
	setup() {
		const metaInfo = useMetaInfo();
		const contributors = useContributors();
		const editLink = useEditLink();
		const lastUpdated = useLastUpdated(metaInfo.lastUpdated);
		const metaLocale = useMetaLocale();
		return () => h("footer", { class: "vp-page-meta" }, [editLink.value ? h("div", { class: "vp-meta-item edit-link" }, h(AutoLink$1, {
			class: "vp-meta-label",
			config: editLink.value
		}, { before: () => h(EditIcon) })) : null, h("div", { class: "vp-meta-item git-info" }, [(!metaInfo.changelog.value || !hasGlobalComponent("GitChangelog")) && lastUpdated.value ? h("div", { class: "update-time" }, [h("span", { class: "vp-meta-label" }, `${lastUpdated.value.locale}: `), h("time", {
			class: "vp-meta-info",
			datetime: lastUpdated.value.iso,
			"data-allow-mismatch": ""
		}, lastUpdated.value.text)]) : null, metaInfo.contributors.value && metaInfo.contributors.value !== "content" && contributors.value.length > 0 ? h("div", { class: "contributors" }, [h("span", { class: "vp-meta-label" }, `${metaLocale.value.contributors}: `), contributors.value.map(({ email, name }, index, items) => [h("span", {
			class: "vp-meta-info",
			title: `email: ${email}`
		}, name), index === items.length - 1 ? "" : ","])]) : null])]);
	}
});

//#endregion
//#region src/client/components/base/PageContent.ts
var PageContent_default = defineComponent({
	name: "PageContent",
	slots: Object,
	setup(_props, { slots }) {
		const { frontmatter } = useData$1();
		const { isDarkMode } = useDarkMode();
		return () => h("main", {
			id: "main-content",
			class: "vp-page"
		}, h(hasGlobalComponent("LocalEncrypt") ? resolveComponent("LocalEncrypt") : RenderDefault, () => [
			slots.pageTop?.(),
			frontmatter.value.cover ? h("div", { class: "page-cover" }, h("img", {
				src: withBase(frontmatter.value.cover),
				alt: "",
				"no-view": ""
			})) : null,
			h(BreadCrumb_default),
			h(PageTitle_default),
			h(TOC_default, null, slots),
			slots.content?.() ?? h(MarkdownContent_default, null, slots),
			h(PageMeta_default),
			h(PageNav_default),
			hasGlobalComponent("CommentService") ? h(resolveComponent("CommentService"), { darkmode: isDarkMode.value }) : null,
			slots.pageBottom?.()
		]));
	}
});

//#endregion
//#region src/client/components/home/FeatureSection.ts
const FeatureSection = (props, { slots }) => {
	const { bgImage, bgImageDark, bgImageStyle, color, description, image, imageDark, header, features } = props;
	return h("div", { class: "vp-feature-wrapper" }, [
		bgImage ? h("div", {
			class: ["vp-feature-bg", { light: bgImageDark }],
			style: [{ "background-image": `url(${bgImage})` }, bgImageStyle]
		}) : null,
		bgImageDark ? h("div", {
			class: "vp-feature-bg dark",
			style: [{ "background-image": `url(${bgImageDark})` }, bgImageStyle]
		}) : null,
		h("div", {
			class: "vp-feature",
			style: color ? { color } : {}
		}, [
			slots.image?.(props) ?? [image ? h("img", {
				class: ["vp-feature-image", { light: imageDark }],
				src: withBase(image),
				alt: ""
			}) : null, imageDark ? h("img", {
				class: "vp-feature-image dark",
				src: withBase(imageDark),
				alt: ""
			}) : null],
			slots.info?.(props) ?? [header ? h("h2", { class: "vp-feature-header" }, header) : null, description ? h("div", {
				class: "vp-feature-description",
				innerHTML: description
			}) : null],
			features.length > 0 ? h("div", { class: "vp-features" }, features.map(({ icon, title, details, link }) => {
				const children = [h("h3", { class: "vp-feature-title" }, [h(resolveComponent("VPIcon"), { icon }), h("span", { innerHTML: title })]), h("div", {
					class: "vp-feature-details",
					innerHTML: details
				})];
				return link ? isLinkExternal(link) ? h("a", {
					class: "vp-feature-item link",
					href: link,
					"aria-label": title,
					target: "_blank"
				}, children) : h(RouteLink, {
					class: "vp-feature-item link",
					to: link,
					"aria-label": title
				}, () => children) : h("div", { class: "vp-feature-item" }, children);
			})) : null
		])
	]);
};
FeatureSection.displayName = "FeaturePanel";

//#endregion
//#region src/client/components/home/HeroInfo.ts
var HeroInfo_default = defineComponent({
	name: "HeroInfo",
	slots: Object,
	setup(_props, { slots }) {
		const { frontmatter, siteLocale } = useData$1();
		const info = computed(() => {
			const { heroText, tagline, heroStyle, heroFullScreen = false } = frontmatter.value;
			return {
				text: heroText ?? (siteLocale.value.title || "Hello"),
				tagline: tagline ?? siteLocale.value.description,
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
				image: isString(bgImage) ? withBase(bgImage) : null,
				imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
				style: bgImageStyle ?? null
			};
		});
		const actions = computed(() => frontmatter.value.actions ?? []);
		return () => h("header", {
			class: ["vp-hero-info-wrapper", { "hero-fullscreen": info.value.isFullScreen }],
			style: info.value.style
		}, [
			slots.heroBg?.(bg.value) ?? [bg.value.image ? h("div", {
				class: ["vp-hero-mask", { light: bg.value.imageDark }],
				style: [{ "background-image": `url(${bg.value.image})` }, bg.value.style]
			}) : null, bg.value.imageDark ? h("div", {
				class: "vp-hero-mask dark",
				style: [{ "background-image": `url(${bg.value.imageDark})` }, bg.value.style]
			}) : null],
			h("div", { class: "vp-hero-info" }, [slots.heroLogo?.(image.value) ?? h(DropTransition_default, {
				appear: true,
				group: true
			}, () => {
				const { image: imageLight, imageDark, style: imageStyle, alt } = image.value;
				return [imageLight ? h("img", {
					key: "light",
					class: ["vp-hero-image", { light: imageDark }],
					style: imageStyle,
					src: imageLight,
					alt
				}) : null, imageDark ? h("img", {
					key: "dark",
					class: "vp-hero-image dark",
					style: imageStyle,
					src: imageDark,
					alt
				}) : null];
			}), slots.heroInfo?.(info.value) ?? h("div", { class: "vp-hero-infos" }, [
				info.value.text ? h(DropTransition_default, {
					appear: true,
					delay: .04
				}, () => h("h1", {
					id: "main-title",
					class: "vp-hero-title"
				}, info.value.text)) : null,
				info.value.tagline ? h(DropTransition_default, {
					appear: true,
					delay: .08
				}, () => h("div", {
					id: "main-description",
					innerHTML: info.value.tagline
				})) : null,
				actions.value.length > 0 ? h(DropTransition_default, {
					appear: true,
					delay: .12
				}, () => h("p", { class: "vp-hero-actions" }, actions.value.map((action) => h(AutoLink$1, {
					class: [
						"vp-hero-action",
						action.type ?? "default",
						"no-external-link-icon"
					],
					config: action
				})))) : null
			])]),
			info.value.isFullScreen ? h(HeroSlideDownButton, { onClick: () => {
				window.scrollTo({
					top: window.innerHeight - (document.querySelector("[vp-navbar]")?.clientHeight ?? 0),
					behavior: "smooth"
				});
			} }) : null
		]);
	}
});

//#endregion
//#region src/client/components/home/HighlightSection.ts
const HighlightSection = (props, { slots }) => {
	const { bgImage, bgImageDark, bgImageStyle, color, description, image, imageDark, header, highlights = [], type = "un-order" } = props;
	return h("div", {
		class: "vp-highlight-wrapper",
		style: color ? { color } : {}
	}, [
		bgImage ? h("div", {
			class: ["vp-highlight-bg", { light: bgImageDark }],
			style: [{ "background-image": `url(${bgImage})` }, bgImageStyle]
		}) : null,
		bgImageDark ? h("div", {
			class: "vp-highlight-bg dark",
			style: [{ "background-image": `url(${bgImageDark})` }, bgImageStyle]
		}) : null,
		h("div", { class: "vp-highlight" }, [slots.image?.(props) ?? [image ? h("img", {
			class: ["vp-highlight-image", { light: imageDark }],
			src: withBase(image),
			alt: ""
		}) : null, imageDark ? h("img", {
			class: "vp-highlight-image dark",
			src: withBase(imageDark),
			alt: ""
		}) : null], slots.info?.(props) ?? [h("div", { class: "vp-highlight-info-wrapper" }, h("div", { class: "vp-highlight-info" }, [
			header ? h("h2", {
				class: "vp-highlight-header",
				innerHTML: header
			}) : null,
			description ? h("div", {
				class: "vp-highlight-description",
				innerHTML: description
			}) : null,
			slots.highlights?.(highlights) ?? h(type === "order" ? "ol" : type === "no-order" ? "dl" : "ul", { class: "vp-highlights" }, highlights.map(({ icon, title, details, link }) => {
				const children = [h(type === "no-order" ? "dt" : "h3", { class: "vp-highlight-title" }, [icon ? h(resolveComponent("VPIcon"), {
					class: "vp-highlight-icon",
					icon
				}) : null, h("span", { innerHTML: title })]), details ? h(type === "no-order" ? "dd" : "div", {
					class: "vp-highlight-details",
					innerHTML: details
				}) : null];
				return h(type === "no-order" ? "div" : "li", { class: ["vp-highlight-item-wrapper", { link }] }, link ? isLinkExternal(link) ? h("a", {
					class: "vp-highlight-item link",
					href: link,
					"aria-label": title,
					target: "_blank"
				}, children) : h(RouteLink, {
					class: "vp-highlight-item link",
					to: link,
					"aria-label": title
				}, () => children) : h("div", { class: "vp-highlight-item" }, children));
			}))
		]))]])
	]);
};
HighlightSection.displayName = "HighlightSection";

//#endregion
//#region src/client/components/home/HomePage.ts
var HomePage_default = defineComponent({
	name: "HomePage",
	slots: Object,
	setup(_props, { slots }) {
		const frontmatter = useFrontmatter();
		return () => {
			const { features, highlights } = frontmatter.value;
			return h("main", {
				id: "main-content",
				class: "vp-page vp-project-home",
				"aria-labelledby": frontmatter.value.heroText === "" ? "" : "main-title"
			}, [
				slots.heroBefore?.(),
				h(HeroInfo_default, null, slots),
				slots.heroAfter?.(),
				isArray(highlights) ? highlights.map((highlight) => "features" in highlight ? h(FeatureSection, highlight) : h(HighlightSection, highlight)) : isArray(features) ? h(DropTransition_default, {
					appear: true,
					delay: .24
				}, () => h(FeatureSection, { features })) : null,
				slots.content?.() ?? h(DropTransition_default, {
					appear: true,
					delay: .32
				}, () => h(MarkdownContent_default, null, slots))
			]);
		};
	}
});

//#endregion
//#region src/client/components/home/PortfolioHero.ts
var PortfolioHero_default = defineComponent({
	name: "PortfolioHero",
	slots: Object,
	setup(_props, { slots }) {
		const authorInfo = useAuthorInfo();
		const frontmatter = useFrontmatter();
		const index = ref(0);
		const currentTitle = computed(() => frontmatter.value.titles?.[index.value] ?? "");
		const title = ref("");
		const avatar = computed(() => {
			const { name, avatar, avatarDark, avatarAlt, avatarStyle } = frontmatter.value;
			return {
				name: name ?? authorInfo.value.name,
				avatar: avatar ? withBase(avatar) : null,
				avatarDark: avatarDark ? withBase(avatarDark) : null,
				alt: (avatarAlt || name) ?? "",
				style: avatarStyle ?? null
			};
		});
		const bg = computed(() => {
			const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;
			return {
				image: isString(bgImage) ? withBase(bgImage) : null,
				imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
				style: bgImageStyle ?? null
			};
		});
		const info = computed(() => {
			const { welcome, name, titles = [], medias } = frontmatter.value;
			return {
				name: name ?? authorInfo.value.name,
				welcome: welcome ?? "👋 Hi There, I'm",
				title: title.value,
				titles,
				medias: medias ?? null
			};
		});
		const startTyping = () => {
			title.value = "";
			let charIndex = 0;
			let shouldStop = false;
			const typeNext = async () => {
				if (!shouldStop) {
					title.value += currentTitle.value[charIndex];
					charIndex += 1;
					await nextTick();
					if (charIndex < currentTitle.value.length) setTimeout(() => {
						typeNext();
					}, 150);
					else {
						const { length } = info.value.titles;
						setTimeout(() => {
							index.value = length <= 1 || index.value === info.value.titles.length - 1 ? 0 : index.value + 1;
						}, 1e3);
					}
				}
			};
			typeNext();
			return () => {
				shouldStop = true;
			};
		};
		let stop;
		onMounted(() => {
			watchImmediate(currentTitle, () => {
				stop?.();
				stop = startTyping();
			});
		});
		return () => h("section", {
			id: "portfolio",
			class: ["vp-portfolio", { bg: bg.value.image }]
		}, [
			slots.portfolioBg?.(bg.value) ?? [bg.value.image ? h("div", {
				class: ["vp-portfolio-mask", { light: bg.value.imageDark }],
				style: [{ background: `url(${bg.value.image}) center/cover no-repeat` }, bg.value.style]
			}) : null, bg.value.imageDark ? h("div", {
				class: "vp-portfolio-mask dark",
				style: [{ background: `url(${bg.value.imageDark}) center/cover no-repeat` }, bg.value.style]
			}) : null],
			slots.portfolioAvatar?.(avatar.value) ?? h("div", { class: "vp-portfolio-avatar" }, [h(DropTransition_default, { delay: .04 }, () => {
				const { avatar: avatarLight, avatarDark, name, alt, style } = avatar.value;
				return [avatarLight ? h("img", {
					key: "light",
					class: { light: avatarDark },
					src: avatarLight,
					title: name,
					alt,
					style
				}) : null, avatarDark ? h("img", {
					key: "dark",
					class: "dark",
					src: avatarDark,
					title,
					alt,
					style
				}) : null];
			})]),
			h("div", { class: "vp-portfolio-container" }, slots.portfolioInfo?.(info.value) ?? h("div", { class: "vp-portfolio-info" }, [
				h(DropTransition_default, {
					appear: true,
					delay: .08
				}, () => h("h6", { class: "vp-portfolio-welcome" }, info.value.welcome)),
				h(DropTransition_default, {
					appear: true,
					delay: .12
				}, () => h("h1", {
					class: "vp-portfolio-name",
					id: "main-title"
				}, info.value.name)),
				h(DropTransition_default, {
					appear: true,
					delay: .16
				}, () => h("h2", { class: "vp-portfolio-title" }, title.value)),
				h(DropTransition_default, {
					appear: true,
					delay: .2
				}, () => info.value.medias ? h("div", { class: "vp-portfolio-medias" }, info.value.medias.map(({ name, url, icon }) => h("a", {
					class: "vp-portfolio-media",
					href: url,
					rel: "noopener noreferrer",
					target: "_blank",
					title: name
				}, h(resolveComponent("VPIcon"), {
					icon,
					sizing: "both"
				})))) : hasGlobalComponent("SocialMedias") ? h(resolveComponent("SocialMedias")) : null)
			]))
		]);
	}
});

//#endregion
//#region src/client/components/home/PortfolioHome.ts
var PortfolioHome_default = defineComponent({
	name: "PortfolioHome",
	slots: Object,
	setup(_props, { slots }) {
		const frontmatter = useFrontmatter();
		return () => {
			const content = frontmatter.value.content ?? "portfolio";
			return h("main", {
				id: "main-content",
				class: "vp-page vp-portfolio-home",
				"aria-labelledby": "main-title"
			}, [h(PortfolioHero_default, null, slots), content === "none" ? null : slots.content?.() ?? h("div", h(DropTransition_default, {
				appear: true,
				delay: .24
			}, () => h(MarkdownContent_default, { class: { "vp-portfolio-content": content === "portfolio" } }, slots)))]);
		};
	}
});

//#endregion
//#region src/client/layouts/base/Layout.ts
var Layout_default = defineComponent({
	name: "Layout",
	slots: Object,
	setup(_props, { slots }) {
		const { frontmatter, page } = useData$1();
		return () => [h(SkipLink_default), h(MainLayout_default, null, {
			...slots,
			default: slots.default ?? (() => frontmatter.value.portfolio ? h(PortfolioHome_default, null, slots) : frontmatter.value.home ? h(HomePage_default, null, slots) : h(MainFadeInUpTransition_default, () => h(PageContent_default, { key: page.value.path }, slots))),
			navScreenBottom: slots.navScreenBottom ?? (hasGlobalComponent("BloggerInfo") ? () => h(resolveComponent("BloggerInfo")) : null)
		})];
	}
});

//#endregion
//#region src/client/layouts/base/NotFound.ts
var NotFound_default = defineComponent({
	name: "NotFound",
	slots: Object,
	setup(_props, { slots }) {
		const { routeLocale, theme, themeLocale } = useData$1();
		const router = useRouter();
		const isMounted = ref(false);
		const expectedRouterLocale = computed(() => theme.value.locales[isMounted.value ? routeLocale.value : "/"].routerLocales);
		const getMsg = () => {
			if (!isMounted.value) return expectedRouterLocale.value.notFoundMsg[0];
			const messages = expectedRouterLocale.value.notFoundMsg;
			return messages[Math.floor(Math.random() * messages.length)];
		};
		onMounted(() => {
			isMounted.value = true;
		});
		return () => [h(SkipLink_default), h(MainLayout_default, { noSidebar: true }, {
			...slots,
			default: () => h("main", {
				id: "main-content",
				class: "vp-page not-found"
			}, slots.default?.() ?? [h("div", { class: "not-found-hint" }, [
				h("p", { class: "error-code" }, "404"),
				h("h1", { class: "error-title" }, expectedRouterLocale.value.notFoundTitle),
				h("p", { class: "error-hint" }, getMsg())
			]), h("div", { class: "actions" }, [h("button", {
				type: "button",
				class: "action-button",
				onClick: () => {
					globalThis.history.go(-1);
				}
			}, expectedRouterLocale.value.back), h("button", {
				type: "button",
				class: "action-button",
				onClick: () => {
					router.push(themeLocale.value.home ?? routeLocale.value);
				}
			}, expectedRouterLocale.value.home)])])
		})];
	}
});

//#endregion
export { useRelatedLinks as a, PrintButton_default as i, Layout_default as n, PageContent_default as r, NotFound_default as t };
//# sourceMappingURL=NotFound-DBJ3KMaR.js.map