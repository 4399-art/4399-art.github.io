import { t as DEFAULT_RATIO } from "./utils-D2mBFlOE.js";
import { isString } from "@vuepress/helper/client";
import { computed, isRef, onMounted, ref, shallowRef, unref, watch } from "vue";
import { useEventListener } from "@vueuse/core";

//#region src/client/composables/useSize.ts
const getValue = (value) => isString(value) ? value : `${value}px`;
const useSize = (options, extraHeight = 0) => {
	const el = shallowRef();
	const width = computed(() => getValue(unref(options.width) ?? "100%"));
	const height = ref("auto");
	const getRadio = (ratio) => {
		if (isString(ratio)) {
			const [widthValue, heightValue] = ratio.split(":");
			const parsedRadio = Number(widthValue) / Number(heightValue);
			if (!Number.isNaN(parsedRadio)) return parsedRadio;
		}
		return typeof ratio === "number" ? ratio : DEFAULT_RATIO;
	};
	const getHeight = (widthValue) => {
		const heightValue = unref(options.height);
		const ratio = getRadio(unref(options.ratio));
		return heightValue ? getValue(heightValue) : `${widthValue / ratio + unref(extraHeight)}px`;
	};
	const updateHeight = () => {
		if (el.value) height.value = getHeight(el.value.clientWidth);
	};
	onMounted(() => {
		updateHeight();
		if (isRef(extraHeight)) watch(extraHeight, updateHeight);
		useEventListener("orientationchange", updateHeight);
		useEventListener("resize", updateHeight);
	});
	return {
		el,
		width,
		height,
		resize: updateHeight
	};
};

//#endregion
export { useSize as t };
//# sourceMappingURL=useSize-BEqkFlhV.js.map