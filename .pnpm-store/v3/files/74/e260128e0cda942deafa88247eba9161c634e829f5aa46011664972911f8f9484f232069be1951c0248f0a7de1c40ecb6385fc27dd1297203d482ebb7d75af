import { isSupported, usePageview } from "@vuepress/plugin-comment/pageview";
import { computed, defineComponent, h, nextTick, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vuepress/client";
import ArticleItem from "@theme-hope/components/blog/ArticleItem";
import Pagination from "@theme-hope/components/blog/Pagination";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useBlogLocale } from "@theme-hope/composables/blog/useBlogLocale";
import { useBlogOptions } from "@theme-hope/composables/blog/useBlogOptions";
import "../../styles/blog/article-list.scss";
const DEFAULT_ARTICLES_PER_PAGE = 10;
export default defineComponent({
    name: "ArticleList",
    props: {
        /**
         * Articles
         *
         * 文章项目
         */
        items: {
            type: Array,
            required: true,
        },
    },
    slots: Object,
    setup(props, { slots }) {
        const route = useRoute();
        const router = useRouter();
        const blogLocale = useBlogLocale();
        const blogOptions = useBlogOptions();
        const updatePageview = usePageview();
        const currentPage = ref(1);
        const articlePerPage = computed(() => blogOptions.value.articlePerPage ?? DEFAULT_ARTICLES_PER_PAGE);
        const currentArticles = computed(() => props.items.slice((currentPage.value - 1) * articlePerPage.value, currentPage.value * articlePerPage.value));
        const updatePage = async (page) => {
            currentPage.value = page;
            const query = { ...route.query };
            const needUpdate = !(query.page === page.toString() || // Page equal as query
                // Page is 1 and query is empty
                (page === 1 && !query.page));
            if (needUpdate) {
                if (page === 1)
                    delete query.page;
                else
                    query.page = page.toString();
                await router.push({ path: route.path, query });
            }
            if (isSupported) {
                await nextTick();
                updatePageview({ selector: ".vp-pageview" });
            }
        };
        onMounted(() => {
            const { page } = route.query;
            void updatePage(page ? Number(page) : 1);
            watch(currentPage, () => {
                // List top border distance
                const distance = 
                // oxlint-disable-next-line typescript/no-non-null-assertion
                document.querySelector("#article-list").getBoundingClientRect().top + window.scrollY;
                setTimeout(() => {
                    window.scrollTo(0, distance);
                }, 100);
            });
        });
        return () => h("div", { id: "article-list", class: "vp-article-list", role: "feed" }, currentArticles.value.length > 0
            ? [
                ...currentArticles.value.map(({ info, path }, index) => h(DropTransition, { appear: true, delay: index * 0.04 }, () => h(ArticleItem, { key: path, info, path }, slots))),
                h(Pagination, {
                    current: currentPage.value,
                    perPage: articlePerPage.value,
                    total: props.items.length,
                    onUpdateCurrentPage: updatePage,
                }),
            ]
            : h("h2", { class: "vp-empty-hint" }, blogLocale.value.empty.replace("$text", blogLocale.value.article.toLocaleLowerCase())));
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aWNsZUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmxvZy9BcnRpY2xlTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDcEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RCxPQUFPLFdBQVcsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRSxPQUFPLFVBQVUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRSxPQUFPLGNBQWMsTUFBTSxtREFBbUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBVTdFLE9BQU8scUNBQXFDLENBQUM7QUFFN0MsTUFBTSx5QkFBeUIsR0FBRyxFQUFFLENBQUM7QUFFckMsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLGFBQWE7SUFFbkIsS0FBSyxFQUFFO1FBQ0w7Ozs7V0FJRztRQUNILEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxLQUE0RDtZQUVsRSxRQUFRLEVBQUUsSUFBSTtTQUNmO0tBQ0Y7SUFFRCxLQUFLLEVBQUUsTUFLTDtJQUVGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUU7UUFDcEIsTUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFDekIsTUFBTSxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7UUFDM0IsTUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFD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