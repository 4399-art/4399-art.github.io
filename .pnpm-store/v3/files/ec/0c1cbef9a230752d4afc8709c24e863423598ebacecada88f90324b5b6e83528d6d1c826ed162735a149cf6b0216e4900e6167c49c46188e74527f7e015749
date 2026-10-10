import { n as viewPDF, t as DEFAULT_RATIO } from "../../utils-D2mBFlOE.js";
import { t as getLink } from "../../getLink-CAHz8FNe.js";
import { t as useSize } from "../../useSize-BEqkFlhV.js";
import { useLocaleConfig } from "@vuepress/helper/client";
import { defineComponent, h, onMounted, onUnmounted, ref, shallowRef, watch } from "vue";
import { useScrollLock } from "@vueuse/core";
import { CancelFullScreenIcon, EnterFullScreenIcon } from "vuepress-shared/client";
import "../styles/pdf.scss";

//#region src/client/components/PDF.ts
var PDF_default = defineComponent({
	name: "PDF",
	props: {
		url: {
			type: String,
			required: true
		},
		title: String,
		width: {
			type: [String, Number],
			default: "100%"
		},
		height: [String, Number],
		ratio: {
			type: [String, Number],
			default: DEFAULT_RATIO
		},
		page: {
			type: [String, Number],
			default: 1
		},
		noToolbar: Boolean,
		noFullscreen: Boolean,
		zoom: [String, Number],
		viewer: Boolean
	},
	setup(props) {
		const { el, width, height, resize } = useSize(props);
		const locales = useLocaleConfig(PDF_LOCALES);
		const body = shallowRef();
		const viewer = shallowRef();
		const isLocked = useScrollLock(body);
		const isFullscreen = ref(false);
		watch(isFullscreen, (value) => {
			isLocked.value = value;
		});
		onMounted(() => {
			body.value = document.body;
			viewPDF(viewer.value, {
				url: getLink(props.url),
				title: props.title,
				hint: locales.value.hint,
				options: {
					page: props.page,
					noToolbar: props.noToolbar,
					...props.zoom && props.zoom.toString() !== "100" ? { zoom: props.zoom } : {}
				},
				pdfjs: props.viewer
			});
			resize();
		});
		onUnmounted(() => {
			isLocked.value = false;
		});
		return () => h("div", {
			class: ["pdf-viewer-wrapper", { fullscreen: isFullscreen.value }],
			ref: el,
			style: isFullscreen.value ? {} : {
				width: width.value,
				height: height.value
			}
		}, [h("div", { ref: viewer }), props.noFullscreen ? null : h("button", {
			class: "pdf-fullscreen-button",
			onClick: () => {
				isFullscreen.value = !isFullscreen.value;
			}
		}, h(isFullscreen.value ? CancelFullScreenIcon : EnterFullScreenIcon, { class: "pdf-fullscreen-icon" }))]);
	}
});

//#endregion
export { PDF_default as default };
//# sourceMappingURL=PDF.js.map