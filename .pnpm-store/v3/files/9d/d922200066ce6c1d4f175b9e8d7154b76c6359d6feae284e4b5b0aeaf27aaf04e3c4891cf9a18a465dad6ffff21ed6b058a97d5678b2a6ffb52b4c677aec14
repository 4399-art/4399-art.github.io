import { h } from "vue";
import "../styles/badge.scss";

//#region src/client/components/Badge.ts
const Badge = ({ type = "info", text = "", vertical, color, bgColor }, { slots }) => h("span", {
	class: [
		"vp-badge",
		type,
		{ diy: Boolean(color || bgColor) }
	],
	style: {
		backgroundColor: bgColor ?? false,
		color: color ?? false,
		verticalAlign: vertical ?? false
	}
}, slots.default?.() ?? text);
Badge.displayName = "Badge";

//#endregion
export { Badge as default };
//# sourceMappingURL=Badge.js.map