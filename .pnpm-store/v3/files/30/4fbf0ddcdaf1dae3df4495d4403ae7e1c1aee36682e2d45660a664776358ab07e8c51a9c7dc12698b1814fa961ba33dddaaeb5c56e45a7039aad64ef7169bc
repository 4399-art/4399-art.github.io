import { a as registerMseDash, i as getTypeByUrl, o as registerMseFlv, r as SUPPORTED_VIDEO_TYPES, s as registerMseHls, t as DEFAULT_RATIO } from "../../utils-D2mBFlOE.js";
import { t as getLink } from "../../getLink-CAHz8FNe.js";
import { t as useSize } from "../../useSize-BEqkFlhV.js";
import { LoadingIcon, keys } from "@vuepress/helper/client";
import { camelize, defineComponent, h, onMounted, onUnmounted, ref } from "vue";
import { useLang } from "vuepress/client";
import "../styles/art-player.scss";

//#region src/client/components/ArtPlayer.ts
const BOOLEAN_TRUE_ATTRS = [
	"no-fullscreen",
	"no-hotkey",
	"no-playback-rate",
	"no-setting",
	"no-mutex",
	"no-plays-inline"
];
const BOOLEAN_FALSE_ATTRS = [
	"airplay",
	"autoplay",
	"aspect-ratio",
	"auto-mini",
	"auto-size",
	"auto-orientation",
	"auto-playback",
	"fast-forward",
	"flip",
	"fullscreen-web",
	"lock",
	"loop",
	"is-live",
	"muted",
	"mini-progress-bar",
	"pip",
	"screenshot",
	"subtitle-offset"
];
const SUPPORTED_LANG_NAME = new Set([
	"en",
	"pl",
	"cs",
	"es",
	"fa",
	"fr",
	"id",
	"ru",
	"tr"
]);
const SUPPORTED_LANG_CODE = new Set(["zh-cn", "zh-tw"]);
const getLang = (lang) => {
	const langCode = lang.toLowerCase();
	const [langName] = langCode.split("-");
	return SUPPORTED_LANG_CODE.has(langCode) ? langCode : SUPPORTED_LANG_NAME.has(langName) ? langName : langName === "zh" ? "zh-cn" : "en";
};
var ArtPlayer_default = defineComponent({
	name: "ArtPlayer",
	inheritAttrs: false,
	props: {
		src: {
			type: String,
			required: true
		},
		type: String,
		poster: String,
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
		config: Object,
		customPlayer: Function
	},
	setup(props, { attrs }) {
		const lang = useLang();
		const { el, width, height, resize } = useSize(props, 0);
		const loaded = ref(false);
		let artPlayerInstance = null;
		const getInitOptions = () => {
			const initOptions = {
				theme: "#3eaf7c",
				...ART_PLAYER_OPTIONS,
				container: el.value,
				poster: props.poster ?? "",
				url: getLink(props.src),
				type: props.type ?? getTypeByUrl(props.src),
				lang: getLang(lang.value),
				...props.config,
				useSSR: false
			};
			const attrsKeys = keys(attrs);
			BOOLEAN_TRUE_ATTRS.forEach((config) => {
				if (attrsKeys.includes(config)) initOptions[camelize(config.replace(/^no-/, ""))] = false;
			});
			BOOLEAN_FALSE_ATTRS.forEach((config) => {
				if (attrsKeys.includes(config)) initOptions[camelize(config)] = true;
			});
			if (initOptions.type) {
				const customType = initOptions.customType ??= {};
				if (SUPPORTED_VIDEO_TYPES.includes(initOptions.type.toLowerCase())) switch (initOptions.type.toLowerCase()) {
					case "m3u8":
					case "hls":
						customType[initOptions.type] ??= (video, src, player) => registerMseHls(video, src, (destroy) => {
							player.on("destroy", destroy);
						});
						break;
					case "flv":
					case "ts":
						customType[initOptions.type] ??= (video, src, player) => registerMseFlv(video, src, (destroy) => {
							player.on("destroy", destroy);
						});
						break;
					case "mpd":
					case "dash":
						customType[initOptions.type] ??= (video, src, player) => registerMseDash(video, src, (destroy) => {
							player.on("destroy", destroy);
						});
						break;
					default:
				}
				else console.warn(`[components]: ArtPlayer does not support current file type ${initOptions.type}!`);
			}
			return initOptions;
		};
		onMounted(async () => {
			if (__VUEPRESS_SSR__) return;
			const { default: Artplayer } = await import(
				/* webpackChunkName: "artplayer" */
				"artplayer"
);
			const player = new Artplayer(getInitOptions());
			artPlayerInstance = await props.customPlayer?.(player) ?? player;
			loaded.value = true;
			resize();
		});
		onUnmounted(() => {
			artPlayerInstance?.destroy();
		});
		return () => [h("div", {
			ref: el,
			class: "vp-artplayer",
			style: {
				width: width.value,
				height: height.value
			}
		}), loaded.value ? null : h(LoadingIcon)];
	}
});

//#endregion
export { ArtPlayer_default as default };
//# sourceMappingURL=ArtPlayer.js.map