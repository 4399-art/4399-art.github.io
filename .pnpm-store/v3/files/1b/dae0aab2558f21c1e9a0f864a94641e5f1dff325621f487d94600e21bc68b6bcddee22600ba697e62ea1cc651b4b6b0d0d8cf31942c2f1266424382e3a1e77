import { isString } from "@vuepress/helper/client";
import { useMutationObserver } from "@vueuse/core";
import { defineComponent, h, ref, shallowRef } from "vue";
import { useRoutePath } from "vuepress/client";
import { EyeIcon, FireIcon } from "@theme-hope/components/info/icons";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { usePure } from "@theme-hope/composables/usePure";
const HOT_VIEW_THRESHOLD = 1000;
export default defineComponent({
    name: "PageViewInfo",
    inheritAttrs: false,
    props: {
        /**
         * Whether show pageview and it's path
         *
         * 是否显示浏览量以及其路径
         */
        pageview: [Boolean, String],
    },
    setup(props) {
        const routePath = useRoutePath();
        const metaLocale = useMetaLocale();
        const isPure = usePure();
        const pageviewElement = shallowRef();
        const pageViews = ref(0);
        useMutationObserver(pageviewElement, () => {
            // oxlint-disable-next-line typescript/no-non-null-assertion
            const count = pageviewElement.value.textContent;
            if (count && !Number.isNaN(Number(count)))
                pageViews.value = Number(count);
        }, { childList: true });
        return () => props.pageview
            ? h("span", {
                class: "page-pageview-info",
                "aria-label": `${metaLocale.value.views}${isPure.value ? "" : "🔢"}`,
                ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
            }, [
                h(pageViews.value < HOT_VIEW_THRESHOLD ? EyeIcon : FireIcon),
                h("span", {
                    ref: pageviewElement,
                    id: "ArtalkPV",
                    class: "vp-pageview waline-pageview-count",
                    "data-path": isString(props.pageview) ? props.pageview : routePath.value,
                    "data-page-key": isString(props.pageview) ? props.pageview : routePath.value,
                }, "..."),
            ])
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZVZpZXdJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2luZm8vUGFnZVZpZXdJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTFELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0FBRWhDLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxjQUFjO0lBRXBCLFlBQVksRUFBRSxLQUFLO0lBRW5CLEtBQUssRUFBRTtRQUNMOzs7O1dBSUc7UUFDSCxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0tBQzVCO0lBRUQsS0FBSyxDQUFDLEtBQUs7UUFDVCxNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLFVBQVUsR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUV6QixNQUFNLGVBQWUsR0FBRyxVQUFVLEVBQWUsQ0FBQztRQUNsRCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekIsbUJBQW1CLENBQ2pCLGVBQWUsRUFDZixHQUFHLEVBQUU7WUFDSCw0REFBNEQ7WUFDNUQsTUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLEtBQU0sQ0FBQyxXQUFXLENBQUM7WUFFakQsSUFBSSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RSxDQUFDLEVBQ0QsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQ3BCLENBQUM7UUFFRixPQUFPLEdBQWlCLEVBQUUsQ0FDeEIsS0FBSyxDQUFDLFFBQVE7WUFDWixDQUFDLENBQUMsQ0FBQyxDQUNDLE1BQU0sRUFDTjtnQkFDRSxLQUFLLEVBQUUsb0JBQW9CO2dCQUMzQixZQUFZLEVBQUUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtnQkFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUN0RCxFQUNEO2dCQUNFLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDNUQsQ0FBQyxDQUNDLE1BQU0sRUFDTjtvQkFDRSxHQUFHLEVBQUUsZUFBZTtvQkFDcEIsRUFBRSxFQUFFLFVBQVU7b0JBQ2QsS0FBSyxFQUFFLG1DQUFtQztvQkFDMUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLO29CQUN4RSxlQUFlLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUs7aUJBQzdFLEVBQ0QsS0FBSyxDQUNOO2FBQ0YsQ0FDRjtZQUNILENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=