import { defineComponent, h, toRef } from "vue";
import { RouteLink, useRouter, withBase } from "vuepress/client";
import { SlideIcon, StickyIcon } from "@theme-hope/components/blog/icons";
import LockIcon from "@theme-hope/components/encrypt/LockIcon";
import PageInfo from "@theme-hope/components/info/PageInfo";
import { useArticleInfo } from "@theme-hope/composables/blog/useArticleInfo";
import "../../styles/blog/article-item.scss";
export default defineComponent({
    name: "ArticleItem",
    props: {
        /**
         * Article information
         *
         * 文章信息
         */
        info: {
            type: Object,
            required: true,
        },
        /**
         * Article path
         *
         * 文章路径
         */
        path: { type: String, required: true },
    },
    slots: Object,
    setup(props, { slots }) {
        const articleInfo = toRef(props, "info");
        const { info: pageInfo, items } = useArticleInfo(props);
        const router = useRouter();
        return () => {
            const { title, type, isEncrypted = false, cover = null, excerpt, sticky } = articleInfo.value;
            const info = pageInfo.value;
            return h("div", {
                class: "vp-article-wrapper",
                onClick: (event) => {
                    if (event.target?.matches("summary"))
                        return;
                    event.preventDefault();
                    void router.push(props.path);
                },
            }, h("article", {
                class: "vp-article-item",
                vocab: "https://schema.org/",
                typeof: "Article",
            }, [
                slots.articleCover?.({ cover }) ??
                    (cover
                        ? [
                            h("img", {
                                class: "vp-article-cover",
                                src: withBase(cover),
                                alt: "",
                                loading: "lazy",
                            }),
                            h("meta", {
                                property: "image",
                                content: withBase(cover),
                            }),
                        ]
                        : []),
                sticky ? h(StickyIcon) : null,
                h(RouteLink, { to: props.path }, () => slots.articleTitle?.({ title, isEncrypted, type }) ??
                    h("header", { class: "vp-article-title" }, [
                        isEncrypted ? h(LockIcon) : null,
                        type === "slide" ? h(SlideIcon) : null,
                        h("span", { property: "headline" }, title),
                    ])),
                slots.articleExcerpt?.({ excerpt }) ??
                    (excerpt
                        ? h("div", {
                            class: "vp-article-excerpt",
                            innerHTML: excerpt,
                        })
                        : null),
                h("hr", { class: "vp-article-hr" }),
                slots.articleInfo?.(info) ??
                    h(PageInfo, {
                        info,
                        items: items.value,
                        onClick: (event) => {
                            event.stopPropagation();
                        },
                    }),
            ]));
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aWNsZUl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmxvZy9BcnRpY2xlSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLFFBQVEsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRCxPQUFPLFFBQVEsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFVN0UsT0FBTyxxQ0FBcUMsQ0FBQztBQUU3QyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsYUFBYTtJQUVuQixLQUFLLEVBQUU7UUFDTDs7OztXQUlHO1FBQ0gsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQW1DO1lBQ3pDLFFBQVEsRUFBRSxJQUFJO1NBQ2Y7UUFFRDs7OztXQUlHO1FBQ0gsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0tBQ3ZDO0lBRUQsS0FBSyxFQUFFLE1BS0w7SUFFRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQ3BCLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELE1BQU0sTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDO1FBRTNCLE9B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