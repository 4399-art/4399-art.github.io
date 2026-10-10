import { t as getLink } from "../../getLink-CAHz8FNe.js";
import { isArray, isString, useLocaleConfig } from "@vuepress/helper/client";
import { defineComponent, h, onBeforeUnmount, onMounted, shallowRef } from "vue";
import "vidstack/player/styles/default/theme.css";
import "vidstack/player/styles/default/layouts/audio.css";
import "vidstack/player/styles/default/layouts/video.css";
import "../styles/vidstack.scss";

//#region src/client/components/VidStack.ts
var VidStack_default = defineComponent({
	name: "VidStack",
	props: {
		src: {
			type: [
				String,
				Array,
				Object
			],
			required: true
		},
		tracks: {
			type: Array,
			default: () => []
		},
		poster: String,
		thumbnails: String,
		title: String,
		player: { type: Object },
		layout: { type: Object },
		darkmode: Boolean
	},
	setup(props) {
		const vidstack = shallowRef();
		const locale = useLocaleConfig(VIDSTACK_LOCALES);
		let player;
		onMounted(async () => {
			if (__VUEPRESS_SSR__) return;
			const { VidstackPlayer, VidstackPlayerLayout } = await import("vidstack/global/player");
			const options = {
				target: vidstack.value,
				crossOrigin: true,
				poster: props.poster,
				title: props.title,
				...props.player,
				src: isString(props.src) ? getLink(props.src) : isArray(props.src) ? props.src.map((src) => isString(src) ? getLink(src) : src) : props.src,
				layout: new VidstackPlayerLayout({
					colorScheme: props.darkmode ? "dark" : "light",
					thumbnails: props.thumbnails,
					translations: locale.value,
					...props.layout
				})
			};
			if (props.tracks.length > 0) options.tracks = props.tracks;
			player = await VidstackPlayer.create(options);
			player.addEventListener("provider-change", () => {
				if (player.provider?.type === "hls" && HLS_JS_INSTALLED) player.provider.library = (() => import(
					/* webpackChunkName: "hls" */
					"hls.js/dist/hls.min.js"
));
				else if (player.provider?.type === "dash" && DASHJS_INSTALLED) player.provider.library = (() => import(
					/* webpackChunkName: "dashjs" */
					"dashjs"
));
			});
		});
		onBeforeUnmount(() => {
			try {
				player.destroy();
			} catch {}
		});
		return () => h("div", { ref: vidstack });
	}
});

//#endregion
export { VidStack_default as default };
//# sourceMappingURL=VidStack.js.map