import { t as DEFAULT_RATIO, u as videoIframeAllow } from "../../utils-D2mBFlOE.js";
import { t as useSize } from "../../useSize-BEqkFlhV.js";
import { LoadingIcon, startsWith } from "@vuepress/helper/client";
import { computed, defineComponent, h, ref } from "vue";
import { useLang } from "vuepress/client";
import "../styles/youtube.scss";

//#region src/client/components/YouTube.ts
var YouTube_default = defineComponent({
	name: "YouTube",
	props: {
		id: String,
		title: {
			type: String,
			default: "A YouTube video"
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
		autoplay: Boolean,
		loop: Boolean,
		showCc: Boolean,
		showAnnotations: Boolean,
		start: [String, Number],
		end: [String, Number],
		defaultCcLang: String,
		uiLang: String,
		listType: String,
		list: String,
		playlist: String,
		disableControls: Boolean,
		disableFullscreen: Boolean,
		disableKeyboard: Boolean
	},
	setup(props) {
		const lang = useLang();
		const { el, width, height, resize } = useSize(props);
		const loaded = ref(false);
		const coreURL = computed(() => props.id ? `${props.id}?` : props.listType === "playlist" && props.list ? `?listType=playlist&list=${startsWith(props.list, "PL") ? props.list : `PL${props.list}`}&` : null);
		const params = computed(() => {
			const searchParams = new URLSearchParams();
			if (props.autoplay) searchParams.set("autoplay", "1");
			if (props.loop) searchParams.set("loop", "1");
			if (props.showCc) searchParams.set("cc_load_policy", "1");
			if (props.showAnnotations) searchParams.set("iv_load_policy", "3");
			if (props.start) searchParams.set("start", props.start.toString());
			if (props.end) searchParams.set("end", props.end.toString());
			searchParams.set("hl", props.uiLang || lang.value);
			searchParams.set("cc_lang_pref", props.defaultCcLang || lang.value);
			searchParams.set("color", "white");
			if (props.disableControls) searchParams.set("controls", "0");
			if (props.disableFullscreen) searchParams.set("fs", "0");
			if (props.disableKeyboard) searchParams.set("disablekb", "1");
			if (props.playlist) searchParams.set("playlist", props.playlist);
			return searchParams.toString();
		});
		const videoLink = computed(() => coreURL.value ? `https://www.youtube.com/embed/${coreURL.value}${params.value}` : null);
		return () => videoLink.value ? [
			h("div", { class: "youtube-desc" }, h("a", {
				class: "sr-only",
				href: videoLink.value
			}, props.title)),
			h("iframe", {
				ref: el,
				src: videoLink.value,
				title: props.title,
				class: "youtube-iframe",
				allow: videoIframeAllow,
				style: {
					width: width.value,
					height: loaded.value ? height.value : 0
				},
				onLoad: () => {
					loaded.value = true;
					resize();
				}
			}),
			loaded.value ? null : h(LoadingIcon)
		] : [];
	}
});

//#endregion
export { YouTube_default as default };
//# sourceMappingURL=YouTube.js.map