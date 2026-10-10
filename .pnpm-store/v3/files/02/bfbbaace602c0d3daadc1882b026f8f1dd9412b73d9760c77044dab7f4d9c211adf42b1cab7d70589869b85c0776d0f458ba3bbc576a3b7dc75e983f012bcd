import { computed, defineComponent, h } from "vue";
import { useFrontmatter, usePage } from "vuepress/client";
import ArticleList from "@theme-hope/components/blog/ArticleList";
import CategoryList from "@theme-hope/components/blog/CategoryList";
import InfoPanel from "@theme-hope/components/blog/InfoPanel";
import TagList from "@theme-hope/components/blog/TagList";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useCategoryMap } from "@theme-hope/composables/blog/useCategoryMap";
import { useTagMap } from "@theme-hope/composables/blog/useTagMap";
export default defineComponent({
    name: "CategoryPage",
    slots: Object,
    setup(_props, { slots }) {
        const page = usePage();
        const frontmatter = useFrontmatter();
        const categoryMap = useCategoryMap();
        const tagMap = useTagMap();
        const blogData = computed(() => {
            const blogConfig = frontmatter.value.blog;
            if (blogConfig?.type !== "category")
                return null;
            const { name, key } = blogConfig;
            return key === "category"
                ? {
                    component: CategoryList,
                    items: name ? categoryMap.value.map[name].items : null,
                }
                : key === "tag"
                    ? {
                        component: TagList,
                        items: name ? tagMap.value.map[name].items : null,
                    }
                    : null;
        });
        return () => h("div", { class: "vp-page vp-blog" }, h("div", { class: "blog-page-wrapper" }, [
            h("main", { id: "main-content", class: "vp-blog-main" }, slots.default?.() ?? [
                h(DropTransition, { appear: true }, () => blogData.value ? h(blogData.value.component) : null),
                slots.articlesBefore?.(),
                blogData.value?.items
                    ? h(DropTransition, { appear: true, delay: 0.08 }, () => [
                        h(ArticleList, {
                            key: page.value.path,
                            // oxlint-disable-next-line typescript/no-non-null-assertion
                            items: blogData.value.items,
                        }, slots),
                    ])
                    : null,
                slots.articlesAfter?.(),
            ]),
            h(DropTransition, { delay: 0.16 }, () => h(InfoPanel, { key: "blog" }, slots)),
        ]));
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jsb2cvQ2F0ZWdvcnlQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTFELE9BQU8sV0FBVyxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xFLE9BQU8sWUFBWSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BFLE9BQU8sU0FBUyxNQUFNLHVDQUF1QyxDQUFDO0FBQzlELE9BQU8sT0FBTyxNQUFNLHFDQUFxQyxDQUFDO0FBQzFELE9BQU8sY0FBYyxNQUFNLG1EQUFtRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFTbkUsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLGNBQWM7SUFFcEIsS0FBSyxFQUFFLE1BaUJMO0lBRUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNyQixNQUFNLElBQUksR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUN2QixNQUFNLFdBQVcsR0FBRyxjQUFjLEVBQXlCLENBQUM7UUFDNUQsTUFBTSxXQUFXLEdBQUcsY0FBYyxFQUFFLENBQUM7UUFDckMsTUFBTSxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7UUFFM0IsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUM3QixNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUUxQyxJQUFJLFVBQVUsRUFBRSxJQUFJLEtBQUssVUFBVTtnQkFBRSxPQUFPLElBQUksQ0FBQztZQUVqRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLFVBQVUsQ0FBQztZQUVqQyxPQUFPLEdBQUcsS0FBSyxVQUFVO2dCQUN2QixDQUFDLENBQUM7b0JBQ0UsU0FBUyxFQUFFLFlBQVk7b0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtpQkFDdkQ7Z0JBQ0gsQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLO29CQUNiLENBQUMsQ0FBQzt3QkFDRSxTQUFTLEVBQUUsT0FBTzt3QkFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO3FCQUNsRDtvQkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQVUsRUFBRSxDQUNqQixDQUFDLENBQ0MsS0FBSyxFQUNMLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEVBQzVCLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QyxDQUFDLENBQ0MsTUFBTSxFQUNOLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQzdDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJO2dCQUNuQixDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUN2QyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNwRDtnQkFDRCxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ3hCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSztvQkFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQzt3QkFDckQsQ0FBQyxDQUNDLFdBQVcsRUFDWDs0QkFDRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOzRCQUNwQiw0REFBNEQ7NEJBQzVELEtBQUssRUFBRSxRQUFRLENBQUMsS0FBTSxDQUFDLEtBQU07eUJBQzlCLEVBQ0QsS0FBSyxDQUNOO3FCQUNGLENBQUM7b0JBQ0osQ0FBQyxDQUFDLElBQUk7Z0JBQ1IsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFFO2FBQ3hCLENBQ0Y7WUFDRCxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0UsQ0FBQyxDQUNILENBQUM7SUFDTixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=