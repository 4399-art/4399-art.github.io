import { resolveRoute } from "vuepress/client";
/**
 * Resolve AutoLink props from string
 *
 * @param item - The string to resolve
 * @param preferFull - Whether to prefer full title
 * @param currentPath - The current page path
 * @returns AutoLink props
 */
export const resolveLinkInfo = (item, preferFull = false, currentPath) => {
    const { meta, path, notFound } = resolveRoute(item, currentPath);
    return notFound
        ? { text: path, link: path }
        : {
            text: !preferFull && meta.shortTitle ? meta.shortTitle : meta.title || path,
            link: path,
            icon: meta.icon,
        };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZUxpbmtJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaWVudC91dGlscy9yZXNvbHZlTGlua0luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSS9DOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsQ0FDN0IsSUFBWSxFQUNaLFVBQVUsR0FBRyxLQUFLLEVBQ2xCLFdBQW9CLEVBQ0gsRUFBRTtJQUNuQixNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxZQUFZLENBQWUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRS9FLE9BQU8sUUFBUTtRQUNiLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtRQUM1QixDQUFDLENBQUM7WUFDRSxJQUFJLEVBQUUsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQzNFLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUM7QUFDUixDQUFDLENBQUMifQ==