import { watchImmediate } from "@vueuse/core";
import { defineComponent, h, onMounted, shallowRef } from "vue";
import { useRoute } from "vuepress/client";
import SidebarLinks from "@theme-hope/components/sidebar/SidebarLinks";
import { useSidebarItems } from "@theme-hope/composables/sidebar/useSidebarItems";
import "../../styles/sidebar/sidebar.scss";
export default defineComponent({
    name: "SideBar",
    slots: Object,
    setup(_props, { slots }) {
        const route = useRoute();
        const sidebarItems = useSidebarItems();
        const sidebar = shallowRef();
        onMounted(() => {
            // Scroll to active sidebar item
            watchImmediate(() => route.hash, (hash) => {
                // Get the active sidebar item DOM, whose href equals to the current route
                const activeSidebarItem = document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${route.path}${hash}"]`);
                if (!activeSidebarItem)
                    return;
                // Get the top and height of the sidebar
                // oxlint-disable-next-line typescript/no-non-null-assertion
                const { top: sidebarTop, height: sidebarHeight } = sidebar.value.getBoundingClientRect();
                // Get the top and height of the active sidebar item
                const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
                // When the active sidebar item overflows the top edge of sidebar
                if (activeSidebarItemTop < sidebarTop)
                    // Scroll to the top edge of sidebar
                    activeSidebarItem.scrollIntoView(true);
                // When the active sidebar item overflows the bottom edge of sidebar
                else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight)
                    // Scroll to the bottom edge of sidebar
                    activeSidebarItem.scrollIntoView(false);
            });
        });
        return () => h("aside", {
            ref: sidebar,
            key: "sidebar",
            id: "sidebar",
            class: "vp-sidebar",
            "vp-sidebar": "",
        }, [
            slots.sidebarTop?.(),
            slots.sidebarItems?.(sidebarItems.value) ??
                h(SidebarLinks, { config: sidebarItems.value }),
            slots.sidebarBottom?.(),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLFlBQVksTUFBTSw2Q0FBNkMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFHbEYsT0FBTyxtQ0FBbUMsQ0FBQztBQUUzQyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsU0FBUztJQUVmLEtBQUssRUFBRSxNQUlMO0lBRUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNyQixNQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUN6QixNQUFNLFlBQVksR0FBRyxlQUFlLEVBQUUsQ0FBQztRQUV2QyxNQUFNLE9BQU8sR0FBRyxVQUFVLEVBQWUsQ0FBQztRQUUxQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2IsZ0NBQWdDO1lBQ2hDLGNBQWMsQ0FDWixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUNoQixDQUFDLElBQUksRUFBUSxFQUFFO2dCQUNiLDBFQUEwRTtnQkFDMUUsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUM5Qyx1Q0FBdUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FDN0QsQ0FBQztnQkFFRixJQUFJLENBQUMsaUJBQWlCO29CQUFFLE9BQU87Z0JBRS9CLHdDQUF3QztnQkFDeEMsNERBQTREO2dCQUM1RCxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUMxRixvREFBb0Q7Z0JBQ3BELE1BQU0sRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixFQUFFLEdBQ2xFLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBRTVDLGlFQUFpRTtnQkFDakUsSUFBSSxvQkFBb0IsR0FBRyxVQUFVO29CQUNuQyxvQ0FBb0M7b0JBQ3BDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekMsb0VBQW9FO3FCQUMvRCxJQUFJLG9CQUFvQixHQUFHLHVCQUF1QixHQUFHLFVBQVUsR0FBRyxhQUFhO29CQUNsRix1Q0FBdUM7b0JBQ3ZDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFVLEVBQUUsQ0FDakIsQ0FBQyxDQUNDLE9BQU8sRUFDUDtZQUNFLEdBQUcsRUFBRSxPQUFPO1lBQ1osR0FBRyxFQUFFLFNBQVM7WUFDZCxFQUFFLEVBQUUsU0FBUztZQUNiLEtBQUssRUFBRSxZQUFZO1lBQ25CLFlBQVksRUFBRSxFQUFFO1NBQ2pCLEVBQ0Q7WUFDRSxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDcEIsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pELEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRTtTQUN4QixDQUNGLENBQUM7SUFDTixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=