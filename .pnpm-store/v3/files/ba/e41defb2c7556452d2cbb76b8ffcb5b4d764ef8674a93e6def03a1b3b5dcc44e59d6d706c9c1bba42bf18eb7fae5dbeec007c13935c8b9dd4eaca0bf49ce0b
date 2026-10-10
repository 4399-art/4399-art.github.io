import { computed, defineComponent, h } from "vue";
import { RouteLink, resolveRoute } from "vuepress/client";
import { useArticles } from "@theme-hope/composables/blog/useArticles";
import { useBlogLocale } from "@theme-hope/composables/blog/useBlogLocale";
import { useStars } from "@theme-hope/composables/blog/useStars";
import { useData } from "@theme-hope/composables/useData";
import "../../styles/blog/article-type.scss";
export default defineComponent({
    name: "ArticleType",
    setup() {
        const { page, routeLocale } = useData();
        const articles = useArticles();
        const stars = useStars();
        const blogLocale = useBlogLocale();
        const types = computed(() => [
            {
                text: blogLocale.value.all,
                path: articles.value.path,
            },
            { text: blogLocale.value.star, path: stars.value.path },
            ...__VP_BLOG_TYPES__.map(({ key, path }) => {
                const routePath = path.replace(/^\//, routeLocale.value);
                return {
                    text: blogLocale.value[key] ?? resolveRoute(routePath).meta.title ?? key,
                    path: routePath,
                };
            }),
        ]);
        return () => h("ul", { class: "vp-article-type-wrapper" }, types.value.map((type) => h("li", {
            class: ["vp-article-type", { active: type.path === page.value.path }],
        }, h(RouteLink, { to: type.path }, () => type.text))));
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aWNsZVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmxvZy9BcnRpY2xlVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFMUQsT0FBTyxxQ0FBcUMsQ0FBQztBQUk3QyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsYUFBYTtJQUVuQixLQUFLO1FBQ0gsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxNQUFNLFFBQVEsR0FBRyxXQUFXLEVBQUUsQ0FBQztRQUMvQixNQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUN6QixNQUFNLFVBQVUsR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUVuQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDM0I7Z0JBQ0UsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRztnQkFDMUIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSTthQUMxQjtZQUNELEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUN2RCxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7Z0JBQ3pDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFekQsT0FBTztvQkFDTCxJQUFJLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHO29CQUN4RSxJQUFJLEVBQUUsU0FBUztpQkFDaEIsQ0FBQztZQUNKLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztRQUVILE9BQU8sR0FBVSxFQUFFLENBQ2pCLENBQUMsQ0FDQyxJQUFJLEVBQ0osRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsRUFDcEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUN2QixDQUFDLENBQ0MsSUFBSSxFQUNKO1lBQ0UsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RFLEVBQ0QsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNqRCxDQUNGLENBQ0YsQ0FBQztJQUNOLENBQUM7Q0FDRixDQUFDLENBQUMifQ==