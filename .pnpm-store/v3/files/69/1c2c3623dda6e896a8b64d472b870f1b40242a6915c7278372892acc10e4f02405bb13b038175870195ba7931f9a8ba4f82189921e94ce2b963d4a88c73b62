import { computed, defineComponent, h, onMounted } from "vue";
import { renderCodePen } from "create-codepen";
import "../styles/code-pen.scss";

//#region src/client/components/CodePen.ts
const CODE_PBN_LINK_REGEXP = /(?:^(?:https?:)?\/\/codepen.io\/|^\/|^)(.+?)\/(?:pen|embed)\/(.+?)\/?$/;
var CodePen_default = defineComponent({
	name: "CodePen",
	props: {
		link: String,
		user: String,
		slugHash: String,
		title: String,
		height: {
			type: [String, Number],
			default: 380
		},
		theme: {
			type: String,
			default: "default"
		},
		defaultTab: {
			type: Array,
			default: () => ["result"]
		},
		status: {
			type: String,
			default: "preview"
		}
	},
	setup(props) {
		const getInfo = () => {
			if (props.link) {
				const result = CODE_PBN_LINK_REGEXP.exec(props.link);
				if (result) return {
					user: result[1],
					slugHash: result[2]
				};
			}
			return null;
		};
		const user = computed(() => getInfo()?.user ?? props.user);
		const slugHash = computed(() => getInfo()?.slugHash ?? props.slugHash);
		const options = computed(() => ({
			user: user.value,
			"slug-hash": slugHash.value,
			"theme-id": props.theme,
			"default-tab": props.defaultTab.join(","),
			"pen-title": props.title,
			height: props.height,
			preview: props.status === "preview" ? "true" : ""
		}));
		onMounted(() => {
			if (props.status !== "clicktorun") renderCodePen(options.value, `.codepen-${slugHash.value}`);
		});
		return () => h("div", { class: ["codepen-wrapper", `codepen-${slugHash.value}`] }, [props.status === "clicktorun" ? h("button", {
			type: "button",
			class: "codepen-button",
			onClick: () => {
				renderCodePen(options.value, `.codepen-${slugHash.value}`);
			}
		}, "Run Code") : null, h("span", [
			"See ",
			h("a", { href: props.link }, props.title ?? "awesome CodePen"),
			" by ",
			h("a", { href: `https://codepen.io/${user.value}` }, user.value),
			" on ",
			h("a", { href: `https://codepen.io` }, "CodePen"),
			"."
		])]);
	}
});

//#endregion
export { CodePen_default as default };
//# sourceMappingURL=CodePen.js.map