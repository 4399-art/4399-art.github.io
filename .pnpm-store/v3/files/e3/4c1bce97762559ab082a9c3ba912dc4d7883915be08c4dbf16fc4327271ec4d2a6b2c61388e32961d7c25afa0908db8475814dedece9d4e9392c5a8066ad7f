import { computed, defineComponent, h, ref, resolveComponent, toRef, watch } from "vue";
import { onContentUpdated, useRoute } from "vuepress/client";
import AutoLink from "@theme-hope/components/base/AutoLink";
import "../../styles/navbar/nav-screen-menu.scss";
const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
export default defineComponent({
    name: "NavScreenMenu",
    props: {
        /**
         * Navbar Screen nav-screen-menu list config
         *
         * 导航栏下拉列表配置
         */
        config: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const config = toRef(props, "config");
        const route = useRoute();
        const ariaLabel = computed(() => config.value.ariaLabel ?? config.value.text);
        const open = ref(false);
        onContentUpdated(() => {
            open.value = false;
        });
        // hide screen when route changes
        watch(() => route.fullPath, () => {
            open.value = false;
        });
        return () => [
            h("button", {
                type: "button",
                class: ["vp-nav-screen-menu-title", { active: open.value }],
                "aria-label": ariaLabel.value,
                onClick: () => {
                    open.value = !open.value;
                },
            }, [
                h("span", { class: "text" }, [
                    h(resolveComponent("VPIcon"), {
                        icon: config.value.icon,
                        sizing: "both",
                    }),
                    props.config.text,
                ]),
                h("span", { class: ["arrow", open.value ? "down" : "end"] }),
            ]),
            h("ul", {
                class: ["vp-nav-screen-menu", { hide: !open.value }],
            }, config.value.children.map((child) => h("li", { class: "vp-nav-screen-menu-item" }, "children" in child
                ? [
                    h("h4", { class: "vp-nav-screen-menu-subtitle" }, child.link
                        ? h(AutoLink, {
                            config: child,
                            onFocusout: () => {
                                if (isLastItemOfArray(child, config.value.children) &&
                                    child.children.length === 0)
                                    open.value = false;
                            },
                        })
                        : child.text),
                    h("ul", { class: "vp-nav-screen-menu-subitems" }, child.children.map((grandchild) => h("li", { class: "vp-nav-screen-menu-subitem" }, h(AutoLink, {
                        config: grandchild,
                        onFocusout: () => {
                            if (isLastItemOfArray(grandchild, child.children) &&
                                isLastItemOfArray(child, config.value.children))
                                open.value = false;
                        },
                    })))),
                ]
                : h(AutoLink, {
                    config: child,
                    onFocusout: () => {
                        if (isLastItemOfArray(child, config.value.children))
                            open.value = false;
                    },
                })))),
        ];
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2U2NyZWVuTWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9uYXZiYXIvTmF2U2NyZWVuTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDeEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTdELE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBSTVELE9BQU8sMENBQTBDLENBQUM7QUFFbEQsTUFBTSxpQkFBaUIsR0FBRyxDQUFPLElBQVUsRUFBRSxHQUFXLEVBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztBQUVuRyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsZUFBZTtJQUVyQixLQUFLLEVBQUU7UUFDTDs7OztXQUlHO1FBQ0gsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQXlFO1lBRS9FLFFBQVEsRUFBRSxJQUFJO1NBQ2Y7S0FDRjtJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1QsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0QyxNQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUV6QixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5RSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEIsZ0JBQWdCLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRUgsaUNBQWlDO1FBQ2pDLEtBQUssQ0FDSCxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUNwQixHQUFHLEVBQUU7WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDLENBQ0YsQ0FBQztRQUVGLE9BQU8sR0FBWSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUNDLFFBQVEsRUFDUjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzNELFlBQVksRUFBRSxTQUFTLENBQUMsS0FBSztnQkFDN0IsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDM0IsQ0FBQzthQUNGLEVBQ0Q7Z0JBQ0UsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtvQkFDM0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUM1QixJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO3dCQUN2QixNQUFNLEVBQUUsTUFBTTtxQkFDZixDQUFDO29CQUNGLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTtpQkFDbEIsQ0FBQztnQkFDRixDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzthQUM3RCxDQUNGO1lBQ0QsQ0FBQyxDQUNDLElBQUksRUFDSjtnQkFDRSxLQUFLLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNyRCxFQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ2xDLENBQUMsQ0FDQyxJQUFJLEVBQ0osRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsRUFDcEMsVUFBVSxJQUFJLEtBQUs7Z0JBQ2pCLENBQUMsQ0FBQztvQkFDRSxDQUFDLENBQ0MsSUFBSSxFQUNKLEVBQUUsS0FBSyxFQUFFLDZCQUE2QixFQUFFLEVBQ3hDLEtBQUssQ0FBQyxJQUFJO3dCQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFOzRCQUNWLE1BQU0sRUFBRSxLQUF3Qjs0QkFDaEMsVUFBVSxFQUFFLEdBQUcsRUFBRTtnQ0FDZixJQUNFLGlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztvQ0FDL0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztvQ0FFM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7NEJBQ3ZCLENBQUM7eUJBQ0YsQ0FBQzt3QkFDSixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDZjtvQkFDRCxDQUFDLENBQ0MsSUFBSSxFQUNKLEVBQUUsS0FBSyxFQUFFLDZCQUE2QixFQUFFLEVBQ3hDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FDaEMsQ0FBQyxDQUNDLElBQUksRUFDSixFQUFFLEtBQUssRUFBRSw0QkFBNEIsRUFBRSxFQUN2QyxDQUFDLENBQUMsUUFBUSxFQUFFO3dCQUNWLE1BQU0sRUFBRSxVQUFVO3dCQUNsQixVQUFVLEVBQUUsR0FBRyxFQUFFOzRCQUNmLElBQ0UsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0NBQzdDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztnQ0FFL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLENBQUM7cUJBQ0YsQ0FBQyxDQUNILENBQ0YsQ0FDRjtpQkFDRjtnQkFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDVixNQUFNLEVBQUUsS0FBSztvQkFDYixVQUFVLEVBQUUsR0FBRyxFQUFFO3dCQUNmLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDOzRCQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUMxRSxDQUFDO2lCQUNGLENBQUMsQ0FDUCxDQUNGLENBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQyJ9