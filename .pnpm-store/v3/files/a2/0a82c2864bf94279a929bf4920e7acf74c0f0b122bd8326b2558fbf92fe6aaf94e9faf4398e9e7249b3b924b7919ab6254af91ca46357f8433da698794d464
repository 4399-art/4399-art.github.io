import { t as DEFAULT_RATIO } from "../../utils-D2mBFlOE.js";
import { t as useSize } from "../../useSize-BEqkFlhV.js";
import { computed, defineComponent, h, onMounted } from "vue";
import sdk from "@stackblitz/sdk";
import "../styles/stack-blitz.scss";

//#region src/client/components/StackBlitz.ts
var StackBlitz_default = defineComponent({
	name: "StackBlitz",
	props: {
		id: {
			type: String,
			required: true
		},
		type: {
			type: String,
			default: "project"
		},
		width: {
			type: [String, Number],
			default: "100%"
		},
		height: [String, Number],
		ratio: {
			type: [String, Number],
			default: DEFAULT_RATIO
		},
		file: [String, Array],
		initialPath: String,
		embed: Boolean,
		load: Boolean,
		view: {
			type: String,
			default: "preview"
		},
		hideExplorer: Boolean,
		hideNavigation: Boolean,
		hideDevtools: Boolean,
		terminalHeight: {
			type: [String, Number],
			default: 30
		},
		devToolsHeight: {
			type: [String, Number],
			default: 30
		},
		text: {
			type: String,
			default: "Open in StackBlitz"
		},
		theme: {
			type: String,
			default: "dark"
		}
	},
	setup(props) {
		const { el, width, height, resize } = useSize(props);
		const options = computed(() => ({
			openFile: props.file,
			view: props.view,
			theme: props.theme,
			clickToLoad: props.load,
			hideExplorer: props.hideExplorer,
			hideNavigation: props.hideNavigation,
			hideDevTools: props.hideDevtools,
			initialPath: props.initialPath
		}));
		onMounted(async () => {
			if (props.embed) {
				await sdk[props.type === "github" ? "embedGithubProject" : "embedProjectId"](el.value, props.id, options.value);
				resize();
			}
		});
		return () => props.embed ? h("div", {
			ref: el,
			class: "stackblitz-container",
			style: {
				width: width.value,
				height: height.value
			}
		}) : h("div", { class: "stackblitz-container" }, h("button", {
			type: "button",
			class: "stackblitz-button",
			onClick: () => {
				sdk[props.type === "github" ? "openGithubProject" : "openProjectId"](props.id, options.value);
			}
		}, props.text));
	}
});

//#endregion
export { StackBlitz_default as default };
//# sourceMappingURL=StackBlitz.js.map