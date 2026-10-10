import { defineComponent, h } from "vue";
import MainLayout from "@theme-hope/components/base/MainLayout";
import SkipLink from "@theme-hope/components/base/SkipLink";
import BloggerInfo from "@theme-hope/components/blog/BloggerInfo";
import InfoList from "@theme-hope/components/blog/InfoList";
import { useWindowSize } from "@theme-hope/composables/useWindowSize";
import "../../styles/blog/blog-main-layout.scss";
export default defineComponent({
    name: "BlogMainLayout",
    slots: Object,
    setup(_props, { slots }) {
        const { isMobile } = useWindowSize();
        return () => [
            h(SkipLink),
            h(MainLayout, { noSidebar: !isMobile.value, noToc: true }, {
                ...slots,
                navScreenBottom: () => slots.navScreenBottom?.() ?? h(BloggerInfo, {}, slots),
                sidebarItems: (sidebarItems) => slots.sidebarItems?.(sidebarItems) ?? (isMobile.value ? h(InfoList) : null),
            }),
        ];
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvZ01haW5MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmxvZy9CbG9nTWFpbkxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUV6QyxPQUFPLFVBQVUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRSxPQUFPLFFBQVEsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RCxPQUFPLFdBQVcsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRSxPQUFPLFFBQVEsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHdEUsT0FBTyx5Q0FBeUMsQ0FBQztBQUVqRCxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsZ0JBQWdCO0lBRXRCLEtBQUssRUFBRSxNQWFMO0lBRUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNyQixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFFckMsT0FBTyxHQUFZLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ1gsQ0FBQyxDQUNDLFVBQVUsRUFDVixFQUFFLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUMzQztnQkFDRSxHQUFHLEtBQUs7Z0JBQ1IsZUFBZSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQztnQkFDN0UsWUFBWSxFQUFFLENBQUMsWUFBa0MsRUFBRSxFQUFFLENBQ25ELEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQzlFLENBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQyJ9