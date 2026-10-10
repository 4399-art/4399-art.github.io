import { r as PLAY_SVG } from "../../icons-01ouCRxl.js";
import { h } from "vue";
import "../styles/playground.scss";

//#region src/client/components/Playground.ts
const Playground = ({ title = "", link }) => h("div", { class: "vp-container vp-playground" }, [h("div", { class: "vp-container-header" }, [title ? h("div", { class: "vp-container-title" }, decodeURIComponent(title)) : null, h("div", { class: "vp-playground-actions" }, [h("a", {
	class: "vp-playground-action no-external-link-icon",
	href: decodeURIComponent(link),
	target: "_blank",
	innerHTML: PLAY_SVG
})])]), h("div", { class: "vp-playground-container" }, h("iframe", { src: decodeURIComponent(link) }))]);
Playground.displayName = "Playground";

//#endregion
export { Playground as default };
//# sourceMappingURL=Playground.js.map