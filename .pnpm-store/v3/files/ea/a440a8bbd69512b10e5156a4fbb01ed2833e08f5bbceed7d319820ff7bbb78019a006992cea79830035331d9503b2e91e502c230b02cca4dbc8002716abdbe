import { computed, defineComponent, h, ref, resolveComponent, toRef } from "vue";
import { onContentUpdated } from "vuepress/client";
import AutoLink from "@theme-hope/components/base/AutoLink";
import "../../styles/navbar/navbar-dropdown.scss";
export default defineComponent({
    name: "NavbarDropdown",
    props: {
        /**
         * Dropdown config
         *
         * 下拉列表配置
         */
        config: {
            type: Object,
            required: true,
        },
    },
    slots: Object,
    setup(props, { slots }) {
        const config = toRef(props, "config");
        const dropdownAriaLabel = computed(() => config.value.ariaLabel ?? config.value.text);
        const open = ref(false);
        /**
         * Open the dropdown when user tab and click from keyboard.
         *
         * Use event.detail to detect tab and click from keyboard.
         * The Tab + Click is UIEvent > KeyboardEvent, so the detail is 0.
         *
         * @param event - click event
         * @see https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
         */
        const handleDropdown = (event) => {
            const isTriggerByTab = event.detail === 0;
            if (isTriggerByTab)
                open.value = !open.value;
        };
        onContentUpdated(() => {
            open.value = false;
        });
        return () => h("div", { class: ["vp-dropdown-wrapper", { open: open.value }] }, [
            h("button", {
                type: "button",
                class: "vp-dropdown-title",
                "aria-label": dropdownAriaLabel.value,
                onClick: handleDropdown,
            }, [
                slots.title?.() ?? [
                    h(resolveComponent("VPIcon"), { icon: config.value.icon }),
                    props.config.text,
                ],
                h("span", { class: "arrow" }),
                h("ul", { class: "vp-dropdown" }, config.value.children.map((child, index) => {
                    const isLastChild = index === config.value.children.length - 1;
                    return h("li", { class: "vp-dropdown-item" }, "children" in child
                        ? [
                            h("h4", { class: "vp-dropdown-subtitle" }, child.link
                                ? h(AutoLink, {
                                    config: child,
                                    onFocusout: () => {
                                        if (
                                        // No children
                                        child.children.length === 0 &&
                                            isLastChild)
                                            open.value = false;
                                    },
                                })
                                : child.text),
                            h("ul", { class: "vp-dropdown-subitems" }, child.children.map((grandchild, grandIndex) => h("li", { class: "vp-dropdown-subitem" }, h(AutoLink, {
                                config: grandchild,
                                onFocusout: () => {
                                    if (
                                    // Last item of grandchild
                                    grandIndex === child.children.length - 1 &&
                                        isLastChild)
                                        open.value = false;
                                },
                            })))),
                        ]
                        : h(AutoLink, {
                            config: child,
                            onFocusout: () => {
                                if (isLastChild)
                                    open.value = false;
                            },
                        }));
                })),
            ]),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2YmFyRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvbmF2YmFyL05hdmJhckRyb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5ELE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBSTVELE9BQU8sMENBQTBDLENBQUM7QUFFbEQsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLGdCQUFnQjtJQUV0QixLQUFLLEVBQUU7UUFDTDs7OztXQUlHO1FBQ0gsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQXlFO1lBRS9FLFFBQVEsRUFBRSxJQUFJO1NBQ2Y7S0FDRjtJQUVELEtBQUssRUFBRSxNQUVMO0lBRUYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNwQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXRDLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEYsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhCOzs7Ozs7OztXQVFHO1FBQ0gsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUFpQixFQUFRLEVBQUU7WUFDakQsTUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFFMUMsSUFBSSxjQUFjO2dCQUFFLElBQUksQ0FB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