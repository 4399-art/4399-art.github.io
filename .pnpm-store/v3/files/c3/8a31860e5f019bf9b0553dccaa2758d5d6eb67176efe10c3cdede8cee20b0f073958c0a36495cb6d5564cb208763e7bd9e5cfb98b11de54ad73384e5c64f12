import { entries } from "@vuepress/helper/client";
import { defineComponent, h } from "vue";
import { generateIndexFromHash } from "vuepress-shared/client";
import { RouteLink, usePage } from "vuepress/client";
import { useCategoryMap } from "@theme-hope/composables/blog/useCategoryMap";
import cssVariables from "../../styles/variables.module.scss";
import "../../styles/blog/category-list.scss";
export default defineComponent({
    name: "CategoryList",
    setup() {
        const page = usePage();
        const categoryMap = useCategoryMap();
        return () => h("ul", { class: "vp-category-list" }, entries(categoryMap.value.map)
            // Sort from more to less
            .sort(([, a], [, b]) => b.items.length - a.items.length)
            .map(([category, { path, items }]) => h("li", { class: "vp-category-item" }, h(RouteLink, {
            class: [
                "vp-category",
                `color${generateIndexFromHash(category, Number(cssVariables.colorNumber))}`,
                { active: path === page.value.path },
            ],
            to: path,
        }, () => [category, h("span", { class: "vp-category-count" }, items.length)]))));
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jsb2cvQ2F0ZWdvcnlMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUU3RSxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLHNDQUFzQyxDQUFDO0FBRTlDLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxjQUFjO0lBRXBCLEtBQUs7UUFDSCxNQUFNLElBQUksR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUN2QixNQUFNLFdBQVcsR0FBRyxjQUFjLEVBQUUsQ0FBQztRQUVyQyxPQUFPLEdBQVUsRUFBRSxDQUNqQixDQUFDLENBQ0MsSUFBSSxFQUNKLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEVBQzdCLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM1Qix5QkFBeUI7YUFDeEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDdkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ25DLENBQUMsQ0FDQyxJQUFJLEVBQ0osRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsRUFDN0IsQ0FBQyxDQUNDLFNBQVMsRUFDVDtZQUNFLEtBQUssRUFBRTtnQkFDTCxhQUFhO2dCQUNiLFFBQVEscUJBQXFCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRTtnQkFDM0UsRUFBRSxNQUFNLEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO2FBQ3JDO1lBQ0QsRUFBRSxFQUFFLElBQUk7U0FDVCxFQUNELEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDMUUsQ0FDRixDQUNGLENBQ0osQ0FBQztJQUNOLENBQUM7Q0FDRixDQUFDLENBQUMifQ==