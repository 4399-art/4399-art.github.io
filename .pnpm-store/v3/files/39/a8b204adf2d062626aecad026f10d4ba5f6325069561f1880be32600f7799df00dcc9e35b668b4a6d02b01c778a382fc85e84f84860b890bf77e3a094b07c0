import { isLinkExternal } from "@vuepress/helper/client";
import { h } from "vue";
import { RouteLink, withBase } from "vuepress/client";
import "../styles/vp-card.scss";

//#region src/client/components/VPCard.ts
const VPCard = ({ title, desc = "", logo, background, color, link }) => {
	const children = [logo ? h("img", {
		class: "vp-card-logo",
		src: withBase(logo),
		loading: "lazy",
		"no-view": ""
	}) : null, h("div", { class: "vp-card-content" }, [
		h("div", {
			class: "vp-card-title",
			innerHTML: title
		}),
		h("hr"),
		h("div", {
			class: "vp-card-desc",
			innerHTML: desc
		})
	])];
	const style = {};
	if (background) style.background = background;
	if (color) style.color = color;
	return link ? isLinkExternal(link) ? h("a", {
		class: "vp-card",
		href: link,
		target: "_blank",
		style
	}, children) : h(RouteLink, {
		to: link,
		class: "vp-card",
		style
	}, () => children) : h("div", {
		class: "vp-card",
		style
	}, children);
};
VPCard.displayName = "VPCard";

//#endregion
export { VPCard as default };
//# sourceMappingURL=VPCard.js.map