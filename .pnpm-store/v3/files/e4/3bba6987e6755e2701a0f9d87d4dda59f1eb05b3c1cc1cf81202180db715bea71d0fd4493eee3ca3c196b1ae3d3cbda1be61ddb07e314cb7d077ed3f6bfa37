import { a as usePageAuthor, c as usePure, d as useThemeLocale, l as useData$1, u as useTheme } from "./PageInfo-DTBGvCmc.js";
import { useElementHover, useEventListener, useFullscreen, usePreferredDark, useScrollLock, useStorage, useThrottleFn, useToggle, watchImmediate } from "@vueuse/core";
import { Transition, TransitionGroup, computed, defineComponent, h, inject, nextTick, onMounted, onUnmounted, provide, ref, resolveComponent, shallowRef, toRef, watch, watchEffect } from "vue";
import { AutoLink, ClientOnly, Content, RouteLink, onContentUpdated, resolveRoute, useRoute, useRoutePath, withBase } from "vuepress/client";
import { RenderDefault, ensureEndingSlash, entries, fromEntries, hasGlobalComponent, isArray, isLinkAbsolute, isLinkExternal, isLinkWithProtocol, isNumber, isPlainObject, isSlotContentEmpty, isString, keys, startsWith, useRoutePaths } from "@vuepress/helper/client";
import { sidebarData } from "@temp/theme-hope/sidebar.js";
import "./client/styles/base/page-footer.scss";
import noopComponent from "@vuepress/helper/noopComponent";
import { IconBase, RepoIcon, isActiveLink, resolveRepoLink, resolveRepoType } from "vuepress-shared/client";
import "./client/styles/appearance/color-mode-switch.scss";
import "./client/styles/appearance/color-mode.scss";
import "./client/styles/appearance/theme-color-picker.scss";
import cssVariables from "./client/styles/variables.module.scss";
import "./client/styles/appearance/theme-color.scss";
import "./client/styles/appearance/toggle-full-screen-button.scss";
import "./client/styles/appearance/toggle-full-screen.scss";
import "./client/styles/appearance/appearance-button.scss";
import "./client/styles/navbar/navbar-dropdown.scss";
import "./client/styles/navbar/navbar-brand.scss";
import "./client/styles/navbar/navbar-links.scss";
import "./client/styles/navbar/nav-screen-menu.scss";
import "./client/styles/navbar/nav-screen-links.scss";
import "@vuepress/helper/transition/fade-in-down.css";
import "./client/styles/navbar/nav-screen.scss";
import "./client/styles/navbar/repo-link.scss";
import "./client/styles/navbar/toggle-navbar-button.scss";
import "./client/styles/navbar/toggle-sidebar-button.scss";
import "./client/styles/navbar/navbar.scss";
import "./client/styles/sidebar/sidebar-child.scss";
import "./client/styles/sidebar/sidebar-group.scss";
import "./client/styles/sidebar/sidebar-links.scss";
import "./client/styles/sidebar/sidebar.scss";
import "@vuepress/helper/transition/fade-in.css";
import "./client/styles/base/main-layout.scss";
import "./client/styles/base/markdown-content.scss";
import "./client/styles/base/skip-link.scss";
import "./client/styles/home/hero-slide-down-button.scss";

//#region src/client/composables/useDarkMode.ts
const darkModeSymbol = Symbol(__VUEPRESS_DEV__ ? "darkMode" : "");
/**
* Inject dark mode global computed
*
* @returns Dark mode global computed
*/
const useDarkMode = () => {
	const darkMode = inject(darkModeSymbol);
	if (!darkMode) throw new Error("useDarkMode() is called without provider.");
	return darkMode;
};
const injectDarkMode = (app) => {
	const isDarkPreferred = usePreferredDark();
	const theme = useTheme();
	const config = computed(() => theme.value.darkmode ?? "switch");
	const status = useStorage("vuepress-theme-hope-scheme", "auto");
	const isDarkMode = computed(() => {
		switch (config.value) {
			case "disable": return false;
			case "enable": return true;
			case "auto": return isDarkPreferred.value;
			case "switch": return status.value === "dark" || status.value === "auto" && isDarkPreferred.value;
			case "toggle": return status.value === "dark";
			default: return status.value === "dark" || status.value === "auto" && isDarkPreferred.value;
		}
	});
	const canToggle = computed(() => {
		const darkmode = config.value;
		return darkmode === "switch" || darkmode === "toggle";
	});
	app.provide(darkModeSymbol, {
		canToggle,
		config,
		isDarkMode,
		status
	});
	Object.defineProperties(app.config.globalProperties, { $isDarkMode: { get: () => isDarkMode.value } });
};
const setupDarkMode = () => {
	const { config, isDarkMode, status } = useDarkMode();
	watchEffect(() => {
		if (config.value === "disable") status.value = "light";
		else if (config.value === "enable") status.value = "dark";
		else if (config.value === "toggle" && status.value === "auto") status.value = "light";
	});
	useEventListener("beforeprint", () => {
		if (isDarkMode.value) document.documentElement.dataset.theme = "light";
	});
	useEventListener("afterprint", () => {
		if (isDarkMode.value) document.documentElement.dataset.theme = "dark";
	});
	onMounted(() => {
		watchImmediate(isDarkMode, (value) => {
			document.documentElement.dataset.theme = value ? "dark" : "light";
		});
	});
};

//#endregion
//#region src/client/utils/isLinkInternal.ts
const isLinkInternal = (link) => !isLinkWithProtocol(link) && !isLinkExternal(link);

//#endregion
//#region src/client/utils/resolveLinkInfo.ts
/**
* Resolve AutoLink props from string
*
* @param item - The string to resolve
* @param preferFull - Whether to prefer full title
* @param currentPath - The current page path
* @returns AutoLink props
*/
const resolveLinkInfo = (item, preferFull = false, currentPath) => {
	const { meta, path, notFound } = resolveRoute(item, currentPath);
	return notFound ? {
		text: path,
		link: path
	} : {
		text: !preferFull && meta.shortTitle ? meta.shortTitle : meta.title || path,
		link: path,
		icon: meta.icon
	};
};

//#endregion
//#region src/client/utils/resolvePrefix.ts
const resolvePrefix = (prefix = "", path = "") => isLinkWithProtocol(path) || isLinkAbsolute(path) ? path : `${ensureEndingSlash(prefix)}${path}`;

//#endregion
//#region src/client/utils/sidebar/resolveSidebarItems.ts
/**
* Resolve sidebar item
*
* @param options - sidebar item config
* @param pathPrefix - current path prefix
* @returns resolved sidebar item
*/
const resolveSidebarItem = (options, pathPrefix) => {
	const config = isString(options) ? resolveLinkInfo(resolvePrefix(pathPrefix, options)) : isString(options.link) ? {
		...options,
		link: isLinkInternal(options.link) ? resolveRoute(resolvePrefix(pathPrefix, options.link)).path : options.link
	} : options;
	if ("children" in config) {
		const prefix = resolvePrefix(pathPrefix, config.prefix);
		const children = config.children === "structure" ? sidebarData[prefix] : config.children;
		return {
			...config,
			prefix,
			children: children.map((item) => resolveSidebarItem(item, prefix))
		};
	}
	return { ...config };
};
/**
* Resolve sidebar items if the config is an array
*
* @param options - resolve sidebar array item options
* @returns resolved sidebar items
*/
const resolveArraySidebarItems = ({ config, prefix = "" }) => config.map((item) => resolveSidebarItem(item, prefix));
/**
* Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
*
* @param options - resolve multi sidebar options
* @returns resolved sidebar items
*/
const resolveMultiSidebarItems = ({ config, routePath }) => {
	const sidebarRoutes = keys(config).sort((x, y) => y.length - x.length);
	for (const base of sidebarRoutes) if (startsWith(decodeURI(routePath), base)) {
		const matched = config[base];
		return resolveArraySidebarItems({
			config: matched === "structure" ? sidebarData[base] : matched || [],
			prefix: base
		});
	}
	console.warn(`${decodeURI(routePath)} is missing it's sidebar config.`);
	return [];
};
/**
* Resolve sidebar items global computed
*
* It should only be resolved and provided once
*
* @param options - resolve sidebar options
* @returns resolved sidebar items
*/
const resolveSidebarItems = ({ config, routeLocale, routePath }) => config === "structure" ? resolveArraySidebarItems({
	config: sidebarData[routeLocale],
	prefix: routeLocale
}) : isArray(config) ? resolveArraySidebarItems({ config }) : isPlainObject(config) ? resolveMultiSidebarItems({
	config,
	routePath
}) : [];

//#endregion
//#region src/client/composables/sidebar/useSidebarItems.ts
const sidebarItemsSymbol = Symbol(__VUEPRESS_DEV__ ? "sidebarItems" : "");
/**
* Create sidebar items ref and provide as global computed in setup
*/
const setupSidebarItems = () => {
	const { frontmatter, routeLocale, routePath, themeLocale } = useData$1();
	const sidebarOptions = computed(() => frontmatter.value.home ? false : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure");
	provide(sidebarItemsSymbol, computed(() => resolveSidebarItems({
		config: sidebarOptions.value,
		routeLocale: routeLocale.value,
		routePath: routePath.value
	})));
};
/**
* Inject sidebar items global computed
*
* @returns Sidebar items global computed
*/
const useSidebarItems = () => {
	const sidebarItems = inject(sidebarItemsSymbol);
	if (!sidebarItems) throw new Error("useSidebarItems() is called without provider.");
	return sidebarItems;
};

//#endregion
//#region src/client/components/base/PageFooter.ts
var PageFooter_default = defineComponent({
	name: "PageFooter",
	setup() {
		const { frontmatter, theme, themeLocale } = useData$1();
		const author = usePageAuthor();
		const enabled = computed(() => {
			const { copyright, footer } = frontmatter.value;
			return footer !== false && Boolean(copyright || footer || themeLocale.value.displayFooter);
		});
		const footer = computed(() => {
			const { footer } = frontmatter.value;
			return isString(footer) ? footer : themeLocale.value.footer ?? "";
		});
		const authorText = computed(() => author.value.map(({ name }) => name).join(", "));
		const getCopyrightText = (license) => `Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} ${authorText.value} ${license ? `${license} Licensed` : ""}`;
		const copyright = computed(() => {
			const { copyright, license = "" } = frontmatter.value;
			const { license: globalLicense } = theme.value;
			const { copyright: globalCopyright } = themeLocale.value;
			return copyright ?? (license ? getCopyrightText(license) : globalCopyright ?? (authorText.value || globalLicense ? getCopyrightText(globalLicense) : false));
		});
		return () => enabled.value ? h("footer", {
			class: "vp-footer-wrapper",
			"vp-footer": ""
		}, [footer.value ? h("div", {
			class: "vp-footer",
			innerHTML: footer.value
		}) : null, copyright.value ? h("div", {
			class: "vp-copyright",
			innerHTML: copyright.value
		}) : null]) : null;
	}
});

//#endregion
//#region src/client/components/appearance/AppearanceIcon.ts
const AppearanceIcon = () => h(IconBase, { name: "outlook" }, () => [h("path", { d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z" })]);
AppearanceIcon.displayName = "AppearanceIcon";

//#endregion
//#region src/client/components/appearance/ColorModeSwitch.ts
const AutoColorModeIcon = () => h(IconBase, { name: "auto" }, () => h("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z" }));
AutoColorModeIcon.displayName = "AutoColorModeIcon";
const LightColorModeIcon = () => h(IconBase, { name: "light" }, () => h("path", { d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z" }));
LightColorModeIcon.displayName = "LightColorModeIcon";
const DarkColorModeIcon = () => h(IconBase, { name: "dark" }, () => h("path", { d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z" }));
DarkColorModeIcon.displayName = "DarkColorModeIcon";
var ColorModeSwitch_default = defineComponent({
	name: "ColorModeSwitch",
	setup() {
		const { config, isDarkMode, status } = useDarkMode();
		const isPure = usePure();
		const updateDarkmodeStatus = () => {
			if (config.value === "switch") status.value = {
				light: "dark",
				dark: "auto",
				auto: "light"
			}[status.value];
			else status.value = status.value === "light" ? "dark" : "light";
		};
		const toggleDarkmode = async (event) => {
			if (!(document.startViewTransition && !globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches && !isPure.value)) {
				updateDarkmodeStatus();
				return;
			}
			const x = event.clientX;
			const y = event.clientY;
			const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
			const oldStatus = isDarkMode.value;
			await document.startViewTransition(async () => {
				updateDarkmodeStatus();
				await nextTick();
			}).ready;
			if (isDarkMode.value !== oldStatus) document.documentElement.animate({ clipPath: isDarkMode.value ? [`circle(${endRadius}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`] : [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`] }, {
				duration: 400,
				pseudoElement: isDarkMode.value ? "::view-transition-old(root)" : "::view-transition-new(root)"
			});
		};
		return () => h("button", {
			type: "button",
			class: "vp-color-mode-switch",
			id: "color-mode-switch",
			onClick: toggleDarkmode
		}, [
			h(AutoColorModeIcon, { style: { display: status.value === "auto" ? "block" : "none" } }),
			h(DarkColorModeIcon, { style: { display: status.value === "dark" ? "block" : "none" } }),
			h(LightColorModeIcon, { style: { display: status.value === "light" ? "block" : "none" } })
		]);
	}
});

//#endregion
//#region src/client/composables/appearance/useAppearanceLocale.ts
const useAppearanceLocale = () => {
	const themeLocale = useThemeLocale();
	return computed(() => themeLocale.value.outlookLocales);
};

//#endregion
//#region src/client/components/appearance/ColorMode.ts
var ColorMode_default = defineComponent({
	name: "ColorMode",
	setup() {
		const appearanceLocale = useAppearanceLocale();
		const { canToggle } = useDarkMode();
		return () => canToggle.value ? h("div", { class: "vp-color-mode" }, [h("label", {
			class: "vp-color-mode-title",
			for: "color-mode-switch"
		}, appearanceLocale.value.darkmode), h(ColorModeSwitch_default)]) : null;
	}
});

//#endregion
//#region src/client/components/appearance/ThemeColorPicker.ts
const THEME_COLOR_KEY = "VUEPRESS_THEME_COLOR";
var ThemeColorPicker_default = defineComponent({
	name: "ThemeColorPicker",
	props: { themeColors: {
		type: Object,
		required: true
	} },
	setup(props) {
		const { isDarkMode } = useDarkMode();
		const activeThemeColors = computed(() => {
			const themeColors = new Map(Object.entries(props.themeColors));
			for (const [name, color] of themeColors.entries()) {
				if (name.includes("light")) if (isDarkMode.value) themeColors.delete(name);
				else {
					themeColors.set(name.replace("light-", ""), color);
					themeColors.delete(name);
				}
				if (name.includes("dark")) if (isDarkMode.value) {
					themeColors.set(name.replace("dark-", ""), color);
					themeColors.delete(name);
				} else themeColors.delete(name);
			}
			return [...themeColors.entries()].map(([name, color]) => ({
				name,
				color
			}));
		});
		const setThemeColor = (name = "") => {
			const classes = document.documentElement.classList;
			const colorNames = activeThemeColors.value.map(({ name }) => name);
			if (!name) {
				localStorage.removeItem(THEME_COLOR_KEY);
				classes.remove(...colorNames);
				return;
			}
			classes.remove(...colorNames.filter((themeColorClass) => themeColorClass !== name));
			classes.add(name);
			localStorage.setItem(THEME_COLOR_KEY, name);
		};
		onMounted(() => {
			const theme = localStorage.getItem(THEME_COLOR_KEY);
			if (theme) setThemeColor(theme);
		});
		return () => h("ul", {
			class: "vp-theme-color-picker",
			id: "theme-color-picker"
		}, [h("li", h("span", {
			class: "theme-color",
			onClick: () => {
				setThemeColor();
			}
		})), activeThemeColors.value.map(({ name, color }) => h("li", h("span", {
			style: { background: color },
			onClick: () => {
				setThemeColor(name);
			}
		})))]);
	}
});

//#endregion
//#region src/client/components/appearance/ThemeColor.ts
const hasMultipleThemeColors = cssVariables.hasMultipleThemeColors === "true";
const themeColors = hasMultipleThemeColors ? fromEntries(entries(cssVariables).filter(([key]) => key.startsWith("theme-"))) : {};
var ThemeColor_default = defineComponent({
	name: "ThemeColor",
	setup() {
		const appearanceLocale = useAppearanceLocale();
		return () => hasMultipleThemeColors ? h("div", { class: "vp-theme-color" }, [h("label", {
			class: "vp-theme-color-title",
			for: "theme-color-picker"
		}, appearanceLocale.value.themeColor), h(ThemeColorPicker_default, { themeColors })]) : null;
	}
});

//#endregion
//#region src/client/components/appearance/ToggleFullScreenButton.ts
const CancelFullScreenIcon = () => h(IconBase, { name: "cancel-fullscreen" }, () => h("path", { d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z" }));
CancelFullScreenIcon.displayName = "CancelFullScreenIcon";
const EnterFullScreenIcon = () => h(IconBase, { name: "enter-fullscreen" }, () => h("path", { d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z" }));
EnterFullScreenIcon.displayName = "EnterFullScreenIcon";
var ToggleFullScreenButton_default = defineComponent({
	name: "ToggleFullScreenButton",
	setup() {
		const { isSupported, isFullscreen, toggle } = useFullscreen();
		return () => isSupported.value ? h("button", {
			type: "button",
			id: "full-screen-switch",
			class: "full-screen",
			ariaPressed: isFullscreen.value,
			onClick: () => toggle()
		}, isFullscreen.value ? h(CancelFullScreenIcon) : h(EnterFullScreenIcon)) : null;
	}
});

//#endregion
//#region src/client/components/appearance/ToggleFullScreen.ts
var ToggleFullScreen_default = defineComponent({
	name: "ToggleFullScreenButton",
	setup() {
		const appearanceLocale = useAppearanceLocale();
		const { isSupported } = useFullscreen();
		return () => isSupported.value ? h("div", { class: "full-screen-wrapper" }, [h("label", {
			class: "full-screen-title",
			for: "full-screen-switch"
		}, appearanceLocale.value.fullscreen), h(ToggleFullScreenButton_default)]) : null;
	}
});

//#endregion
//#region src/client/components/appearance/AppearanceSettings.ts
var AppearanceSettings_default = defineComponent({
	name: "AppearanceSettings",
	setup() {
		const theme = useTheme();
		const isPure = usePure();
		const enableFullScreen = computed(() => !isPure.value && theme.value.fullscreen);
		return () => h(ClientOnly, () => [
			hasMultipleThemeColors ? h(ThemeColor_default) : null,
			h(ColorMode_default),
			enableFullScreen.value ? h(ToggleFullScreen_default) : null
		]);
	}
});

//#endregion
//#region src/client/components/appearance/AppearanceButton.ts
var AppearanceButton_default = defineComponent({
	name: "AppearanceButton",
	setup() {
		const theme = useTheme();
		const { canToggle } = useDarkMode();
		const { isSupported } = useFullscreen();
		const isPure = usePure();
		const open = ref(false);
		const enableFullScreen = computed(() => !isPure.value && theme.value.fullscreen && isSupported);
		const enabled = computed(() => hasMultipleThemeColors || canToggle.value || enableFullScreen.value);
		onContentUpdated(() => {
			open.value = false;
		});
		return () => enabled.value ? h("div", { class: "vp-nav-item hide-in-mobile" }, canToggle.value && !enableFullScreen.value && !hasMultipleThemeColors ? h(ColorModeSwitch_default) : enableFullScreen.value && !canToggle.value && !hasMultipleThemeColors ? h(ToggleFullScreenButton_default) : h("button", {
			type: "button",
			class: ["vp-appearance-button", { open: open.value }],
			tabindex: "-1",
			"aria-hidden": true
		}, [h(AppearanceIcon), h("div", { class: "vp-appearance-dropdown" }, h(AppearanceSettings_default))])) : null;
	}
});

//#endregion
//#region src/client/components/navbar/I18nIcon.ts
const I18nIcon = () => h(IconBase, { name: "i18n" }, () => [h("path", { d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z" })]);
I18nIcon.displayName = "I18nIcon";

//#endregion
//#region src/client/components/base/AutoLink.ts
const AutoLink$1 = ({ config, iconSizing = "both" }, { emit, slots }) => {
	const { icon } = config;
	return h(AutoLink, {
		config,
		onFocusout: () => {
			emit("focusout");
		}
	}, {
		...slots,
		before: slots.before ?? (icon ? () => h(resolveComponent("VPIcon"), {
			icon,
			sizing: iconSizing
		}) : null)
	});
};
AutoLink$1.displayName = "AutoLink";

//#endregion
//#region src/client/components/navbar/NavbarDropdown.ts
var NavbarDropdown_default = defineComponent({
	name: "NavbarDropdown",
	props: { config: {
		type: Object,
		required: true
	} },
	slots: Object,
	setup(props, { slots }) {
		const config = toRef(props, "config");
		const dropdownAriaLabel = computed(() => config.value.ariaLabel ?? config.value.text);
		const open = ref(false);
		/**
		* Open the dropdown when user tab and click from keyboard.
		*
		* Use event.detail to detect tab and click from keyboard.
		* The Tab + Click is UIEvent > KeyboardEvent, so the detail is 0.
		*
		* @param event - click event
		* @see https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
		*/
		const handleDropdown = (event) => {
			if (event.detail === 0) open.value = !open.value;
		};
		onContentUpdated(() => {
			open.value = false;
		});
		return () => h("div", { class: ["vp-dropdown-wrapper", { open: open.value }] }, [h("button", {
			type: "button",
			class: "vp-dropdown-title",
			"aria-label": dropdownAriaLabel.value,
			onClick: handleDropdown
		}, [
			slots.title?.() ?? [h(resolveComponent("VPIcon"), { icon: config.value.icon }), props.config.text],
			h("span", { class: "arrow" }),
			h("ul", { class: "vp-dropdown" }, config.value.children.map((child, index) => {
				const isLastChild = index === config.value.children.length - 1;
				return h("li", { class: "vp-dropdown-item" }, "children" in child ? [h("h4", { class: "vp-dropdown-subtitle" }, child.link ? h(AutoLink$1, {
					config: child,
					onFocusout: () => {
						if (child.children.length === 0 && isLastChild) open.value = false;
					}
				}) : child.text), h("ul", { class: "vp-dropdown-subitems" }, child.children.map((grandchild, grandIndex) => h("li", { class: "vp-dropdown-subitem" }, h(AutoLink$1, {
					config: grandchild,
					onFocusout: () => {
						if (grandIndex === child.children.length - 1 && isLastChild) open.value = false;
					}
				}))))] : h(AutoLink$1, {
					config: child,
					onFocusout: () => {
						if (isLastChild) open.value = false;
					}
				}));
			}))
		])]);
	}
});

//#endregion
//#region src/client/composables/navbar/useNavbarLanguageDropdown.ts
const isAllowedRootPath = (path) => path === "/" || /^\/?404(?:\.html)?$/.test(path);
/**
* Get navbar config of select language dropdown
*
* @returns Navbar config of select language dropdown
*/
const useNavbarLanguageDropdown = () => {
	const { routeLocale, site, siteLocale, theme, themeLocale } = useData$1();
	const routePaths = useRoutePaths();
	const route = useRoute();
	const isMounted = ref(false);
	const isRootLocaleClean = computed(() => {
		const subLocales = Object.keys(site.value.locales).filter((localePath) => localePath !== "/");
		if (subLocales.length === 0) return false;
		const localeRegExp = new RegExp(`^(?:${subLocales.map((locale) => locale.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`)).join("|")})`);
		return routePaths.value.filter((path) => !localeRegExp.test(path)).every((path) => isAllowedRootPath(path));
	});
	onMounted(() => {
		isMounted.value = true;
	});
	return computed(() => {
		let localePaths = keys(site.value.locales);
		const extraLocales = entries(theme.value.extraLocales ?? {});
		if (isRootLocaleClean.value) localePaths = localePaths.filter((localePath) => localePath !== "/");
		if (localePaths.length < 2 && extraLocales.length === 0) return null;
		const { path, fullPath } = route;
		const { navbarLocales } = themeLocale.value;
		return {
			text: "",
			ariaLabel: navbarLocales.selectLangAriaLabel,
			children: [...localePaths.map((targetLocalePath) => {
				const targetSiteLocale = site.value.locales[targetLocalePath] ?? {};
				const targetThemeLocale = theme.value.locales[targetLocalePath] ?? {};
				const targetLang = targetSiteLocale.lang;
				const text = targetThemeLocale.navbarLocales.langName;
				let link;
				if (targetLang === siteLocale.value.lang) link = fullPath;
				else {
					const targetLocalePage = path.replace(routeLocale.value, targetLocalePath);
					link = routePaths.value.some((item) => item === targetLocalePage) ? isMounted.value ? fullPath.replace(path, targetLocalePage) : targetLocalePage : targetThemeLocale.home ?? targetLocalePath;
				}
				return {
					text,
					link
				};
			}), ...extraLocales.map(([text, localPath]) => ({
				text,
				link: localPath.replace(":route", (isMounted.value ? fullPath : localPath).replace(routeLocale.value, ""))
			}))]
		};
	});
};

//#endregion
//#region src/client/components/navbar/LanguageDropdown.ts
var LanguageDropdown_default = defineComponent({
	name: "LanguageDropdown",
	setup() {
		const dropdown = useNavbarLanguageDropdown();
		return () => dropdown.value ? h("div", { class: "vp-nav-item" }, h(NavbarDropdown_default, { config: dropdown.value }, { title: () => h(I18nIcon, {
			"aria-label": dropdown.value?.ariaLabel,
			style: {
				width: "1rem",
				height: "1rem",
				verticalAlign: "middle"
			}
		}) })) : null;
	}
});

//#endregion
//#region src/client/components/navbar/NavbarBrand.ts
var NavbarBrand_default = defineComponent({
	name: "NavbarBrand",
	setup() {
		const { routeLocale, siteLocale, themeLocale } = useData$1();
		const siteBrandLink = computed(() => themeLocale.value.home ?? routeLocale.value);
		const siteTitle = computed(() => siteLocale.value.title);
		const siteBrandTitle = computed(() => themeLocale.value.navbarTitle ?? siteTitle.value);
		const siteBrandLogo = computed(() => themeLocale.value.logo ? withBase(themeLocale.value.logo) : null);
		const siteBrandLogoDark = computed(() => themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null);
		return () => h(RouteLink, {
			to: siteBrandLink.value,
			class: "vp-brand",
			"aria-label": themeLocale.value.routerLocales.home
		}, () => [
			siteBrandLogo.value ? h("img", {
				class: ["vp-nav-logo", { light: Boolean(siteBrandLogoDark.value) }],
				src: siteBrandLogo.value,
				alt: ""
			}) : null,
			siteBrandLogoDark.value ? h("img", {
				class: ["vp-nav-logo dark"],
				src: siteBrandLogoDark.value,
				alt: ""
			}) : null,
			siteBrandTitle.value ? h("span", { class: ["vp-site-name", { "hide-in-pad": siteBrandLogo.value && (themeLocale.value.hideSiteNameOnMobile ?? true) }] }, siteBrandTitle.value) : null
		]);
	}
});

//#endregion
//#region src/client/composables/navbar/useNavbarItems.ts
const resolveNavbarItem = (item, prefix = "") => {
	if (isString(item)) return resolveLinkInfo(resolvePrefix(prefix, item));
	if ("children" in item) return {
		...item,
		...item.link && isLinkInternal(item.link) ? { link: resolveRoute(resolvePrefix(prefix, item.link)).path } : {},
		children: item.children.map((child) => resolveNavbarItem(child, resolvePrefix(prefix, item.prefix)))
	};
	return {
		...item,
		link: isLinkInternal(item.link) ? resolveRoute(resolvePrefix(prefix, item.link)).path : item.link
	};
};
const useNavbarItems = () => {
	const themeLocaleData = useThemeLocale();
	return computed(() => (themeLocaleData.value.navbar || []).map((item) => resolveNavbarItem(item)));
};

//#endregion
//#region src/client/components/navbar/NavbarLinks.ts
var NavbarLinks_default = defineComponent({
	name: "NavbarLinks",
	setup() {
		const navbarConfig = useNavbarItems();
		return () => navbarConfig.value.length > 0 ? h("nav", { class: "vp-nav-links" }, navbarConfig.value.map((config) => h("div", { class: "vp-nav-item hide-in-mobile" }, "children" in config ? h(NavbarDropdown_default, { config }) : h(AutoLink$1, {
			config,
			iconSizing: "height"
		})))) : null;
	}
});

//#endregion
//#region src/client/components/navbar/NavScreenMenu.ts
const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
var NavScreenMenu_default = defineComponent({
	name: "NavScreenMenu",
	props: { config: {
		type: Object,
		required: true
	} },
	setup(props) {
		const config = toRef(props, "config");
		const route = useRoute();
		const ariaLabel = computed(() => config.value.ariaLabel ?? config.value.text);
		const open = ref(false);
		onContentUpdated(() => {
			open.value = false;
		});
		watch(() => route.fullPath, () => {
			open.value = false;
		});
		return () => [h("button", {
			type: "button",
			class: ["vp-nav-screen-menu-title", { active: open.value }],
			"aria-label": ariaLabel.value,
			onClick: () => {
				open.value = !open.value;
			}
		}, [h("span", { class: "text" }, [h(resolveComponent("VPIcon"), {
			icon: config.value.icon,
			sizing: "both"
		}), props.config.text]), h("span", { class: ["arrow", open.value ? "down" : "end"] })]), h("ul", { class: ["vp-nav-screen-menu", { hide: !open.value }] }, config.value.children.map((child) => h("li", { class: "vp-nav-screen-menu-item" }, "children" in child ? [h("h4", { class: "vp-nav-screen-menu-subtitle" }, child.link ? h(AutoLink$1, {
			config: child,
			onFocusout: () => {
				if (isLastItemOfArray(child, config.value.children) && child.children.length === 0) open.value = false;
			}
		}) : child.text), h("ul", { class: "vp-nav-screen-menu-subitems" }, child.children.map((grandchild) => h("li", { class: "vp-nav-screen-menu-subitem" }, h(AutoLink$1, {
			config: grandchild,
			onFocusout: () => {
				if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config.value.children)) open.value = false;
			}
		}))))] : h(AutoLink$1, {
			config: child,
			onFocusout: () => {
				if (isLastItemOfArray(child, config.value.children)) open.value = false;
			}
		}))))];
	}
});

//#endregion
//#region src/client/components/navbar/NavScreenLinks.ts
var NavScreenLinks_default = defineComponent({
	name: "NavScreenLinks",
	setup() {
		const navbarConfig = useNavbarItems();
		return () => navbarConfig.value.length > 0 ? h("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config) => h("div", { class: "navbar-links-item" }, "children" in config ? h(NavScreenMenu_default, { config }) : h(AutoLink$1, { config })))) : null;
	}
});

//#endregion
//#region src/client/composables/useWindowSize.ts
const { mobileBreakPoint, pcBreakPoint } = cssVariables;
const getPixels = (length) => length.endsWith("px") ? Number(length.slice(0, -2)) : null;
const useWindowSize = () => {
	const isMobile = ref(false);
	const isPC = ref(false);
	const windowSizeHandler = () => {
		isMobile.value = window.innerWidth <= (getPixels(mobileBreakPoint) ?? 719);
		isPC.value = window.innerWidth >= (getPixels(pcBreakPoint) ?? 1440);
	};
	useEventListener("resize", windowSizeHandler, false);
	useEventListener("orientationchange", windowSizeHandler, false);
	onMounted(() => {
		windowSizeHandler();
	});
	return {
		isMobile,
		isPC
	};
};

//#endregion
//#region src/client/components/navbar/NavScreen.ts
var NavScreen_default = defineComponent({
	name: "NavScreen",
	props: { show: Boolean },
	slots: Object,
	setup(props, { slots }) {
		const { isMobile } = useWindowSize();
		const body = shallowRef();
		const isLocked = useScrollLock(body);
		onContentUpdated(() => {
			isLocked.value = false;
		});
		watch(isMobile, (value) => {
			if (!value && props.show) isLocked.value = false;
		});
		onMounted(() => {
			body.value = document.body;
		});
		onUnmounted(() => {
			isLocked.value = false;
		});
		return () => h(Transition, {
			name: "fade-in-down",
			onEnter: () => {
				isLocked.value = true;
			},
			onAfterLeave: () => {
				isLocked.value = false;
			}
		}, () => props.show ? h("div", {
			id: "nav-screen",
			class: "vp-nav-screen"
		}, h("div", { class: "vp-nav-screen-container" }, [
			slots.navScreenTop?.(),
			h(NavScreenLinks_default),
			h("div", { class: "vp-appearance-wrapper" }, h(AppearanceSettings_default)),
			slots.navScreenBottom?.()
		])) : null);
	}
});

//#endregion
//#region src/client/composables/navbar/useNavbarRepo.ts
/**
* Get navbar config of repository link
*
* @returns repository link config, or null if it doesn't exist or is hidden
*/
const useNavbarRepo = () => {
	const themeLocale = useThemeLocale();
	const repo = computed(() => themeLocale.value.repo);
	const repoLink = computed(() => repo.value ? resolveRepoLink(repo.value) : null);
	const repoType = computed(() => repo.value ? resolveRepoType(repo.value) : null);
	const repoLabel = computed(() => repoLink.value ? themeLocale.value.repoLabel ?? repoType.value ?? "Source" : null);
	return computed(() => {
		if (!repoLink.value || !repoLabel.value || themeLocale.value.repoDisplay === false) return null;
		return {
			type: repoType.value ?? "Source",
			label: repoLabel.value,
			link: repoLink.value
		};
	});
};

//#endregion
//#region src/client/components/navbar/RepoLink.ts
var RepoLink_default = defineComponent({
	name: "RepoLink",
	setup() {
		const repo = useNavbarRepo();
		return () => repo.value ? h("div", { class: "vp-nav-item vp-action" }, h("a", {
			class: "vp-action-link",
			href: repo.value.link,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": repo.value.label
		}, h(RepoIcon, {
			type: repo.value.type,
			style: {
				width: "1.25rem",
				height: "1.25rem",
				verticalAlign: "middle"
			}
		}))) : null;
	}
});

//#endregion
//#region src/client/components/navbar/ToggleNavbarButton.ts
const ToggleNavbarButton = ({ active = false }, { emit }) => h("button", {
	type: "button",
	class: ["vp-toggle-navbar-button", { "is-active": active }],
	"aria-label": "Toggle Navbar",
	"aria-expanded": active,
	"aria-controls": "nav-screen",
	onClick: () => {
		emit("toggle");
	}
}, h("span", [
	h("span", { class: "vp-top" }),
	h("span", { class: "vp-middle" }),
	h("span", { class: "vp-bottom" })
]));
ToggleNavbarButton.displayName = "ToggleNavbarButton";

//#endregion
//#region src/client/components/navbar/ToggleSidebarButton.ts
const ToggleSidebarButton = (_, { emit }) => h("button", {
	type: "button",
	class: "vp-toggle-sidebar-button",
	title: "Toggle Sidebar",
	onClick: () => {
		emit("toggle");
	}
}, h("span", { class: "icon" }));
ToggleSidebarButton.displayName = "ToggleSidebarButton";
ToggleSidebarButton.emits = ["toggle"];

//#endregion
//#region src/client/composables/navbar/useNavbarAutoHide.ts
const useNavbarAutoHide = () => {
	const themeLocale = useThemeLocale();
	const { isMobile } = useWindowSize();
	return computed(() => {
		const { navbarAutoHide = "mobile" } = themeLocale.value;
		return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile.value);
	});
};

//#endregion
//#region src/client/components/navbar/Navbar.ts
var Navbar_default = defineComponent({
	name: "NavBar",
	emits: ["toggleSidebar"],
	slots: Object,
	setup(_props, { emit, slots }) {
		const themeLocale = useThemeLocale();
		const { isMobile } = useWindowSize();
		const showScreen = ref(false);
		const autoHide = useNavbarAutoHide();
		const navbarLayout = computed(() => themeLocale.value.navbarLayout ?? {
			start: ["Brand"],
			center: ["Links"],
			end: [
				"Language",
				"Repo",
				"Outlook",
				"Search"
			]
		});
		const navbarComponentMap = {
			Brand: NavbarBrand_default,
			Language: __VP_I18N__ ? LanguageDropdown_default : noopComponent,
			Links: NavbarLinks_default,
			Repo: RepoLink_default,
			Outlook: AppearanceButton_default,
			Search: hasGlobalComponent("SearchBox") ? resolveComponent("SearchBox") : noopComponent
		};
		const getNavbarComponent = (component) => navbarComponentMap[component] ?? (hasGlobalComponent(component) ? resolveComponent(component) : noopComponent);
		onContentUpdated(() => {
			showScreen.value = false;
		});
		watch(isMobile, (value) => {
			if (!value) showScreen.value = false;
		});
		return () => [h("header", {
			key: "navbar",
			id: "navbar",
			class: ["vp-navbar", { "auto-hide": autoHide.value }],
			"vp-navbar": ""
		}, [
			h("div", { class: "vp-navbar-start" }, [h(ToggleSidebarButton, { onToggle: () => {
				if (showScreen.value) showScreen.value = false;
				emit("toggleSidebar");
			} }), navbarLayout.value.start?.map((item) => h(getNavbarComponent(item)))]),
			h("div", { class: "vp-navbar-center" }, [navbarLayout.value.center?.map((item) => h(getNavbarComponent(item)))]),
			h("div", { class: "vp-navbar-end" }, [navbarLayout.value.end?.map((item) => h(getNavbarComponent(item))), h(ToggleNavbarButton, {
				active: showScreen.value,
				onToggle: () => {
					showScreen.value = !showScreen.value;
				}
			})])
		]), h(NavScreen_default, { show: showScreen.value }, slots)];
	}
});

//#endregion
//#region src/client/utils/isActiveItem.ts
const isActiveItem = (route, item) => item.activeMatch ? new RegExp(item.activeMatch, "u").test(route.path) : isActiveLink(route, item.link);

//#endregion
//#region src/client/components/sidebar/SidebarChild.ts
var SidebarChild_default = defineComponent({
	name: "SidebarChild",
	props: { config: {
		type: Object,
		required: true
	} },
	setup(props) {
		const route = useRoute();
		return () => isString(props.config.link) ? h(AutoLink$1, {
			class: ["vp-sidebar-link", { active: isActiveItem(route, props.config) }],
			config: {
				...props.config,
				exact: true
			}
		}) : h("p", props, [h(resolveComponent("VPIcon"), {
			icon: props.config.icon,
			sizing: "both"
		}), props.config.text]);
	}
});

//#endregion
//#region src/client/utils/sidebar/isActiveSidebarItem.ts
const isActiveSidebarItem = (route, item) => "children" in item ? Boolean(item.prefix) && isActiveLink(route, item.prefix) || item.children.some((child) => isActiveSidebarItem(route, child)) : isActiveItem(route, item);

//#endregion
//#region src/client/components/sidebar/SidebarGroup.ts
var SidebarGroup_default = defineComponent({
	name: "SidebarGroup",
	props: {
		config: {
			type: Object,
			required: true
		},
		open: {
			type: Boolean,
			required: true
		}
	},
	emits: ["toggle"],
	setup(props, { emit }) {
		const route = useRoute();
		const hasBeenToggled = ref(false);
		const active = computed(() => isActiveSidebarItem(route, props.config));
		const exact = computed(() => isActiveItem(route, props.config));
		const shouldOpen = computed(() => props.open || props.config.expanded && !hasBeenToggled.value);
		return () => {
			const { collapsible, children, icon, prefix, link, text } = props.config;
			return h("section", { class: "vp-sidebar-group" }, [h(collapsible ? "button" : "p", {
				class: ["vp-sidebar-header", {
					clickable: collapsible || link,
					exact: exact.value,
					active: active.value
				}],
				...collapsible ? {
					type: "button",
					onClick: () => {
						hasBeenToggled.value = true;
						emit("toggle");
					}
				} : {}
			}, [
				h(resolveComponent("VPIcon"), {
					icon,
					sizing: "both"
				}),
				link ? h(AutoLink$1, {
					class: "vp-sidebar-title no-external-link-icon",
					config: {
						text,
						link
					}
				}) : h("span", { class: "vp-sidebar-title" }, text),
				collapsible ? h("span", { class: ["vp-arrow", shouldOpen.value ? "down" : "end"] }) : null
			]), shouldOpen.value || !collapsible ? h(SidebarLinks_default, {
				key: prefix,
				config: children
			}) : null]);
		};
	}
});

//#endregion
//#region src/client/components/sidebar/SidebarLinks.ts
var SidebarLinks_default = defineComponent({
	name: "SidebarLinks",
	props: { config: {
		type: Array,
		required: true
	} },
	setup(props) {
		const route = useRoute();
		const routePath = useRoutePath();
		const openGroupIndex = ref(-1);
		const toggleGroup = (index) => {
			openGroupIndex.value = index === openGroupIndex.value ? -1 : index;
		};
		watchImmediate(routePath, () => {
			openGroupIndex.value = props.config.findIndex((item) => isActiveSidebarItem(route, item));
		}, { flush: "post" });
		return () => h("ul", { class: "vp-sidebar-links" }, props.config.map((config, index) => h("li", "children" in config ? h(SidebarGroup_default, {
			config,
			open: index === openGroupIndex.value,
			onToggle: () => {
				toggleGroup(index);
			}
		}) : h(SidebarChild_default, { config }))));
	}
});

//#endregion
//#region src/client/components/sidebar/Sidebar.ts
var Sidebar_default = defineComponent({
	name: "SideBar",
	slots: Object,
	setup(_props, { slots }) {
		const route = useRoute();
		const sidebarItems = useSidebarItems();
		const sidebar = shallowRef();
		onMounted(() => {
			watchImmediate(() => route.hash, (hash) => {
				const activeSidebarItem = document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${route.path}${hash}"]`);
				if (!activeSidebarItem) return;
				const { top: sidebarTop, height: sidebarHeight } = sidebar.value.getBoundingClientRect();
				const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
				if (activeSidebarItemTop < sidebarTop) activeSidebarItem.scrollIntoView(true);
				else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) activeSidebarItem.scrollIntoView(false);
			});
		});
		return () => h("aside", {
			ref: sidebar,
			key: "sidebar",
			id: "sidebar",
			class: "vp-sidebar",
			"vp-sidebar": ""
		}, [
			slots.sidebarTop?.(),
			slots.sidebarItems?.(sidebarItems.value) ?? h(SidebarLinks_default, { config: sidebarItems.value }),
			slots.sidebarBottom?.()
		]);
	}
});

//#endregion
//#region src/client/components/base/MainLayout.ts
var MainLayout_default = defineComponent({
	name: "MainLayout",
	props: {
		containerClass: String,
		noNavbar: Boolean,
		noSidebar: Boolean,
		noToc: Boolean
	},
	slots: Object,
	setup(props, { slots }) {
		const { frontmatter, theme, themeLocale } = useData$1();
		const { isMobile, isPC } = useWindowSize();
		const isPure = usePure();
		const [isMobileSidebarOpen, toggleMobileSidebar] = useToggle(false);
		const [isDesktopSidebarCollapsed, toggleDesktopSidebar] = useToggle(false);
		const sidebarItems = useSidebarItems();
		const body = shallowRef();
		const isLocked = useScrollLock(body);
		const hideNavbar = ref(false);
		const autoHide = useNavbarAutoHide();
		watch(autoHide, (value) => {
			if (!value) hideNavbar.value = false;
		});
		const enableNavbar = computed(() => {
			if (props.noNavbar) return false;
			if (frontmatter.value.navbar === false || themeLocale.value.navbar === false) return false;
			return Boolean(themeLocale.value.logo ?? themeLocale.value.repo ?? themeLocale.value.navbar);
		});
		const enableExternalLinkIcon = computed(() => frontmatter.value.externalLinkIcon ?? theme.value.externalLinkIcon ?? true);
		const enableToc = computed(() => !props.noToc && !frontmatter.value.home && Boolean(frontmatter.value.toc ?? themeLocale.value.toc ?? true));
		const touchStart = {
			x: 0,
			y: 0
		};
		const onTouchStart = (event) => {
			touchStart.x = event.changedTouches[0].clientX;
			touchStart.y = event.changedTouches[0].clientY;
		};
		const onTouchEnd = (event) => {
			const dx = event.changedTouches[0].clientX - touchStart.x;
			const dy = event.changedTouches[0].clientY - touchStart.y;
			if (Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 40) if (dx > 0 && touchStart.x <= 80) toggleMobileSidebar(true);
			else toggleMobileSidebar(false);
		};
		let lastDistance = 0;
		useEventListener("scroll", useThrottleFn(() => {
			const distance = window.scrollY;
			if (distance <= 58 || distance < lastDistance) hideNavbar.value = false;
			else if (lastDistance + 200 < distance && !isMobileSidebarOpen.value && autoHide.value) hideNavbar.value = true;
			lastDistance = distance;
		}, 300, true));
		watch(isMobile, (value) => {
			if (!value) toggleMobileSidebar(false);
		});
		watch(isMobileSidebarOpen, (value) => {
			isLocked.value = value;
		});
		onContentUpdated(() => {
			toggleMobileSidebar(false);
		});
		onMounted(() => {
			body.value = document.body;
		});
		onUnmounted(() => {
			isLocked.value = false;
		});
		return () => {
			const sidebarTopContent = slots.sidebarTop?.();
			const sidebarItemsContent = slots.sidebarItems?.(sidebarItems.value);
			const sidebarBottomContent = slots.sidebarBottom?.();
			const isSidebarEmpty = isSlotContentEmpty(sidebarTopContent) && isSlotContentEmpty(sidebarItemsContent) && isSlotContentEmpty(sidebarBottomContent);
			const noSidebar = props.noSidebar || frontmatter.value.sidebar === false || (frontmatter.value.home || sidebarItems.value.length === 0) && isSidebarEmpty;
			return h(hasGlobalComponent("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : RenderDefault, () => h("div", {
				class: [
					"theme-container",
					{
						"hide-navbar": hideNavbar.value,
						"no-navbar": !enableNavbar.value,
						"sidebar-collapsed": !isMobile.value && !isPC.value && isDesktopSidebarCollapsed.value,
						"sidebar-open": isMobile.value && isMobileSidebarOpen.value,
						"no-sidebar": noSidebar,
						"external-link-icon": enableExternalLinkIcon.value,
						pure: isPure.value,
						"has-toc": enableToc.value
					},
					props.containerClass ?? "",
					frontmatter.value.containerClass ?? ""
				],
				"vp-container": "",
				onTouchStart,
				onTouchEnd
			}, [
				enableNavbar.value ? h(Navbar_default, { onToggleSidebar: () => toggleMobileSidebar() }, slots) : null,
				h(Transition, { name: "fade-in" }, () => isMobileSidebarOpen.value ? h("div", {
					class: "vp-sidebar-mask",
					onClick: () => toggleMobileSidebar(false)
				}) : null),
				h(Transition, { name: "fade-in" }, () => isMobile.value ? null : h("div", {
					class: "toggle-sidebar-wrapper",
					onClick: () => toggleDesktopSidebar()
				}, h("span", { class: ["arrow", isDesktopSidebarCollapsed.value ? "end" : "start"] }))),
				noSidebar ? null : h(Sidebar_default, null, slots),
				slots.default(),
				h(PageFooter_default)
			]));
		};
	}
});

//#endregion
//#region src/client/composables/useMetaInfo.ts
const useMetaInfo = () => {
	const { frontmatter, themeLocale } = useData$1();
	return {
		changelog: computed(() => frontmatter.value.changelog ?? ((themeLocale.value.changelog ?? false) && !frontmatter.value.home)),
		contributors: computed(() => {
			const { contributors, home } = frontmatter.value;
			return isArray(contributors) ? home ? false : themeLocale.value.contributors ?? true : contributors ?? (home ? false : themeLocale.value.contributors ?? true);
		}),
		lastUpdated: computed(() => frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true)
	};
};

//#endregion
//#region src/client/components/base/MarkdownContent.ts
var MarkdownContent_default = defineComponent({
	name: "MarkdownContent",
	props: { custom: Boolean },
	slots: Object,
	setup(props, { slots }) {
		const theme = useTheme();
		const { changelog, contributors } = useMetaInfo();
		const contentElement = ref();
		const isHovered = useElementHover(contentElement, {
			delayEnter: isNumber(theme.value.focus) ? theme.value.focus : 1500,
			delayLeave: 0
		});
		const enableFocus = computed(() => Boolean(theme.value.focus ?? theme.value.pure) && isHovered.value);
		onMounted(() => {
			const html = document.documentElement;
			watchImmediate(enableFocus, (value) => {
				html.classList.toggle("is-focusing", value);
			});
		});
		return () => h("div", {
			class: { custom: props.custom },
			"vp-content": ""
		}, [
			slots.contentBefore?.(),
			h(Content, {
				ref: contentElement,
				id: "markdown-content"
			}),
			slots.contentAfter?.(),
			changelog.value && hasGlobalComponent("GitChangelog") ? h(resolveComponent("GitChangelog")) : null,
			contributors.value === "content" && hasGlobalComponent("GitContributors") ? h(resolveComponent("GitContributors")) : null
		]);
	}
});

//#endregion
//#region src/client/components/base/SkipLink.ts
const focusMainContent = ({ target }) => {
	const el = document.querySelector(target.hash);
	if (el) {
		const removeTabIndex = () => {
			el.removeAttribute("tabindex");
			el.removeEventListener("blur", removeTabIndex);
		};
		el.setAttribute("tabindex", "-1");
		el.addEventListener("blur", removeTabIndex);
		el.focus();
		window.scrollTo(0, 0);
	}
};
var SkipLink_default = defineComponent({
	name: "SkipLink",
	props: { content: {
		type: String,
		default: "main-content"
	} },
	setup(props) {
		const themeLocale = useThemeLocale();
		const skipToMainContent = shallowRef();
		onContentUpdated(() => {
			skipToMainContent.value?.focus();
		});
		return () => [h("span", {
			ref: skipToMainContent,
			tabindex: "-1"
		}), h("a", {
			href: `#${props.content}`,
			class: "vp-skip-link sr-only",
			onClick: focusMainContent
		}, themeLocale.value.routerLocales.skipToContent)];
	}
});

//#endregion
//#region src/client/components/home/HeroSlideDownButton.ts
const SlideDownIcon = () => h(IconBase, { name: "slide-down" }, () => h("path", { d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z" }));
SlideDownIcon.displayName = "SlideDownIcon";
const HeroSlideDownButton = (_props, { emit }) => h("button", {
	type: "button",
	class: "vp-hero-slide-down-button",
	onClick: () => {
		emit("click");
	}
}, [h(SlideDownIcon), h(SlideDownIcon)]);
HeroSlideDownButton.displayName = "HeroSlideDownButton";

//#endregion
//#region src/client/components/transitions/DropTransition.ts
const unsetStyle = (el) => {
	el.style.transform = "translateY(0)";
	el.style.opacity = "1";
};
var DropTransition_default = defineComponent({
	name: "DropTransition",
	props: {
		delay: {
			type: Number,
			default: 0
		},
		duration: {
			type: Number,
			default: .25
		},
		group: Boolean,
		appear: Boolean
	},
	slots: Object,
	setup(props, { slots }) {
		const setStyle = (el) => {
			el.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
			el.style.transform = "translateY(-20px)";
			el.style.opacity = "0";
		};
		return () => {
			const attrs = {
				name: "drop",
				appear: props.appear,
				onAppear: setStyle,
				onAfterAppear: unsetStyle,
				onEnter: setStyle,
				onAfterEnter: unsetStyle,
				onBeforeLeave: setStyle
			};
			return props.group ? h(TransitionGroup, attrs, slots.default) : h(Transition, attrs, slots.default);
		};
	}
});

//#endregion
export { useDarkMode as _, useMetaInfo as a, AutoLink$1 as c, ColorModeSwitch_default as d, setupSidebarItems as f, setupDarkMode as g, injectDarkMode as h, MarkdownContent_default as i, ToggleFullScreenButton_default as l, resolveLinkInfo as m, HeroSlideDownButton as n, MainLayout_default as o, useSidebarItems as p, SkipLink_default as r, useWindowSize as s, DropTransition_default as t, ThemeColorPicker_default as u };
//# sourceMappingURL=DropTransition-CPVR6Hkk.js.map