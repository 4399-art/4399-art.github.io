import { n as useSandpackConfig } from "../../sandpack-B2eVgAK3.js";
import { LoadingIcon, decodeData, deepAssign, useDarkMode } from "@vuepress/helper/client";
import { computed, defineAsyncComponent, defineComponent, h } from "vue";
import NoopComponent from "@vuepress/helper/noopComponent";
import "../styles/sandpack.scss";

//#region src/client/components/SandPack.ts
const getSandpackFiles = (files) => JSON.parse(decodeData(files));
const getSandpackOptions = (options) => JSON.parse(decodeData(options));
const getSandpackCustomSetup = (customSetup) => JSON.parse(decodeData(customSetup));
const SandPackVue3 = defineAsyncComponent({
	loader: () => __VUEPRESS_SSR__ ? Promise.resolve(NoopComponent) : import("sandpack-vue3").then(({ Sandpack }) => Sandpack),
	loadingComponent: LoadingIcon
});
var SandPack_default = defineComponent({
	name: "SandPack",
	props: {
		files: {
			type: String,
			required: true
		},
		title: String,
		template: String,
		options: String,
		customSetup: String,
		theme: String,
		rtl: Boolean
	},
	setup(props) {
		const isDarkMode = useDarkMode();
		const sandpackConfig = useSandpackConfig();
		const options = computed(() => deepAssign({}, sandpackConfig.options, getSandpackOptions(props.options ?? "{}")));
		const template = computed(() => props.template ?? sandpackConfig.template);
		const theme = computed(() => props.theme ?? (isDarkMode.value ? "dark" : "light"));
		const customSetup = computed(() => deepAssign({}, sandpackConfig.customSetup, getSandpackCustomSetup(props.customSetup ?? "{}")));
		return () => [h("div", { class: "vp-container sandpack-wrapper" }, [props.title ? h("div", { class: "vp-container-header" }, h("div", { class: "vp-container-title" }, decodeURIComponent(props.title))) : null, h("div", { class: "sandpack-container" }, h(SandPackVue3, {
			template: template.value,
			theme: theme.value,
			files: getSandpackFiles(props.files),
			options: options.value,
			customSetup: customSetup.value,
			rtl: props.rtl
		}))])];
	}
});

//#endregion
export { SandPack_default as default };
//# sourceMappingURL=SandPack.js.map