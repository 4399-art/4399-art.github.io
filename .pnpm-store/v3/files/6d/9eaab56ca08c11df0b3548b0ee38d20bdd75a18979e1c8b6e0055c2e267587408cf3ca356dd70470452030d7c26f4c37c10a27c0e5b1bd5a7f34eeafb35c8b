import { defineComponent, h } from "vue";
import { RouteLink } from "vuepress/client";
import { TimelineIcon } from "@theme-hope/components/blog/icons";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useBlogLocale } from "@theme-hope/composables/blog/useBlogLocale";
import { useTimeline } from "@theme-hope/composables/blog/useTimeline";
import { useNavigate } from "@theme-hope/composables/useNavigate";
import "../../styles/blog/timeline-list.scss";
export default defineComponent({
    name: "TimelineList",
    setup() {
        const blogLocale = useBlogLocale();
        const timelines = useTimeline();
        const navigate = useNavigate();
        return () => h("div", { class: "timeline-list-wrapper" }, [
            h("div", {
                class: "title",
                onClick: () => {
                    navigate(timelines.value.path);
                },
            }, [
                h(TimelineIcon),
                h("span", { class: "num" }, timelines.value.items.length),
                blogLocale.value.timeline,
            ]),
            h("hr"),
            h("div", { class: "timeline-content" }, h("ul", { class: "timeline-list" }, timelines.value.config.map(({ year, items }, index) => h(DropTransition, { appear: true, delay: 0.08 * (index + 1) }, () => h("li", [
                h("h3", { class: "timeline-year" }, year),
                h("ul", { class: "timeline-year-wrapper" }, items.map(({ date, info, path }) => h("li", { class: "timeline-item" }, [
                    h("span", { class: "timeline-date" }, date),
                    h(RouteLink, { class: "timeline-title", to: path }, () => info.title),
                ]))),
            ]))))),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZWxpbmVMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jsb2cvVGltZWxpbmVMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakUsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbEUsT0FBTyxzQ0FBc0MsQ0FBQztBQUU5QyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsY0FBYztJQUVwQixLQUFLO1FBQ0gsTUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFDbkMsTUFBTSxTQUFTLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFDaEMsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFFL0IsT0FBTyxHQUFVLEVBQUUsQ0FDakIsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxFQUFFO1lBQzNDLENBQUMsQ0FDQyxLQUFLLEVBQ0w7Z0JBQ0UsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQkFDWixRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakMsQ0FBQzthQUNGLEVBQ0Q7Z0JBQ0UsQ0FBQyxDQUFDLFlBQVksQ0FBQztnQkFDZixDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDekQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRO2FBQzFCLENBQ0Y7WUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ1AsQ0FBQyxDQUNDLEtBQUssRUFDTCxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxFQUM3QixDQUFDLENBQ0MsSUFBSSxFQUNKLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUMxQixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUNwRCxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQ2xFLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsRUFBRSxJQUFJLENBQUM7Z0JBQ3pDLENBQUMsQ0FDQyxJQUFJLEVBQ0osRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsRUFDbEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQ2pDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEVBQUU7b0JBQ2xDLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEVBQUUsSUFBSSxDQUFDO29CQUMzQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUN0RSxDQUFDLENBQ0gsQ0FDRjthQUNGLENBQUMsQ0FDSCxDQUNGLENBQ0YsQ0FDRjtTQUNGLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRixDQUFDLENBQUMifQ==