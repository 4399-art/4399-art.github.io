import { hasGlobalComponent } from "@vuepress/helper/client";
import { defineComponent, h, resolveComponent } from "vue";
import MainFadeInUpTransition from "@theme-hope/components/base/MainFadeInUpTransition";
import MainLayout from "@theme-hope/components/base/MainLayout";
import PageContent from "@theme-hope/components/base/PageContent";
import SkipLink from "@theme-hope/components/base/SkipLink";
import HomePage from "@theme-hope/components/home/HomePage";
import PortfolioHome from "@theme-hope/components/home/PortfolioHome";
import { useData } from "@theme-hope/composables/useData";
export default defineComponent({
    name: "Layout",
    slots: Object,
    setup(_props, { slots }) {
        const { frontmatter, page } = useData();
        return () => [
            h(SkipLink),
            h(MainLayout, null, {
                ...slots,
                default: slots.default ??
                    (() => frontmatter.value.portfolio
                        ? h(PortfolioHome, null, slots)
                        : frontmatter.value.home
                            ? h(HomePage, null, slots)
                            : h(MainFadeInUpTransition, () => h(PageContent, { key: page.value.path }, slots))),
                navScreenBottom: slots.navScreenBottom ??
                    (hasGlobalComponent("BloggerInfo")
                        ? () => h(resolveComponent("BloggerInfo"))
                        : null),
            }),
        ];
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9sYXlvdXRzL2Jhc2UvTGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTdELE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRTNELE9BQU8sc0JBQXNCLE1BQU0sb0RBQW9ELENBQUM7QUFDeEYsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxXQUFXLE1BQU0seUNBQXlDLENBQUM7QUFDbEUsT0FBTyxRQUFRLE1BQU0sc0NBQXNDLENBQUM7QUFDNUQsT0FBTyxRQUFRLE1BQU0sc0NBQXNDLENBQUM7QUFDNUQsT0FBTyxhQUFhLE1BQU0sMkNBQTJDLENBQUM7QUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBYzFELGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxRQUFRO0lBRWQsS0FBSyxFQUFFLE1BcUNMO0lBRUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNyQixNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLE9BQU8sRUFBNEIsQ0FBQztRQUVsRSxPQUFPLEdBQVksRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDWCxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRTtnQkFDbEIsR0FBRyxLQUFLO2dCQUNSLE9BQU8sRUFDTCxLQUFLLENBQUMsT0FBTztvQkFDYixDQUFDLEdBQVUsRUFBRSxDQUNYLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUzt3QkFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzt3QkFDL0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSTs0QkFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzs0QkFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFFM0YsZUFBZSxFQUNiLEtBQUssQ0FBQyxlQUFlO29CQUNyQixDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQzt3QkFDaEMsQ0FBQyxDQUFDLEdBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQ3ZELENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDWixDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFDLENBQUMifQ==