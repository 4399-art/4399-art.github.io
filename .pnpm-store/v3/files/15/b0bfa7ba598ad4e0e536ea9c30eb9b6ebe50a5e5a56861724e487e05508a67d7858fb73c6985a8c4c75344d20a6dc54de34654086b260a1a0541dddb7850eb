import { useBlogType } from "@vuepress/plugin-blog/client";
import { inject, provide } from "vue";
export const starsSymbol = Symbol(__VUEPRESS_DEV__ ? "stars" : "");
/**
 * Inject stars
 *
 * @returns Stars global computed
 */
export const useStars = () => {
    const stars = inject(starsSymbol);
    if (!stars)
        throw new Error("useStars() is called without provider.");
    return stars;
};
export const setupStars = () => {
    const stars = useBlogType("star");
    provide(starsSymbol, stars);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlU3RhcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvc2FibGVzL2Jsb2cvdXNlU3RhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTNELE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBTXRDLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBMkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRTNGOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsR0FBYSxFQUFFO0lBQ3JDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVsQyxJQUFJLENBQUMsS0FBSztRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUV0RSxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxHQUFTLEVBQUU7SUFDbkMsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFrQixNQUFNLENBQUMsQ0FBQztJQUVuRCxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyJ9