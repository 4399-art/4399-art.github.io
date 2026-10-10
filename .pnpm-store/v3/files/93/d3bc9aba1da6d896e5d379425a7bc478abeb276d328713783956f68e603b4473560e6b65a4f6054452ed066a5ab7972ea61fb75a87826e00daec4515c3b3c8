import { getDate } from "@vuepress/helper/client";
import { useBlogType } from "@vuepress/plugin-blog/client";
import { computed, inject, provide } from "vue";
import { useLang } from "vuepress/client";
export const timelineSymbol = Symbol(__VUEPRESS_DEV__ ? "timeline" : "");
/**
 * Inject timeline
 *
 * @returns Timeline global computed
 */
export const useTimeline = () => {
    const timeline = inject(timelineSymbol);
    if (!timeline)
        throw new Error("useTimeline() is called without provider.");
    return timeline;
};
/**
 * Provide timelines
 */
export const setupTimeline = () => {
    const timeline = useBlogType("timeline");
    const pageLang = useLang();
    const timelineItems = computed(() => {
        const results = [];
        // Filter before sort
        timeline.value.items.forEach(({ info, path }) => {
            const result = getDate(info.date);
            if (result) {
                const year = result.getFullYear();
                if (results[0]?.year !== year)
                    results.unshift({ year, items: [] });
                results[0].items.push({
                    date: result.toLocaleDateString(pageLang.value, {
                        month: "numeric",
                        day: "numeric",
                    }),
                    info,
                    path,
                });
            }
        });
        return {
            ...timeline.value,
            config: results.reverse(),
        };
    });
    provide(timelineSymbol, timelineItems);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlVGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvc2FibGVzL2Jsb2cvdXNlVGltZWxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWxELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBZTFDLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBOEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRXBHOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsR0FBZ0IsRUFBRTtJQUMzQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFeEMsSUFBSSxDQUFDLFFBQVE7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFFNUUsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsR0FBUyxFQUFFO0lBQ3RDLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBa0IsVUFBVSxDQUFDLENBQUM7SUFDMUQsTUFBTSxRQUFRLEdBQUcsT0FBTyxFQUFFLENBQUM7SUFFM0IsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUNsQyxNQUFNLE9BQU8sR0FBbUIsRUFBRSxDQUFDO1FBRW5DLHFCQUFxQjtRQUNyQixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQzlDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEMsSUFBSSxNQUFNLEVBQUUsQ0FBQztnQkFDWCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRWxDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSyxJQUFJO29CQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBRXBFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNwQixJQUFJLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7d0JBQzlDLEtBQUssRUFBRSxTQUFTO3dCQUNoQixHQUFHLEVBQUUsU0FBUztxQkFDZixDQUFDO29CQUNGLElBQUk7b0JBQ0osSUFBSTtpQkFDTCxDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsR0FBRyxRQUFRLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRTtTQUMxQixDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQyJ9