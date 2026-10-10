import { useEventListener, useResizeObserver, useToggle } from "@vueuse/core";
import { defineComponent, h, ref, shallowRef } from "vue";
import "../styles/md-demo.scss";

//#region src/client/components/MdDemo.ts
var MdDemo_default = defineComponent({
	name: "MdDemo",
	props: {
		id: {
			type: String,
			required: true
		},
		title: String
	},
	slots: Object,
	setup(props, { slots }) {
		const [isExpanded, toggleIsExpand] = useToggle(false);
		const codeContainer = shallowRef();
		const height = ref("0");
		let previousState = null;
		useEventListener("beforeprint", () => {
			previousState = isExpanded.value;
			if (!isExpanded.value) toggleIsExpand(true);
		});
		useEventListener("afterprint", () => {
			if (previousState === false) toggleIsExpand(false);
			previousState = null;
		});
		useResizeObserver(codeContainer, () => {
			if (isExpanded.value) height.value = `${codeContainer.value.clientHeight + 14}px`;
		});
		return () => h("div", {
			class: "vp-container vp-md-demo",
			id: props.id
		}, [
			h("div", { class: "vp-container-header" }, [h("button", {
				type: "button",
				title: "toggle",
				class: ["vp-md-demo-toggle-button", isExpanded.value ? "down" : "end"],
				onClick: () => {
					height.value = isExpanded.value ? "0" : `${codeContainer.value.clientHeight + 14}px`;
					toggleIsExpand();
				}
			}), props.title ? h("div", { class: "vp-container-title" }, decodeURIComponent(props.title)) : null]),
			h("div", { class: "vp-md-demo-display" }, slots.default()),
			h("div", {
				class: "vp-md-demo-code-wrapper",
				style: { height: height.value }
			}, h("div", {
				ref: codeContainer,
				class: "vp-md-demo-codes"
			}, slots.code()))
		]);
	}
});

//#endregion
export { MdDemo_default as default };
//# sourceMappingURL=MdDemo.js.map