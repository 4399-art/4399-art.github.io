import { t as DEFAULT_RATIO, u as videoIframeAllow } from "../../utils-D2mBFlOE.js";
import { t as useSize } from "../../useSize-BEqkFlhV.js";
import { LoadingIcon } from "@vuepress/helper/client";
import { computed, defineComponent, h, ref } from "vue";
import "../styles/bili-bili.scss";

//#region src/client/components/BiliBili.ts
const VIDEO_LINK = "https://player.bilibili.com/player.html";
var BiliBili_default = defineComponent({
	name: "BiliBili",
	props: {
		bvid: String,
		aid: String,
		cid: String,
		title: {
			type: String,
			default: "A BiliBili video"
		},
		page: {
			type: [String, Number],
			default: 1
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
		time: {
			type: [String, Number],
			default: 0
		},
		autoplay: Boolean
	},
	setup(props) {
		const { el, width, height, resize } = useSize(props);
		const loaded = ref(false);
		const videoLink = computed(() => {
			const { aid, bvid, cid, autoplay, time, page } = props;
			return aid && cid ? `${VIDEO_LINK}?aid=${aid}&cid=${cid}&t=${time}&autoplay=${autoplay ? 1 : 0}&p=${page}` : bvid ? `${VIDEO_LINK}?bvid=${bvid}&t=${time}&autoplay=${autoplay ? 1 : 0}` : null;
		});
		return () => videoLink.value ? [
			h("div", { class: "bilibili-desc" }, h("a", {
				class: "sr-only",
				href: videoLink.value
			}, props.title)),
			h("iframe", {
				ref: el,
				src: videoLink.value,
				title: props.title,
				class: "bilibili-iframe",
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
export { BiliBili_default as default };
//# sourceMappingURL=BiliBili.js.map