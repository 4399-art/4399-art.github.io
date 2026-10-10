import { defineComponent, h, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { DropTransition } from "vuepress-theme-hope/client";
import "./hitokoto-blog-hero.scss";

//#region src/presets/HitokotoBlogHero.ts
var HitokotoBlogHero_default = defineComponent({
	name: "HitokotoBlogHero",
	inheritAttrs: false,
	props: {
		text: {
			type: String,
			required: true
		},
		image: [String, null],
		imageDark: [String, null],
		alt: String,
		imageStyle: [String, Object]
	},
	setup(props) {
		const text = ref("");
		const display = ref("");
		const author = ref("");
		let isMounted = false;
		const getHitokoto = () => fetch("https://v1.hitokoto.cn").then((res) => res.json()).then(({ from, hitokoto }) => {
			text.value = hitokoto;
			author.value = from;
		});
		onMounted(() => {
			isMounted = true;
			watch(text, () => {
				display.value = "";
				let index = 0;
				const renderNextWord = async () => {
					display.value += text.value[index];
					index += 1;
					await nextTick();
					if (index < text.value.length) setTimeout(() => {
						renderNextWord();
					}, 150);
					else if (isMounted) setTimeout(() => {
						getHitokoto();
					}, 3e3);
				};
				renderNextWord();
			});
			getHitokoto();
		});
		onUnmounted(() => {
			isMounted = false;
		});
		return () => [
			h(DropTransition, {
				appear: true,
				group: true,
				delay: .04
			}, () => [props.image ? h("img", {
				key: "light",
				class: ["vp-blog-hero-image", { light: props.imageDark }],
				style: props.imageStyle,
				src: props.image,
				alt: props.alt ?? props.text
			}) : null, props.imageDark ? h("img", {
				key: "dark",
				class: "vp-blog-hero-image dark",
				style: props.imageStyle,
				src: props.imageDark,
				alt: props.alt ?? props.text
			}) : null]),
			h(DropTransition, {
				appear: true,
				delay: .08
			}, () => props.text ? h("h1", { class: "vp-blog-hero-title" }, props.text) : null),
			h("div", { class: "hitokoto" }, [h("p", { class: "hitokoto-text" }, h("span", display.value)), h("p", {
				class: "hitokoto-author",
				style: { opacity: display.value.length > 4 ? 1 : 0 }
			}, `——「${author.value}」`)])
		];
	}
});

//#endregion
export { HitokotoBlogHero_default as default };
//# sourceMappingURL=HitokotoBlogHero.js.map