import { c as Popup, l as getMetaContent } from "./utils-D2mBFlOE.js";
import { endsWith, isArray, isFunction, isLinkAbsolute, isLinkHttp, isPlainObject, isString, startsWith } from "@vuepress/helper/client";
import { computed, defineComponent, h, onMounted, ref } from "vue";
import { useData, usePage } from "vuepress/client";
import { openPopupWindow } from "vuepress-shared/client";
import "balloon-css/balloon.css";
import "./client/styles/popup.scss";
import "./client/styles/share-service.scss";

//#region src/client/components/ShareService.ts
const renderIcon = (content, contentClass = "") => {
	const className = ["vp-share-icon", contentClass];
	if (isLinkHttp(content) || isLinkAbsolute(content)) return h("img", {
		class: className,
		src: content,
		loading: "lazy",
		"no-view": ""
	});
	if (startsWith(content, "<") && endsWith(content, ">")) return h("div", {
		class: className,
		innerHTML: content
	});
	return h("div", { class: [...className, content] });
};
var ShareService_default = defineComponent({
	name: "ShareService",
	props: {
		config: {
			type: Object,
			required: true
		},
		plain: Boolean,
		title: String,
		description: String,
		url: String,
		summary: String,
		cover: String,
		tag: [Array, String]
	},
	setup(props) {
		let popup;
		const { frontmatter, page } = useData();
		const showPopup = ref(false);
		const getShareLink = () => {
			const title = props.title ?? page.value.title;
			const description = props.description ?? frontmatter.value.description ?? getMetaContent("description") ?? getMetaContent("og:description") ?? getMetaContent("twitter:description");
			const url = props.url ?? globalThis.location.href;
			const cover = props.cover ?? getMetaContent("og:image");
			const image = document.querySelector("[vp-content] :not(a) > img")?.getAttribute("src");
			const tags = props.tag ?? frontmatter.value.tag ?? frontmatter.value.tags;
			const tag = isArray(tags) ? tags.filter((item) => isString(item)).join(",") : isString(tags) ? tags : null;
			return props.config.link.replaceAll(/\[([^\]]+)\]/g, (_, config) => {
				const keys = config.split("|");
				for (const key of keys) {
					if (key === "url" && url) return url;
					if (key === "title" && title) return title;
					if (key === "description" && description) return description;
					if (key === "summary" && props.summary) return props.summary;
					if (key === "cover" && cover) return cover;
					if (key === "image" && image) return image;
					if (key === "tags" && tag) return tag;
				}
				return "";
			});
		};
		const share = () => {
			const link = getShareLink();
			switch (props.config.action) {
				case "navigate":
					window.open(link);
					break;
				case "open":
					window.open(link, "_blank");
					break;
				case "qrcode":
					import(
						/* webpackChunkName: "qrcode" */
						"qrcode"
).then(({ toDataURL }) => toDataURL(link, {
						errorCorrectionLevel: "H",
						width: 250,
						scale: 1,
						margin: 1.5
					})).then((dataURL) => {
						popup.emit(`<img src="${dataURL}" alt="qrcode" class="share-qrcode" />`);
					});
					break;
				default: openPopupWindow(link, "share");
			}
		};
		onMounted(() => {
			popup = new Popup();
		});
		return () => {
			const { config: { name, icon, shape, color }, plain } = props;
			return [h("button", {
				type: "button",
				class: ["vp-share-button", { plain }],
				"aria-label": name,
				"data-balloon-pos": "up",
				onClick: () => {
					share();
				}
			}, plain ? renderIcon(shape, "plain") : icon ? renderIcon(icon) : h("div", {
				class: "vp-share-icon colorful",
				style: { background: color },
				innerHTML: shape
			})), showPopup.value ? h("div", { class: "share-popup" }) : null];
		};
	}
});

//#endregion
//#region src/client/components/Share.ts
const shareServices = SHARE_SERVICES;
var Share_default = defineComponent({
	name: "Share",
	props: {
		services: {
			type: [String, Array],
			default: () => shareServices.map(({ name }) => name)
		},
		titleGetter: {
			type: Function,
			default: (page) => page.title
		},
		descriptionGetter: {
			type: Function,
			default: (page) => page.frontmatter.description
		},
		summaryGetter: {
			type: Function,
			default: (page) => page.summary
		},
		coverGetter: {
			type: Function,
			default: (page) => page.cover
		},
		tagGetter: {
			type: Function,
			default: ({ frontmatter }) => frontmatter.tag ?? frontmatter.tags
		},
		inline: Boolean,
		colorful: Boolean
	},
	setup(props) {
		const page = usePage();
		const services = computed(() => {
			return (isString(props.services) ? props.services.split(",") : props.services).map((item) => isPlainObject(item) ? item.name && item.link ? item : null : shareServices.find(({ name }) => name === item)).filter(Boolean);
		});
		const shareData = computed(() => {
			const result = {};
			[
				"titleGetter",
				"descriptionGetter",
				"summaryGetter",
				"coverGetter",
				"tagGetter"
			].forEach((item) => {
				if (isFunction(props[item])) {
					const value = props[item](page.value);
					if (value) result[item.replace("Getter", "")] = value;
				}
			});
			return result;
		});
		return () => h("div", {
			class: "vp-share-buttons",
			style: props.inline ? { display: "inline-block" } : {}
		}, services.value.map((item) => h(ShareService_default, {
			config: item,
			...shareData.value,
			plain: !props.colorful
		})));
	}
});

//#endregion
export { Share_default as t };
//# sourceMappingURL=Share-DvB12n6K.js.map