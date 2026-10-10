import { keys } from "@vuepress/helper/client";
import { computed, defineComponent, h } from "vue";
import { RouteLink, withBase } from "vuepress/client";
import SocialMedias from "@theme-hope/components/blog/SocialMedias";
import { useArticles } from "@theme-hope/composables/blog/useArticles";
import { useBlogLocale } from "@theme-hope/composables/blog/useBlogLocale";
import { useBlogOptions } from "@theme-hope/composables/blog/useBlogOptions";
import { useCategoryMap } from "@theme-hope/composables/blog/useCategoryMap";
import { useTagMap } from "@theme-hope/composables/blog/useTagMap";
import { useTimeline } from "@theme-hope/composables/blog/useTimeline";
import { useData } from "@theme-hope/composables/useData";
import { useNavigate } from "@theme-hope/composables/useNavigate";
import { getAuthor } from "../../../shared/index.js";
import "../../styles/blog/blogger-info.scss";
export default defineComponent({
    name: "BloggerInfo",
    slots: Object,
    setup(_props, { slots }) {
        const blogLocale = useBlogLocale();
        const blogOptions = useBlogOptions();
        const { siteLocale, themeLocale } = useData();
        const articles = useArticles();
        const categoryMap = useCategoryMap();
        const tagMap = useTagMap();
        const timelines = useTimeline();
        const navigate = useNavigate();
        const bloggerInfo = computed(() => ({
            name: blogOptions.value.name ??
                getAuthor(themeLocale.value.author)[0]?.name ??
                siteLocale.value.title,
            avatar: blogOptions.value.avatar ?? themeLocale.value.logo ?? null,
            description: blogOptions.value.description ?? null,
        }));
        const intro = computed(() => blogOptions.value.intro);
        return () => {
            const { article, category, tag, timeline } = blogLocale.value;
            const countItems = [
                [articles.value.path, articles.value.items.length, article],
                [categoryMap.value.path, keys(categoryMap.value.map).length, category],
                [tagMap.value.path, keys(tagMap.value.map).length, tag],
                [timelines.value.path, timelines.value.items.length, timeline],
            ];
            return h("div", {
                class: "vp-blogger-info",
                vocab: "https://schema.org/",
                typeof: "Person",
            }, slots.bloggerInfo?.(bloggerInfo.value) ?? [
                h("div", {
                    class: "vp-blogger",
                    ...(intro.value
                        ? {
                            "aria-label": blogLocale.value.intro,
                            "data-balloon-pos": "down",
                            role: "link",
                            onClick: () => {
                                // oxlint-disable-next-line typescript/no-non-null-assertion
                                navigate(intro.value);
                            },
                        }
                        : {}),
                }, [
                    bloggerInfo.value.avatar
                        ? h("img", {
                            class: "vp-blogger-avatar",
                            src: withBase(bloggerInfo.value.avatar),
                            property: "image",
                            alt: "Blogger Avatar",
                            loading: "lazy",
                        })
                        : null,
                    bloggerInfo.value.name
                        ? h("div", { class: "vp-blogger-name", property: "name" }, bloggerInfo.value.name)
                        : null,
                    bloggerInfo.value.description
                        ? h("div", {
                            class: "vp-blogger-description",
                            innerHTML: bloggerInfo.value.description,
                        })
                        : null,
                    intro.value ? h("meta", { property: "url", content: withBase(intro.value) }) : null,
                ]),
                h("div", { class: "vp-blog-counts" }, countItems.map(([path, count, locale]) => h(RouteLink, { class: "vp-blog-count", to: path }, () => [
                    h("div", { class: "count" }, count),
                    h("div", locale),
                ]))),
                h(SocialMedias),
            ]);
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvZ2dlckluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmxvZy9CbG9nZ2VySW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdEQsT0FBTyxZQUFZLE1BQU0sMENBQTBDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUdsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFckQsT0FBTyxxQ0FBcUMsQ0FBQztBQUU3QyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsYUFBYTtJQUVuQixLQUFLLEVBQUUsTUFFTDtJQUVGLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUU7UUFDckIsTUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFDbkMsTUFBTSxXQUFXLEdB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