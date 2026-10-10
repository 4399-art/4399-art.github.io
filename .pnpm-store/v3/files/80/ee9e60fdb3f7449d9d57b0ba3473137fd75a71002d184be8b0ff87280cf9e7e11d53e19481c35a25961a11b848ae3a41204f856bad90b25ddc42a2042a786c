import { computed, defineComponent, h } from "vue";
import { TimerIcon } from "@theme-hope/components/info/icons";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { usePure } from "@theme-hope/composables/usePure";
export default defineComponent({
    name: "ReadingTimeInfo",
    inheritAttrs: false,
    props: {
        /**
         * Reading time information
         *
         * 阅读时间信息
         */
        readingTime: Object,
        /**
         * Reading time locale
         *
         * 阅读时间语言环境
         */
        readingTimeLocale: Object,
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        const isPure = usePure();
        const readingTimeMeta = computed(() => {
            if (!props.readingTime)
                return null;
            const { minutes } = props.readingTime;
            return minutes < 1 ? "PT1M" : `PT${Math.round(minutes)}M`;
        });
        return () => props.readingTimeLocale?.time
            ? h("span", {
                class: "page-reading-time-info",
                "aria-label": `${metaLocale.value.readingTime}${isPure.value ? "" : "⌛"}`,
                ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
            }, [
                h(TimerIcon),
                h("span", props.readingTimeLocale.time),
                h("meta", {
                    property: "timeRequired",
                    content: readingTimeMeta.value,
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZGluZ1RpbWVJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2luZm8vUmVhZGluZ1RpbWVJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUVuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUxRCxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsaUJBQWlCO0lBRXZCLFlBQVksRUFBRSxLQUFLO0lBRW5CLEtBQUssRUFBRTtRQUNMOzs7O1dBSUc7UUFDSCxXQUFXLEVBQUUsTUFBc0M7UUFFbkQ7Ozs7V0FJRztRQUNILGlCQUFpQixFQUFFLE1BQTRDO0tBQ2hFO0lBRUQsS0FBSyxDQUFDLEtBQUs7UUFDVCxNQUFNLFVBQVUsR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUV6QixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUVwQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUV0QyxPQUFPLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQWlCLEVBQUUsQ0FDeEIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLElBQUk7WUFDM0IsQ0FBQyxDQUFDLENBQUMsQ0FDQyxNQUFNLEVBQ047Z0JBQ0UsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsWUFBWSxFQUFFLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDdEQsRUFDRDtnQkFDRSxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUNaLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtvQkFDUixRQUFRLEVBQUUsY0FBYztvQkFDeEIsT0FBTyxFQUFFLGVBQWUsQ0FBQyxLQUFLO2lCQUMvQixDQUFDO2FBQ0gsQ0FDRjtZQUNILENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=