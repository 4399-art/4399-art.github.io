import { c as usePure, l as useData, o as usePageInfo, t as PageInfo_default } from "./PageInfo-DTBGvCmc.js";
import { Transition, defineComponent, h, resolveComponent } from "vue";
import { RenderDefault } from "@vuepress/helper/client";
import "@vuepress/helper/transition/fade-in-up.css";
import "./client/styles/base/page-title.scss";

//#region src/client/utils/scrollPromise.ts
let promise = null;
let promiseResolve = null;
const scrollPromise = {
	wait: () => promise,
	pending: () => {
		promise = new Promise((resolve) => {
			promiseResolve = resolve;
		});
	},
	resolve: () => {
		promiseResolve?.();
		promise = null;
		promiseResolve = null;
	}
};

//#endregion
//#region src/client/components/base/MainFadeInUpTransition.ts
var MainFadeInUpTransition_default = defineComponent({
	name: "MainFadeInUpTransition",
	slots: Object,
	setup(_props, { slots }) {
		const pure = usePure();
		return () => pure.value ? h(RenderDefault, slots.default) : h(Transition, {
			name: "fade-in-up",
			mode: "out-in",
			onBeforeEnter: scrollPromise.resolve,
			onBeforeLeave: scrollPromise.pending
		}, slots.default);
	}
});

//#endregion
//#region src/client/components/base/PageTitle.ts
var PageTitle_default = defineComponent({
	name: "PageTitle",
	setup() {
		const { frontmatter, page, themeLocale } = useData();
		const { info, items } = usePageInfo();
		return () => h("div", { class: "vp-page-title" }, [
			h("h1", [themeLocale.value.titleIcon === false ? null : h(resolveComponent("VPIcon"), { icon: frontmatter.value.icon }), page.value.title]),
			h(PageInfo_default, {
				info: info.value,
				items: items.value
			}),
			h("hr")
		]);
	}
});

//#endregion
export { MainFadeInUpTransition_default as n, scrollPromise as r, PageTitle_default as t };
//# sourceMappingURL=PageTitle--p5MJTUs.js.map