import { keys } from "@vuepress/helper/client";
import { computed, defineComponent, h } from "vue";
import CategoryList from "@theme-hope/components/blog/CategoryList";
import { CategoryIcon } from "@theme-hope/components/blog/icons";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useBlogLocale } from "@theme-hope/composables/blog/useBlogLocale";
import { useCategoryMap } from "@theme-hope/composables/blog/useCategoryMap";
import { useNavigate } from "@theme-hope/composables/useNavigate";
export default defineComponent({
    name: "CategoriesInfo",
    setup() {
        const blogLocale = useBlogLocale();
        const categoryMap = useCategoryMap();
        const navigate = useNavigate();
        const categoryNumber = computed(() => keys(categoryMap.value.map).length);
        return () => h("div", { class: "vp-category-wrapper" }, [
            categoryNumber.value
                ? [
                    h("div", {
                        class: "title",
                        onClick: () => {
                            navigate(categoryMap.value.path);
                        },
                    }, [
                        h(CategoryIcon),
                        h("span", { class: "num" }, categoryNumber.value),
                        blogLocale.value.category,
                    ]),
                    h("hr"),
                    h(DropTransition, { delay: 0.04 }, () => h(CategoryList)),
                ]
                : h("div", { class: "vp-category-empty" }, blogLocale.value.empty.replace("$text", blogLocale.value.category)),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcmllc0luZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmxvZy9DYXRlZ29yaWVzSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRW5ELE9BQU8sWUFBWSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLGNBQWMsTUFBTSxtREFBbUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVsRSxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsZ0JBQWdCO0lBRXRCLEtBQUs7UUFDSCxNQUFNLFVBQVUsR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxNQUFNLFdBQVcsR0FBRyxjQUFjLEVBQUUsQ0FBQztRQUNyQyxNQUFNLFFBQVEsR0FBRyxXQUFXLEVBQUUsQ0FBQztRQUUvQixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUUsT0FBTyxHQUFVLEVBQUUsQ0FDakIsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxFQUFFO1lBQ3pDLGNBQWMsQ0FBQyxLQUFLO2dCQUNsQixDQUFDLENBQUM7b0JBQ0UsQ0FBQyxDQUNDLEtBQUssRUFDTDt3QkFDRSxLQUFLLEVBQUUsT0FBTzt3QkFDZCxPQUFPLEVBQUUsR0FBRyxFQUFFOzRCQUNaLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNuQyxDQUFDO3FCQUNGLEVBQ0Q7d0JBQ0UsQ0FBQyxDQUFDLFlBQVksQ0FBQzt3QkFDZixDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUM7d0JBQ2pELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUTtxQkFDMUIsQ0FDRjtvQkFDRCxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNQLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUMxRDtnQkFDSCxDQUFDLENBQUMsQ0FBQyxDQUNDLEtBQUssRUFDTCxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxFQUM5QixVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQ25FO1NBQ04sQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9