import { entries } from "@vuepress/helper/client";
import { defineComponent, h, ref } from "vue";
import ArticlesInfo from "@theme-hope/components/blog/ArticlesInfo";
import CategoriesInfo from "@theme-hope/components/blog/CategoriesInfo";
import { ArticleIcon, CategoryIcon, TagIcon, TimelineIcon, } from "@theme-hope/components/blog/icons";
import TagsInfo from "@theme-hope/components/blog/TagsInfo";
import TimelineList from "@theme-hope/components/blog/TimelineList";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useBlogLocale } from "@theme-hope/composables/blog/useBlogLocale";
import "../../styles/blog/info-list.scss";
const buttons = {
    article: ArticleIcon,
    category: CategoryIcon,
    tag: TagIcon,
    timeline: TimelineIcon,
};
export default defineComponent({
    name: "InfoList",
    setup() {
        const blogLocale = useBlogLocale();
        const activeType = ref("article");
        return () => h("div", { class: "vp-blog-infos" }, [
            h("div", { class: "vp-blog-type-switcher" }, entries(buttons).map(([key, Icon]) => h("button", {
                type: "button",
                class: "vp-blog-type-button",
                onClick: () => {
                    activeType.value = key;
                },
            }, h("div", {
                class: ["vp-blog-type-icon-wrapper", { active: activeType.value === key }],
                "aria-label": blogLocale.value[key],
                "data-balloon-pos": "down",
            }, h(Icon))))),
            h(DropTransition, () => activeType.value === "article"
                ? h(ArticlesInfo)
                : activeType.value === "category"
                    ? h(CategoriesInfo)
                    : activeType.value === "tag"
                        ? h(TagsInfo)
                        : h(TimelineList)),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5mb0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmxvZy9JbmZvTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRTlDLE9BQU8sWUFBWSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BFLE9BQU8sY0FBYyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsWUFBWSxFQUNaLE9BQU8sRUFDUCxZQUFZLEdBQ2IsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzQyxPQUFPLFFBQVEsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RCxPQUFPLFlBQVksTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRSxPQUFPLGNBQWMsTUFBTSxtREFBbUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFM0UsT0FBTyxrQ0FBa0MsQ0FBQztBQUkxQyxNQUFNLE9BQU8sR0FBMEM7SUFDckQsT0FBTyxFQUFFLFdBQVc7SUFDcEIsUUFBUSxFQUFFLFlBQVk7SUFDdEIsR0FBRyxFQUFFLE9BQU87SUFDWixRQUFRLEVBQUUsWUFBWTtDQUN2QixDQUFDO0FBRUYsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLFVBQVU7SUFFaEIsS0FBSztRQUNILE1BQU0sVUFBVSxHQUFHLGFBQWEsRUFBRSxDQUFDO1FBRW5DLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBVyxTQUFTLENBQUMsQ0FBQztRQUU1QyxPQUFPLEdBQVUsRUFBRSxDQUNqQixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFO1lBQ25DLENBQUMsQ0FDQyxLQUFLLEVBQ0wsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsRUFDakMsT0FBTyxDQUFDLE9BQU8sQ0FBdUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQzFFLENBQUMsQ0FDQyxRQUFRLEVBQ1I7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLHFCQUFxQjtnQkFDNUIsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQkFDWixVQUFVLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDekIsQ0FBQzthQUNGLEVBQ0QsQ0FBQyxDQUNDLEtBQUssRUFDTDtnQkFDRSxLQUFLLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsS0FBSyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUMxRSxZQUFZLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ25DLGtCQUFrQixFQUFFLE1BQU07YUFDM0IsRUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ1IsQ0FDRixDQUNGLENBQ0Y7WUFFRCxDQUFDLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUNyQixVQUFVLENBQUMsS0FBSyxLQUFLLFNBQVM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO2dCQUNqQixDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxVQUFVO29CQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssS0FBSzt3QkFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FDeEI7U0FDRixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=