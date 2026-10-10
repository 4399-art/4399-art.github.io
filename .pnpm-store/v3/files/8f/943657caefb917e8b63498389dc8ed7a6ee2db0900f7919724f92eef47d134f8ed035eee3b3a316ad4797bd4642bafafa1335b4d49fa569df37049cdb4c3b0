import { defineComponent, h } from "vue";
import { WordIcon } from "@theme-hope/components/info/icons";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { usePure } from "@theme-hope/composables/usePure";
export default defineComponent({
    name: "ReadTimeInfo",
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
        return () => props.readingTimeLocale?.words
            ? h("span", {
                class: "page-word-info",
                "aria-label": `${metaLocale.value.words}${isPure.value ? "" : "🔠"}`,
                ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
            }, [
                h(WordIcon),
                h("span", props.readingTimeLocale.words),
                h("meta", {
                    property: "wordCount",
                    content: props.readingTime?.words,
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29yZEluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvaW5mby9Xb3JkSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUV6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUxRCxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsY0FBYztJQUVwQixZQUFZLEVBQUUsS0FBSztJQUVuQixLQUFLLEVBQUU7UUFDTDs7OztXQUlHO1FBQ0gsV0FBVyxFQUFFLE1BQXNDO1FBRW5EOzs7O1dBSUc7UUFDSCxpQkFBaUIsRUFBRSxNQUE0QztLQUNoRTtJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1QsTUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFDbkMsTUFBTSxNQUFNLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFFekIsT0FBTyxHQUFpQixFQUFFLENBQ3hCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLO1lBQzVCLENBQUMsQ0FBQyxDQUFDLENBQ0MsTUFBTSxFQUNOO2dCQUNFLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLFlBQVksRUFBRSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3RELEVBQ0Q7Z0JBQ0UsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDWCxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLE9BQU8sRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUs7aUJBQ2xDLENBQUM7YUFDSCxDQUNGO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7Q0FDRixDQUFDLENBQUMifQ==