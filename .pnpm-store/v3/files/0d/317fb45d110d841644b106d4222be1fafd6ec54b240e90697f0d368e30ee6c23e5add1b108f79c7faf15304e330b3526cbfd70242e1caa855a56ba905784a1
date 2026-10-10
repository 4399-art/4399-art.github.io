import { computed, defineComponent, h } from "vue";
import { RouteLink } from "vuepress/client";
import { ArticleIcon } from "@theme-hope/components/blog/icons";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useArticles } from "@theme-hope/composables/blog/useArticles";
import { useBlogLocale } from "@theme-hope/composables/blog/useBlogLocale";
import { useStars } from "@theme-hope/composables/blog/useStars";
import { useNavigate } from "@theme-hope/composables/useNavigate";
export default defineComponent({
    name: "ArticlesInfo",
    setup() {
        const articles = useArticles();
        const blogLocale = useBlogLocale();
        const stars = useStars();
        const navigate = useNavigate();
        const articleCount = computed(() => articles.value.items.length);
        const starredArticles = computed(() => stars.value.items);
        return () => h(DropTransition, () => h("div", { class: "vp-star-article-wrapper" }, [
            h("div", {
                class: "title",
                onClick: () => {
                    navigate(articles.value.path);
                },
            }, [
                h(ArticleIcon),
                h("span", { class: "num" }, articleCount.value),
                blogLocale.value.article,
            ]),
            h("hr"),
            starredArticles.value.length > 0
                ? h("ul", { class: "vp-star-articles" }, starredArticles.value.map(({ info, path }, index) => h(DropTransition, { appear: true, delay: 0.08 * (index + 1) }, () => h("li", { class: "vp-star-article" }, h(RouteLink, { to: path }, () => info.title)))))
                : h("div", { class: "vp-star-article-empty" }, blogLocale.value.empty.replace("$text", blogLocale.value.star)),
        ]));
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aWNsZXNJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jsb2cvQXJ0aWNsZXNJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sY0FBYyxNQUFNLG1EQUFtRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVsRSxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsY0FBYztJQUVwQixLQUFLO1FBQ0gsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFDL0IsTUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFDbkMsTUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFDekIsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFFL0IsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFELE9BQU8sR0FBVSxFQUFFLENBQ2pCLENBQUMsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQ3JCLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsRUFBRTtZQUM3QyxDQUFDLENBQ0MsS0FBSyxFQUNMO2dCQUNFLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRSxHQUFHLEVBQUU7b0JBQ1osUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7YUFDRixFQUNEO2dCQUNFLENBQUMsQ0FBQyxXQUFXLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUMvQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU87YUFDekIsQ0FDRjtZQUNELENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDUCxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQyxDQUNDLElBQUksRUFDSixFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxFQUM3QixlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ2xELENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FDbEUsQ0FBQyxDQUNDLElBQUksRUFDSixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxFQUM1QixDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDN0MsQ0FDRixDQUNGLENBQ0Y7Z0JBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FDQyxLQUFLLEVBQ0wsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsRUFDbEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUMvRDtTQUNOLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztDQUNGLENBQUMsQ0FBQyJ9