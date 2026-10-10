import { useBlogType } from "@vuepress/plugin-blog/client";
import { computed, defineComponent, h } from "vue";
import { useFrontmatter, usePage } from "vuepress/client";
import ArticleList from "@theme-hope/components/blog/ArticleList";
import ArticleType from "@theme-hope/components/blog/ArticleType";
import InfoPanel from "@theme-hope/components/blog/InfoPanel";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useArticles } from "@theme-hope/composables/blog/useArticles";
import { useStars } from "@theme-hope/composables/blog/useStars";
export default defineComponent({
    name: "TypePage",
    slots: Object,
    setup(_props, { slots }) {
        const blogType = useBlogType();
        const frontmatter = useFrontmatter();
        const page = usePage();
        const articles = useArticles();
        const stars = useStars();
        const items = computed(() => {
            const blogConfig = frontmatter.value.blog;
            if (blogConfig?.type !== "type" || !blogConfig.key)
                return articles.value.items;
            return blogConfig.key === "star" ? stars.value.items : blogType.value.items;
        });
        return () => h("div", { class: "vp-page vp-blog" }, h("div", { class: "blog-page-wrapper" }, [
            h("main", { id: "main-content", class: "vp-blog-main" }, slots.default?.() ?? [
                h(DropTransition, () => h(ArticleType)),
                slots.articlesBefore?.(),
                h(DropTransition, { appear: true, delay: 0.08 }, () => h(ArticleList, { key: page.value.path, items: items.value })),
                slots.articlesAfter?.(),
            ]),
            h(DropTransition, { appear: true, delay: 0.08 }, () => h(InfoPanel, { key: "blog" }, slots)),
        ]));
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmxvZy9UeXBlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFMUQsT0FBTyxXQUFXLE1BQU0seUNBQXlDLENBQUM7QUFDbEUsT0FBTyxXQUFXLE1BQU0seUNBQXlDLENBQUM7QUFDbEUsT0FBTyxTQUFTLE1BQU0sdUNBQXVDLENBQUM7QUFDOUQsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQVdqRSxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsVUFBVTtJQUVoQixLQUFLLEVBQUUsTUFpQkw7SUFFRixLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQ3JCLE1BQU0sUUFBUSxHQUFHLFdBQVcsRUFBbUIsQ0FBQztRQUNoRCxNQUFNLFdBQVcsR0FBRyxjQUFjLEVBQXlCLENBQUM7UUFDNUQsTUFBTSxJQUFJLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDdkIsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFDL0IsTUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFFekIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUMxQixNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUUxQyxJQUFJLFVBQVUsRUFBRSxJQUFJLEtBQUssTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7Z0JBQUUsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUVoRixPQUFPLFVBQVUsQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQVUsRUFBRSxDQUNqQixDQUFDLENBQ0MsS0FBSyxFQUNMLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEVBQzVCLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QyxDQUFDLENBQ0MsTUFBTSxFQUNOLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQzdDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJO2dCQUNuQixDQUFDLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUN4QixDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQ3BELENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUM3RDtnQkFDRCxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUU7YUFDeEIsQ0FDRjtZQUNELENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FDcEQsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FDckM7U0FDRixDQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7Q0FDRixDQUFDLENBQUMifQ==