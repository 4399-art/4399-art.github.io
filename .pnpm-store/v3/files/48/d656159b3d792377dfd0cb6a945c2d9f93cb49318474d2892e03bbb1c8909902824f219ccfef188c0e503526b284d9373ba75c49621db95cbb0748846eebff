import { computed, defineComponent, h, ref, resolveComponent } from "vue";
import { useRoute } from "vuepress/client";
import AutoLink from "@theme-hope/components/base/AutoLink";
// oxlint-disable-next-line import/no-cycle
import SidebarLinks from "@theme-hope/components/sidebar/SidebarLinks";
import { isActiveItem } from "@theme-hope/utils/isActiveItem";
import { isActiveSidebarItem } from "@theme-hope/utils/sidebar/isActiveSidebarItem";
import "../../styles/sidebar/sidebar-group.scss";
export default defineComponent({
    name: "SidebarGroup",
    props: {
        /**
         * Sidebar group item config
         *
         * 侧边栏分组配置
         */
        config: {
            type: Object,
            required: true,
        },
        /**
         * Whether current group is open
         *
         * 当前分组是否展开
         */
        open: {
            type: Boolean,
            required: true,
        },
    },
    emits: ["toggle"],
    setup(props, { emit }) {
        const route = useRoute();
        const hasBeenToggled = ref(false);
        const active = computed(() => isActiveSidebarItem(route, props.config));
        const exact = computed(() => isActiveItem(route, props.config));
        const shouldOpen = computed(() => props.open || (props.config.expanded && !hasBeenToggled.value));
        return () => {
            const { collapsible, children, icon, prefix, link, text } = props.config;
            return h("section", { class: "vp-sidebar-group" }, [
                h(collapsible ? "button" : "p", {
                    class: [
                        "vp-sidebar-header",
                        {
                            // oxlint-disable-next-line typescript/prefer-nullish-coalescing
                            clickable: collapsible || link,
                            exact: exact.value,
                            active: active.value,
                        },
                    ],
                    ...(collapsible
                        ? {
                            type: "button",
                            onClick: () => {
                                hasBeenToggled.value = true;
                                emit("toggle");
                            },
                        }
                        : {}),
                }, [
                    // Icon
                    h(resolveComponent("VPIcon"), { icon, sizing: "both" }),
                    // Title
                    link
                        ? h(AutoLink, {
                            class: "vp-sidebar-title no-external-link-icon",
                            config: { text, link },
                        })
                        : h("span", { class: "vp-sidebar-title" }, text),
                    // Arrow
                    collapsible
                        ? h("span", {
                            class: ["vp-arrow", shouldOpen.value ? "down" : "end"],
                        })
                        : null,
                ]),
                shouldOpen.value || !collapsible
                    ? h(SidebarLinks, { key: prefix, config: children })
                    : null,
            ]);
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lkZWJhckdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL3NpZGViYXIvU2lkZWJhckdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELDJDQUEyQztBQUMzQyxPQUFPLFlBQVksTUFBTSw2Q0FBNkMsQ0FBQztBQUV2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFcEYsT0FBTyx5Q0FBeUMsQ0FBQztBQUVqRCxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsY0FBYztJQUVwQixLQUFLLEVBQUU7UUFDTDs7OztXQUlHO1FBQ0gsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQW9DO1lBQzFDLFFBQVEsRUFBRSxJQUFJO1NBQ2Y7UUFFRDs7OztXQUlHO1FBQ0gsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsSUFBSTtTQUNmO0tBQ0Y7SUFFRCxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFFakIsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRTtRQUNuQixNQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUV6QixNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxLQUFL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