import { n as useVuePlaygroundConfig } from "../../vuePlayground-tgVtutxP.js";
import { LoadingIcon, deepAssign } from "@vuepress/helper/client";
import { computed, defineComponent, h, onMounted, ref, shallowRef, version } from "vue";
import "@vue/repl/style.css";
import "../styles/vue-playground.scss";

//#region src/client/components/VuePlayground.ts
const getVuePlaygroundSettings = (settings) => JSON.parse(decodeURIComponent(settings));
var VuePlayground_default = defineComponent({
	name: "VuePlayground",
	props: {
		files: {
			type: String,
			required: true
		},
		title: String,
		settings: String
	},
	setup(props) {
		const { vueVersion = version, vueRuntimeDevUrl = `https://unpkg.com/@vue/runtime-dom@${vueVersion}/dist/runtime-dom.esm-browser.js`, vueRuntimeProdUrl = `https://unpkg.com/@vue/runtime-dom@${vueVersion}/dist/runtime-dom.esm-browser.prod.js`, vueServerRendererUrl = `https://unpkg.com/@vue/server-renderer@${vueVersion}/dist/server-renderer.esm-browser.js`, ...vuePlaygroundOptions } = useVuePlaygroundConfig();
		const loading = ref(true);
		const component = shallowRef();
		const store = shallowRef();
		const editor = shallowRef();
		const playgroundOptions = computed(() => deepAssign({}, vuePlaygroundOptions, getVuePlaygroundSettings(props.settings ?? "{}")));
		const setupRepl = async () => {
			if (__VUEPRESS_SSR__) return;
			const [{ useStore, useVueImportMap, Repl }, { default: editorComponent }] = await Promise.all([import(
				/* webpackChunkName: "vue-repl" */
				"@vue/repl"
), VUE_PLAYGROUND_MONACO ? import(
				/* webpackChunkName: "vue-repl" */
				"@vue/repl/monaco-editor"
) : import(
				/* webpackChunkName: "vue-repl" */
				"@vue/repl/codemirror-editor"
)]);
			component.value = Repl;
			editor.value = editorComponent;
			const { importMap, vueVersion } = useVueImportMap({
				runtimeDev: vueRuntimeDevUrl,
				runtimeProd: vueRuntimeProdUrl,
				serverRenderer: vueServerRendererUrl
			});
			vueVersion.value = version;
			store.value = useStore({
				builtinImportMap: importMap,
				vueVersion
			}, decodeURIComponent(props.files));
		};
		onMounted(async () => {
			await setupRepl();
			loading.value = false;
		});
		return () => [h("div", { class: "vp-container vue-playground-wrapper" }, [props.title ? h("div", { class: "vp-container-header" }, h("div", { class: "vp-container-title" }, decodeURIComponent(props.title))) : null, h("div", { class: "repl-container" }, [loading.value ? h(LoadingIcon, {
			class: "vue-preview-loading",
			height: 192
		}) : null, component.value ? h(component.value, {
			...playgroundOptions.value,
			editor: editor.value,
			store: store.value
		}) : null])])];
	}
});

//#endregion
export { VuePlayground_default as default };
//# sourceMappingURL=VuePlayground.js.map