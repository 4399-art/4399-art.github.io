import { keys } from "@vuepress/helper/client";
import { computed, defineComponent, h } from "vue";
import { TagIcon } from "@theme-hope/components/blog/icons";
import TagList from "@theme-hope/components/blog/TagList";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useBlogLocale } from "@theme-hope/composables/blog/useBlogLocale";
import { useTagMap } from "@theme-hope/composables/blog/useTagMap";
import { useNavigate } from "@theme-hope/composables/useNavigate";
export default defineComponent({
    name: "TagsInfo",
    setup() {
        const blogLocale = useBlogLocale();
        const tagMap = useTagMap();
        const navigate = useNavigate();
        const tagNumber = computed(() => keys(tagMap.value.map).length);
        return () => h("div", { class: "vp-tag-wrapper" }, [
            tagNumber.value
                ? [
                    h("div", {
                        class: "title",
                        onClick: () => {
                            navigate(tagMap.value.path);
                        },
                    }, [h(TagIcon), h("span", { class: "num" }, tagNumber.value), blogLocale.value.tag]),
                    h("hr"),
                    h(DropTransition, { delay: 0.04 }, () => h(TagList)),
                ]
                : h("div", { class: "vp-tag-empty" }, blogLocale.value.empty.replace("$text", blogLocale.value.tag)),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnc0luZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmxvZy9UYWdzSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRW5ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLE9BQU8sTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRCxPQUFPLGNBQWMsTUFBTSxtREFBbUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVsRSxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsVUFBVTtJQUVoQixLQUFLO1FBQ0gsTUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFDbkMsTUFBTSxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7UUFDM0IsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFFL0IsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhFLE9BQU8sR0FBVSxFQUFFLENBQ2pCLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQyxTQUFTLENBQUMsS0FBSztnQkFDYixDQUFDLENBQUM7b0JBQ0UsQ0FBQyxDQUNDLEtBQUssRUFDTDt3QkFDRSxLQUFLLEVBQUUsT0FBTzt3QkFDZCxPQUFPLEVBQUUsR0FBRyxFQUFFOzRCQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM5QixDQUFDO3FCQUNGLEVBQ0QsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDakY7b0JBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDUCxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDckQ7Z0JBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FDQyxLQUFLLEVBQ0wsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQ3pCLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDOUQ7U0FDTixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=