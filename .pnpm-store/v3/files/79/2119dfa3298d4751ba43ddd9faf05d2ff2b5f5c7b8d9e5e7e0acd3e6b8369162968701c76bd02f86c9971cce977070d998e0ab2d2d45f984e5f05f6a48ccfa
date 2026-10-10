import { isArray, isPlainObject, isString, keys, startsWith } from "@vuepress/helper/client";
import { resolveRoute } from "vuepress/client";
import { sidebarData } from "@temp/theme-hope/sidebar.js";
import { isLinkInternal } from "@theme-hope/utils/isLinkInternal";
import { resolveLinkInfo } from "@theme-hope/utils/resolveLinkInfo";
import { resolvePrefix } from "@theme-hope/utils/resolvePrefix";
/**
 * Resolve sidebar item
 *
 * @param options - sidebar item config
 * @param pathPrefix - current path prefix
 * @returns resolved sidebar item
 */
export const resolveSidebarItem = (options, pathPrefix) => {
    const config = isString(options)
        ? resolveLinkInfo(resolvePrefix(pathPrefix, options))
        : isString(options.link)
            ? {
                ...options,
                link: isLinkInternal(options.link)
                    ? resolveRoute(resolvePrefix(pathPrefix, options.link)).path
                    : options.link,
            }
            : options;
    // Resolved group item
    if ("children" in config) {
        const prefix = resolvePrefix(pathPrefix, config.prefix);
        const children = config.children === "structure" ? sidebarData[prefix] : config.children;
        return {
            ...config,
            prefix,
            children: children.map((item) => resolveSidebarItem(item, prefix)),
        };
    }
    return {
        ...config,
    };
};
/**
 * Resolve sidebar items if the config is an array
 *
 * @param options - resolve sidebar array item options
 * @returns resolved sidebar items
 */
export const resolveArraySidebarItems = ({ config, prefix = "", }) => config.map((item) => resolveSidebarItem(item, prefix));
/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 *
 * @param options - resolve multi sidebar options
 * @returns resolved sidebar items
 */
export const resolveMultiSidebarItems = ({ config, routePath, }) => {
    const sidebarRoutes = keys(config).sort((x, y) => y.length - x.length);
    // Find matching config
    for (const base of sidebarRoutes) {
        if (startsWith(decodeURI(routePath), base)) {
            const matched = config[base];
            return resolveArraySidebarItems({
                config: matched === "structure" ? sidebarData[base] : matched || [],
                prefix: base,
            });
        }
    }
    // oxlint-disable-next-line no-console
    console.warn(`${decodeURI(routePath)} is missing it's sidebar config.`);
    return [];
};
/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 *
 * @param options - resolve sidebar options
 * @returns resolved sidebar items
 */
export const resolveSidebarItems = ({ config, routeLocale, routePath, }) => 
// Resolve sidebar items according to the config
config === "structure"
    ? resolveArraySidebarItems({
        config: sidebarData[routeLocale],
        prefix: routeLocale,
    })
    : isArray(config)
        ? resolveArraySidebarItems({ config })
        : isPlainObject(config)
            ? resolveMultiSidebarItems({ config, routePath })
            : [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZVNpZGViYXJJdGVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvdXRpbHMvc2lkZWJhci9yZXNvbHZlU2lkZWJhckl0ZW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQWNoRTs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxDQUNoQyxPQUEyQixFQUMzQixVQUFrQixFQUNrQixFQUFFO0lBQ3RDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDOUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUN0QixDQUFDLENBQUM7Z0JBQ0UsR0FBRyxPQUFPO2dCQUNWLElBQUksRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQzVELENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSTthQUNqQjtZQUNILENBQUMsQ0FBQyxP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