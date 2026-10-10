import noopComponent from "@vuepress/helper/noopComponent";
import { isSupported } from "@vuepress/plugin-comment/pageview";
import { defineComponent, h, resolveComponent } from "vue";
import AuthorInfo from "@theme-hope/components/info/AuthorInfo";
import CategoryInfo from "@theme-hope/components/info/CategoryInfo";
import DateInfo from "@theme-hope/components/info/DateInfo";
import OriginalInfo from "@theme-hope/components/info/OriginalInfo";
import PageViewInfo from "@theme-hope/components/info/PageViewInfo";
import ReadingTimeInfo from "@theme-hope/components/info/ReadingTimeInfo";
import TagInfo from "@theme-hope/components/info/TagInfo";
import WordInfo from "@theme-hope/components/info/WordInfo";
import { usePure } from "@theme-hope/composables/usePure";
import "balloon-css/balloon.css";
import "../../styles/info/page-info.scss";
export default defineComponent({
    name: "PageInfo",
    components: {
        AuthorInfo,
        CategoryInfo,
        DateInfo,
        OriginalInfo,
        PageViewInfo: isSupported ? PageViewInfo : noopComponent,
        ReadingTimeInfo: __VP_READING_TIME__ ? ReadingTimeInfo : noopComponent,
        TagInfo,
        WordInfo: __VP_READING_TIME__ ? WordInfo : noopComponent,
    },
    props: {
        /**
         * Article information to display
         *
         * 待展示的文章信息
         */
        items: [Boolean, Array],
        /**
         * Article information
         *
         * 文章信息配置
         */
        info: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const isPure = usePure();
        return () => {
            const items = props.items ?? [
                "Author",
                "Original",
                "Date",
                "PageView",
                "ReadingTime",
                "Category",
                "Tag",
            ];
            return items
                ? h("div", { class: "page-info" }, items.map((item) => h(resolveComponent(`${item}Info`), {
                    ...props.info,
                    isPure: isPure.value,
                })))
                : null;
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZUluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvaW5mby9QYWdlSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGFBQWEsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFM0QsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxZQUFZLE1BQU0sMENBQTBDLENBQUM7QUFDcEUsT0FBTyxRQUFRLE1BQU0sc0NBQXNDLENBQUM7QUFDNUQsT0FBTyxZQUFZLE1BQU0sMENBQTBDLENBQUM7QUFDcEUsT0FBTyxZQUFZLE1BQU0sMENBQTBDLENBQUM7QUFDcEUsT0FBTyxlQUFlLE1BQU0sNkNBQTZDLENBQUM7QUFDMUUsT0FBTyxPQUFPLE1BQU0scUNBQXFDLENBQUM7QUFDMUQsT0FBTyxRQUFRLE1BQU0sc0NBQXNDLENBQUM7QUFDNUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSzFELE9BQU8seUJBQXlCLENBQUM7QUFDakMsT0FBTyxrQ0FBa0MsQ0FBQztBQWtFMUMsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLFVBQVU7SUFFaEIsVUFBVSxFQUFFO1FBQ1YsVUFBVTtRQUNWLFlBQVk7UUFDWixRQUFRO1FBQ1IsWUFBWTtRQUNaLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYTtRQUN4RCxlQUFlLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsYUFBYTtRQUN0RSxPQUFPO1FBQ1AsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQWE7S0FDekQ7SUFFRCxLQUFLLEVBQUU7UUFDTDs7OztXQUlHO1FBQ0gsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBd0Q7UUFFOUU7Ozs7V0FJRztRQUNILElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFpQztZQUN2QyxRQUFRLEVBQUUsSUFBSTtTQUNmO0tBQ0Y7SUFFRCxLQUFLLENBQUMsS0FBSztRQUNULE1BQU0sTUFBTSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBRXpCLE9BQU8sR0FBaUIsRUFBRTtZQUN4QixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJO2dCQUMzQixRQUFRO2dCQUNSLFVBQVU7Z0JBQ1YsTUFBTTtnQkFDTixVQUFVO2dCQUNWLGFBQWE7Z0JBQ2IsVUFBVTtnQkFDVixLQUFLO2FBQ04sQ0FBQztZQUVGLE9BQU8sS0FBSztnQkFDVixDQUFDLENBQUMsQ0FBQyxDQUNDLEtBQUssRUFDTCxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ2pCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUU7b0JBQ2pDLEdBQUcsS0FBSyxDQUFDLElBQUk7b0JBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLO2lCQUNyQixDQUFDLENBQ0gsQ0FDRjtnQkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ1gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQyJ9