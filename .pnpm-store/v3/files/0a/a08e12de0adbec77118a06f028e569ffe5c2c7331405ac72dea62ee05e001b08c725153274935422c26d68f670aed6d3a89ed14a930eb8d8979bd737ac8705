import { computed, defineComponent, h } from "vue";
import { useLang } from "vuepress/client";
import { CalendarIcon } from "@theme-hope/components/info/icons";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { usePure } from "@theme-hope/composables/usePure";
export default defineComponent({
    name: "DateInfo",
    inheritAttrs: false,
    props: {
        /**
         * Date information
         *
         * 日期信息
         */
        date: Object,
    },
    setup(props) {
        const lang = useLang();
        const metaLocale = useMetaLocale();
        const isPure = usePure();
        const formatter = computed(() => new Intl.DateTimeFormat(lang.value, {
            dateStyle: "short",
        }));
        const formattedDate = computed(() => {
            if (!props.date)
                return null;
            return formatter.value.format(props.date);
        });
        return () => props.date
            ? h("span", {
                class: "page-date-info",
                "aria-label": `${metaLocale.value.date}${isPure.value ? "" : "📅"}`,
                ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
            }, [
                h(CalendarIcon),
                // oxlint-disable-next-line typescript/no-non-null-assertion
                h("span", { "data-allow-mismatch": "text" }, formattedDate.value),
                h("meta", {
                    property: "datePublished",
                    // ISO Format Date string
                    content: props.date.toISOString() || "",
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvaW5mby9EYXRlSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTFELGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxVQUFVO0lBRWhCLFlBQVksRUFBRSxLQUFLO0lBRW5CLEtBQUssRUFBRTtRQUNMOzs7O1dBSUc7UUFDSCxJQUFJLEVBQUUsTUFBK0I7S0FDdEM7SUFFRCxLQUFLLENBQUMsS0FBSztRQUNULE1BQU0sSUFBSSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sVUFBVSxHQUFHLGFBQWEsRUFBRSxDQUFDO1FBQ25DLE1BQU0sTUFBTSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBRXpCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FDeEIsR0FBRyxFQUFFLENBQ0gsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEMsU0FBUyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUNMLENBQUM7UUFDRixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFBRSxPQUFPLElBQUksQ0FBQztZQUU3QixPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBaUIsRUFBRSxDQUN4QixLQUFLLENBQUMsSUFBSTtZQUNSLENBQUMsQ0FBQyxDQUFDLENBQ0MsTUFBTSxFQUNOO2dCQUNFLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLFlBQVksRUFBRSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUNuRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3RELEVBQ0Q7Z0JBQ0UsQ0FBQyxDQUFDLFlBQVksQ0FBQztnQkFDZiw0REFBNEQ7Z0JBQzVELENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsRUFBRSxhQUFhLENBQUMsS0FBTSxDQUFDO2dCQUNsRSxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUNSLFFBQVEsRUFBRSxlQUFlO29CQUN6Qix5QkFBeUI7b0JBQ3pCLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUU7aUJBQ3hDLENBQUM7YUFDSCxDQUNGO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7Q0FDRixDQUFDLENBQUMifQ==