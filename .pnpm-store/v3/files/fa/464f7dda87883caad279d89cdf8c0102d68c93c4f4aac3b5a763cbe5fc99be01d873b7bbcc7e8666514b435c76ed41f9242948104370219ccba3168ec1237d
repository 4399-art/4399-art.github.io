import { useBlogCategory } from "@vuepress/plugin-blog/client";
import { inject, provide } from "vue";
export const categoryMapSymbol = Symbol.for("categoryMap");
/**
 * Inject categoryMap
 *
 * @returns categoryMap global computed
 */
export const useCategoryMap = () => {
    const categoryMap = inject(categoryMapSymbol);
    if (!categoryMap)
        throw new Error("useCategoryMap() is called without provider.");
    return categoryMap;
};
/**
 * Provide categoryMap
 */
export const setupCategoryMap = () => {
    const categoryMap = useBlogCategory("category");
    provide(categoryMapSymbol, categoryMap);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ2F0ZWdvcnlNYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvc2FibGVzL2Jsb2cvdXNlQ2F0ZWdvcnlNYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBTXRDLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFpQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXpGOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsR0FBbUIsRUFBRTtJQUNqRCxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUU5QyxJQUFJLENBQUMsV0FBVztRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUVsRixPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFFRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLEdBQVMsRUFBRTtJQUN6QyxNQUFNLFdBQVcsR0FBRyxlQUFlLENBQWtCLFVBQVUsQ0FBQyxDQUFDO0lBRWpFLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMifQ==