import { useBlogType } from "@vuepress/plugin-blog/client";
import { inject, provide } from "vue";
export const articlesSymbol = Symbol(__VUEPRESS_DEV__ ? "articles" : "");
/**
 * Inject articles
 *
 * @returns articles global computed
 */
export const useArticles = () => {
    const articles = inject(articlesSymbol);
    if (!articles)
        throw new Error("useArticles() is called without provider.");
    return articles;
};
export const setupArticles = () => {
    const articles = useBlogType("article");
    provide(articlesSymbol, articles);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQXJ0aWNsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvc2FibGVzL2Jsb2cvdXNlQXJ0aWNsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTNELE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBTXRDLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBOEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRXBHOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsR0FBZ0IsRUFBRTtJQUMzQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFeEMsSUFBSSxDQUFDLFFBQVE7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFFNUUsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLEdBQVMsRUFBRTtJQUN0QyxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQWtCLFNBQVMsQ0FBQyxDQUFDO0lBRXpELE9BQU8sQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDIn0=