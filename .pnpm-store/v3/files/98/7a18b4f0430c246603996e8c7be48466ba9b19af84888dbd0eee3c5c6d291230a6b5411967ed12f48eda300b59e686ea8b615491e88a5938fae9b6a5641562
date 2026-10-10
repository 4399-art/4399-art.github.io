import { computed, defineComponent, h } from "vue";
import { useFrontmatter } from "vuepress/client";
import MarkdownContent from "@theme-hope/components/base/MarkdownContent";
import ArticleList from "@theme-hope/components/blog/ArticleList";
import BlogHero from "@theme-hope/components/blog/BlogHero";
import InfoPanel from "@theme-hope/components/blog/InfoPanel";
import ProjectPanel from "@theme-hope/components/blog/ProjectPanel";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useArticles } from "@theme-hope/composables/blog/useArticles";
import "../../styles/blog/blog-home.scss";
export default defineComponent({
    name: "BlogHome",
    slots: Object,
    setup(_props, { slots }) {
        const articles = useArticles();
        const frontmatter = useFrontmatter();
        const projects = computed(() => frontmatter.value.projects ?? []);
        return () => h("div", { class: "vp-page vp-blog-home" }, [
            slots.heroBefore?.(),
            h(BlogHero, {}, slots),
            slots.heroAfter?.(),
            h("div", { class: "blog-page-wrapper" }, [
                h("main", { id: "main-content", class: "vp-blog-main" }, [
                    slots.articlesBefore?.() ??
                        (projects.value.length > 0
                            ? h(DropTransition, { appear: true, delay: 0.16 }, () => h(ProjectPanel, { items: projects.value }))
                            : null),
                    h(DropTransition, { appear: true, delay: 0.24 }, () => h(ArticleList, { items: articles.value.items }, slots)),
                    slots.articlesAfter?.(),
                ]),
                h(DropTransition, { appear: true, delay: 0.16 }, () => h(InfoPanel, { key: "blog" }, slots)),
            ]),
            slots.content?.() ??
                h(DropTransition, { appear: true, delay: 0.28 }, () => h(MarkdownContent, {}, slots)),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvZ0hvbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmxvZy9CbG9nSG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sZUFBZSxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sV0FBVyxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xFLE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sU0FBUyxNQUFNLHVDQUF1QyxDQUFDO0FBQzlELE9BQU8sWUFBWSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BFLE9BQU8sY0FBYyxNQUFNLG1EQUFtRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQWN2RSxPQUFPLGtDQUFrQyxDQUFDO0FBRTFDLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxVQUFVO0lBRWhCLEtBQUssRUFBRSxNQTZCTDtJQUVGLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUU7UUFDckIsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFDL0IsTUFBTSxXQUFXLEdBQUcsY0FBYyxFQUFnQyxDQUFDO1FBRW5FLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVsRSxPQUFPLEdBQVUsRUFBRSxDQUNqQixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLEVBQUU7WUFDMUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3BCLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUN0QixLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDbkIsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxFQUFFO2dCQUN2QyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQUU7b0JBQ3ZELEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRTt3QkFDdEIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUNwRCxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUMzQzs0QkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNYLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FDcEQsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUN2RDtvQkFDRCxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUU7aUJBQ3hCLENBQUM7Z0JBQ0YsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUNwRCxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUNyQzthQUNGLENBQUM7WUFDRixLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2YsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hGLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRixDQUFDLENBQUMifQ==