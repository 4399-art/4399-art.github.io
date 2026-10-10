import { isPlainObject, isString } from "@vuepress/helper/client";
import { computed } from "vue";
import { resolveRoute } from "vuepress/client";
import { useSidebarItems } from "@theme-hope/composables/sidebar/useSidebarItems";
import { useData } from "@theme-hope/composables/useData";
import { resolveLinkInfo } from "@theme-hope/utils/resolveLinkInfo";
const resolveFromFrontmatterConfig = (config, currentPath) => config === false
    ? config
    : isPlainObject(config)
        ? {
            ...config,
            link: resolveLinkInfo(config.link, true, currentPath).link,
        }
        : isString(config)
            ? resolveLinkInfo(config, true, currentPath)
            : null;
/**
 * Resolve `prev` or `next` config from sidebar items
 *
 * @param sidebarItems - sidebar items
 * @param currentPath - current route path
 * @param offset - offset to the target link
 *
 * @returns resolved link config or null
 */
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
    const linkIndex = sidebarItems.findIndex((item) => item.link === currentPath);
    if (linkIndex !== -1) {
        if (!sidebarItems[linkIndex + offset])
            return null;
        const targetItem = sidebarItems[linkIndex + offset];
        if (targetItem.link)
            return targetItem;
        if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound) {
            return {
                ...targetItem,
                link: targetItem.prefix,
            };
        }
        return null;
    }
    for (const item of sidebarItems) {
        if ("children" in item) {
            const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
            if (childResult)
                return childResult;
        }
    }
    const prefixIndex = sidebarItems.findIndex((item) => "prefix" in item && item.prefix === currentPath);
    if (prefixIndex !== -1) {
        if (!sidebarItems[prefixIndex + offset])
            return null;
        const targetItem = sidebarItems[prefixIndex + offset];
        if (targetItem.link)
            return targetItem;
        if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound) {
            return {
                ...targetItem,
                link: targetItem.prefix,
            };
        }
        return null;
    }
    return null;
};
export const useRelatedLinks = () => {
    const { frontmatter, routePath, themeLocale } = useData();
    const sidebarItems = useSidebarItems();
    const prevLink = computed(() => {
        const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev, routePath.value);
        return prevConfig === false
            ? null
            : (prevConfig ??
                (themeLocale.value.prevLink === false
                    ? null
                    : resolveFromSidebarItems(sidebarItems.value, routePath.value, -1)));
    });
    const nextLink = computed(() => {
        const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next, routePath.value);
        return nextConfig === false
            ? null
            : (nextConfig ??
                (themeLocale.value.nextLink === false
                    ? null
                    : resolveFromSidebarItems(sidebarItems.value, routePath.value, 1)));
    });
    return {
        prevLink,
        nextLink,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlUmVsYXRlZExpbmtzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb3NhYmxlcy91c2VSZWxhdGVkTGlua3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUlwRSxNQUFNLDRCQUE0QixHQUFHLENBQ25DLE1BQWUsRUFDZixXQUFtQixFQUNhLEVBQUUsQ0FDbEMsTUFBTSxLQUFLLEtBQUs7SUFDZCxDQUFDLENBQUMsTUFBTTtJQUNSLENBQUMsQ0FBQyxhQUFhLENBQWtCLE1BQU0sQ0FBQztRQUN0QyxDQUFDLENBQUM7WUFDRSxHQUFHLE1BQU07WUFDVCxJQUFJLEVBQUUsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUk7U0FDM0Q7UUFDSCxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFFZjs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sdUJBQXVCLEdBQUcsQ0FDOUIsWUFBMkIsRUFDM0IsV0FBbUIsRUFDbkIsTUFBYyxFQUNVLEVBQUU7SUFDMUIsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFD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