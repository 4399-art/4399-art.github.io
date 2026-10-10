import { t as getLink } from "../../getLink-CAHz8FNe.js";
import { isArray, isString } from "@vuepress/helper/client";
import { defineComponent, h, onBeforeUnmount, onMounted, shallowRef } from "vue";
import { PlyrLayout, VidstackPlayer } from "vidstack/global/player";
import "vidstack/player/styles/base.css";
import "vidstack/player/styles/plyr/theme.css";
import "../styles/video-player.scss";

//#region src/client/components/VideoPlayer.ts
var VideoPlayer_default = defineComponent({
	name: "VideoPlayer",
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
		layout: { type: Object }
	},
	setup(props) {
		const video = shallowRef();
		let player;
		onMounted(async () => {
			if (__VUEPRESS_SSR__) return;
			const options = {
				target: video.value,
				crossOrigin: true,
				poster: props.poster,
				title: props.title,
				...props.player,
				src: isString(props.src) ? getLink(props.src) : isArray(props.src) ? props.src.map((src) => isString(src) ? getLink(src) : src) : props.src,
				layout: new PlyrLayout({
					thumbnails: props.thumbnails,
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
		return () => h("div", { ref: video });
	}
});

//#endregion
export { VideoPlayer_default as default };
//# sourceMappingURL=VideoPlayer.js.map