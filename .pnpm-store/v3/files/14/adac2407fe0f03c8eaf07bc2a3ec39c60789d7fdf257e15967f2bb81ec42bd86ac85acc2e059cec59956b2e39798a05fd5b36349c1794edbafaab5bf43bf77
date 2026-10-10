import { useEventListener } from "@vueuse/core";
import { defineComponent, h, resolveComponent } from "vue";
import AutoLink from "@theme-hope/components/base/AutoLink";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { useNavigate } from "@theme-hope/composables/useNavigate";
import { useRelatedLinks } from "@theme-hope/composables/useRelatedLinks";
import "../../styles/base/page-nav.scss";
export default defineComponent({
    name: "PageNav",
    setup() {
        const metaLocale = useMetaLocale();
        const navigate = useNavigate();
        const { prevLink, nextLink } = useRelatedLinks();
        useEventListener("keydown", (event) => {
            if (event.altKey) {
                switch (event.key) {
                    case "ArrowRight": {
                        if (nextLink.value) {
                            navigate(nextLink.value.link);
                            event.preventDefault();
                        }
                        break;
                    }
                    case "ArrowLeft": {
                        if (prevLink.value) {
                            navigate(prevLink.value.link);
                            event.preventDefault();
                        }
                        break;
                    }
                    // do nothing for other keys
                    default:
                }
            }
        });
        return () => prevLink.value || nextLink.value
            ? h("nav", { class: "vp-page-nav" }, [
                prevLink.value
                    ? h(AutoLink, { class: "prev", config: prevLink.value }, () => [
                        h("div", { class: "hint" }, [
                            h("span", { class: "arrow start" }),
                            metaLocale.value.prev,
                        ]),
                        h("div", { class: "link" }, [
                            h(resolveComponent("VPIcon"), {
                                icon: prevLink.value?.icon,
                            }),
                            prevLink.value?.text,
                        ]),
                    ])
                    : null,
                nextLink.value
                    ? h(AutoLink, { class: "next", config: nextLink.value }, () => [
                        h("div", { class: "hint" }, [
                            metaLocale.value.next,
                            h("span", { class: "arrow end" }),
                        ]),
                        h("div", { class: "link" }, [
                            nextLink.value?.text,
                            h(resolveComponent("VPIcon"), {
                                icon: nextLink.value?.icon,
                            }),
                        ]),
                    ])
                    : null,
            ])
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZU5hdi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9iYXNlL1BhZ2VOYXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWhELE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRTNELE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTFFLE9BQU8saUNBQWlDLENBQUM7QUFFekMsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLFNBQVM7SUFFZixLQUFLO1FBQ0gsTUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFDbkMsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFDL0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxlQUFlLEVBQUUsQ0FBQztRQUVqRCxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEVBQVEsRUFBRTtZQUMxQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDakIsUUFBUSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ2xCLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ25CLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUM5QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ3pCLENBQUM7d0JBQ0QsTUFBTTtvQkFDUixDQUFDO29CQUNELEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDakIsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ25CLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUM5QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ3pCLENBQUM7d0JBQ0QsTUFBTTtvQkFDUixDQUFDO29CQUNELDRCQUE0QjtvQkFDNUIsUUFBUTtnQkFDVixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFpQixFQUFFLENBQ3hCLFFBQVEsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLEtBQUs7WUFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pDLFFBQVEsQ0FBQyxLQUFLO29CQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDO3dCQUMzRCxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFOzRCQUMxQixDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxDQUFDOzRCQUNuQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUk7eUJBQ3RCLENBQUM7d0JBQ0YsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTs0QkFDMUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO2dDQUM1QixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJOzZCQUMzQixDQUFDOzRCQUNGLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSTt5QkFDckIsQ0FBQztxQkFDSCxDQUFDO29CQUNKLENBQUMsQ0FBQyxJQUFJO2dCQUNSLFFBQVEsQ0FBQyxLQUFLO29CQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDO3dCQUMzRCxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFOzRCQUMxQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUk7NEJBQ3JCLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUM7eUJBQ2xDLENBQUM7d0JBQ0YsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTs0QkFDMUIsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJOzRCQUNwQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0NBQzVCLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUk7NkJBQzNCLENBQUM7eUJBQ0gsQ0FBQztxQkFDSCxDQUFDO29CQUNKLENBQUMsQ0FBQyxJQUFJO2FBQ1QsQ0FBQztZQUNKLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=