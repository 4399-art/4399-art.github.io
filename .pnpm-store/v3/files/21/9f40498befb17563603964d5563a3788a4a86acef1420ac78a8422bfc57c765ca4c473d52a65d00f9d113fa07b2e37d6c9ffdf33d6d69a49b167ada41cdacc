import { isString } from "@vuepress/helper/client";
import { defineComponent, h, resolveComponent } from "vue";
import { useRoute } from "vuepress/client";
import AutoLink from "@theme-hope/components/base/AutoLink";
import { isActiveItem } from "@theme-hope/utils/isActiveItem";
import "../../styles/sidebar/sidebar-child.scss";
export default defineComponent({
    name: "SidebarChild",
    props: {
        /**
         * Sidebar item config
         *
         * 侧边栏项目配置
         */
        config: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const route = useRoute();
        return () => isString(props.config.link)
            ? // If the item has link, render it as `<AutoLink>`
                h(AutoLink, {
                    class: ["vp-sidebar-link", { active: isActiveItem(route, props.config) }],
                    config: {
                        ...props.config,
                        exact: true,
                    },
                })
            : // If the item only has text, render it as `<p>`
                h("p", props, [
                    h(resolveComponent("VPIcon"), {
                        icon: props.config.icon,
                        sizing: "both",
                    }),
                    props.config.text,
                ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lkZWJhckNoaWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL3NpZGViYXIvU2lkZWJhckNoaWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxRQUFRLE1BQU0sc0NBQXNDLENBQUM7QUFFNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSTlELE9BQU8seUNBQXlDLENBQUM7QUFFakQsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLGNBQWM7SUFFcEIsS0FBSyxFQUFFO1FBQ0w7Ozs7V0FJRztRQUNILE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFtQztZQUN6QyxRQUFRLEVBQUUsSUFBSTtTQUNmO0tBQ0Y7SUFFRCxLQUFLLENBQUMsS0FBSztRQUNULE1BQU0sS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBRXpCLE9BQU8sR0FBVSxFQUFFLENBQ2pCLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUN6QixDQUFDLENBQUMsa0RBQWtEO2dCQUNsRCxDQUFDLENBQUMsUUFBUSxFQUFFO29CQUNWLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ3pFLE1BQU0sRUFBRTt3QkFDTixHQUFHLEtBQUssQ0FBQyxNQUFNO3dCQUNmLEtBQUssRUFBRSxJQUFJO3FCQUNPO2lCQUNyQixDQUFDO1lBQ0osQ0FBQyxDQUFDLGdEQUFnRDtnQkFDaEQsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUU7b0JBQ1osQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUM1QixJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJO3dCQUN2QixNQUFNLEVBQUUsTUFBTTtxQkFDZixDQUFDO29CQUNGLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTtpQkFDbEIsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9