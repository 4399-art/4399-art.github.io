import { isString } from "@vuepress/helper/client";
import { computed } from "vue";
import { resolveRoute } from "vuepress/client";
import { useThemeLocale } from "@theme-hope/composables/useTheme";
import { isLinkInternal } from "@theme-hope/utils/isLinkInternal";
import { resolveLinkInfo } from "@theme-hope/utils/resolveLinkInfo";
import { resolvePrefix } from "@theme-hope/utils/resolvePrefix";
export const resolveNavbarItem = (item, prefix = "") => {
    if (isString(item))
        return resolveLinkInfo(resolvePrefix(prefix, item));
    if ("children" in item) {
        return {
            ...item,
            ...(item.link && isLinkInternal(item.link)
                ? { link: resolveRoute(resolvePrefix(prefix, item.link)).path }
                : {}),
            children: item.children.map((child) => resolveNavbarItem(child, resolvePrefix(prefix, item.prefix))),
        };
    }
    return {
        ...item,
        link: isLinkInternal(item.link)
            ? resolveRoute(resolvePrefix(prefix, item.link)).path
            : item.link,
    };
};
export const useNavbarItems = () => {
    const themeLocaleData = useThemeLocale();
    return computed(() => 
    // oxlint-disable-next-line typescript/prefer-nullish-coalescing
    (themeLocaleData.value.navbar || []).map((item) => resolveNavbarItem(item)));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlTmF2YmFySXRlbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvc2FibGVzL25hdmJhci91c2VOYXZiYXJJdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBU2hFLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLENBQy9CLElBQTRDLEVBQzVDLE1BQU0sR0FBRyxFQUFFLEVBQ0MsRUFBRTtJQUNkLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sZUFBZSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUV4RSxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QixPQUFPO1lBQ0wsR0FBRyxJQUFJO1lBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQy9ELENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDUCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQ3pCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDUixpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBRXhDLENBQ3RCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPO1FBQ0wsR0FBRyxJQUFJO1FBQ1AsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3JELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtLQUNkLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsR0FBOEIsRUFBRTtJQUM1RCxNQUFNLGVBQWUsR0FBRyxjQUFjLEVBQUUsQ0FBQztJQUV6QyxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUU7SUFDbkIsZ0VBQWdFO0lBQ2hFLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUM1RSxDQUFDO0FBQ0osQ0FBQyxDQUFDIn0=