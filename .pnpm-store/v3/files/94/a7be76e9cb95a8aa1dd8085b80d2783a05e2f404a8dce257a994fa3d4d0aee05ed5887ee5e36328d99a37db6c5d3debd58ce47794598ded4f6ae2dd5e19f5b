import { i as getTag, n as getCategory, r as getStringArray, t as getAuthor } from "../infoGetter-CiYuSeA7.js";
import { createRequire } from "node:module";
import { TemplateRendererOutlet, colors, fs, getDirname, logger, path, sanitizeFileName } from "vuepress/utils";
import { Logger, addViteConfig, addViteOptimizeDepsExclude, addViteOptimizeDepsInclude, addViteSsrNoExternal, chainWebpack, dateSorter, deepAssign, endsWith, ensureEndingSlash, entries, fromEntries, getBundlerName, getDate, getFullLocaleConfig, getModulePath, isArray, isFunction, isLinkHttp, isPlainObject, isString, keys, removeEndingSlash, removeLeadingSlash, startsWith, values } from "@vuepress/helper";
import { createConverter } from "vuepress-shared";
import { watch } from "chokidar";
import { hashSync } from "bcrypt-ts/node";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";
import { iconPlugin } from "@vuepress/plugin-icon";
import { linksCheckPlugin } from "@vuepress/plugin-links-check";
import { markdownChartPlugin } from "@vuepress/plugin-markdown-chart";
import { markdownExtPlugin } from "@vuepress/plugin-markdown-ext";
import { markdownHintPlugin } from "@vuepress/plugin-markdown-hint";
import { markdownIncludePlugin } from "@vuepress/plugin-markdown-include";
import { markdownMathPlugin } from "@vuepress/plugin-markdown-math";
import { markdownPreviewPlugin } from "@vuepress/plugin-markdown-preview";
import { markdownTabPlugin } from "@vuepress/plugin-markdown-tab";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { photoSwipePlugin } from "@vuepress/plugin-photo-swipe";
import { themeDataPlugin } from "@vuepress/plugin-theme-data";
import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";
import { blogPlugin } from "@vuepress/plugin-blog";
import { catalogPlugin } from "@vuepress/plugin-catalog";
import { commentPlugin } from "@vuepress/plugin-comment";
import { componentsPlugin } from "vuepress-plugin-components";
import { copyrightPlugin } from "@vuepress/plugin-copyright";
import { markdownImagePlugin } from "@vuepress/plugin-markdown-image";
import { markdownStylizePlugin } from "@vuepress/plugin-markdown-stylize";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { noticePlugin } from "@vuepress/plugin-notice";
import { redirectPlugin } from "@vuepress/plugin-redirect";
import { rtlPlugin } from "@vuepress/plugin-rtl";
import { seoPlugin } from "@vuepress/plugin-seo";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { useReadingTimePlugin } from "@vuepress/plugin-reading-time";
import { useSassPalettePlugin } from "@vuepress/plugin-sass-palette";
import { gitPlugin } from "@vuepress/plugin-git";

//#region src/node/compact/checkLegacyStyle.ts
/**
* @deprecated You should use scss style files in v2 and avoid using it
*
* @param app - VuePress app instance
*/
const checkLegacyStyle = (app) => {
	if (fs.existsSync(app.dir.source(".vuepress/styles/index.styl")) && !fs.existsSync(app.dir.source(".vuepress/styles/index.scss"))) logger.error(`V2 style switched to scss instead of stylus, so you should remove ${colors.magenta("index.styl")} and create ${colors.magenta("index.scss")} under ${colors.cyan(".vuepress/styles.")}`);
	if (fs.existsSync(app.dir.source(".vuepress/styles/palette.styl")) && !fs.existsSync(app.dir.source(".vuepress/styles/palette.scss")) && !fs.existsSync(app.dir.source(".vuepress/styles/config.scss"))) logger.error(`V2 style switched to scss instead of stylus, so you should remove ${colors.magenta("palette.styl")} and create ${colors.magenta("config.scss")} / ${colors.magenta("palette.scss")} under ${colors.cyan(".vuepress/styles.")}.`);
};

//#endregion
//#region package.json
var version = "2.0.0-rc.106";

//#endregion
//#region src/node/utils.ts
const __dirname = getDirname(import.meta.url);
const logger$1 = new Logger("vuepress-theme-hope");
const BUNDLE_FOLDER = removeEndingSlash(path.resolve(__dirname, "../bundle"));
const CLIENT_FOLDER = removeEndingSlash(path.resolve(__dirname, "../client"));
const TEMPLATE_FOLDER = removeEndingSlash(path.resolve(__dirname, "../../templates"));
const VERSION = version;

//#endregion
//#region src/node/compact/convertFrontmatter.ts
const DEPRECATED_FRONTMATTER_OPTIONS = [
	["authors", "author"],
	["time", "date"],
	["visitor", "pageview"],
	["copyrightText", "copyright"],
	["anchorDisplay", "toc"],
	["updateTime", "lastUpdated"],
	["contributor", "contributors"],
	["editLinks", "editLink"]
];
const DEPRECATED_HOME_FRONTMATTER_OPTIONS = [["darkHeroImage", "heroImageDark"], ["action", "actions"]];
const DROPPED_FRONTMATTER_OPTIONS = [
	["metaTitle", "Please use custom resolver to set metaTitle."],
	["mediaLink", "Social media links are no longer displayed in footer."],
	["password", "Simple password protection is no longer supported."],
	["search", "Search plugin no longer support this option."]
];
/**
* @deprecated You should use V2 standard frontmatter and avoid using it
*
* @param frontmatter - Page frontmatter
* @param filePathRelative - Page file path relative to source directory
* @returns Converted frontmatter
*/
const convertFrontmatter = (frontmatter, filePathRelative) => {
	const { deprecatedLogger, droppedLogger } = createConverter("frontmatter");
	DEPRECATED_FRONTMATTER_OPTIONS.forEach(([oldOption, newOption]) => {
		deprecatedLogger({
			options: frontmatter,
			old: oldOption,
			new: newOption,
			scope: filePathRelative ? `${filePathRelative} frontmatter` : ""
		});
	});
	DROPPED_FRONTMATTER_OPTIONS.forEach(([old, msg]) => {
		droppedLogger({
			options: frontmatter,
			old,
			scope: `${filePathRelative ? `${filePathRelative} ` : ""}${msg}`
		});
	});
	if ("meta" in frontmatter) {
		logger$1.warn(`${colors.magenta("meta")} in frontmatter is deprecated in V2, please use ${colors.magenta("head")} instead.${filePathRelative ? `Found in ${filePathRelative}` : ""}`);
		frontmatter.head = [...frontmatter.head ?? [], ...frontmatter.meta.map((item) => ["meta", item])];
		delete frontmatter.meta;
	}
	if ("canonicalUrl" in frontmatter && isString(frontmatter.canonicalUrl)) {
		logger$1.warn(`${colors.magenta("canonicalUrl")} in frontmatter is deprecated, please use ${colors.magenta("head")} instead.${filePathRelative ? `Found in ${filePathRelative}` : ""}`);
		frontmatter.head = [...frontmatter.head ?? [], ["link", {
			rel: "canonical",
			href: frontmatter.canonicalUrl
		}]];
		delete frontmatter.canonicalUrl;
	}
	if (frontmatter.home === true) {
		if (frontmatter.layout === "BlogHome") {
			logger$1.warn(`${colors.magenta("layout: BlogHome")} in frontmatter is deprecated, please use ${colors.magenta("layout: Blog")} instead.${filePathRelative ? `Found in ${filePathRelative}` : ""}`);
			frontmatter.layout = "Blog";
		}
		if (!("layout" in frontmatter)) DEPRECATED_HOME_FRONTMATTER_OPTIONS.forEach(([oldOption, newOption]) => {
			deprecatedLogger({
				options: frontmatter,
				old: oldOption,
				new: newOption,
				scope: filePathRelative
			});
		});
	}
	if (frontmatter.layout === "SlidePage") {
		logger$1.warn(`${colors.magenta("layout: SlidePage")} in frontmatter is deprecated, please use ${colors.magenta("layout: Slides")} instead.${filePathRelative ? `Found in ${filePathRelative}` : ""}`);
		frontmatter.layout = "Slides";
	}
	if (typeof frontmatter.sidebarDepth === "number") {
		logger$1.warn(`${colors.magenta("sidebarDepth")} in frontmatter is deprecated, please use ${colors.magenta("toc.levels")} instead.${filePathRelative ? `Found in ${filePathRelative}` : ""}`);
		if (frontmatter.toc !== false) frontmatter.toc = { levels: [2, frontmatter.sidebarDepth + 2] };
	}
	if (typeof frontmatter.headerDepth === "number") {
		logger$1.warn(`${colors.magenta("headerDepth")} in frontmatter is deprecated, please use ${colors.magenta("toc.levels")} instead.${filePathRelative ? `Found in ${filePathRelative}` : ""}`);
		if (frontmatter.toc !== false) frontmatter.toc = { levels: [2, frontmatter.headerDepth + 2] };
	}
	return frontmatter;
};

//#endregion
//#region src/node/compact/convertNavbarOptions.ts
const { deprecatedLogger: deprecatedLogger$1 } = createConverter("theme navbar");
const handleNavbarOptions = (config, localePath) => config.map((item) => {
	if (isString(item)) return item;
	if (isPlainObject(item)) {
		deprecatedLogger$1({
			options: item,
			old: "items",
			new: "children",
			scope: localePath
		});
		if ("children" in item && isArray(item.children)) handleNavbarOptions(item.children, localePath);
		return item;
	}
	return null;
}).filter((item) => item != null);
/**
* @deprecated You should use V2 standard navbar config and avoid using it
*
* @param config - Legacy navbar config
* @param localePath - Current locale path, used for logger
* @returns Converted navbar config or false if the config is invalid
*/
const convertNavbarOptions = (config, localePath = "") => {
	if (config === false) return false;
	if (isArray(config)) return handleNavbarOptions(config, localePath);
	logger$1.error(`${colors.magenta("navbar")} config should be an array`);
	return false;
};
/**
* @deprecated You should use V2 standard navbar config and avoid using it
*
* @param options - Legacy navbar layout options
*/
const convertNavbarLayoutOptions = (options) => {
	if (isPlainObject(options.navbarLayout)) {
		if ("left" in options.navbarLayout) {
			logger$1.warn(`To have better meaning under RTL layout, ${colors.magenta("navbarLayout.left")}" option is deprecated, please use ${colors.magenta("navbarLayout.start")} instead`);
			options.navbarLayout.start = options.navbarLayout.left;
		}
		if ("right" in options.navbarLayout) {
			logger$1.warn(`To have better meaning under RTL layout, ${colors.magenta("navbarLayout.right")}" option is deprecated, please use ${colors.magenta("navbarLayout.end")} instead`);
			options.navbarLayout.end = options.navbarLayout.right;
		}
	}
};

//#endregion
//#region src/node/compact/convertSidebarOptions.ts
const { deprecatedLogger, droppedLogger } = createConverter("theme sidebar");
const handleArraySidebarOptions = (config, localePath) => config.map((item) => {
	if (isString(item)) return item;
	if (isPlainObject(item)) {
		[
			["title", "text"],
			["path", "link"],
			["collapsable", "collapsible"]
		].forEach(([oldOption, newOption]) => {
			deprecatedLogger({
				options: item,
				old: oldOption,
				new: newOption,
				scope: localePath
			});
		});
		droppedLogger({
			options: item,
			old: "sidebarDepth",
			scope: localePath
		});
		if ("children" in item && isArray(item.children)) handleArraySidebarOptions(item.children, localePath);
		return item;
	}
	return null;
}).filter((item) => item != null);
/**
* @deprecated You should use V2 standard sidebar config and avoid using it
*
* @param config - Original sidebar config
* @param localePath - Current locale path, used for logger
* @returns Converted sidebar config
*/
const convertSidebarOptions = (config, localePath = "") => {
	if (config === false || config === "structure") return config;
	if (isArray(config)) return handleArraySidebarOptions(config, localePath);
	if (isPlainObject(config)) return fromEntries(entries(config).map(([key, value]) => {
		if (isArray(value)) return [key, handleArraySidebarOptions(value, `${localePath} > ${key}`)];
		if (value === "structure" || value === false) return [key, value];
		logger$1.error("\"sidebar\" value should be an array, \"structure\" or false when setting as an object");
		return [key, false];
	}));
	logger$1.error(`${colors.magenta("sidebar")} config should be: an array, an object, "structure" or false`);
	return false;
};

//#endregion
//#region src/node/compact/convertThemeOptions.ts
const DEPRECATED_THEME_OPTIONS = [
	["hideSiteNameonMobile", "hideSiteNameOnMobile"],
	["fullScreen", "fullscreen"],
	["wideBreakPoint", "pcBreakPoint"]
];
/**
* @deprecated You should use V2 standard options and avoid using it
*
* @param options - Theme options
* @param plugins - Theme plugins options
* @param localePath - Locale path
*/
const convertBlogOptions = (options, plugins, localePath) => {
	if (isPlainObject(options.blog)) {
		const blogOptions = options.blog;
		if ("links" in blogOptions) {
			logger$1.warn(`${colors.magenta("blog.links")} options is deprecated, please use ${colors.magenta("blog.medias")} instead${localePath ? ` , found in locale path ${localePath}` : ""}.`);
			blogOptions.medias = blogOptions.links;
			delete blogOptions.links;
		}
		if ("perPage" in blogOptions) {
			logger$1.warn(`${colors.magenta("blog.perPage")} options is deprecated, please use ${colors.magenta("blog.articlePerPage")} instead${localePath ? ` , found in locale path ${localePath}` : ""}.`);
			blogOptions.articlePerPage = blogOptions.perPage;
			delete blogOptions.perPage;
		}
		if ("autoExcerpt" in blogOptions) {
			logger$1.error(`${colors.magenta("blog.autoExcerpt")} options is no longer supported, please use ${colors.magenta("plugins.blog.excerptLength")} instead${localePath ? ` , found in locale path ${localePath}` : ""}.`);
			delete blogOptions.autoExcerpt;
		}
		if (!plugins.blog) logger$1.warn(`Blog feature is tree-shakable in v2, you should set ${colors.magenta("plugins.blog: true")} in theme options to enable it.`);
	}
};
/**
* @deprecated You should use V2 standard options and avoid using it
*
* @param themeLocaleOptions - Theme locale options
* @param localePath - Locale path
*/
const convertFooterOptions = (themeLocaleOptions, localePath) => {
	if (isPlainObject(themeLocaleOptions.footer)) {
		const { footer } = themeLocaleOptions;
		if ("copyright" in footer) {
			logger$1.warn(`${colors.magenta("footer.copyright")} options is deprecated, please use ${colors.magenta("copyright")} instead${localePath ? ` , found in locale path ${localePath}` : ""}.`);
			themeLocaleOptions.copyright = footer.copyright;
		}
		if ("display" in footer) {
			logger$1.warn(`${colors.magenta("footer.display")} options is deprecated, please use ${colors.magenta("displayFooter")} instead${localePath ? ` , found in locale path ${localePath}` : ""}.`);
			themeLocaleOptions.displayFooter = footer.display;
		}
		if ("content" in footer) {
			logger$1.warn(`${colors.magenta("footer.content")} options is deprecated, please use ${colors.magenta("footer")} instead${localePath ? ` , found in locale path ${localePath}` : ""}.`);
			themeLocaleOptions.footer = footer.content;
		} else delete themeLocaleOptions.footer;
	}
};
/**
* @deprecated You should use V2 standard options and avoid using it
*
* @param themeOptions - Theme options
*/
const covertPluginOptions = (themeOptions) => {
	const { deprecatedLogger } = createConverter("theme plugin options");
	const markdownOptions = themeOptions.markdown ??= {};
	const pluginOptions = themeOptions.plugins;
	if (isArray(pluginOptions.components)) {
		logger$1.warn(`${colors.magenta("plugins.components")} no longer accepts array, please set it to ${colors.magenta("plugin.components.components")} instead.`);
		pluginOptions.components = { components: pluginOptions.components };
	}
	if (pluginOptions.linksCheck) deprecatedLogger({
		options: themeOptions,
		old: "plugins.linksCheck",
		new: "markdown.linksCheck"
	});
	if (isPlainObject(pluginOptions.mdEnhance)) {
		const { mdEnhance: mdEnhanceOptions } = pluginOptions;
		if ("alert" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.alert",
			new: "markdown.alert"
		});
		if ("hint" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.hint",
			new: "markdown.hint"
		});
		if ("figure" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.figure",
			new: "markdown.figure"
		});
		if ("imgLazyload" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.imgLazyload",
			new: "markdown.imgLazyload"
		});
		if ("imgSize" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.imgSize",
			new: "markdown.imgSize"
		});
		if ("imgSize" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.obsidianImgSize",
			new: "markdown.obsidianImgSize"
		});
		if ("imgMark" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.imgMark",
			new: "markdown.imgMark"
		});
		if ("katex" in mdEnhanceOptions) {
			logger$1.warn(`${colors.magenta("plugins.mdEnhance.katex")} is deprecated, you should use ${colors.magenta("markdown.math")} instead.`);
			pluginOptions.markdownMath = {
				type: "katex",
				...isPlainObject(mdEnhanceOptions.katex) ? mdEnhanceOptions.katex : {}
			};
		}
		if ("mathjax" in mdEnhanceOptions) {
			logger$1.warn(`${colors.magenta("plugins.mdEnhance.mathjax")} is deprecated, you should use ${colors.magenta("markdown.math")} instead.`);
			pluginOptions.markdownMath = {
				type: "mathjax",
				...isPlainObject(mdEnhanceOptions.mathjax) ? mdEnhanceOptions.mathjax : {}
			};
		}
		if ("codetabs" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.codetabs",
			new: "markdown.codeTabs"
		});
		if ("tabs" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.tabs",
			new: "markdown.tabs"
		});
		if ("gfm" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.gfm",
			new: "markdown.gfm"
		});
		if ("footnote" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.footnote",
			new: "markdown.footnote"
		});
		if ("tasklist" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.tasklist",
			new: "markdown.tasklist"
		});
		if ("breaks" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.breaks",
			new: "markdown.breaks"
		});
		if ("linkify" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.linkify",
			new: "markdown.linkify"
		});
		if ("component" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.component",
			new: "markdown.component"
		});
		if ("vPre" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.vPre",
			new: "markdown.vPre"
		});
		if ("include" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.include",
			new: "markdown.include"
		});
		if ("align" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.align",
			new: "markdown.align"
		});
		if ("attrs" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.attrs",
			new: "markdown.attrs"
		});
		if ("mark" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.mark",
			new: "markdown.mark"
		});
		if ("spoiler" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.spoiler",
			new: "markdown.spoiler"
		});
		if ("sup" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.sup",
			new: "markdown.sup"
		});
		if ("sub" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.sub",
			new: "markdown.sub"
		});
		if ("stylize" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.stylize",
			new: "markdown.stylize"
		});
		if ("revealJs" in mdEnhanceOptions) {
			logger$1.warn(`${colors.magenta("plugins.mdEnhance.revealJs")} is deprecated, you should install ${colors.cyan("@vuepress/plugin-revealjs")} and use ${colors.magenta("markdown.revealjs")} instead.`);
			markdownOptions.revealjs = true;
		}
		if ("chart" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.chart",
			new: "markdown.chartjs"
		});
		if ("echarts" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.echarts",
			new: "markdown.echarts"
		});
		if ("flowchart" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.flowchart",
			new: "markdown.flowchart"
		});
		if ("mermaid" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.mermaid",
			new: "markdown.mermaid"
		});
		if ("markmap" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.markmap",
			new: "markdown.markmap"
		});
		if ("plantuml" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.plantuml",
			new: "markdown.plantuml"
		});
		if ("demo" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.demo",
			new: "markdown.demo"
		});
		if ("vuePlayground" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.vuePlayground",
			new: "markdown.vuePlayground"
		});
		if ("kotlinPlayground" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.kotlinPlayground",
			new: "markdown.kotlinPlayground"
		});
		if ("sandpack" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.sandpack",
			new: "markdown.sandpack"
		});
		if ("playground" in mdEnhanceOptions) deprecatedLogger({
			options: themeOptions,
			old: "plugins.mdEnhance.playground",
			new: "markdown.playground"
		});
		delete pluginOptions.mdEnhance;
	}
	if ("markdownHint" in pluginOptions) {
		logger$1.warn(`${colors.magenta("plugins.markdownHint")} is deprecated, you should use ${colors.magenta("markdown.alert")} and ${colors.magenta("markdown.hint")} instead.`);
		if (isPlainObject(pluginOptions.markdownHint)) {
			const markdownHint = pluginOptions.markdownHint;
			if ("alert" in markdownHint) deprecatedLogger({
				options: themeOptions,
				old: "plugins.markdownHint.alert",
				new: "markdown.alert"
			});
			if ("hint" in markdownHint) deprecatedLogger({
				options: themeOptions,
				old: "plugins.markdownHint.hint",
				new: "markdown.hint"
			});
		} else if (pluginOptions.markdownHint === false) markdownOptions.hint = false;
		delete pluginOptions.markdownHint;
	}
	if (pluginOptions.markdownImg) {
		logger$1.warn(`${colors.magenta("plugins.markdownImg")} is deprecated, you should use ${colors.magenta("markdown.figure")} ${colors.magenta("markdown.imgLazyload")} ${colors.magenta("markdown.imgMark")} ${colors.magenta("markdown.imgSize")} and ${colors.magenta("markdown.obsidianImgSize")} instead.`);
		if (isPlainObject(pluginOptions.markdownImg)) {
			deprecatedLogger({
				options: themeOptions,
				old: "plugins.markdownImg.figure",
				new: "markdown.figure"
			});
			deprecatedLogger({
				options: themeOptions,
				old: "plugins.markdownImg.lazyload",
				new: "markdown.imgLazyload"
			});
			deprecatedLogger({
				options: themeOptions,
				old: "plugins.markdownImg.mark",
				new: "markdown.imgMark"
			});
			deprecatedLogger({
				options: themeOptions,
				old: "plugins.markdownImg.size",
				new: "markdown.imgSize"
			});
			deprecatedLogger({
				options: themeOptions,
				old: "plugins.markdownImg.obsidian",
				new: "markdown.obsidianImgSize"
			});
		} else if (pluginOptions.markdownImg === true) {
			markdownOptions.figure = true;
			markdownOptions.imgLazyload = true;
		}
		delete pluginOptions.markdownImg;
	}
	if (pluginOptions.markdownMath) {
		logger$1.warn(`${colors.magenta("plugins.markdownMath")} is deprecated, you should use ${colors.magenta("markdown.math")} instead.`);
		deprecatedLogger({
			options: themeOptions,
			old: "plugins.markdownMath",
			new: "markdown.math"
		});
		delete pluginOptions.markdownMath;
	}
	if (pluginOptions.markdownTab) {
		logger$1.warn(`${colors.magenta("plugins.markdownTab")} is deprecated, you should use ${colors.magenta("markdown.tabs")} and ${colors.magenta("markdown.codeTabs")} instead.`);
		if (isPlainObject(pluginOptions.markdownTab)) {
			deprecatedLogger({
				options: themeOptions,
				old: "plugins.markdownTab.tabs",
				new: "markdown.tabs"
			});
			deprecatedLogger({
				options: themeOptions,
				old: "plugins.markdownTab.code",
				new: "markdown.codeTabs"
			});
		} else if (pluginOptions.markdownTab === true) {
			markdownOptions.codeTabs = true;
			markdownOptions.tabs = true;
		}
		delete pluginOptions.markdownTab;
	}
	if (pluginOptions.searchPro) {
		logger$1.warn(`${colors.magenta("plugins.searchPro")} is deprecated, you should replace ${colors.cyan("vuepress-plugin-search-pro")} with ${colors.cyan("@vuepress/plugin-slimsearch")} in ${colors.green("package.json")} and use ${colors.magenta("plugins.slimsearch")} instead.`);
		pluginOptions.slimsearch = pluginOptions.searchPro;
		delete pluginOptions.searchPro;
	}
	if (pluginOptions.prismjs) {
		logger$1.warn(`${colors.magenta("plugins.prismjs")} is deprecated, you should use ${colors.magenta("markdown.highlighter")} with ${colors.cyan("{ type: \"prismjs\", ...other options }")} instead.`);
		markdownOptions.highlighter = {
			type: "prismjs",
			...isPlainObject(pluginOptions.prismjs) ? pluginOptions.prismjs : {}
		};
		delete pluginOptions.prismjs;
	}
	if (pluginOptions.shiki) {
		logger$1.warn(`${colors.magenta("plugins.shiki")} is deprecated, you should use ${colors.magenta("markdown.highlighter")} with ${colors.cyan("{ type: \"shiki\", ...other options }")} instead.`);
		markdownOptions.highlighter = {
			type: "shiki",
			...isPlainObject(pluginOptions.shiki) ? pluginOptions.shiki : {}
		};
		delete pluginOptions.shiki;
	}
	if (pluginOptions.revealjs) deprecatedLogger({
		options: themeOptions,
		old: "plugins.revealjs",
		new: "markdown.revealjs"
	});
};
/**
* @deprecated You should use V2 standard options and avoid using it
*
* @param themeOptions - Theme options
* @returns Converted theme options
*/
const convertThemeOptions = (themeOptions) => {
	const { deprecatedLogger, droppedLogger } = createConverter("theme options");
	const plugins = themeOptions.plugins ??= {};
	covertPluginOptions(themeOptions);
	DEPRECATED_THEME_OPTIONS.forEach(([oldOption, newOption]) => {
		deprecatedLogger({
			options: themeOptions,
			old: oldOption,
			new: newOption
		});
	});
	if ("navbar" in themeOptions) themeOptions.navbar = convertNavbarOptions(themeOptions.navbar);
	if ("sidebar" in themeOptions) themeOptions.sidebar = convertSidebarOptions(themeOptions.sidebar);
	convertNavbarLayoutOptions(themeOptions);
	convertBlogOptions(themeOptions, plugins);
	convertFooterOptions(themeOptions);
	deprecatedLogger({
		options: themeOptions,
		old: "iconAssets",
		new: "plugins.icon.assets"
	});
	deprecatedLogger({
		options: themeOptions,
		old: "iconPrefix",
		new: "plugins.icon.prefix"
	});
	if (themeOptions.addThis) droppedLogger({
		options: themeOptions,
		old: "addThis"
	});
	if (isPlainObject(themeOptions.copyright) || themeOptions.copyright === true) logger$1.warn(`${colors.magenta("copyright")} is deprecated in V2, please use ${colors.magenta("plugins.copyright")} instead.`);
	if (isPlainObject(themeOptions.encrypt)) {
		const encrypt = themeOptions.encrypt;
		if ("global" in encrypt && typeof encrypt.global !== "boolean") {
			logger$1.warn(`${colors.magenta("encrypt.global")} is deprecated in V2, please use ${colors.magenta("encrypt.admin")} instead.`);
			encrypt.admin = encrypt.global;
		}
		if ("status" in encrypt) {
			logger$1.warn(`${colors.magenta("encrypt.status")} is deprecated, please use ${colors.magenta("encrypt.global")} instead.`);
			encrypt.global = encrypt.status === "global";
			delete encrypt.status;
		}
	}
	if ("locales" in themeOptions && isPlainObject(themeOptions.locales)) entries(themeOptions.locales).forEach(([localePath, localeConfig]) => {
		DEPRECATED_THEME_OPTIONS.forEach(([oldOption, newOption]) => {
			deprecatedLogger({
				options: localeConfig,
				old: oldOption,
				new: newOption,
				scope: "themeConfig.locales"
			});
		});
		if ("navbar" in localeConfig) localeConfig.navbar = convertNavbarOptions(localeConfig.navbar, localePath);
		if ("sidebar" in localeConfig) localeConfig.sidebar = convertSidebarOptions(localeConfig.sidebar, localePath);
		if (typeof localeConfig.headingDepth === "number") {
			logger$1.warn(`${colors.magenta("headingDepth")} is deprecated, please use ${colors.magenta("toc.levels")} instead.`);
			if (localeConfig.toc !== false) localeConfig.toc = { levels: [2, localeConfig.headingDepth + 2] };
		}
		if (typeof localeConfig.headerDepth === "number") {
			logger$1.warn(`${colors.magenta("headerDepth")} is deprecated, please use ${colors.magenta("toc.levels")} instead.`);
			if (localeConfig.toc !== false) localeConfig.toc = { levels: [2, localeConfig.headerDepth + 2] };
		}
		convertNavbarLayoutOptions(localeConfig);
		convertBlogOptions(localeConfig, plugins, localePath);
		convertFooterOptions(localeConfig);
	});
	return themeOptions;
};

//#endregion
//#region src/node/helpers.ts
const navbar = (options) => options;
const sidebar = (options) => options;
const arraySidebar = (sidebarConfig) => sidebarConfig;
const objectSidebar = (sidebarConfig) => sidebarConfig;
const backToTop = (backToTopConfig) => backToTopConfig;
const blog = (options) => options;
const catalog = (options) => options;
const comment = (options) => options;
const components = (options) => options;
const copyCode = (options) => options;
const copyright = (options) => options;
const feed = (options) => options;
const git = (options) => options;
const linksCheck = (options) => options;
const notice = (options) => options;
const photoSwipe = (options) => options;
const prismjs = (options) => options;
const pwa = (options) => options;
const readingTime = (options) => options;
const redirect = (options) => options;
const revealjs = (options) => options;
const seo = (options) => options;
const shiki = (options) => options;
const sitemap = (options) => options;
const watermark = (options) => options;

//#endregion
//#region src/node/check/checkFrontmatter.ts
const checkFrontmatter = (page) => {
	const frontmatter = page.frontmatter;
	const { filePathRelative } = page;
	["category", "tag"].forEach((key) => {
		if (key in frontmatter && !(isString(frontmatter[key]) || isArray(frontmatter[key]) && frontmatter[key].every((value) => isString(value)))) {
			logger$1.warn(`${colors.magenta(key)} property in Page FrontMatter should be ${colors.cyan("string")} or ${colors.cyan(" string[]")}${filePathRelative ? `, found in ${filePathRelative}` : ""}.`);
			delete frontmatter[key];
		}
	});
	if ("date" in frontmatter && !(frontmatter.date instanceof Date)) {
		logger$1.warn(`${colors.magenta("date")} in frontMatter should be ${colors.cyan("a valid Date")}${filePathRelative ? `, found in ${filePathRelative}` : ""}.`);
		delete frontmatter.date;
	}
	if ("sidebar" in frontmatter && typeof frontmatter.sidebar !== "boolean") {
		logger$1.warn(`${colors.magenta("sidebar")} in frontMatter should be ${colors.cyan("boolean")}${filePathRelative ? `, found in ${filePathRelative}` : ""}.`);
		delete frontmatter.sidebar;
	}
	[
		"title",
		"shortTitle",
		"containerClass"
	].forEach((key) => {
		if (key in frontmatter && !isString(frontmatter[key])) {
			logger$1.warn(`${colors.magenta(key)} in frontMatter should be ${colors.cyan("string")}${filePathRelative ? `, found in ${filePathRelative}` : ""}.`);
			delete frontmatter[key];
		}
	});
	[
		"home",
		"navbar",
		"index",
		"lastUpdated",
		"editLink",
		"breadcrumb",
		"breadcrumbIcon",
		"breadcrumbExclude",
		"pageview",
		"article"
	].forEach((key) => {
		if (key in frontmatter && typeof frontmatter[key] !== "boolean") {
			logger$1.warn(`${colors.magenta(key)} in frontMatter should be ${colors.cyan("boolean")}${filePathRelative ? `, found in ${filePathRelative}` : ""}.`);
			delete frontmatter[key];
		}
	});
	Object.keys(frontmatter).forEach((key) => {
		if (key.includes(".")) logger$1.warn(`${colors.magenta(key)} in frontMatter should not contain ${colors.cyan(".")}${filePathRelative ? `, found in ${filePathRelative}` : ""}.`);
	});
};

//#endregion
//#region src/node/check/checkMarkdownOptions.ts
const KNOWN_CORE_MARKDOWN_OPTIONS = [
	"anchor",
	"assets",
	"component",
	"emoji",
	"frontmatter",
	"headers",
	"title",
	"importCode",
	"links",
	"sfc",
	"slugify",
	"toc",
	"vPre"
];
const KNOWN_THEME_MARKDOWN_OPTIONS = [
	"linksCheck",
	"gfm",
	"breaks",
	"linkify",
	"footnote",
	"tasklist",
	"component",
	"vPre",
	"alert",
	"hint",
	"figure",
	"imgLazyload",
	"imgMark",
	"imgSize",
	"legacyImgSize",
	"obsidianImgSize",
	"include",
	"preview",
	"align",
	"attrs",
	"sup",
	"sub",
	"mark",
	"spoiler",
	"stylize",
	"tabs",
	"codeTabs",
	"math",
	"highlighter",
	"revealjs",
	"chartjs",
	"echarts",
	"flowchart",
	"markmap",
	"mermaid",
	"plantuml",
	"DANGEROUS_ALLOW_SCRIPT_EXECUTION",
	"DANGEROUS_SCRIPT_EXECUTION_ALLOWLIST",
	"demo",
	"playground",
	"kotlinPlayground",
	"vuePlayground",
	"sandpack"
];
/**
* Check vuepress markdown options for noob users
*
* @param vuepressMarkdownOptions - VuePress markdown options
* @param themeMarkdownOptions - Theme markdown options
*/
const checkVuePressMarkdownOptions = (vuepressMarkdownOptions, themeMarkdownOptions) => {
	keys(vuepressMarkdownOptions).forEach((key) => {
		if (!KNOWN_CORE_MARKDOWN_OPTIONS.includes(key)) if (KNOWN_THEME_MARKDOWN_OPTIONS.includes(key)) {
			logger$1.warn(`You are setting "${colors.magenta(`markdown.${key}`)}" option in ${colors.cyan("vuepress config file")}, but it's not supported by VuePress. You need to set the option in ${colors.cyan("theme options")}.`);
			themeMarkdownOptions[key] = vuepressMarkdownOptions[key];
		} else logger$1.warn(`You are setting "${colors.magenta(`markdown.${key}`)}" option in ${colors.cyan("vuepress config file")}, but it's not supported by VuePress.`);
	});
};
/**
* Check theme plugin options for noob users
*
* @param vuepressMarkdownOptions - VuePress markdown options
* @param themeMarkdownOptions - Theme markdown options
*/
const checkThemeMarkdownOptions = (vuepressMarkdownOptions, themeMarkdownOptions) => {
	keys(themeMarkdownOptions).forEach((key) => {
		if (!KNOWN_THEME_MARKDOWN_OPTIONS.includes(key)) if (KNOWN_CORE_MARKDOWN_OPTIONS.includes(key)) {
			logger$1.warn(`You are setting "${colors.magenta(`markdown.${key}`)}" option in ${colors.cyan("theme options")}, but it's not supported by theme. You need to set the option in ${colors.cyan("vuepress config file")}.`);
			vuepressMarkdownOptions[key] = themeMarkdownOptions[key];
		} else logger$1.warn(`You are setting "${colors.magenta(`markdown.${key}`)}" option in ${colors.cyan("theme options")}, but it's not supported by theme.`);
	});
};

//#endregion
//#region src/node/check/utils.ts
const PLUGIN_CHECKLIST = [
	["@vuepress/plugin-active-header-links", "plugins.activeHeaderLinks"],
	["@vuepress/plugin-blog", "plugins.blog"],
	["@vuepress/plugin-catalog", "plugins.catalog"],
	["@vuepress/plugin-comment", "plugins.comment"],
	["@vuepress/plugin-copy-code", "plugins.copyCode"],
	["@vuepress/plugin-copyright", "plugins.copyright"],
	["@vuepress/plugin-docsearch", "plugins.docsearch"],
	["@vuepress/plugin-feed", "plugins.feed"],
	["@vuepress/plugin-git", "plugins.git"],
	["@vuepress/plugin-icon", "plugins.icon"],
	["@vuepress/plugin-links-check", "markdown.linksCheck"],
	["@vuepress/plugin-markdown-hint", ["markdown.alert", "markdown.hint"]],
	["@vuepress/plugin-markdown-image", [
		"markdown.figure",
		"markdown.imgLazyload",
		"markdown.imgMark",
		"markdown.imgSize",
		"markdown.obsidianImgSize"
	]],
	["@vuepress/plugin-markdown-math", "markdown.math"],
	["@vuepress/plugin-markdown-tab", ["markdown.tabs", "markdown.codeTabs"]],
	["@vuepress/plugin-meilisearch", "plugins.meilisearch"],
	["@vuepress/plugin-notice", "plugins.notice"],
	["@vuepress/plugin-nprogress", "plugins.nprogress"],
	["@vuepress/plugin-photo-swipe", "plugins.photoSwipe"],
	["@vuepress/plugin-prismjs", "markdown.highlighter: { type: \"prismjs\", ... your options }"],
	["@vuepress/plugin-pwa", "plugins.pwa"],
	["@vuepress/plugin-reading-time", "plugins.readingTime"],
	["@vuepress/plugin-redirect", "plugins.redirect"],
	["@vuepress/plugin-revealjs", "markdown.revealjs"],
	[
		"@vuepress/plugin-rtl",
		"",
		"Set \"rtl: true\" in the needed theme locales."
	],
	["@vuepress/plugin-search", "plugins.search"],
	["@vuepress/plugin-seo", "plugins.seo"],
	["@vuepress/plugin-shiki", "markdown.highlighter: { type: \"shiki\", ... your options }"],
	["@vuepress/plugin-slimsearch", "plugins.slimsearch"],
	["@vuepress/plugin-sitemap", "plugins.sitemap"],
	[
		"@vuepress/plugin-theme-data",
		"",
		"This plugin is called internally."
	],
	["@vuepress/plugin-watermark", "plugins.watermark"],
	["vuepress-plugin-components", "plugins.components"],
	["vuepress-plugin-md-enhance", "plugins.mdEnhance"]
];

//#endregion
//#region src/node/check/checkPluginsOptions.ts
const KNOWN_THEME_PLUGIN_KEYS = new Set(PLUGIN_CHECKLIST.flatMap(([, key]) => key).filter((key) => key.startsWith("plugins.")).map((key) => key.split(".")[1]));
/**
* Check theme plugin options for noob users
*
* @param plugins - Theme plugin options
*/
const checkPluginsOptions = (plugins) => {
	keys(plugins).forEach((key) => {
		if (!KNOWN_THEME_PLUGIN_KEYS.has(key)) logger$1.warn(`You are setting "${colors.magenta(`plugins.${key}`)}" option in ${colors.cyan("theme options")}, but it's not supported by theme. You need to install the plugin yourself, import it in ${colors.cyan("vuepress config file")} and call it manually in "${colors.magenta("plugins")}" options.`);
	});
};

//#endregion
//#region src/node/check/checkVuePressVersion.ts
const BUNDLERS = ["vite", "webpack"];
const BUNDLER_PREFIX = "@vuepress/bundler-";
const VUEPRESS_BUNDLERS = new Set(BUNDLERS.map((bundler) => `${BUNDLER_PREFIX}${bundler}`));
const VUEPRESS_CORE_PACKAGES = new Set([
	"core",
	"client",
	"cli",
	"markdown",
	"shared",
	"utils"
].map((item) => `@vuepress/${item}`));
const DEPRECATED_PACKAGES = new Set(BUNDLERS.map((item) => `vuepress-${item}`));
const checkVuePressVersion = () => {
	const sourceFolderPath = path.join(process.cwd(), process.argv[3]);
	const bundlerNames = [];
	const corePackageNames = [];
	const require = createRequire(`${sourceFolderPath}/`);
	let dir = sourceFolderPath;
	let foundVuePress = false;
	const checkPackage = (pkgName) => {
		if (pkgName === "vuepress") foundVuePress = true;
		else if (DEPRECATED_PACKAGES.has(pkgName)) console.error(colors.red(`❌ ${pkgName} is deprecated and you must remove it from deps!`));
		else if (VUEPRESS_CORE_PACKAGES.has(pkgName)) corePackageNames.push(pkgName);
		else if (VUEPRESS_BUNDLERS.has(pkgName)) bundlerNames.push(pkgName);
	};
	do {
		if (fs.existsSync(path.resolve(dir, "package.json"))) {
			const content = JSON.parse(fs.readFileSync(path.resolve(dir, "package.json"), "utf-8"));
			keys({
				...content.dependencies,
				...content.devDependencies
			}).forEach((name) => {
				checkPackage(name);
			});
		}
		if (foundVuePress || dir === path.dirname(dir)) break;
	} while (dir = path.dirname(dir));
	if (!foundVuePress) {
		console.error(`❌ ${colors.cyan("VuePress")} ${colors.red("package is not found in current project!")} You must manually install it!`);
		return false;
	}
	if (bundlerNames.length === 0) {
		console.error(`${colors.red("❌ No VuePress bundler is detected in the current project!")} You should install one of ${[...VUEPRESS_BUNDLERS].map((str) => colors.cyan(str)).join(", ")}`);
		return false;
	}
	let isVersionMatch = true;
	const { version: vuePressVersion } = require("vuepress/package.json");
	bundlerNames.forEach((pkgName) => {
		const { version } = require(`${pkgName}/package.json`);
		if (version !== vuePressVersion) {
			console.error(`❌ Package version mismatch: ${colors.cyan(pkgName)} is using ${colors.magenta(version)} while ${colors.cyan("vuepress")} is using ${colors.magenta(vuePressVersion)}`);
			isVersionMatch = false;
		}
	});
	corePackageNames.forEach((pkgName) => {
		const { version } = require(`${pkgName}/package.json`);
		if (version === vuePressVersion) console.warn(`${colors.cyan(pkgName)} is no longer needed, you should remove it from deps and change all ${colors.cyan(pkgName)} imports to ${colors.cyan(pkgName.slice(1))}`);
		else {
			console.error(`Package version mismatch: ${colors.cyan(pkgName)} is using ${colors.magenta(version)} while ${colors.cyan("vuepress")} is using ${colors.magenta(vuePressVersion)}`);
			isVersionMatch = false;
		}
	});
	return isVersionMatch;
};

//#endregion
//#region src/node/check/checkUserPlugins.ts
/**
* Check user plugin options for noob users
*
* @param app - VuePress app instance
*/
const checkUserPlugins = (app) => {
	PLUGIN_CHECKLIST.forEach(([pluginName, optionName, hint = ""]) => {
		const themeIndex = app.pluginApi.plugins.findIndex((item) => item.name === "vuepress-theme-hope");
		if (app.pluginApi.plugins.slice(themeIndex + 1).some(({ name }) => name === pluginName)) logger$1.error(`You are not allowed to use plugin "${colors.magenta(pluginName)}" yourself in ${colors.cyan("vuepress config file")}. ${hint || (optionName ? `Set "${colors.magenta(isString(optionName) ? optionName : optionName.join(","))}" in ${colors.cyan("theme options")} to customize it.` : "")}`);
	});
};

//#endregion
//#region src/node/config/getEncryptConfig.ts
const hashPasswords = (passwords, key) => {
	if (isString(passwords)) return [hashSync(passwords)];
	if (isArray(passwords)) return passwords.map((password) => {
		if (isString(password)) return hashSync(password);
		logger$1.error(`\
${colors.magenta(key)} config is invalid. 

All password MUST be string. But we found one’s type is ${typeof password}. Please fix it!\
`);
		return null;
	}).filter((item) => item != null);
	logger$1.error(`\
${colors.magenta(key)} config is invalid. 

All password MUST be string. But we found a ${JSON.stringify(passwords)}. Please fix it!\
`);
	return null;
};
const getEncryptConfig = ({ admin, config, global } = {}) => {
	const result = {};
	if (admin) {
		if (global) result.global = true;
		if (isPlainObject(admin)) {
			const tokens = hashPasswords(admin.password, "encrypt.admin.password");
			if (tokens) result.admin = {
				tokens,
				hint: admin.hint
			};
		} else {
			const tokens = hashPasswords(admin, "encrypt.admin");
			if (tokens) result.admin = { tokens };
		}
	}
	if (config) result.config = fromEntries(entries(config).map(([key, options]) => {
		if (isPlainObject(options)) {
			const tokens = hashPasswords(options.password, `encrypt.config[${key}].password`);
			return tokens ? [key, {
				tokens,
				hint: options.hint
			}] : null;
		}
		const tokens = hashPasswords(options, `encrypt.config[${key}]`);
		return tokens ? [key, { tokens }] : null;
	}).filter((item) => item != null));
	return result;
};

//#endregion
//#region src/node/config/getSocialMediaIcons.ts
const getSocialMediaIcons = (themeData) => {
	const iconData = {};
	const isIconInvalid = (key, value) => {
		if (isString(value)) {
			const templatePath = `${TEMPLATE_FOLDER}/socialMediaIcons/${key.toLocaleLowerCase()}.svg`;
			if (fs.existsSync(templatePath)) {
				iconData[key] = fs.readFileSync(templatePath, { encoding: "utf-8" });
				return false;
			}
			logger$1.warn(`${key} is not a built-in media, you should provide an icon for it!`);
			return true;
		}
		if (isPlainObject(value)) {
			if (isLinkHttp(value.icon) || startsWith(value.icon, "<svg")) return false;
			logger$1.warn(`${key}'s icon ${value.icon} in blog media config is invalid!`);
			return true;
		}
		logger$1.warn(`${key} icon in blog media config has an invalid config!`);
		return true;
	};
	entries(themeData.blog?.medias ?? {}).forEach(([key, value]) => {
		if (isIconInvalid(key, value)) delete themeData.blog?.medias?.[key];
	});
	entries(themeData.locales).forEach(([path, { blog }]) => {
		entries(blog?.medias ?? {}).forEach(([key, value]) => {
			if (isIconInvalid(key, value)) delete themeData.locales[path].blog?.medias?.[key];
		});
	});
	return iconData;
};

//#endregion
//#region src/node/locales/de.ts
const deLocale = {
	lang: "de-DE",
	navbarLocales: {
		langName: "Deutsch",
		selectLangAriaLabel: "Sprache wählen"
	},
	metaLocales: {
		author: "Autor",
		date: "Datum",
		origin: "Original",
		views: "Besucher",
		category: "Kategorie",
		tag: "Tag",
		readingTime: "Lesezeit",
		words: "Wörter",
		toc: "Auf dieser Seite",
		prev: "Vorherige",
		next: "Nächste",
		contributors: "Mitwirkende",
		editLink: "Diese Seite barbeiten",
		print: "Drucken"
	},
	blogLocales: {
		article: "Artikel",
		articleList: "Artikel Liste",
		category: "Kategorie",
		tag: "Tag",
		timeline: "Timeline",
		timelineTitle: "Yesterday Once More!",
		all: "Alle",
		intro: "Persönliche Einleitung",
		star: "Star",
		empty: "$text ist leer"
	},
	paginationLocales: {
		prev: "Vorherige",
		next: "Nächste",
		navigate: "Springe zu",
		action: "Los",
		errorText: "Bitte gib eine Nummer zwischen 1 und $page ein!"
	},
	outlookLocales: {
		themeColor: "Design-Farbe",
		darkmode: "Design-Modus",
		fullscreen: "Vollbild"
	},
	encryptLocales: {
		iconLabel: "Seite verschlüsselt",
		placeholder: "Passwort eingeben",
		remember: "Passwort merken",
		errorHint: "Bitte das korrekte Passwort eingeben!"
	},
	routerLocales: {
		skipToContent: "Zum Hauptinhalt springen",
		notFoundTitle: "Seite nicht gefunden",
		notFoundMsg: [
			"Hier gibt es nichts.",
			"Wie sind wir hier hergekommen?",
			"Das ist wohl eine Vier-Null-Vier.",
			"Sieht aus als hättest du einen kaputten Link gefunden."
		],
		back: "Zurück",
		home: "Zur Startseite"
	}
};

//#endregion
//#region src/node/locales/deAT.ts
const deATLocale = {
	lang: "de-AT",
	navbarLocales: {
		langName: "Deutsch (Österreich)",
		selectLangAriaLabel: "Sprache wählen"
	},
	metaLocales: {
		author: "Autor",
		date: "Datum",
		origin: "Original",
		views: "Besucher",
		category: "Kategorie",
		tag: "Tag",
		readingTime: "Lesezeit",
		words: "Wörter",
		toc: "On This Page",
		prev: "Prev",
		next: "Next",
		contributors: "Mitwirkende",
		editLink: "Diese Seite barbeiten",
		print: "Drucken"
	},
	blogLocales: {
		article: "Artikel",
		articleList: "Artikel Liste",
		category: "Kategorie",
		tag: "Tag",
		timeline: "Timeline",
		timelineTitle: "Yesterday Once More!",
		all: "Alle",
		intro: "Persönliche Einleitung",
		star: "Star",
		empty: "$text ist leer"
	},
	paginationLocales: {
		prev: "Vorheriges",
		next: "Nächstes",
		navigate: "Springe zu",
		action: "Los",
		errorText: "Bitte gib eine Nummer zwischen 1 und $page ein!"
	},
	outlookLocales: {
		themeColor: "Design-Farbe",
		darkmode: "Design-Modus",
		fullscreen: "Full Screen"
	},
	encryptLocales: {
		iconLabel: "Page Encrypted",
		placeholder: "Entre a senha",
		remember: "Remember password",
		errorHint: "Bitte das korrekte Passwort eingeben!"
	},
	routerLocales: {
		skipToContent: "Zum Hauptinhalt springen",
		notFoundTitle: "Seite nicht gefunden",
		notFoundMsg: [
			"Hier gibt es nichts.",
			"Wie sind wir hier hergekommen?",
			"Das ist wohl eine Vier-Null-Vier.",
			"Sieht aus als hättest du einen kaputten Link gefunden."
		],
		back: "Zurück",
		home: "Zur Startseite"
	}
};

//#endregion
//#region src/node/locales/en.ts
const enLocale = {
	lang: "en-US",
	navbarLocales: {
		langName: "English",
		selectLangAriaLabel: "Select language"
	},
	metaLocales: {
		author: "Author",
		date: "Writing Date",
		origin: "Original",
		views: "Page views",
		category: "Category",
		tag: "Tag",
		readingTime: "Reading Time",
		words: "Words",
		toc: "On This Page",
		prev: "Prev",
		next: "Next",
		contributors: "Contributors",
		editLink: "Edit this page",
		print: "Print"
	},
	blogLocales: {
		article: "Articles",
		articleList: "Article List",
		category: "Category",
		tag: "Tag",
		timeline: "Timeline",
		timelineTitle: "Yesterday Once More!",
		all: "All",
		intro: "Personal Intro",
		star: "Star",
		empty: "No $text"
	},
	paginationLocales: {
		prev: "Prev",
		next: "Next",
		navigate: "Jump to",
		action: "Go",
		errorText: "Please enter a number between 1 and $page !"
	},
	outlookLocales: {
		themeColor: "Theme Color",
		darkmode: "Theme Mode",
		fullscreen: "Full Screen"
	},
	encryptLocales: {
		iconLabel: "Page Encrypted",
		placeholder: "Enter password",
		remember: "Remember password",
		errorHint: "Please enter the correct password!"
	},
	routerLocales: {
		skipToContent: "Skip to main content",
		notFoundTitle: "Page not found",
		notFoundMsg: [
			"There’s nothing here.",
			"How did we get here?",
			"That’s a Four-Oh-Four.",
			"Looks like we've got some broken links."
		],
		back: "Go back",
		home: "Take me home"
	}
};

//#endregion
//#region src/node/locales/es.ts
const esLocale = {
	lang: "es-ES",
	navbarLocales: {
		langName: "Español",
		selectLangAriaLabel: "Seleccionar idioma"
	},
	metaLocales: {
		author: "Autor",
		date: "Fecha de publicación",
		origin: "Original",
		views: "Páginas vistas",
		category: "Categoría",
		tag: "Etiquetas",
		readingTime: "Tiempo de lectura",
		words: "Palabras",
		toc: "En esta página",
		prev: "Anterior",
		next: "Siguiente",
		contributors: "Contribuidores",
		editLink: "Editar esta página",
		print: "Imprimir"
	},
	blogLocales: {
		article: "Artículos",
		articleList: "Lista de artículos",
		category: "Categoría",
		tag: "Etiquetas",
		timeline: "Línea de tiempo",
		timelineTitle: "Ayer una vez más!",
		all: "Todos",
		intro: "Introducción personal",
		star: "Estrella",
		empty: "$text está vacío"
	},
	paginationLocales: {
		prev: "Anterior",
		next: "Siguiente",
		navigate: "Saltar a",
		action: "Ir",
		errorText: "Por favor ingrese un número entre 1 y $page !"
	},
	outlookLocales: {
		themeColor: "Color del tema",
		darkmode: "Modo del tema",
		fullscreen: "Pantalla completa"
	},
	encryptLocales: {
		iconLabel: "Página encriptada",
		placeholder: "Ingresar contraseña",
		remember: "Recordar contraseña",
		errorHint: "Por favor ingrese la contraseña correcta!"
	},
	routerLocales: {
		skipToContent: "Saltar al contenido principal",
		notFoundTitle: "Página no encontrada",
		notFoundMsg: [
			"No hay nada aquí.",
			"Cómo llegamos aquí?",
			"Eso es un Cuatro-Cero-Cuatro.",
			"Parece que tenemos algunos enlaces rotos."
		],
		back: "Regresar",
		home: "Llévame al inicio"
	}
};

//#endregion
//#region src/node/locales/fi.ts
const fiLocale = {
	lang: "fi-FI",
	navbarLocales: {
		langName: "Finnish",
		selectLangAriaLabel: "Valitse kieli"
	},
	metaLocales: {
		author: "Kirjoittaja",
		date: "Julkaistu",
		origin: "Alkuperäinen",
		views: "Näyttökerrat",
		category: "Kategoriat",
		tag: "Avainsana",
		readingTime: "Lukuaika",
		words: "Sanat",
		toc: "Sisällys",
		prev: "Edellinen",
		next: "Seuraava",
		contributors: "Osallistujat",
		editLink: "Muokkaa tätä sivua",
		print: "Tulosta"
	},
	blogLocales: {
		article: "Aritkkelit",
		articleList: "Artikkelilista",
		category: "Kategoria",
		tag: "Avainsana",
		timeline: "Aikajana",
		timelineTitle: "Koe eilinen uudelleen!",
		all: "Kaikki",
		intro: "Intro",
		star: "Tähti",
		empty: "$text on tyhjä"
	},
	paginationLocales: {
		prev: "Edellinen",
		next: "Seuraava",
		navigate: "Hyppää",
		action: "Mene",
		errorText: "Anna sivunumero välillä 1 ja $page!"
	},
	outlookLocales: {
		themeColor: "Teemaväri",
		darkmode: "Teeman tila",
		fullscreen: "Koko näyttö"
	},
	encryptLocales: {
		iconLabel: "Suojattu sivu",
		placeholder: "Anna salasana",
		remember: "Muista salasana",
		errorHint: "Anna oikea salasana!"
	},
	routerLocales: {
		skipToContent: "Hyppää sisältöön",
		notFoundTitle: "Sivua ei löytynyt",
		notFoundMsg: [
			"Täällä ei olekkaan mitään!",
			"Miten päädyimme tänne?",
			"Se on nel-nol-nelj!",
			"Vaikuttaa siltä, että meillä on rikkinäinen linkki."
		],
		back: "Palaa takaisin",
		home: "Etusivulle"
	}
};

//#endregion
//#region src/node/locales/fr.ts
const frLocale = {
	lang: "fr-FR",
	navbarLocales: {
		langName: "Français",
		selectLangAriaLabel: "Selection de la langue"
	},
	metaLocales: {
		author: "Auteur",
		date: "Date d'édition",
		origin: "Original",
		views: "Nombre de vues",
		category: "Catégorie",
		tag: "Tag",
		readingTime: "Temps de lecture",
		words: "Mots",
		toc: "Dans cette page",
		prev: "Précédent",
		next: "Suivant",
		contributors: "Contributeurs",
		editLink: "Modifier cette page",
		print: "Imprimer"
	},
	blogLocales: {
		article: "Articles",
		articleList: "Liste d'articles",
		category: "Catégorie",
		tag: "Tag",
		timeline: "Timeline",
		timelineTitle: "Toujours un peu plus!",
		all: "Tout",
		intro: "Introduction personnelle",
		star: "Étoile",
		empty: "Pas de $text"
	},
	paginationLocales: {
		prev: "Précédent",
		next: "Suivant",
		navigate: "Aller à",
		action: "Go",
		errorText: "Merci d'entrer un entier entre 1 et $page !"
	},
	outlookLocales: {
		themeColor: "Couleur du thème",
		darkmode: "Mode du thème",
		fullscreen: "Plein écran"
	},
	encryptLocales: {
		iconLabel: "Page Encrypted",
		placeholder: "Enter password",
		remember: "Remember password",
		errorHint: "Merci d'entrer un mot de passe valide !"
	},
	routerLocales: {
		skipToContent: "Aller au contenu principal",
		notFoundTitle: "Page non trouvée",
		notFoundMsg: [
			"Il n'y a rien ici.",
			"Comment êtes vous arrivés ici ?",
			"C'est un joli 404.",
			"Il semblerait que nous ayons quelques liens de cassés."
		],
		back: "Revenir",
		home: "Retour à la maison"
	}
};

//#endregion
//#region src/node/locales/hu.ts
const huLocale = {
	lang: "hu-HU",
	navbarLocales: {
		langName: "Magyar",
		selectLangAriaLabel: "Nyelv kiválasztása"
	},
	metaLocales: {
		author: "Szerző",
		date: "Dátum",
		origin: "Eredeti",
		views: "Oldalletöltések",
		category: "Kategória",
		tag: "Címke",
		readingTime: "Olvasási idő",
		words: "Szavak",
		toc: "Tartalom",
		prev: "Előző",
		next: "Következő",
		contributors: "Közreműködők",
		editLink: "Oldal szerkesztése",
		print: "Nyomtatás"
	},
	blogLocales: {
		article: "Cikkek",
		articleList: "Cikkek listája",
		category: "Kategória",
		tag: "Címke",
		timeline: "Idővonal",
		timelineTitle: "Régi szép idők!",
		all: "Összes",
		intro: "Személyes bemutatkozás",
		star: "Csillag",
		empty: "Nincs $text"
	},
	paginationLocales: {
		prev: "Előző",
		next: "Következő",
		navigate: "Ugrás",
		action: "Mehet",
		errorText: "Kérlek írj be egy számot 1 és $page között!"
	},
	outlookLocales: {
		themeColor: "Téma színe",
		darkmode: "Téma mód",
		fullscreen: "Teljes képernyő"
	},
	encryptLocales: {
		iconLabel: "Oldal titkosítva",
		placeholder: "Add meg a jelszót",
		remember: "Jelszó megjegyzése",
		errorHint: "Kérjük, add meg a helyes jelszót!"
	},
	routerLocales: {
		skipToContent: "Ugrás a fő tartalomhoz",
		notFoundTitle: "Az oldal nem található",
		notFoundMsg: [
			"Itt nincs semmi.",
			"Hogyan kerültünk ide?",
			"Ez egy 404-es hiba.",
			"Úgy tűnik, hogy sérült linkek vannak."
		],
		back: "Vissza",
		home: "Kezdőlap"
	}
};

//#endregion
//#region src/node/locales/id.ts
const idLocale = {
	lang: "id-ID",
	navbarLocales: {
		langName: "Indonesia",
		selectLangAriaLabel: "Pilih Bahasa"
	},
	metaLocales: {
		author: "Penulis",
		date: "Ditulis pada",
		origin: "Original",
		views: "Dilihat",
		category: "Kategori",
		tag: "Tag",
		readingTime: "Waktu Membaca",
		words: "Kata",
		toc: "Pada Halaman Ini",
		prev: "Sebelumnya",
		next: "Selanjutnya",
		contributors: "Kontributor",
		editLink: "Edit halaman ini",
		print: "Cetak"
	},
	blogLocales: {
		article: "Artikel",
		articleList: "Daftar artikel",
		category: "Kategori",
		tag: "Tag",
		timeline: "Linimasa",
		timelineTitle: "Kemarin adalah kenangan, esok adalah harapan",
		all: "Semua",
		intro: "Perkenalan",
		star: "Berbintang",
		empty: "$text kosong"
	},
	paginationLocales: {
		prev: "Sebelumnya",
		next: "Selanjutnya",
		navigate: "Ke Halaman",
		action: "Pergi",
		errorText: "Tolong masukkan angka antara 1 dan $page !"
	},
	outlookLocales: {
		themeColor: "Warna Tema",
		darkmode: "Mode Tema",
		fullscreen: "Layar Penuh"
	},
	encryptLocales: {
		iconLabel: "Halaman terkunci",
		placeholder: "Masukkan kata sandi",
		remember: "Ingat kata sandi",
		errorHint: "Mohon masukkan kata sandi yang benar!"
	},
	routerLocales: {
		skipToContent: "Langsung ke konten utama",
		notFoundTitle: "Halaman tidak ditemukan",
		notFoundMsg: [
			"Tidak ada apapun disini.",
			"Bagaimana kita bisa sampai kesini?",
			"Itu adalah Empat-Nol-Empat.",
			"Tampaknya kami memiliki beberapa tautan situs yang rusak."
		],
		back: "Kembali",
		home: "Ke Beranda"
	}
};

//#endregion
//#region src/node/locales/ja.ts
const jaLocale = {
	lang: "ja-JP",
	navbarLocales: {
		langName: "日本語",
		selectLangAriaLabel: "言語の選択"
	},
	metaLocales: {
		author: "著者",
		date: "執筆日",
		origin: "オリジナル",
		views: "来場者数",
		category: "カテゴリ",
		tag: "タグ",
		readingTime: "読書時間",
		words: "単語数",
		toc: "このページの内容",
		prev: "前のページへ",
		next: "次のページ",
		contributors: "投稿者",
		editLink: "このページを編集",
		print: "印刷"
	},
	blogLocales: {
		article: "記事",
		articleList: "記事一覧",
		category: "カテゴリ",
		tag: "タグ",
		timeline: "タイムライン",
		timelineTitle: "昨日もう一度!",
		all: "すべて",
		intro: "自己紹介",
		star: "コレクション",
		empty: "$text は空です"
	},
	paginationLocales: {
		prev: "前のページへ",
		next: "次のページ",
		navigate: "ジャンプする",
		action: "行く",
		errorText: "1 から $page までの数値を入力してください!"
	},
	outlookLocales: {
		themeColor: "テーマの色",
		darkmode: "テーマモード",
		fullscreen: "全画面"
	},
	encryptLocales: {
		iconLabel: "記事は暗号化されています",
		placeholder: "パスワードの入力",
		remember: "パスワードを記憶する",
		errorHint: "正しいパスワードを入力してください!"
	},
	routerLocales: {
		skipToContent: "メインコンテンツへスキップ",
		notFoundTitle: "ページが見つかりません",
		notFoundMsg: [
			"ここには何もありません。",
			"どうやってここにたどり着いたのか?",
			"それは404です",
			"私たちはいくつかの壊れたリンクを持っているように見えます。"
		],
		back: "前のページへ戻る",
		home: "メインページに戻る"
	}
};

//#endregion
//#region src/node/locales/ko.ts
const koLocale = {
	lang: "ko-KR",
	navbarLocales: {
		langName: "한국어",
		selectLangAriaLabel: "언어 선택"
	},
	metaLocales: {
		author: "작성자",
		date: "작성일",
		origin: "원본",
		views: "조회수",
		category: "카테고리",
		tag: "태그",
		readingTime: "읽는 시간",
		words: "단어",
		toc: "이 페이지에서",
		prev: "이전",
		next: "다음",
		contributors: "기여자",
		editLink: "이 페이지 수정",
		print: "인쇄"
	},
	blogLocales: {
		article: "게시글",
		articleList: "글 목록",
		category: "카테고리",
		tag: "태그",
		timeline: "타임라인",
		timelineTitle: "어제 한 번 더!",
		all: "모두",
		intro: "프로필",
		star: "스타",
		empty: "$text가 비어있습니다."
	},
	paginationLocales: {
		prev: "이전",
		next: "다음",
		navigate: "이동",
		action: "가기",
		errorText: "1에서 $page 사이의 숫자를 입력하세요!"
	},
	outlookLocales: {
		themeColor: "테마 색상",
		darkmode: "테마 모드",
		fullscreen: "전체 화면"
	},
	encryptLocales: {
		iconLabel: "페이지 암호화",
		placeholder: "비밀번호 입력",
		remember: "비밀번호 기억",
		errorHint: "정확한 비밀번호를 입력해주세요!"
	},
	routerLocales: {
		skipToContent: "본문으로 건너뛰기",
		notFoundTitle: "페이지를 찾을 수 없습니다.",
		notFoundMsg: [
			"여기에는 아무것도 없습니다.",
			"어떻게 여기까지 오셨나요?",
			"4-0-4 입니다.",
			"깨진 링크가 있는 것 같습니다."
		],
		back: "뒤로가기",
		home: "메인으로"
	}
};

//#endregion
//#region src/node/locales/nl.ts
const nlLocale = {
	lang: "nl-NL",
	navbarLocales: {
		langName: "Dutch",
		selectLangAriaLabel: "Selecteer taal"
	},
	metaLocales: {
		author: "Auteur",
		date: "Geschreven Datum",
		origin: "Bron",
		views: "Pagina views",
		category: "Categorie",
		tag: "Tag",
		readingTime: "Leestijd",
		words: "Woorden",
		toc: "Op Deze Pagina",
		prev: "Vorige",
		next: "Volgende",
		contributors: "Bijdragers",
		editLink: "Bewerk deze pagina",
		print: "Printen"
	},
	blogLocales: {
		article: "Artikelen",
		articleList: "Artikelenlijst",
		category: "Categorie",
		tag: "Tag",
		timeline: "Tijdlijn",
		timelineTitle: "Yesterday Once More!",
		all: "Alle",
		intro: "Persoonlijke Intro",
		star: "Star",
		empty: "$text is leeg"
	},
	paginationLocales: {
		prev: "Vorige",
		next: "Volgende",
		navigate: "Ga Naar",
		action: "Go",
		errorText: "Gelieve een nummer in te geven tussen 1 en $page !"
	},
	outlookLocales: {
		themeColor: "Themakleur",
		darkmode: "Thema modus",
		fullscreen: "Full Screen"
	},
	encryptLocales: {
		iconLabel: "Pagina Geëncrypteerd",
		placeholder: "Voeg paswoord in",
		remember: "Herinner paswoord",
		errorHint: "Geliebe het juiste paswoord in te vullen!"
	},
	routerLocales: {
		skipToContent: "Ga naar de hoofdinhoud",
		notFoundTitle: "Pagina niet gevonden",
		notFoundMsg: [
			"Er is niets hier.",
			"Hoe zijn we hier beland?",
			"Dat is een 404.",
			"Zo te zien hebben we enkele kapotte links."
		],
		back: "Ga terug",
		home: "Ga terug naar home"
	}
};

//#endregion
//#region src/node/locales/pl.ts
const plLocale = {
	lang: "pl-PL",
	navbarLocales: {
		langName: "Polski",
		selectLangAriaLabel: "Wybierz język"
	},
	metaLocales: {
		author: "Autor",
		date: "Utworzono",
		origin: "Oryginał",
		views: "Wyświetlenia strony",
		category: "Kategoria",
		tag: "Tagi",
		readingTime: "Czas czytania",
		words: "Słowa",
		toc: "Na tej stronie",
		prev: "Poprzednia",
		next: "Następna",
		contributors: "Współtwórcy",
		editLink: "Edytuj tą stronę",
		print: "Drukuj"
	},
	blogLocales: {
		article: "Artykuły",
		articleList: "Lista artykułów",
		category: "Kategoria",
		tag: "Tagi",
		timeline: "Oś czasu",
		timelineTitle: "Wczoraj jeszcze raz!",
		all: "Wszystkie",
		intro: "Osobiste wprowadzenie",
		star: "Gwiazda",
		empty: "$text jest pusty"
	},
	paginationLocales: {
		prev: "Poprzedni",
		next: "Następmy",
		navigate: "Skocz do",
		action: "Idź",
		errorText: "Wpisz numer między 1 a $page !"
	},
	outlookLocales: {
		themeColor: "Kolor tematu",
		darkmode: "Tryb motywu",
		fullscreen: "Pełny ekran"
	},
	encryptLocales: {
		iconLabel: "Page Encrypted",
		placeholder: "Enter password",
		remember: "Remember password",
		errorHint: "Podaj poprawne hasło!"
	},
	routerLocales: {
		skipToContent: "Przejdź do głównej treści",
		notFoundTitle: "Nie znaleziono strony",
		notFoundMsg: [
			"Nic tu nie ma.",
			"Jak tu się dostaliśmy?",
			"A imię jego czterdzieści i cztery",
			"Wygląda na to, że mamy zepsute odnośniki"
		],
		back: "Wróć",
		home: "Strona główna"
	}
};

//#endregion
//#region src/node/locales/ptBR.ts
const ptBRLocale = {
	lang: "pt-BR",
	navbarLocales: {
		langName: "Português",
		selectLangAriaLabel: "Selecione a língua"
	},
	metaLocales: {
		author: "Autor",
		date: "Escrito em",
		origin: "Original",
		views: "Visualizações",
		category: "Categoria",
		tag: "Tag",
		readingTime: "Tempo de Leitura",
		words: "Palavras",
		toc: "On This Page",
		prev: "Prev",
		next: "Next",
		editLink: "Editar esta página",
		contributors: "Contribuidores",
		print: "Imprimir"
	},
	blogLocales: {
		article: "Artigos",
		articleList: "Lista de Artigos",
		category: "Categorias",
		tag: "Tag",
		timeline: "Linha do Tempo",
		timelineTitle: "Ontem, de novo!",
		all: "Todos",
		intro: "Intro Pessoal",
		star: "Estrela",
		empty: "Nenhum $text"
	},
	paginationLocales: {
		prev: "Anterior",
		next: "Próximo",
		navigate: "Pular para",
		action: "Ir",
		errorText: "Por favor, digite um número entre 1 e $page !"
	},
	outlookLocales: {
		themeColor: "Cor do Tema",
		darkmode: "Modo do Tema",
		fullscreen: "Full Screen"
	},
	encryptLocales: {
		iconLabel: "Page Encrypted",
		placeholder: "Entre a senha",
		remember: "Remember password",
		errorHint: "Por favor, entre a senha correta!"
	},
	routerLocales: {
		notFoundTitle: "Não Encontrado",
		skipToContent: "Pular para o conteúdo",
		notFoundMsg: [
			"Não há nada aqui.",
			"Como chegou até aqui?",
			"Isto é um Quatro-Zero-Quatro.",
			"Parece que temos alguns links quebrados."
		],
		back: "Voltar",
		home: "Leve-me para casa"
	}
};

//#endregion
//#region src/node/locales/ru.ts
const ruLocale = {
	lang: "ru-RU",
	navbarLocales: {
		langName: "Русский",
		selectLangAriaLabel: "Выберите язык"
	},
	metaLocales: {
		author: "Автор",
		date: "Дата написания",
		origin: "Оригинал",
		views: "Просмотры страницы",
		category: "Категория",
		tag: "Тэги",
		readingTime: "Время чтения",
		words: "Слова",
		toc: "На этой странице",
		prev: "Предыдущая",
		next: "Следующая",
		contributors: "Контрибьюторы",
		editLink: "Редактировать эту страницу",
		print: "Печать"
	},
	blogLocales: {
		article: "Статьи",
		articleList: "Список статей",
		category: "Категория",
		tag: "Тэги",
		timeline: "Таймлайн",
		timelineTitle: "Еще раз о недавнем!",
		all: "Все",
		intro: "Личное вступление",
		star: "Звезда",
		empty: "$text пусто"
	},
	paginationLocales: {
		prev: "Предыдущая",
		next: "Следующая",
		navigate: "Перейти к",
		action: "Перейти",
		errorText: "Пожалуйста, введите число от 1 до $page !"
	},
	outlookLocales: {
		themeColor: "Цвет темы",
		darkmode: "Режим темы",
		fullscreen: "Полный экран"
	},
	encryptLocales: {
		iconLabel: "Страница зашифрована",
		placeholder: "Введите пароль",
		remember: "Запомнить пароль",
		errorHint: "Пожалуйста, введите правильный пароль!"
	},
	routerLocales: {
		skipToContent: "Перейти к основному содержанию",
		notFoundTitle: "Страница не найдена",
		notFoundMsg: [
			"Здесь ничего нет.",
			"Как мы сюда попали?",
			"Это четыре-о-четыре.",
			"Похоже, у нас есть несколько неработающих ссылок."
		],
		back: "Вернуться назад",
		home: "Вернуться на главную"
	}
};

//#endregion
//#region src/node/locales/sk.ts
const skLocale = {
	lang: "sk-SK",
	navbarLocales: {
		langName: "Slovensky",
		selectLangAriaLabel: "Vyber si jazyk"
	},
	metaLocales: {
		author: "Autor",
		date: "Dátum článku",
		origin: "Originál",
		views: "Zobrazení",
		category: "Kategória",
		tag: "Tagy",
		readingTime: "Dĺžka čítania",
		words: "Slová",
		toc: "Na tejto stránke",
		prev: "Predchádzajúci",
		next: "Ďalší",
		contributors: "Prispievatelia",
		editLink: "Uprav túto stránku",
		print: "Tlač"
	},
	blogLocales: {
		article: "Články",
		articleList: "List článkov",
		category: "Kategória",
		tag: "Tagy",
		timeline: "Časová os",
		timelineTitle: "Čas plynie!",
		all: "Všetko",
		intro: "Osobné intro",
		star: "Hviezda",
		empty: "$text je prázdny"
	},
	paginationLocales: {
		prev: "Predchádzajúci",
		next: "Ďalší",
		navigate: "Skoč na",
		action: "Choď",
		errorText: "Prosím, zadajte číso medzi 1 a $page !"
	},
	outlookLocales: {
		themeColor: "Farba témy",
		darkmode: "Mód témy",
		fullscreen: "Celá obrazovka"
	},
	encryptLocales: {
		iconLabel: "Page Encrypted",
		placeholder: "Enter password",
		remember: "Remember password",
		errorHint: "Prosím, zadaj správne heslo!"
	},
	routerLocales: {
		skipToContent: "Preskočiť na hlavný obsah",
		notFoundTitle: "Stránka nenájdená",
		notFoundMsg: [
			"Nič tu nieje.",
			"Ako si sa sem dostal?",
			"Si na štyri-nula-štvorke.",
			"Vyzerá to že máme nejaké neprelinkované stránky."
		],
		back: "Choď späť",
		home: "Poď na domovskú stránku"
	}
};

//#endregion
//#region src/node/locales/tr.ts
const trLocale = {
	lang: "tr-TR",
	navbarLocales: {
		langName: "Türkçe",
		selectLangAriaLabel: "Dil seçin"
	},
	metaLocales: {
		author: "Yazar",
		date: "Yazım Tarihi",
		origin: "Özgün",
		views: "Sayfa Görünümü",
		category: "Kategori",
		tag: "Etiket",
		readingTime: "Okuma Süresi",
		words: "Kelime",
		toc: "Bu sayfada",
		prev: "Önceki",
		next: "Sonraki",
		contributors: "Katkıda Bulunanlar",
		editLink: "Bu sayfayı düzenle",
		print: "Yazdır"
	},
	blogLocales: {
		article: "Makaleler",
		articleList: "Makale Listesi",
		category: "Kategori",
		tag: "Etiket",
		timeline: "Zaman Çizelgesi",
		timelineTitle: "Yesterday Once More!",
		all: "Hepsi",
		intro: "Kişisel Tanıtım",
		star: "Yıldız",
		empty: "$text boş"
	},
	paginationLocales: {
		prev: "Önceki",
		next: "Sonraki",
		navigate: "Atla",
		action: "Git",
		errorText: "Lütfen 1 ile $page arasında bir sayfa numarası girin !"
	},
	outlookLocales: {
		themeColor: "Tema Rengi",
		darkmode: "Tema Modu",
		fullscreen: "Tam Ekran"
	},
	encryptLocales: {
		iconLabel: "Sayfa şifreli",
		placeholder: "Şifrenizi girin",
		remember: "Şifreyi hatırla",
		errorHint: "Lütfen doğru şifreyi girin!"
	},
	routerLocales: {
		skipToContent: "Ana içeriğe atla",
		notFoundTitle: "Sayfa bulunamadı",
		notFoundMsg: [
			"Burada hiçbir şey yok.",
			"Bu sayfaya nasıl geldik?",
			"Bir hata var - Dört-Sıfır-Dört.",
			"Bazı çalışmayan bağlantılar var."
		],
		back: "Geri dön",
		home: "Ana sayfaya git"
	}
};

//#endregion
//#region src/node/locales/uk.ts
const ukLocale = {
	lang: "uk-UA",
	navbarLocales: {
		langName: "Українська",
		selectLangAriaLabel: "Оберіть мову"
	},
	metaLocales: {
		author: "Автор",
		date: "Дата написання",
		origin: "Оригінал",
		views: "Перегляди сторінки",
		category: "Категорія",
		tag: "Теги",
		readingTime: "Час читання",
		words: "Слова",
		toc: "На сторінці",
		prev: "Попередня",
		next: "Наступна",
		contributors: "Автори",
		editLink: "Редагувати цю сторінку",
		print: "Друк"
	},
	blogLocales: {
		article: "Статті",
		articleList: "Список статей",
		category: "Категорія",
		tag: "Теги",
		timeline: "Хронологія",
		timelineTitle: "Вчора ще раз!",
		all: "Bce",
		intro: "Особистий вступ",
		star: "Зірка",
		empty: "$text порожній"
	},
	paginationLocales: {
		prev: "Попередня",
		next: "Далі",
		navigate: "Перейти до",
		action: "Перейти",
		errorText: "Будь ласка, введіть число від 1 до $page !"
	},
	outlookLocales: {
		themeColor: "Колір теми",
		darkmode: "Тематичний режим",
		fullscreen: "Повноекранний"
	},
	encryptLocales: {
		iconLabel: "Сторінка зашифрована",
		placeholder: "Введіть пароль",
		remember: "Запам'яти пароль",
		errorHint: "Будь ласка, введіть правильний пароль!"
	},
	routerLocales: {
		skipToContent: "Перейти до основного вмісту",
		notFoundTitle: "Сторінка не знайдена",
		notFoundMsg: [
			"Тут немає нічого.",
			"Як ми сюди потрапили?",
			"Це \"4-0-4\".",
			"Схоже, у нас є непрацюючі посилання."
		],
		back: "Повернутися назад",
		home: "Повернутися на головну"
	}
};

//#endregion
//#region src/node/locales/vi.ts
const viLocale = {
	lang: "vi-VN",
	navbarLocales: {
		langName: "Ngôn ngữ",
		selectLangAriaLabel: "Chọn ngôn ngữ"
	},
	metaLocales: {
		author: "Người viết",
		date: "Ngày viết",
		origin: "Nguồn",
		views: "Views của trang",
		category: "Category",
		tag: "Tag",
		readingTime: "Thời gian đọc",
		words: "Words",
		toc: "On This Page",
		prev: "Prev",
		next: "Next",
		contributors: "Người đóng góp",
		editLink: "Chỉnh sửa trang này",
		print: "In"
	},
	blogLocales: {
		article: "Bài viết",
		articleList: "Danh sách Bài viết",
		category: "Category",
		tag: "Tag",
		timeline: "Timeline",
		timelineTitle: "Yesterday Once More!",
		all: "Tất cả",
		intro: "Giới thiệu cá nhân",
		star: "Ngôi sao",
		empty: "$text trống"
	},
	paginationLocales: {
		prev: "Bài kế",
		next: "Bài trước",
		navigate: "Đi đến",
		action: "Đi",
		errorText: "Xin hãy nhập 1 số từ 1 đến $page !"
	},
	outlookLocales: {
		themeColor: "Màu nền",
		darkmode: "Theme Mode",
		fullscreen: "Full Screen"
	},
	encryptLocales: {
		iconLabel: "Page Encrypted",
		placeholder: "Enter password",
		remember: "Remember password",
		errorHint: "Vui lòng nhập đúng mật khẩu"
	},
	routerLocales: {
		skipToContent: "Bỏ qua nội dung chính",
		notFoundTitle: "Trang không tìm thấy",
		notFoundMsg: [
			"Ở đây chẳng có gì cả.",
			"Sao chúng ta lại đến đây?",
			"Đây là lỗi bốn-không-bốn",
			"Có vẻ chúng ta có vài broken link."
		],
		back: "Quay lại",
		home: "Trang chủ"
	}
};

//#endregion
//#region src/node/locales/zh.ts
const zhLocale = {
	lang: "zh-CN",
	navbarLocales: {
		langName: "简体中文",
		selectLangAriaLabel: "选择语言"
	},
	metaLocales: {
		author: "作者",
		date: "写作日期",
		origin: "原创",
		views: "访问量",
		category: "分类",
		tag: "标签",
		readingTime: "阅读时间",
		words: "字数",
		toc: "此页内容",
		prev: "上一页",
		next: "下一页",
		contributors: "贡献者",
		editLink: "编辑此页",
		print: "打印"
	},
	blogLocales: {
		article: "文章",
		articleList: "文章列表",
		category: "分类",
		tag: "标签",
		timeline: "时间轴",
		timelineTitle: "昨日不在",
		all: "全部",
		intro: "个人介绍",
		star: "星标",
		empty: "$text 为空"
	},
	paginationLocales: {
		prev: "上一页",
		next: "下一页",
		navigate: "跳转到",
		action: "前往",
		errorText: "请输入 1 到 $page 之前的页码！"
	},
	outlookLocales: {
		themeColor: "主题色",
		darkmode: "外观",
		fullscreen: "全屏"
	},
	encryptLocales: {
		iconLabel: "文章已加密",
		placeholder: "输入密码",
		remember: "记住密码",
		errorHint: "请输入正确的密码"
	},
	routerLocales: {
		skipToContent: "跳至主要內容",
		notFoundTitle: "页面不存在",
		notFoundMsg: [
			"这里什么也没有",
			"我们是怎么来到这儿的？",
			"这 是 四 零 四 !",
			"看起来你访问了一个失效的链接"
		],
		back: "返回上一页",
		home: "带我回家"
	}
};

//#endregion
//#region src/node/locales/zhTW.ts
const zhTWLocale = {
	lang: "zh-TW",
	navbarLocales: {
		langName: "繁體中文",
		selectLangAriaLabel: "選擇語言"
	},
	metaLocales: {
		author: "作者",
		date: "寫作日期",
		origin: "原創",
		views: "訪問量",
		category: "分類",
		tag: "標籤",
		readingTime: "閱讀時間",
		words: "字數",
		toc: "此頁內容",
		prev: "上一頁",
		next: "下一頁",
		contributors: "貢獻者",
		editLink: "編輯此頁",
		print: "打印"
	},
	blogLocales: {
		article: "文章",
		articleList: "文章列表",
		category: "分類",
		tag: "標籤",
		timeline: "時間軸",
		timelineTitle: "昨日不在",
		all: "全部",
		intro: "個人介紹",
		star: "星標",
		empty: "$text 為空"
	},
	paginationLocales: {
		prev: "上一頁",
		next: "下一頁",
		navigate: "跳轉到",
		action: "前往",
		errorText: "請輸入 1 到 $page 之前的頁碼！"
	},
	outlookLocales: {
		themeColor: "主題色",
		darkmode: "主題模式",
		fullscreen: "全屏"
	},
	encryptLocales: {
		iconLabel: "頁面已加密",
		placeholder: "輸入密碼",
		remember: "記憶密碼",
		errorHint: "請輸入正確密碼"
	},
	routerLocales: {
		skipToContent: "跳至主要內容",
		notFoundTitle: "頁面不存在",
		notFoundMsg: [
			"這裡什麼也沒有",
			"我們是怎麼來到這兒的？",
			"這 是 四 零 四 !",
			"看起来你訪問了一個失效的鏈結"
		],
		back: "返回上一頁",
		home: "帶我回家"
	}
};

//#endregion
//#region src/node/locales/index.ts
const themeLocaleInfo = [
	[["en", "en-US"], enLocale],
	[[
		"zh",
		"zh-CN",
		"zh-Hans"
	], zhLocale],
	[["zh-TW", "zh-Hant"], zhTWLocale],
	[["de"], deLocale],
	[["de-AT"], deATLocale],
	[["vi"], viLocale],
	[["uk"], ukLocale],
	[["ru"], ruLocale],
	[["pl"], plLocale],
	[["sk"], skLocale],
	[["fr"], frLocale],
	[["es"], esLocale],
	[["ja"], jaLocale],
	[["tr"], trLocale],
	[["ko"], koLocale],
	[["fi"], fiLocale],
	[["hu"], huLocale],
	[["id"], idLocale],
	[["nl"], nlLocale],
	[["pt-BR"], ptBRLocale]
];

//#endregion
//#region src/node/config/getThemeData.ts
const ROOT_DISALLOW_CONFIG = new Set([
	"navbar",
	"sidebar",
	"rtl",
	"metaLocales",
	"navbarLocales",
	"outlookLocales",
	"routerLocales",
	"blogLocales",
	"encryptLocales",
	"paginationLocales"
]);
/**
* Get client-side `themeData`
*
* @param app - VuePress app instance
* @param themeOptions - Theme options
* @param themeStatus - Theme status
* @returns Theme data for client
*/
const getThemeData = (app, { encrypt, ...themeOptions }, { enableBlog, enableEncrypt }) => {
	const themeData = {
		encrypt: getEncryptConfig(encrypt),
		...fromEntries(entries(themeOptions).filter(([key]) => !ROOT_DISALLOW_CONFIG.has(key))),
		locales: getFullLocaleConfig({
			app,
			name: "vuepress-theme-hope",
			default: themeLocaleInfo.map(([langs, { ...localeData }]) => {
				if (!enableBlog) {
					delete localeData.blogLocales;
					delete localeData.paginationLocales;
				}
				if (!enableEncrypt) delete localeData.encryptLocales;
				return [langs, localeData];
			}),
			config: fromEntries(entries({
				"/": {},
				...themeOptions.locales
			}).map(([localePath, localeConfig]) => [localePath, {
				...fromEntries(entries(themeOptions).filter(([key]) => ROOT_DISALLOW_CONFIG.has(key))),
				...localeConfig
			}]))
		})
	};
	if (app.env.isDebug) logger$1.info("Theme config: ", themeData);
	return themeData;
};

//#endregion
//#region src/node/config/getThemeStatus.ts
const getThemeStatus = (app, themeOptions) => {
	const { locales } = app.options;
	const { locales: themeLocales = {}, plugins = {} } = themeOptions;
	return {
		enableBlog: Boolean(plugins.blog),
		enableCatalog: plugins.catalog !== false,
		enableEncrypt: isPlainObject(themeOptions.encrypt) && (Boolean(themeOptions.encrypt.admin) || Boolean(themeOptions.encrypt.config)),
		enableIcon: plugins.icon !== false,
		enableReadingTime: plugins.readingTime !== false,
		blogTypes: isPlainObject(plugins.blog) ? plugins.blog.type?.map(({ key, path = `/${key}/` }) => ({
			key,
			path
		})).filter((item) => isString(item.path)) ?? [] : [],
		isI18nProject: keys(locales).length > 1,
		hasRepo: Boolean(themeOptions.repo) || values(themeLocales).some(({ repo }) => Boolean(repo))
	};
};

//#endregion
//#region src/node/extendsBundlerOptions.ts
const VITE_DEFAULT_CONDITIONS = [
	"module",
	"browser",
	"development|production"
];
const WEBPACK_DEFAULT_CONDITION_NAMES = [
	"browser",
	"import",
	"default"
];
const extendsBundlerOptions = (bundlerOptions, app, custom = false) => {
	addViteConfig(bundlerOptions, app, { build: { chunkSizeWarningLimit: 1024 } });
	if (custom) {
		if (getBundlerName(app) === "vite") {
			const defaultConditions = ((bundlerOptions.viteOptions ??= {}).resolve ??= {}).conditions ?? VITE_DEFAULT_CONDITIONS;
			const defaultSSRConditions = (((bundlerOptions.viteOptions ??= {}).ssr ??= {}).resolve ??= {}).conditions ?? VITE_DEFAULT_CONDITIONS;
			bundlerOptions.viteOptions.resolve.conditions = ["hope-custom", ...defaultConditions];
			bundlerOptions.viteOptions.ssr.resolve.conditions = ["hope-custom", ...defaultSSRConditions];
		}
		chainWebpack(bundlerOptions, app, (config) => {
			if (config.resolve.conditionNames.values().length > 0) config.resolve.conditionNames.prepend("hope-custom");
			else config.resolve.conditionNames.merge(["hope-custom", ...WEBPACK_DEFAULT_CONDITION_NAMES]);
		});
	}
	addViteOptimizeDepsInclude(bundlerOptions, app, "@vueuse/core", true);
	addViteOptimizeDepsExclude(bundlerOptions, app, "@theme-hope");
	addViteSsrNoExternal(bundlerOptions, app, ["@vuepress/helper", "vuepress-shared"]);
};

//#endregion
//#region src/node/init/addFavicon.ts
const addFavicon = (app, favicon) => {
	const { base, head } = app.options;
	const faviconLink = isLinkHttp(favicon) ? favicon : favicon.replace(/^\/?/u, base);
	if (head.every(([tag, attrs]) => !(tag === "link" && attrs.rel === "icon" && attrs.href === faviconLink))) head.push(["link", {
		rel: "icon",
		href: faviconLink
	}]);
};

//#endregion
//#region src/node/plugins/activeHeaderLinks.ts
/**
* Resolve options for `@vuepress/plugin-active-header-links`
*
* @param activeHeaderLinks - Whether to enable `@vuepress/plugin-active-header-links` plugin
* @returns active header links plugin config
*/
const getActiveHeaderLinksPlugin = (activeHeaderLinks) => activeHeaderLinks === false ? null : activeHeaderLinksPlugin({ headerLinkSelector: ".vp-sidebar-link, .vp-toc-link" });

//#endregion
//#region src/node/plugins/blog/utils.ts
const BLOG_LAYOUT = "Blog";
const DEFAULT_BLOG_FRONTMATTER = {
	dir: { index: false },
	index: false,
	feed: false,
	sitemap: false
};
const defaultPageSorter = (pageA, pageB) => {
	const prevKey = pageA.frontmatter.sticky;
	const nextKey = pageB.frontmatter.sticky;
	if (prevKey && nextKey && prevKey !== nextKey) return Number(nextKey) - Number(prevKey);
	if (prevKey && !nextKey) return -1;
	if (!prevKey && nextKey) return 1;
	return dateSorter(pageA.routeMeta.date, pageB.routeMeta.date);
};

//#endregion
//#region src/node/plugins/blog/category.ts
const getBlogCategoryCategory = (options, themeData) => ({
	key: "category",
	getter: ({ routeMeta }) => {
		const { category } = routeMeta;
		return isArray(category) ? category : [];
	},
	sorter: defaultPageSorter,
	path: options.category,
	layout: BLOG_LAYOUT,
	frontmatter: (localePath) => ({
		...DEFAULT_BLOG_FRONTMATTER,
		title: themeData.locales[localePath].blogLocales.category
	}),
	itemPath: options.categoryItem,
	itemFrontmatter: (name, localePath) => ({
		...DEFAULT_BLOG_FRONTMATTER,
		title: `${name} ${themeData.locales[localePath].blogLocales.category}`
	}),
	itemLayout: BLOG_LAYOUT
});
const getBlogTagCategory = (options, themeData) => ({
	key: "tag",
	getter: ({ routeMeta }) => {
		const { tag } = routeMeta;
		return isArray(tag) ? tag : [];
	},
	sorter: defaultPageSorter,
	path: options.tag,
	layout: BLOG_LAYOUT,
	frontmatter: (localePath) => ({
		...DEFAULT_BLOG_FRONTMATTER,
		title: themeData.locales[localePath].blogLocales.tag
	}),
	itemPath: options.tagItem,
	itemLayout: BLOG_LAYOUT,
	itemFrontmatter: (name, localePath) => ({
		...DEFAULT_BLOG_FRONTMATTER,
		title: `${themeData.locales[localePath].blogLocales.tag}: ${name}`
	})
});

//#endregion
//#region src/node/plugins/blog/filter.ts
const blogFilter = ({ frontmatter, filePathRelative }) => {
	const pageFrontmatter = frontmatter;
	return pageFrontmatter.article ?? (!pageFrontmatter.home && Boolean(filePathRelative));
};

//#endregion
//#region src/node/plugins/blog/info.ts
const injectBlogBasicInfo = (page, info) => {
	const frontmatter = page.frontmatter;
	const { createdTime } = page.data.git ?? {};
	const isArticle = frontmatter.article ?? (!frontmatter.home && Boolean(page.filePathRelative));
	const isSlide = frontmatter.layout === "Slides";
	page.routeMeta.type = frontmatter.home ? "home" : isSlide ? "slide" : isArticle ? "article" : "page";
	if (frontmatter.author) info.author = frontmatter.author;
	if (frontmatter.date) {
		const date = getDate(page.frontmatter.date);
		if (date) info.date = date.getTime();
	} else if (createdTime) info.date = createdTime;
	if (frontmatter.category) info.category = isArray(frontmatter.category) ? frontmatter.category : [frontmatter.category];
	else if (frontmatter.categories) info.category = frontmatter.categories;
	if (frontmatter.tag) info.tag = isArray(frontmatter.tag) ? frontmatter.tag : [frontmatter.tag];
	else if (frontmatter.tags) info.tag = frontmatter.tags;
	if ("sticky" in frontmatter) info.sticky = frontmatter.sticky;
	if (frontmatter.cover) info.cover = frontmatter.cover;
	if (frontmatter.isOriginal) info.isOriginal = frontmatter.isOriginal;
	if (frontmatter.excerpt) info.excerpt = frontmatter.excerpt;
	else if (page.data.excerpt) info.excerpt = page.data.excerpt;
	else if (frontmatter.description && !page.data.autoDesc) info.excerpt = frontmatter.description;
};

//#endregion
//#region src/node/plugins/blog/type.ts
const getBlogArticleType = (options, themeData) => ({
	key: "article",
	filter: ({ frontmatter, filePathRelative }) => frontmatter.article ?? (Boolean(filePathRelative) && !frontmatter.home),
	sorter: defaultPageSorter,
	path: options.article,
	layout: BLOG_LAYOUT,
	frontmatter: (localePath) => ({
		...DEFAULT_BLOG_FRONTMATTER,
		title: themeData.locales[localePath].blogLocales.article
	})
});
const getBlogStarType = (options, themeData) => ({
	key: "star",
	filter: ({ frontmatter }) => Boolean(frontmatter.star),
	sorter: (pageA, pageB) => {
		const prevKey = pageA.frontmatter.star;
		const nextKey = pageB.frontmatter.star;
		if (prevKey && nextKey && prevKey !== nextKey) return Number(nextKey) - Number(prevKey);
		if (prevKey && !nextKey) return -1;
		if (!prevKey && nextKey) return 1;
		return dateSorter(pageA.routeMeta.date, pageB.routeMeta.date);
	},
	path: options.star,
	layout: BLOG_LAYOUT,
	frontmatter: (localePath) => ({
		...DEFAULT_BLOG_FRONTMATTER,
		title: themeData.locales[localePath].blogLocales.star
	})
});
const getBlogTimelineType = (options, themeData) => ({
	key: "timeline",
	filter: ({ frontmatter, routeMeta }) => "date" in routeMeta && (frontmatter.timeline ?? true),
	sorter: (pageA, pageB) => dateSorter(pageA.routeMeta.date, pageB.routeMeta.date),
	path: options.timeline,
	layout: BLOG_LAYOUT,
	frontmatter: (localePath) => ({
		...DEFAULT_BLOG_FRONTMATTER,
		title: themeData.locales[localePath].blogLocales.timeline
	})
});

//#endregion
//#region src/node/plugins/blog/blog.ts
/**
* Resolves `@vuepress/plugin-blog`
*
* @param themeData - theme data
* @param options - blog plugin options
* @param hotReload - whether enable hot reload
*
* @returns blog plugin instance or null
*/
const getBlogPlugin = (themeData, options, hotReload = false) => {
	if (!options) return null;
	const { excerpt = true, excerptLength, excerptSeparator, filter = blogFilter, slugify, ...blogOptions } = options === true ? {} : options;
	const encryptedPaths = keys(themeData.encrypt.config ?? {});
	const isPageEncrypted = ({ path }) => encryptedPaths.some((key) => startsWith(decodeURI(path), key));
	return blogPlugin({
		excerpt,
		excerptLength,
		excerptSeparator,
		filter,
		slugify,
		excerptFilter: (page) => {
			return !isPageEncrypted(page) && !page.frontmatter.excerpt;
		},
		getInfo: (page) => {
			const info = {};
			const isEncrypted = isPageEncrypted(page);
			injectBlogBasicInfo(page, info);
			if (isEncrypted) info.isEncrypted = true;
			if (page.data.readingTime && page.data.readingTime.words !== 0) info.readingTime = page.data.readingTime;
			return info;
		},
		category: [getBlogCategoryCategory(blogOptions, themeData), getBlogTagCategory(blogOptions, themeData)],
		type: [
			getBlogArticleType(blogOptions, themeData),
			getBlogStarType(blogOptions, themeData),
			getBlogTimelineType(blogOptions, themeData),
			...blogOptions.type?.map((type) => ({
				layout: "Blog",
				...type
			})) ?? []
		],
		metaScope: "",
		hotReload: blogOptions.hotReload ?? hotReload
	});
};

//#endregion
//#region src/node/plugins/catalog.ts
/**
* Resolve options for `@vuepress/plugin-catalog`
*
* @param catalog - User options
* @returns Catalog plugin instance or `null`
*/
const getCatalogPlugin = (catalog) => {
	if (catalog === false) return null;
	return catalogPlugin({
		frontmatter: () => ({
			article: false,
			feed: false,
			sitemap: false
		}),
		...isPlainObject(catalog) ? catalog : {}
	});
};

//#endregion
//#region src/node/plugins/comment.ts
/**
* Resolve options for `@vuepress/plugin-comment`
*
* @param options - User options
* @returns Comment plugin instance or `null`
*/
const getCommentPlugin = (options) => {
	if (options === false || !options?.provider) return null;
	return commentPlugin({
		provider: "None",
		...options.provider === "Giscus" ? {
			lightTheme: `https://unpkg.com/vuepress-theme-hope@${VERSION}/templates/giscus/light.css`,
			darkTheme: `https://unpkg.com/vuepress-theme-hope@${VERSION}/templates/giscus/dark.css`
		} : {},
		...options.provider === "Waline" ? { dark: "[data-theme=\"dark\"]" } : {},
		...options
	});
};

//#endregion
//#region src/node/plugins/components.ts
/**
* Resolve options for `vuepress-plugin-components`
*
* @param options - theme component plugin options
* @param compact - whether to use compact mode
*
* @returns component plugin instance or null
*/
const getComponentsPlugin = (options, compact = false) => options === false ? null : componentsPlugin({
	components: ["Badge"],
	...isPlainObject(options) ? options : {}
}, compact);

//#endregion
//#region src/node/plugins/copyright.ts
/**
* Resolve options for `@vuepress/plugin-copyright`
*
* @param themeData - Theme data
* @param options - User options
* @param hostname - Hostname
* @returns Copyright plugin instance or `null`
*/
const getCopyrightPlugin = (themeData, options, hostname) => {
	if (!options) return null;
	return copyrightPlugin({
		canonical: hostname,
		author: getAuthor(themeData.author ?? themeData.locales["/"].author)[0]?.name,
		license: themeData.license,
		authorGetter: (page) => getAuthor(page.frontmatter.author)[0]?.name,
		licenseGetter: (page) => page.frontmatter.license,
		...isPlainObject(options) ? options : { global: true }
	});
};

//#endregion
//#region src/node/plugins/utils.ts
const isHighlighterPlugin = (plugin) => ["@vuepress/plugin-prismjs", "@vuepress/plugin-shiki"].includes(plugin.name);
const logMissingPkg = (pkg) => {
	logger.error(` ${colors.cyan(pkg)} is not installed, please install it manually!`);
};

//#endregion
//#region src/node/plugins/feed.ts
let feedPlugin = null;
try {
	({feedPlugin} = await import("@vuepress/plugin-feed"));
} catch {}
/**
* Resolve options for `@vuepress/plugin-feed`
*
* @param themeData Theme data
* @param options Feed plugin options or a boolean to enable it with default options
* @param hostname Hostname for feed plugin
* @param favicon Favicon for feed plugin
* @param compact Whether to use compact mode for feed plugin
*
* @returns Feed plugin instance or null
*/
const getFeedPlugin = (themeData, options, hostname, favicon, compact = false) => {
	if (!options) return null;
	if (!feedPlugin) {
		logMissingPkg("@vuepress/plugin-feed");
		return null;
	}
	const globalAuthor = getAuthor(themeData.author ?? themeData.locales["/"].author);
	const defaultOptions = {
		hostname,
		filter: ({ frontmatter, filePathRelative }) => Boolean(frontmatter.feed ?? frontmatter.article ?? (filePathRelative && !frontmatter.home)),
		channel: {
			icon: favicon,
			image: themeData.locales["/"].logo,
			...globalAuthor.length > 0 ? { author: globalAuthor[0] } : {}
		},
		locales: fromEntries(entries(themeData.locales).map(([localePath, { logo, author, copyright }]) => {
			const localeAuthor = getAuthor(author);
			return [localePath, { channel: {
				icon: favicon,
				image: logo,
				...localeAuthor.length > 0 ? { author: localeAuthor[0] } : {},
				...typeof copyright === "string" ? { copyright } : {}
			} }];
		}))
	};
	return feedPlugin(deepAssign(defaultOptions, isPlainObject(options) ? options : { rss: true }), compact);
};

//#endregion
//#region src/node/plugins/markdownImage.ts
/**
* Resolve options for `@vuepress/plugin-markdown-image`
*
* @param options - theme markdown options
*
* @returns markdown image plugin instance or null
*/
const getMarkdownImagePlugin = (options) => markdownImagePlugin({
	figure: options.figure ?? false,
	lazyload: options.imgLazyload ?? false,
	mark: options.imgMark ?? false,
	size: options.imgSize ?? false,
	obsidianSize: options.obsidianImgSize ?? false,
	legacySize: options.legacyImgSize ?? false
});

//#endregion
//#region src/node/plugins/markdownStylize.ts
/**
* Resolve options for `@vuepress/plugin-markdown-stylize`
*
* @param options - Theme markdown options
* @returns markdown stylize plugin instance
*/
const getMarkdownStylizePlugin = ({ stylize = [], ...options }) => markdownStylizePlugin({
	...options,
	custom: stylize
});

//#endregion
//#region src/node/plugins/mdEnhance.ts
const getMdEnhancePlugin = ({ demo = false, playground, sandpack = false, vuePlayground = false, kotlinPlayground = false }, compact) => {
	if (!demo && !playground && !sandpack && !vuePlayground && !kotlinPlayground) return null;
	return mdEnhancePlugin({
		demo,
		kotlinPlayground,
		playground,
		sandpack,
		vuePlayground
	}, compact);
};

//#endregion
//#region src/node/plugins/notice.ts
/**
* resolve options for `@vuepress/plugin-notice`
*
* @param options Notice plugin options or an array of notice options to enable it with default options
* @returns Notice plugin instance or null
*/
const getNoticePlugin = (options) => isArray(options) ? noticePlugin({ config: options }) : isPlainObject(options) ? noticePlugin(options) : null;

//#endregion
//#region src/node/plugins/pwa.ts
let pwaPlugin = null;
try {
	({pwaPlugin} = await import("@vuepress/plugin-pwa"));
} catch {}
/**
* Resolve options for `@vuepress/plugin-pwa`
*
* @param options PWA plugin options or a boolean to enable it with default options
* @param favicon Favicon for PWA plugin
* @returns PWA plugin instance or null
*/
const getPwaPlugin = (options, favicon) => {
	if (!options) return null;
	if (!pwaPlugin) {
		logMissingPkg("@vuepress/plugin-pwa");
		return null;
	}
	return pwaPlugin({
		favicon,
		...isPlainObject(options) ? options : {}
	});
};

//#endregion
//#region src/node/plugins/redirect.ts
/**
* Resolve options for `@vuepress/plugin-redirect`
*
* @param options Redirect plugin options or a boolean to enable it with default options
* @returns Redirect plugin instance or null
*/
const getRedirectPlugin = (options) => {
	if (options === false || isPlainObject(options) && keys(options).length === 0) return null;
	return redirectPlugin(isPlainObject(options) ? options : { switchLocale: "modal" });
};

//#endregion
//#region src/node/plugins/revealjs.ts
let revealJsPlugin = null;
try {
	({revealJsPlugin} = await import("@vuepress/plugin-revealjs"));
} catch {}
/**
* Resolve options for `@vuepress/plugin-revealjs`
*
* @param options Reveal.js plugin options or a boolean to enable it with default options
* @returns Reveal.js plugin instance or null
*/
const getRevealJsPlugin = (options) => {
	if (!options) return null;
	if (!revealJsPlugin) {
		logMissingPkg("@vuepress/plugin-revealjs");
		return null;
	}
	return revealJsPlugin({
		...isPlainObject(options) ? options : {},
		layout: "Slides"
	});
};

//#endregion
//#region src/node/plugins/rtl.ts
/**
* Resolve options for `@vuepress/plugin-rtl`
*
* @param themeData Theme data
* @returns RTL plugin instance or null
*/
const getRtlPlugin = (themeData) => {
	const rtlLocales = entries(themeData.locales).filter(([, { rtl }]) => rtl).map(([localePath]) => localePath);
	return rtlLocales.length > 0 ? rtlPlugin({ locales: rtlLocales }) : null;
};

//#endregion
//#region src/node/plugins/search.ts
let docsearchPlugin = null;
let meilisearchPlugin = null;
let searchPlugin = null;
let slimsearchPlugin = null;
try {
	({docsearchPlugin} = await import("@vuepress/plugin-docsearch"));
} catch {}
try {
	({meilisearchPlugin} = await import("@vuepress/plugin-meilisearch"));
} catch {}
try {
	({searchPlugin} = await import("@vuepress/plugin-search"));
} catch {}
try {
	({slimsearchPlugin} = await import("@vuepress/plugin-slimsearch"));
} catch {}
/**
* Resolve options for `@vuepress/plugin-docsearch`, `@vuepress/plugin-search` and `@vuepress/plugin-slimsearch`
*
* @param app VuePress app instance
* @param themeData Theme data
* @param plugins Theme plugins options
* @returns Search plugin instance or null
*/
const getSearchPlugin = (app, themeData, plugins) => {
	const encryptedPaths = keys(themeData.encrypt.config ?? {});
	const isPageEncrypted = ({ path }) => encryptedPaths.some((key) => startsWith(decodeURI(path), key));
	if (isPlainObject(plugins.docsearch)) {
		if (!docsearchPlugin) {
			logMissingPkg("@vuepress/plugin-docsearch");
			return null;
		}
		return docsearchPlugin(plugins.docsearch);
	}
	if (isPlainObject(plugins.meilisearch)) {
		if (!meilisearchPlugin) {
			logMissingPkg("@vuepress/plugin-meilisearch");
			return null;
		}
		return meilisearchPlugin(plugins.meilisearch);
	}
	if (plugins.slimsearch) {
		if (!slimsearchPlugin) {
			logMissingPkg("@vuepress/plugin-slimsearch");
			return null;
		}
		return slimsearchPlugin({
			indexContent: true,
			customFields: [{
				getter: (page) => page.frontmatter.category,
				formatter: getFullLocaleConfig({
					app,
					default: themeLocaleInfo.map(([langs, { blogLocales }]) => [langs, `${blogLocales.category}: $content`])
				})
			}, {
				getter: (page) => page.frontmatter.tag,
				formatter: getFullLocaleConfig({
					app,
					default: themeLocaleInfo.map(([langs, { blogLocales }]) => [langs, `${blogLocales.tag}: $content`])
				})
			}],
			filter: (page) => !isPageEncrypted(page),
			...isPlainObject(plugins.slimsearch) ? plugins.slimsearch : {}
		});
	}
	if (plugins.search) {
		logger$1.warn(`${colors.cyan("search")} option is deprecated. Please use ${colors.cyan("slimsearch")} to move to powerful slimsearch instead.`);
		if (!searchPlugin) {
			logMissingPkg("@vuepress/plugin-search");
			return null;
		}
		return searchPlugin({
			isSearchable: (page) => !isPageEncrypted(page),
			...isPlainObject(plugins.search) ? plugins.search : {}
		});
	}
	return null;
};

//#endregion
//#region src/node/plugins/seo.ts
/**
* Resolve options for `@vuepress/plugin-seo`
*
* @param themeData - theme data
* @param seo - options for `@vuepress/plugin-seo`
* @param hostname - hostname of current site
*
* @returns SEO plugin instance or null
*/
const getSEOPlugin = (themeData, seo, hostname = "") => {
	if (seo === false) return null;
	const seoOptions = isPlainObject(seo) ? seo : {};
	if (keys(seoOptions).length === 0 && !hostname) return null;
	return seoPlugin({
		hostname,
		author: themeData.author ?? themeData.locales["/"].author,
		isArticle: ({ filePathRelative, frontmatter }) => frontmatter.article ?? (Boolean(filePathRelative) && !frontmatter.home),
		...seoOptions
	});
};

//#endregion
//#region src/node/plugins/sitemap.ts
/**
* Resolve options for `@vuepress/plugin-sitemap`
*
* @param options Sitemap plugin options or a boolean to enable it with default options
* @param hostname Hostname for sitemap plugin
* @returns Sitemap plugin instance or null
*/
const getSitemapPlugin = (options, hostname) => {
	if (options === false) return null;
	const sitemapOptions = isPlainObject(options) ? options : {};
	if (keys(sitemapOptions).length === 0 && !hostname) return null;
	return sitemapPlugin({
		hostname,
		...sitemapOptions
	});
};

//#endregion
//#region src/node/plugins/watermark.ts
let watermarkPlugin = null;
try {
	({watermarkPlugin} = await import("@vuepress/plugin-watermark"));
} catch {}
/**
* Resolve options for `@vuepress/plugin-watermark`
*
* @param options - User options
* @returns Watermark plugin instance or `null`
*/
const getWatermarkPlugin = (options) => {
	if (!options) return null;
	if (!watermarkPlugin) {
		logMissingPkg("@vuepress/plugin-watermark");
		return null;
	}
	return watermarkPlugin(isPlainObject(options) ? options : {});
};

//#endregion
//#region src/node/plugins/getPlugins.ts
/**
* Get theme plugins
*
* @param app - VuePress app
* @param themeData - theme data
* @param options - theme options
* @param compact - whether to use compact mode
*
* @returns theme plugins
*/
const getPlugins = (app, themeData, { markdown: markdownOptions = {}, plugins: pluginsOptions = {}, ...options }, compact = false) => {
	checkPluginsOptions(pluginsOptions);
	const { alert = false, hint = true, include = true, linksCheck, math } = markdownOptions;
	const { backToTop, copyCode, icon, photoSwipe } = pluginsOptions;
	return [
		linksCheck === false ? null : linksCheckPlugin(isPlainObject(linksCheck) ? linksCheck : {}),
		markdownChartPlugin(markdownOptions),
		markdownExtPlugin(markdownOptions),
		alert || hint ? markdownHintPlugin({
			alert,
			hint
		}) : null,
		include ? markdownIncludePlugin(isPlainObject(include) ? include : {}) : null,
		isPlainObject(math) ? markdownMathPlugin(math) : math ? markdownMathPlugin() : null,
		markdownOptions.preview ? markdownPreviewPlugin() : null,
		markdownTabPlugin(markdownOptions),
		getMdEnhancePlugin(markdownOptions, compact),
		getMarkdownImagePlugin(markdownOptions),
		getMarkdownStylizePlugin(markdownOptions),
		getRevealJsPlugin(markdownOptions.revealjs),
		themeDataPlugin({ themeData }),
		backToTop === false ? null : backToTopPlugin(isPlainObject(backToTop) ? backToTop : {}),
		copyCode === false ? null : copyCodePlugin(isPlainObject(copyCode) ? copyCode : {}),
		icon === false ? null : iconPlugin({
			...isPlainObject(icon) ? icon : {},
			component: "VPIcon"
		}),
		photoSwipe === false ? null : photoSwipePlugin(isPlainObject(photoSwipe) ? photoSwipe : {}),
		getComponentsPlugin(pluginsOptions.components, compact),
		getActiveHeaderLinksPlugin(pluginsOptions.activeHeaderLinks),
		getCatalogPlugin(pluginsOptions.catalog),
		pluginsOptions.nprogress === false ? null : nprogressPlugin(),
		getBlogPlugin(themeData, pluginsOptions.blog, options.hotReload),
		getCommentPlugin(pluginsOptions.comment),
		getCopyrightPlugin(themeData, pluginsOptions.copyright, options.hostname),
		getSEOPlugin(themeData, pluginsOptions.seo, options.hostname),
		getFeedPlugin(themeData, pluginsOptions.feed, options.hostname, options.favicon, compact),
		getNoticePlugin(pluginsOptions.notice),
		getPwaPlugin(pluginsOptions.pwa, options.favicon),
		getSearchPlugin(app, themeData, pluginsOptions),
		getSitemapPlugin(pluginsOptions.sitemap, options.hostname),
		getRtlPlugin(themeData),
		getRedirectPlugin(pluginsOptions.redirect),
		getWatermarkPlugin(pluginsOptions.watermark)
	].filter((item) => item != null);
};

//#endregion
//#region src/node/plugins/prismjs.ts
let prismjsPlugin = null;
try {
	({prismjsPlugin} = await import("@vuepress/plugin-prismjs"));
} catch {}
/**
* Composition Api to use `@vuepress/plugin-prismjs`
*
* @param app - VuePress app instance
* @param options - User options
*/
const usePrismjsPlugin = (app, options = {}) => {
	const { plugins } = app.pluginApi;
	if (!prismjsPlugin) {
		logMissingPkg("@vuepress/plugin-prismjs");
		return;
	}
	if (plugins.every((plugin) => !isHighlighterPlugin(plugin))) app.use(prismjsPlugin(options));
};
/**
* Composition Api to remove `@vuepress/plugin-prismjs`
*
* @param app - VuePress app instance
*/
const removePrismjsPlugin = (app) => {
	const { plugins } = app.pluginApi;
	const index = plugins.findIndex((plugin) => plugin.name === "@vuepress/plugin-prismjs");
	if (index !== -1) app.pluginApi.plugins.splice(index, 1);
};

//#endregion
//#region src/node/plugins/shiki.ts
/**
* Composition Api to use `@vuepress/plugin-shiki`
*
* @param app - VuePress app
* @param options - Shiki plugin options
*/
const useShikiPlugin = (app, options = {}) => {
	const { plugins } = app.pluginApi;
	if (plugins.every((plugin) => !isHighlighterPlugin(plugin))) app.use(shikiPlugin({
		..."theme" in options ? {} : { themes: {
			light: "one-light",
			dark: "one-dark-pro"
		} },
		...options
	}));
};
/**
* Composition Api to remove `@vuepress/plugin-shiki`
*
* @param app - VuePress app
*/
const removeShikiPlugin = (app) => {
	const { plugins } = app.pluginApi;
	const index = plugins.findIndex((plugin) => plugin.name === "@vuepress/plugin-shiki");
	if (index !== -1) app.pluginApi.plugins.splice(index, 1);
};

//#endregion
//#region src/node/plugins/git.ts
/**
* Composition Api to use `@vuepress/plugin-git`
*
* @param app - VuePress app instance
* @param options - User options
* @param themeData - Theme data
*/
const useGitPlugin = (app, options, themeData) => {
	const { plugins } = app.pluginApi;
	if (plugins.every((plugin) => plugin.name !== "@vuepress/plugin-git") && options) {
		const defaultOptions = {
			createdTime: true,
			updatedTime: true,
			contributors: !Object.values(themeData.locales).every(({ contributors }) => contributors === false),
			changelog: Object.values(themeData.locales).some(({ changelog }) => changelog) || Boolean(themeData.changelog)
		};
		app.use(gitPlugin(isPlainObject(options) ? {
			...defaultOptions,
			...options
		} : defaultOptions));
	}
};

//#endregion
//#region src/node/plugins/pageConverter.ts
/**
* Inject basic page info to routeMeta
*
* @param page - page to inject info
*/
const injectPageInfo = (page) => {
	const frontmatter = page.frontmatter;
	page.routeMeta.title = page.title;
	if (frontmatter.shortTitle) page.routeMeta.shortTitle = frontmatter.shortTitle;
	if (frontmatter.icon) page.routeMeta.icon = frontmatter.icon;
	if (endsWith(page.path, "/")) {
		if (isPlainObject(frontmatter.dir)) {
			if ("order" in frontmatter.dir) page.routeMeta.order = frontmatter.dir.order;
			if (frontmatter.dir.index === false) page.routeMeta.index = false;
		}
	} else {
		if ("order" in frontmatter) page.routeMeta.order = frontmatter.order;
		if (frontmatter.index === false) page.routeMeta.index = false;
	}
	if (frontmatter.breadcrumbExclude) page.routeMeta.breadcrumbExclude = true;
};
const extendsPagePlugin = (themeData, behavior) => {
	const encryptedPaths = keys(themeData.encrypt.config ?? {});
	const isPageEncrypted = ({ path }) => encryptedPaths.some((key) => startsWith(decodeURI(path), key));
	return {
		name: "vuepress-theme-hope-extends-page",
		extendsPage: (page) => {
			const { filePathRelative } = page;
			if (behavior.compact) page.frontmatter = convertFrontmatter(page.frontmatter, filePathRelative ?? "");
			if (behavior.check) checkFrontmatter(page);
			if (isPageEncrypted(page)) {
				page.frontmatter.feed = false;
				page.frontmatter.seo = false;
			}
			if (themeData.locales[page.pathLocale]?.editLink ?? true) page.data.filePathRelative = filePathRelative;
			injectPageInfo(page);
		}
	};
};
const useExtendsPagePlugin = (app, themeData, behavior) => {
	app.use(extendsPagePlugin(themeData, behavior));
};

//#endregion
//#region src/node/plugins/usePlugins.ts
/**
* Use plugins to ensure they apply first
*
* @param app - VuePress app instance
* @param themeData - Theme data
* @param highlighter - Highlighter options
* @param plugins - User plugins options
* @param hotReload - Is hot reload mode
* @param behavior - Theme behavior options
*/
const usePlugins = (app, themeData, { highlighter }, plugins, hotReload, behavior) => {
	if (plugins.git) useGitPlugin(app, plugins.git, themeData);
	else if (hotReload || app.env.isBuild) useGitPlugin(app, true, themeData);
	if (plugins.readingTime ?? true) useReadingTimePlugin(app, isPlainObject(plugins.readingTime) ? plugins.readingTime : {});
	if (isPlainObject(highlighter)) if (highlighter.type === "prismjs") usePrismjsPlugin(app, highlighter);
	else useShikiPlugin(app, highlighter);
	else if (highlighter ?? true) if (highlighter === "prismjs") usePrismjsPlugin(app);
	else useShikiPlugin(app);
	useSassPalettePlugin(app, {
		id: "hope",
		config: ".vuepress/styles/config.scss",
		defaultConfig: `${TEMPLATE_FOLDER}/palette/config.scss`,
		palette: ".vuepress/styles/palette.scss",
		defaultPalette: `${TEMPLATE_FOLDER}/palette/palette.scss`,
		generator: `${TEMPLATE_FOLDER}/palette/generator.scss`,
		style: ".vuepress/styles/index.scss"
	});
	useExtendsPagePlugin(app, themeData, behavior);
};

//#endregion
//#region src/node/prepare/prepareConfigFile.ts
const prepareConfigFile = (app, { enableCatalog, enableBlog, enableEncrypt, enableIcon }, { custom }) => {
	const imports = [];
	const enhances = [];
	const setups = [];
	const actions = [];
	const layouts = [];
	const targetFolder = custom ? CLIENT_FOLDER : BUNDLE_FOLDER;
	if (enableCatalog) {
		imports.push(`import { defineCatalogInfoGetter } from "${getModulePath("@vuepress/plugin-catalog/client", import.meta)}"`, `import { h } from "vue"`, `import { resolveComponent } from "vue"`);
		actions.push(`\
defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});`);
	}
	if (enableBlog) {
		imports.push(`import { Blog, BloggerInfo, SocialMedias, setupBlog } from "${targetFolder}/exports/blog.js";`, `import "${CLIENT_FOLDER}/styles/blog/layout.scss";`);
		enhances.push(`app.component("BloggerInfo", BloggerInfo);`, `app.component("SocialMedias", SocialMedias);`);
		setups.push("setupBlog();");
		layouts.push("Blog");
	}
	if (enableEncrypt) {
		imports.push(`import { GlobalEncrypt, LocalEncrypt } from "${targetFolder}/exports/encrypt.js";`);
		enhances.push(`app.component("GlobalEncrypt", GlobalEncrypt);`, `app.component("LocalEncrypt", LocalEncrypt);`);
	}
	if (!enableIcon) {
		imports.push(`import noopComponent from "${getModulePath("@vuepress/helper/noopComponent", import.meta)}"`);
		enhances.push(`app.component("VPIcon", noopComponent);`);
	}
	return app.writeTemp(`theme-hope/config.js`, `\
import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "${targetFolder}/exports/base.js";

${imports.join("\n")}

import "${getModulePath("@vuepress/helper/colors.css", import.meta)}";
import "${getModulePath("@vuepress/helper/normalize.css", import.meta)}";
import "${getModulePath("@vuepress/helper/sr-only.css", import.meta)}";
import "${CLIENT_FOLDER}/styles/index.scss";

${actions.join("\n")}

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

${enhances.map((item) => `    ${item}`).join("\n")}
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
${setups.map((item) => `    ${item}`).join("\n")}
  },
  layouts: {
    Layout,
    NotFound,
${layouts.map((item) => `    ${item},`).join("\n")}
  }
};
`);
};

//#endregion
//#region src/node/prepare/prepareHighLighterScss.ts
const prepareHighLighterScss = async (app) => {
	const { plugins } = app.pluginApi;
	const highlighter = plugins.some((plugin) => plugin.name === "@vuepress/plugin-shiki") ? "shiki" : plugins.some((plugin) => plugin.name === "@vuepress/plugin-prismjs") ? "prismjs" : "none";
	await app.writeTemp("theme-hope/highlighter.scss", `\
$highlighter: "${highlighter}";
`);
};

//#endregion
//#region src/node/prepare/prepareSocialMediaIcons.ts
const prepareSocialMediaIcons = async (app, icons) => {
	if (icons) await app.writeTemp(`theme-hope/socialMedia.js`, `\
export const icons = ${JSON.stringify(icons)};
`);
};

//#endregion
//#region src/node/prepare/sidebar/getStructureInfo.ts
const getStructureInfo = (pages, scope) => {
	const sortedPages = pages.filter(({ filePathRelative, pathLocale }) => startsWith(filePathRelative, scope) && (scope !== "" || pathLocale === "/")).sort(({ filePathRelative: filePathRelative1 }, { filePathRelative: filePathRelative2 }) => filePathRelative1.localeCompare(filePathRelative2, void 0, {
		numeric: true,
		sensitivity: "accent"
	}));
	const structure = [];
	sortedPages.forEach((page) => {
		const relativePath = path.relative(scope, page.filePathRelative);
		const filename = path.basename(relativePath);
		let currentDir = structure;
		const levels = relativePath.split("/");
		levels.forEach((level, index) => {
			if (index === levels.length - 1) currentDir.push({
				type: "file",
				filename,
				path: relativePath
			});
			else {
				const result = currentDir.find((item) => item.type === "dir" && item.dirname === level);
				if (result) currentDir = result.children;
				else {
					const dirInfo = {
						type: "dir",
						dirname: level,
						path: levels.slice(0, index + 1).join("/"),
						children: []
					};
					currentDir.push(dirInfo);
					currentDir = dirInfo.children;
				}
			}
		});
	});
	return structure;
};

//#endregion
//#region src/node/prepare/sidebar/getTitleFromFilename.ts
const EN_PREPOSITION = new Set([
	"and",
	"or",
	"in",
	"on",
	"with",
	"by",
	"for",
	"at",
	"about",
	"under",
	"of",
	"to",
	"the",
	"into"
]);
const getTitleFromFilename = (filename) => {
	return filename.replaceAll(/[-_]/gu, " ").replaceAll(/(^|[^A-Z])([A-Z])/gu, (_all, match1, match2) => `${match1} ${match2.toLowerCase()}`).replaceAll(/ +/gu, " ").trim().split(" ").map((word, index) => EN_PREPOSITION.has(word) && index !== 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

//#endregion
//#region src/node/prepare/sidebar/getSidebarInfo.ts
const getSidebarChildrenInfo = ({ scope, pages, sorters }, children) => children.map((item) => getSidebarInfoFromStructure({
	pages,
	scope,
	sorters
}, item)).filter((item) => item != null).sort((infoA, infoB) => {
	for (const sorter of sorters) {
		const result = sorter(infoA, infoB);
		if (result !== 0) return result;
	}
	return 0;
});
const getSidebarInfoFromStructure = ({ scope, pages, sorters }, info) => {
	if (info.type === "file") {
		const page = pages.find(({ filePathRelative }) => filePathRelative === `${scope}${info.path}`);
		if (page.frontmatter.index === false) return null;
		return {
			type: "file",
			filename: info.filename,
			title: page.frontmatter.shortTitle ?? page.title,
			order: page.frontmatter.order ?? null,
			path: decodeURI(page.path) === page.pathInferred ? null : page.path,
			frontmatter: page.frontmatter,
			pageData: page.data
		};
	}
	const relatedPages = pages.filter(({ filePathRelative }) => startsWith(filePathRelative, `${scope}${info.path}/`));
	const READMEFile = info.children.find((child) => child.type === "file" && child.filename.toLowerCase() === "readme.md");
	if (READMEFile) {
		const readmePage = relatedPages.find(({ filePathRelative }) => filePathRelative === `${scope}${READMEFile.path}`);
		const dirOptions = readmePage.frontmatter.dir;
		const title = dirOptions?.text ?? readmePage.frontmatter.shortTitle ?? readmePage.title;
		const icon = dirOptions?.icon ?? readmePage.frontmatter.icon;
		const collapsible = dirOptions?.collapsible ?? true;
		const expanded = collapsible && dirOptions?.expanded === true;
		if (dirOptions?.index === false) return null;
		return {
			type: "dir",
			dirname: info.dirname,
			children: getSidebarChildrenInfo({
				pages: relatedPages,
				scope,
				sorters
			}, dirOptions?.link ? info.children.filter((item) => item.type !== "file" || item.filename.toLowerCase() !== "readme.md") : info.children),
			title,
			order: dirOptions?.order ?? null,
			groupInfo: {
				...collapsible ? { collapsible } : {},
				...expanded ? { expanded } : {},
				...icon ? { icon } : {},
				...dirOptions?.link ? { link: readmePage.pathInferred === decodeURI(readmePage.path) ? `${sanitizeFileName(info.dirname)}/` : readmePage.path } : {}
			},
			frontmatter: readmePage.frontmatter,
			pageData: readmePage.data
		};
	}
	return {
		type: "dir",
		dirname: info.dirname,
		children: getSidebarChildrenInfo({
			pages: relatedPages,
			scope,
			sorters
		}, info.children),
		title: getTitleFromFilename(info.dirname),
		order: null,
		groupInfo: { collapsible: true },
		frontmatter: null,
		pageData: null
	};
};
const getSidebarInfo = ({ pages, sorters, scope }) => getStructureInfo(pages, scope).map((info) => getSidebarInfoFromStructure({
	scope,
	pages,
	sorters
}, info)).filter((item) => item != null).sort((infoA, infoB) => {
	for (const sorter of sorters) {
		const result = sorter(infoA, infoB);
		if (result !== 0) return result;
	}
	return 0;
});

//#endregion
//#region src/node/prepare/sidebar/getSidebarSorter.ts
const sidebarReadmeSorter = (infoA, infoB) => {
	if (infoA.type === "file" && infoA.filename.toLowerCase() === "readme.md") return -1;
	if (infoB.type === "file" && infoB.filename.toLowerCase() === "readme.md") return 1;
	return 0;
};
const sidebarOrderSorter = (infoA, infoB) => {
	if (infoA.order == null) {
		if (infoB.order == null) return 0;
		return infoB.order;
	}
	if (infoB.order == null) return -infoA.order;
	if (infoA.order > 0) {
		if (infoB.order > 0) return infoA.order - infoB.order;
		return -1;
	}
	if (infoB.order < 0) return infoA.order - infoB.order;
	return 1;
};
const sidebarDateSorter = (infoA, infoB) => {
	if (infoA.frontmatter?.date instanceof Date) {
		if (infoB.frontmatter?.date instanceof Date) return infoA.frontmatter.date.getTime() - infoB.frontmatter.date.getTime();
		return -1;
	}
	if (infoB.frontmatter?.date instanceof Date) return 1;
	return 0;
};
const sidebarDateDescSorter = (infoA, infoB) => {
	if (infoA.frontmatter?.date instanceof Date) {
		if (infoB.frontmatter?.date instanceof Date) return infoB.frontmatter.date.getTime() - infoA.frontmatter.date.getTime();
		return -1;
	}
	if (infoB.frontmatter?.date instanceof Date) return 1;
	return 0;
};
const getFilename = (info) => info.type === "file" ? info.filename.replace(/\.md$/u, "") : info.dirname;
const sidebarFilenameSorter = (infoA, infoB) => {
	const result = getFilename(infoA).localeCompare(getFilename(infoB), void 0, {
		numeric: true,
		sensitivity: "accent"
	});
	if (result !== 0) return result;
	if (infoA.type === "file" && infoB.type === "dir") return -1;
	if (infoA.type === "dir" && infoB.type === "file") return 1;
	return 0;
};
const sidebarTitleSorter = (infoA, infoB) => infoA.title.localeCompare(infoB.title, void 0, { numeric: true });
const sortKeyMap = {
	readme: sidebarReadmeSorter,
	order: sidebarOrderSorter,
	date: sidebarDateSorter,
	"date-desc": sidebarDateDescSorter,
	filename: sidebarFilenameSorter,
	title: sidebarTitleSorter
};
const availableKeywords = keys(sortKeyMap);
const getSidebarSorter = (sorter) => {
	if (isString(sorter) && availableKeywords.includes(sorter)) return [sortKeyMap[sorter]];
	if (isFunction(sorter)) return [sorter];
	if (isArray(sorter)) {
		const result = sorter.map((item) => isString(item) ? sortKeyMap[item] : item).filter((item) => isFunction(item));
		if (result.length > 0) return result;
	}
	return [
		sidebarReadmeSorter,
		sidebarOrderSorter,
		sidebarTitleSorter,
		sidebarFilenameSorter
	];
};

//#endregion
//#region src/node/prepare/sidebar/prepareSidebarData.ts
const removeExtension = (path) => path.replace(/^(README|index)\.md$/iu, "").replace(/\.md$/u, "");
const getGeneratePaths = (sidebarConfig, prefix = "") => {
	const result = [];
	if (!isArray(sidebarConfig)) {
		logger$1.error(`Expecting array, but getting invalid sidebar config${prefix ? ` under ${prefix}` : ""} with: ${JSON.stringify(sidebarConfig)}`);
		return result;
	}
	sidebarConfig.forEach((item) => {
		if (isPlainObject(item) && "children" in item) {
			const childPrefix = `${prefix}${item.prefix ?? ""}`;
			if (item.children === "structure") result.push(childPrefix);
			else result.push(...getGeneratePaths(item.children, childPrefix));
		}
	});
	return result;
};
const getSidebarItems = (infos) => infos.map((info) => {
	if (info.type === "file") return info.path ?? removeExtension(sanitizeFileName(info.filename));
	return {
		text: info.title,
		prefix: `${sanitizeFileName(info.dirname)}/`,
		...info.groupInfo,
		children: getSidebarItems(info.children)
	};
});
const getSidebarData = (app, themeData, sorter) => {
	const generatePaths = [];
	const sorters = getSidebarSorter(sorter);
	entries(themeData.locales).forEach(([localePath, { sidebar = "structure" }]) => {
		if (isArray(sidebar)) generatePaths.push(...getGeneratePaths(sidebar));
		else if (isPlainObject(sidebar)) entries(sidebar).forEach(([prefix, config]) => {
			if (config === "structure") generatePaths.push(prefix);
			else if (isArray(config)) generatePaths.push(...getGeneratePaths(config).map((item) => `${prefix}${item}`));
		});
		else if (sidebar === "structure") generatePaths.push(localePath);
	});
	const sidebarData = fromEntries(generatePaths.map((path) => [path, getSidebarItems(getSidebarInfo({
		pages: app.pages,
		sorters,
		scope: removeLeadingSlash(ensureEndingSlash(path))
	}))]));
	if (app.env.isDebug) logger$1.info(`Sidebar structure data: ${JSON.stringify(sidebarData, null, 2)}`);
	return sidebarData;
};
const prepareSidebarData = async (app, themeData, sorter) => {
	const sidebarData = getSidebarData(app, themeData, sorter);
	await app.writeTemp("theme-hope/sidebar.js", `\
export const sidebarData = ${JSON.stringify(sidebarData)};
`);
};

//#endregion
//#region src/node/hopeTheme.ts
const BEHAVIOR_DEFAULTS = {
	check: true,
	compact: true,
	checkVuePress: true
};
/**
* VuePress Theme Hope
*
* @param themeOptions - theme options
* @param behaviorOptions - theme behavior options
*
* @returns VuePress theme instance
*/
const hopeTheme = (themeOptions, behaviorOptions = true) => {
	const behavior = isPlainObject(behaviorOptions) ? {
		...BEHAVIOR_DEFAULTS,
		...behaviorOptions
	} : behaviorOptions ? BEHAVIOR_DEFAULTS : {};
	if (behavior.checkVuePress) checkVuePressVersion();
	return (app) => {
		const isDebug = behavior.debug ? app.env.isDebug = true : app.env.isDebug;
		const { favicon, hotReload = isDebug, markdown = {}, plugins = {}, hostname, sidebarSorter, ...mainThemeOptions } = behavior.compact ? convertThemeOptions(themeOptions) : themeOptions;
		if (behavior.compact) checkLegacyStyle(app);
		const status = getThemeStatus(app, themeOptions);
		const themeData = getThemeData(app, mainThemeOptions, status);
		const icons = status.enableBlog ? getSocialMediaIcons(themeData) : null;
		checkVuePressMarkdownOptions(app.options.markdown, markdown);
		usePlugins(app, themeData, markdown, plugins, hotReload, behavior);
		if (isDebug) logger$1.info("Plugin options:", plugins);
		return {
			name: "vuepress-theme-hope",
			...behavior.custom ? { alias: { "@theme-hope": path.resolve(CLIENT_FOLDER) } } : {},
			define: () => ({
				__VP_CUSTOM__: behavior.custom ?? false,
				__VP_BLOG_TYPES__: status.blogTypes,
				__VP_I18N__: status.isI18nProject,
				__VP_READING_TIME__: status.enableReadingTime,
				__VP_REPO__: status.hasRepo
			}),
			extendsBundlerOptions: (bundlerConfig) => {
				extendsBundlerOptions(bundlerConfig, app, behavior.custom);
			},
			extendsMarkdownOptions: (markdownOptions) => {
				checkThemeMarkdownOptions(markdownOptions, markdown);
			},
			onInitialized: () => {
				if (favicon) addFavicon(app, favicon);
				if (behavior.check) checkUserPlugins(app);
			},
			onPrepared: async () => {
				await Promise.all([
					prepareSidebarData(app, themeData, sidebarSorter),
					prepareHighLighterScss(app),
					prepareSocialMediaIcons(app, icons)
				]);
			},
			onWatched: (_, watchers) => {
				if (hotReload) {
					const structureSidebarWatcher = watch("pages", {
						cwd: app.dir.temp(),
						ignoreInitial: true,
						ignored: (filePath, stats) => Boolean(stats?.isFile() && !filePath.endsWith(".vue"))
					});
					structureSidebarWatcher.on("add", () => {
						prepareSidebarData(app, themeData, sidebarSorter);
					});
					structureSidebarWatcher.on("change", () => {
						prepareSidebarData(app, themeData, sidebarSorter);
					});
					structureSidebarWatcher.on("unlink", () => {
						prepareSidebarData(app, themeData, sidebarSorter);
					});
					watchers.push(structureSidebarWatcher);
				}
			},
			plugins: getPlugins(app, themeData, {
				markdown,
				plugins,
				hostname,
				hotReload,
				favicon
			}, behavior.compact),
			templateBuild: `${TEMPLATE_FOLDER}/index.build.html`,
			templateBuildRenderer: (template, { content, head, lang, prefetch, preload, scripts, styles, version }) => template.replace(TemplateRendererOutlet.Content, () => content).replace(TemplateRendererOutlet.Head, head).replace("{{ themeVersion }}", VERSION).replace("{{ themeMode }}", mainThemeOptions.darkmode === "enable" ? "dark" : "light").replace(TemplateRendererOutlet.Lang, lang).replace(TemplateRendererOutlet.Prefetch, prefetch).replace(TemplateRendererOutlet.Preload, preload).replace(TemplateRendererOutlet.Scripts, scripts).replace(TemplateRendererOutlet.Styles, styles).replace(TemplateRendererOutlet.Version, version),
			clientConfigFile: () => prepareConfigFile(app, status, behavior)
		};
	};
};

//#endregion
export { arraySidebar, backToTop, blog, catalog, checkLegacyStyle, comment, components, convertFrontmatter, convertNavbarLayoutOptions, convertNavbarOptions, convertSidebarOptions, convertThemeOptions, copyCode, copyright, extendsBundlerOptions, feed, getAuthor, getCategory, getEncryptConfig, getPlugins, getSidebarData, getSidebarInfo, getSidebarSorter, getSocialMediaIcons, getStringArray, getStructureInfo, getTag, getThemeData, getThemeStatus, getTitleFromFilename, git, hopeTheme, linksCheck, navbar, notice, objectSidebar, photoSwipe, prepareConfigFile, prepareHighLighterScss, prepareSidebarData, prepareSocialMediaIcons, prismjs, pwa, readingTime, redirect, removePrismjsPlugin, removeShikiPlugin, revealjs, seo, shiki, sidebar, sidebarDateDescSorter, sidebarDateSorter, sidebarFilenameSorter, sidebarOrderSorter, sidebarReadmeSorter, sidebarTitleSorter, sitemap, themeLocaleInfo, usePlugins, usePrismjsPlugin, useShikiPlugin, watermark };
//# sourceMappingURL=index.js.map