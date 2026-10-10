import { RenderDefault, hasGlobalComponent } from "@vuepress/helper/client";
import { defineComponent, h, resolveComponent } from "vue";
import { withBase } from "vuepress/client";
import BreadCrumb from "@theme-hope/components/base/BreadCrumb";
import MarkdownContent from "@theme-hope/components/base/MarkdownContent";
import PageNav from "@theme-hope/components/base/PageNav";
import PageTitle from "@theme-hope/components/base/PageTitle";
import TOC from "@theme-hope/components/base/TOC";
import PageMeta from "@theme-hope/components/info/PageMeta";
import { useDarkMode } from "@theme-hope/composables/useDarkMode";
import { useData } from "@theme-hope/composables/useData";
import "../../styles/base/page-content.scss";
export default defineComponent({
    name: "PageContent",
    slots: Object,
    setup(_props, { slots }) {
        const { frontmatter } = useData();
        const { isDarkMode } = useDarkMode();
        return () => h("main", { id: "main-content", class: "vp-page" }, h(hasGlobalComponent("LocalEncrypt")
            ? resolveComponent("LocalEncrypt")
            : RenderDefault, () => [
            slots.pageTop?.(),
            frontmatter.value.cover
                ? h("div", { class: "page-cover" }, h("img", {
                    src: withBase(frontmatter.value.cover),
                    alt: "",
                    "no-view": "",
                }))
                : null,
            h(BreadCrumb),
            h(PageTitle),
            h(TOC, null, slots),
            slots.content?.() ?? h(MarkdownContent, null, slots),
            h(PageMeta),
            h(PageNav),
            hasGlobalComponent("CommentService")
                ? h(resolveComponent("CommentService"), {
                    darkmode: isDarkMode.value,
                })
                : null,
            slots.pageBottom?.(),
        ]));
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZUNvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmFzZS9QYWdlQ29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sVUFBVSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hFLE9BQU8sZUFBZSxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sT0FBTyxNQUFNLHFDQUFxQyxDQUFDO0FBQzFELE9BQU8sU0FBUyxNQUFNLHVDQUF1QyxDQUFDO0FBQzlELE9BQU8sR0FBRyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xELE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHMUQsT0FBTyxxQ0FBcUMsQ0FBQztBQUU3QyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsYUFBYTtJQUVuQixLQUFLLEVBQUUsTUFhTDtJQUVGLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUU7UUFDckIsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQztRQUVyQyxPQUFPLEdBQVUsRUFBRSxDQUNqQixDQUFDLENBQ0MsTUFBTSxFQUNOLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQ3hDLENBQUMsQ0FDQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUM7WUFDaEMsQ0FBQyxDQUFFLGdCQUFnQixDQUFDLGNBQWMsQ0FBc0I7WUFDeEQsQ0FBQyxDQUFDLGFBQWEsRUFDakIsR0FBRyxFQUFFLENBQUM7WUFDSixLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDakIsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLO2dCQUNyQixDQUFDLENBQUMsQ0FBQyxDQUNDLEtBQUssRUFDTCxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFDdkIsQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDUCxHQUFHLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUN0QyxHQUFHLEVBQUUsRUFBRTtvQkFDUCxTQUFTLEVBQUUsRUFBRTtpQkFDZCxDQUFDLENBQ0g7Z0JBQ0gsQ0FBQyxDQUFDLElBQUk7WUFDUixDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ2IsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNaLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztZQUNuQixLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7WUFDcEQsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNYLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVixrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUNwQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUs7aUJBQzNCLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLElBQUk7WUFDUixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUU7U0FDckIsQ0FDRixDQUNGLENBQUM7SUFDTixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=