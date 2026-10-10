import { watchImmediate } from "@vueuse/core";
import { defineComponent, h, ref } from "vue";
import { useRoute, useRoutePath } from "vuepress/client";
import SidebarChild from "@theme-hope/components/sidebar/SidebarChild";
// oxlint-disable-next-line import/no-cycle
import SidebarGroup from "@theme-hope/components/sidebar/SidebarGroup";
import { isActiveSidebarItem } from "@theme-hope/utils/sidebar/isActiveSidebarItem";
import "../../styles/sidebar/sidebar-links.scss";
export default defineComponent({
    name: "SidebarLinks",
    props: {
        /**
         * Sidebar links config
         *
         * 侧边栏链接配置
         */
        config: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const route = useRoute();
        const routePath = useRoutePath();
        const openGroupIndex = ref(-1);
        const toggleGroup = (index) => {
            openGroupIndex.value = index === openGroupIndex.value ? -1 : index;
        };
        watchImmediate(routePath, () => {
            const index = props.config.findIndex((item) => isActiveSidebarItem(route, item));
            openGroupIndex.value = index;
        }, { flush: "post" });
        return () => h("ul", { class: "vp-sidebar-links" }, props.config.map((config, index) => h("li", "children" in config
            ? h(SidebarGroup, {
                config,
                open: index === openGroupIndex.value,
                onToggle: () => {
                    toggleGroup(index);
                },
            })
            : h(SidebarChild, { config }))));
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lkZWJhckxpbmtzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL3NpZGViYXIvU2lkZWJhckxpbmtzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxZQUFZLE1BQU0sNkNBQTZDLENBQUM7QUFDdkUsMkNBQTJDO0FBQzNDLE9BQU8sWUFBWSxNQUFNLDZDQUE2QyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXBGLE9BQU8seUNBQXlDLENBQUM7QUFFakQsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLGNBQWM7SUFFcEIsS0FBSyxFQUFFO1FBQ0w7Ozs7V0FJRztRQUNILE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxLQUFnQztZQUN0QyxRQUFRLEVBQUUsSUFBSTtTQUNmO0tBQ0Y7SUFFRCxLQUFLLENBQUMsS0FBSztRQUNULE1BQU0sS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLE1BQU0sU0FBUyxHQUFHLFlBQVksRUFBRSxDQUFDO1FBQ2pDLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9CLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBYSxFQUFRLEVBQUU7WUFDMUMsY0FBYyxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRSxDQUFDLENBQUM7UUFFRixjQUFjLENBQ1osU0FBUyxFQUNULEdBQVMsRUFBRTtZQUNULE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUVqRixjQUFjLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDLEVBQ0QsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQ2xCLENBQUM7UUFFRixPQUFPLEdBQWlCLEVBQUUsQ0FDeEIsQ0FBQyxDQUNDLElBQUksRUFDSixFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxFQUM3QixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUNqQyxDQUFDLENBQ0MsSUFBSSxFQUNKLFVBQVUsSUFBSSxNQUFNO1lBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFO2dCQUNkLE1BQU07Z0JBQ04sSUFBSSxFQUFFLEtBQUssS0FBSyxjQUFjLENBQUMsS0FBSztnQkFDcEMsUUFBUSxFQUFFLEdBQUcsRUFBRTtvQkFDYixXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLENBQUM7YUFDRixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUNoQyxDQUNGLENBQ0YsQ0FBQztJQUNOLENBQUM7Q0FDRixDQUFDLENBQUMifQ==