import { decodeData, useDarkMode } from "@vuepress/helper/client";
import { watchImmediate } from "@vueuse/core";
import { computed, defineComponent, h, onMounted, shallowRef } from "vue";
import "../styles/kotlin-playground.scss";

//#region src/client/components/KotlinPlayground.ts
var KotlinPlayground_default = defineComponent({
	name: "KotlinPlayground",
	props: {
		files: {
			type: String,
			required: true
		},
		title: String,
		settings: String
	},
	setup(props) {
		const isDarkMode = useDarkMode();
		const kotlinPlayground = shallowRef();
		const files = computed(() => JSON.parse(decodeData(props.files)));
		const settings = computed(() => ({
			theme: isDarkMode.value ? "darcula" : "default",
			...JSON.parse(decodeURIComponent(props.settings ?? "{}"))
		}));
		const renderPlayground = async () => {
			if (__VUEPRESS_SSR__) return;
			const { default: playground } = await import(
				/* webpackChunkName: "kotlin-playground" */
				"kotlin-playground"
);
			playground(kotlinPlayground.value);
		};
		onMounted(() => {
			watchImmediate(isDarkMode, () => renderPlayground(), { flush: "post" });
		});
		return () => h("div", { class: "kotlin-playground-wrapper" }, [props.title ? h("div", { class: "header" }, decodeURIComponent(props.title)) : null, h("div", {
			class: "kotlin-playground-container",
			key: isDarkMode.value ? "dark" : "light"
		}, h("div", {
			class: "kotlin-playground",
			ref: kotlinPlayground,
			...settings.value
		}, [h("pre", files.value[0]), files.value.length > 1 ? files.value.map((content, index) => index === 0 ? null : h("textarea", {
			class: "hidden-dependency",
			readonly: ""
		}, content)) : null]))]);
	}
});

//#endregion
export { KotlinPlayground_default as default };
//# sourceMappingURL=KotlinPlayground.js.map