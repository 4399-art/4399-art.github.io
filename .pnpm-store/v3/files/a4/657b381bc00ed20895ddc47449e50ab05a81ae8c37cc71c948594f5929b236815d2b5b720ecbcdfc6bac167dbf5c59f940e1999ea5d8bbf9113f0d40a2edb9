import { isLinkAbsolute } from "@vuepress/helper/client";
import { defineComponent, h, resolveComponent } from "vue";
import { generateIndexFromHash } from "vuepress-shared/client";
import { withBase } from "vuepress/client";
import { useNavigate } from "@theme-hope/composables/useNavigate";
import { usePure } from "@theme-hope/composables/usePure";
import cssVariables from "../../styles/variables.module.scss";
import "../../styles/blog/project-panel.scss";
export default defineComponent({
    name: "ProjectPanel",
    props: {
        /** 项目列表 */
        items: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const isPure = usePure();
        const navigate = useNavigate();
        return () => h("div", { class: "vp-project-panel" }, props.items.map(({ icon, link, name, desc, background }) => h("a", {
            class: [
                "vp-project-card",
                {
                    [`color${generateIndexFromHash(name, Number(cssVariables.colorNumber))}`]: !isPure.value && !background,
                },
            ],
            ...(background ? { style: background } : {}),
            href: isLinkAbsolute(link) ? withBase(link) : link,
            onClick: (event) => {
                navigate(link);
                event.preventDefault();
            },
        }, [
            icon
                ? h(resolveComponent("VPIcon"), {
                    class: "vp-project-icon",
                    icon,
                })
                : null,
            h("div", { class: "vp-project-name" }, name),
            h("div", { class: "vp-project-desc" }, desc),
        ])));
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdFBhbmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jsb2cvUHJvamVjdFBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUkxRCxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLHNDQUFzQyxDQUFDO0FBRTlDLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxjQUFjO0lBRXBCLEtBQUssRUFBRTtRQUNMLFdBQVc7UUFDWCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsS0FBZ0Q7WUFDdEQsUUFBUSxFQUFFLElBQUk7U0FDZjtLQUNGO0lBRUQsS0FBSyxDQUFDLEtBQUs7UUFDVCxNQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUN6QixNQUFNLFFBQVEsR0FBRyxXQUFXLEVBQUUsQ0FBQztRQUUvQixPQUFPLEdBQWlCLEVBQUUsQ0FDeEIsQ0FBQyxDQUNDLEtBQUssRUFDTCxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxFQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FDekQsQ0FBQyxDQUNDLEdBQUcsRUFDSDtZQUNFLEtBQUssRUFBRTtnQkFDTCxpQkFBaUI7Z0JBQ2pCO29CQUNFLENBQUMsUUFBUSxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDdkUsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVTtpQkFDL0I7YUFDRjtZQUNELEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ2xELE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2YsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3pCLENBQUM7U0FDRixFQUNEO1lBQ0UsSUFBSTtnQkFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUM1QixLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixJQUFJO2lCQUNMLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLElBQUk7WUFDUixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxDQUFDO1lBQzVDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLENBQUM7U0FDN0MsQ0FDRixDQUNGLENBQ0YsQ0FBQztJQUNOLENBQUM7Q0FDRixDQUFDLENBQUMifQ==