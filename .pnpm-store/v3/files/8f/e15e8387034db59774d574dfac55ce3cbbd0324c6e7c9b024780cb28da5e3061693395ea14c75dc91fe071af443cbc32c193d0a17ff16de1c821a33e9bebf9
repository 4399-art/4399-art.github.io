import { isLinkExternal } from "@vuepress/helper/client";
import { h } from "vue";
import { RouteLink, withBase } from "vuepress/client";
import "../styles/vp-banner.scss";

//#region src/client/components/VPBanner.ts
const VPBanner = ({ title, content = "", logo = "", background = "", color = "", actions = [] }) => {
	const style = {};
	if (background) style.background = background;
	if (color) style.color = color;
	return h("div", {
		class: "vp-banner",
		style
	}, [logo ? h("img", {
		class: "vp-banner-logo",
		src: withBase(logo),
		loading: "lazy",
		"no-view": ""
	}) : null, h("div", { class: "vp-banner-body" }, [
		h("div", {
			class: "vp-banner-title",
			innerHTML: title
		}),
		h("div", {
			class: "vp-banner-content",
			innerHTML: content
		}),
		h("div", { class: "vp-banner-actions" }, actions.map(({ link, text, type = "primary" }) => isLinkExternal(link) ? h("a", {
			class: [
				"vp-banner-action",
				type,
				"no-external-link-icon"
			],
			href: link,
			target: "_blank"
		}, text) : h(RouteLink, {
			class: ["vp-banner-action", type],
			to: link
		}, () => text)))
	])]);
};
VPBanner.displayName = "VPBanner";

//#endregion
export { VPBanner as default };
//# sourceMappingURL=VPBanner.js.map