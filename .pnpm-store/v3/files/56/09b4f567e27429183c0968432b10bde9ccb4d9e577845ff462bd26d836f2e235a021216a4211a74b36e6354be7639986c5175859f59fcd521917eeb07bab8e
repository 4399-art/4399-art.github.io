import { computed, inject, provide } from "vue";
import { useData } from "@theme-hope/composables/useData";
import { resolveSidebarItems } from "@theme-hope/utils/sidebar/resolveSidebarItems";
export const sidebarItemsSymbol = Symbol(__VUEPRESS_DEV__ ? "sidebarItems" : "");
/**
 * Create sidebar items ref and provide as global computed in setup
 */
export const setupSidebarItems = () => {
    const { frontmatter, routeLocale, routePath, themeLocale } = useData();
    // Get sidebar options from frontmatter > themeConfig
    const sidebarOptions = computed(() => frontmatter.value.home
        ? false
        : (frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure"));
    const sidebarItems = computed(() => resolveSidebarItems({
        config: sidebarOptions.value,
        routeLocale: routeLocale.value,
        routePath: routePath.value,
    }));
    provide(sidebarItemsSymbol, sidebarItems);
};
/**
 * Inject sidebar items global computed
 *
 * @returns Sidebar items global computed
 */
export const useSidebarItems = () => {
    const sidebarItems = inject(sidebarItemsSymbol);
    if (!sidebarItems)
        throw new Error("useSidebarItems() is called without provider.");
    return sidebarItems;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlU2lkZWJhckl0ZW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb3NhYmxlcy9zaWRlYmFyL3VzZVNpZGViYXJJdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBU3BGLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFrQyxNQUFNLENBQ3JFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDdkMsQ0FBQztBQUVGOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsR0FBUyxFQUFFO0lBQzFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLEVBRWpFLENBQUM7SUFFSixxREFBcUQ7SUFDckQsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUNuQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDcEIsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsQ0FDNUUsQ0FBQztJQUVGLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FDakMsbUJBQW1CLENBQUM7UUFDbEIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxLQUFLO1FBQzVCLFdBQVcsRUFBRSxXQUFXLENBQUMsS0FBSztRQUM5QixTQUFTLEVBQUUsU0FBUyxDQUFDLEtBQUs7S0FDM0IsQ0FBQyxDQUNILENBQUM7SUFFRixPQUFPLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxHQUFvQixFQUFFO0lBQ25ELE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRWhELElBQUksQ0FBQyxZQUFZO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0lBRXBGLE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMsQ0FBQyJ9