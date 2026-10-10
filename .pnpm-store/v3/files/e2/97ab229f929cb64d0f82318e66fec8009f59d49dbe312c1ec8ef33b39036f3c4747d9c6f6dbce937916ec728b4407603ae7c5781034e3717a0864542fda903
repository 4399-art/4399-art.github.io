import { computed, defineComponent, h } from "vue";
import { RouteLink } from "vuepress/client";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useBlogLocale } from "@theme-hope/composables/blog/useBlogLocale";
import { useBlogOptions } from "@theme-hope/composables/blog/useBlogOptions";
import { useTimeline } from "@theme-hope/composables/blog/useTimeline";
import "../../styles/blog/timeline-items.scss";
export default defineComponent({
    name: "TimelineItems",
    setup() {
        const blogOptions = useBlogOptions();
        const blogLocale = useBlogLocale();
        const timelines = useTimeline();
        const hint = computed(() => blogOptions.value.timeline ?? blogLocale.value.timelineTitle);
        return () => h("div", { class: "timeline-wrapper" }, h("ul", { class: "timeline-content" }, [
            h(DropTransition, () => h("li", { class: "motto" }, hint.value)),
            timelines.value.config.map(({ year, items }, index) => h(DropTransition, { appear: true, delay: 0.08 * (index + 1), group: true }, () => [
                h("h3", { key: "title", id: year, class: "timeline-year-title" }, h("span", year)),
                h("li", { key: "content", class: "timeline-year-list" }, [
                    h("ul", { class: "timeline-year-wrapper" }, items.map(({ date, info, path }) => h("li", { class: "timeline-item" }, [
                        h("span", { class: "timeline-date" }, date),
                        h(RouteLink, {
                            class: "timeline-title",
                            to: path,
                        }, () => info.title),
                    ]))),
                ]),
            ])),
        ]));
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZWxpbmVJdGVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ibG9nL1RpbWVsaW5lSXRlbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLGNBQWMsTUFBTSxtREFBbUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUV2RSxPQUFPLHVDQUF1QyxDQUFDO0FBRS9DLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxlQUFlO0lBRXJCLEtBQUs7UUFDSCxNQUFNLFdBQVcsR0FBRyxjQUFjLEVBQUUsQ0FBQztRQUNyQyxNQUFNLFVBQVUsR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxNQUFNLFNBQVMsR0FBRyxXQUFXLEVBQUUsQ0FBQztRQUVoQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUxRixPQUFPLEdBQVUsRUFBRSxDQUNqQixDQUFDLENBQ0MsS0FBSyxFQUNMLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEVBQzdCLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsRUFBRTtZQUNyQyxDQUFDLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ3BELENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUNoRixDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2xGLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxFQUFFO29CQUN2RCxDQUFDLENBQ0MsSUFBSSxFQUNKLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLEVBQ2xDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUNqQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFO3dCQUNsQyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFLElBQUksQ0FBQzt3QkFDM0MsQ0FBQyxDQUNDLFNBQVMsRUFDVDs0QkFDRSxLQUFLLEVBQUUsZ0JBQWdCOzRCQUN2QixFQUFFLEVBQUUsSUFBSTt5QkFDVCxFQUNELEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQ2pCO3FCQUNGLENBQUMsQ0FDSCxDQUNGO2lCQUNGLENBQUM7YUFDSCxDQUFDLENBQ0g7U0FDRixDQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7Q0FDRixDQUFDLENBQUMifQ==