import { watchImmediate } from "@vueuse/core";
import { computed, defineComponent, h, onMounted, resolveComponent, shallowRef } from "vue";
import { RouteLink, resolveRoute } from "vuepress/client";
import { useData } from "@theme-hope/composables/useData";
import { getAncestorLinks } from "@theme-hope/utils/getAncestorLinks";
import "../../styles/base/breadcrumb.scss";
export default defineComponent({
    name: "BreadCrumb",
    setup() {
        const { frontmatter, page, routeLocale, routePath, themeLocale } = useData();
        const config = shallowRef([]);
        const enable = computed(() => (frontmatter.value.breadcrumb ?? themeLocale.value.breadcrumb ?? true) &&
            config.value.length > 1);
        const enableIcon = computed(() => frontmatter.value.breadcrumbIcon ?? themeLocale.value.breadcrumbIcon ?? true);
        const getBreadCrumbConfig = () => {
            const breadcrumbConfig = getAncestorLinks(page.value.path, routeLocale.value)
                .map(({ link, name }) => {
                const { path, meta, notFound } = resolveRoute(link);
                if (notFound || meta.breadcrumbExclude)
                    return null;
                return {
                    title: meta.shortTitle || meta.title || name,
                    icon: meta.icon,
                    path,
                };
            })
                .filter((item) => item != null);
            if (breadcrumbConfig.length > 1)
                config.value = breadcrumbConfig;
        };
        onMounted(() => {
            watchImmediate(routePath, getBreadCrumbConfig);
        });
        return () => h("nav", { class: ["vp-breadcrumb", { disable: !enable.value }] }, enable.value
            ? h("ol", {
                vocab: "https://schema.org/",
                typeof: "BreadcrumbList",
            }, config.value.map((item, index) => h("li", {
                class: { "is-active": config.value.length - 1 === index },
                property: "itemListElement",
                typeof: "ListItem",
            }, [
                h(RouteLink, {
                    to: item.path,
                    property: "item",
                    typeof: "WebPage",
                }, () => [
                    // Icon
                    enableIcon.value
                        ? h(resolveComponent("VPIcon"), { icon: item.icon })
                        : null,
                    // Text
                    h("span", { property: "name" }, item.title || "Unknown"),
                ]),
                // Meta
                h("meta", { property: "position", content: index + 1 }),
            ])))
            : []);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJlYWRDcnVtYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9iYXNlL0JyZWFkQ3J1bWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM1RixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUl0RSxPQUFPLG1DQUFtQyxDQUFDO0FBUTNDLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxZQUFZO0lBRWxCLEtBQUs7UUFDSCxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBRTdFLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBcUIsRUFBRSxDQUFDLENBQUM7UUFFbEQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUNyQixHQUFHLEVBQUUsQ0FDSCxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQztZQUN0RSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQzFCLENBQUM7UUFFRixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQ3pCLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxJ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