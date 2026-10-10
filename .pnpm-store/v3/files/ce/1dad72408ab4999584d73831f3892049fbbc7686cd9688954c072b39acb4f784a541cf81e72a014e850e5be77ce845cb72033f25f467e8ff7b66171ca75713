import { entries, keys, useRoutePaths } from "@vuepress/helper/client";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vuepress/client";
import { useData } from "@theme-hope/composables/useData";
const isAllowedRootPath = (path) => path === "/" || /^\/?404(?:\.html)?$/.test(path);
/**
 * Get navbar config of select language dropdown
 *
 * @returns Navbar config of select language dropdown
 */
export const useNavbarLanguageDropdown = () => {
    const { routeLocale, site, siteLocale, theme, themeLocale } = useData();
    const routePaths = useRoutePaths();
    const route = useRoute();
    const isMounted = ref(false);
    const isRootLocaleClean = computed(() => {
        const subLocales = Object.keys(site.value.locales).filter((localePath) => localePath !== "/");
        if (subLocales.length === 0)
            return false;
        const localeRegExp = new RegExp(`^(?:${subLocales.map((locale) => locale.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw `\$&`)).join("|")})`);
        // only / and /404.html for root locale
        return routePaths.value
            .filter((path) => !localeRegExp.test(path))
            .every((path) => isAllowedRootPath(path));
    });
    onMounted(() => {
        isMounted.value = true;
    });
    return computed(() => {
        let localePaths = keys(site.value.locales);
        const extraLocales = entries(theme.value.extraLocales ?? {});
        // remove / locale
        if (isRootLocaleClean.value)
            localePaths = localePaths.filter((localePath) => localePath !== "/");
        // Do not display language selection dropdown if there is only one language
        if (localePaths.length < 2 && extraLocales.length === 0)
            return null;
        const { path, fullPath } = route;
        const { navbarLocales } = themeLocale.value;
        const languageDropdown = {
            text: "",
            ariaLabel: navbarLocales.selectLangAriaLabel,
            children: [
                ...localePaths.map((targetLocalePath) => {
                    // Target locale config of this language link
                    const targetSiteLocale = site.value.locales[targetLocalePath] ?? {};
                    const targetThemeLocale = theme.value.locales[targetLocalePath] ?? {};
                    const targetLang = targetSiteLocale.lang;
                    const text = targetThemeLocale.navbarLocales.langName;
                    let link;
                    // If the target language is current language
                    if (targetLang === siteLocale.value.lang) {
                        // Stay at current link
                        link = fullPath;
                    }
                    // If the target language is not current language
                    else {
                        const targetLocalePage = path.replace(routeLocale.value, targetLocalePath);
                        // try to link to the corresponding page of current page
                        link = routePaths.value.some((item) => item === targetLocalePage)
                            ? isMounted.value
                                ? // try to keep current hash and query across languages
                                    fullPath.replace(path, targetLocalePage)
                                : // avoid SSR mismatch
                                    targetLocalePage
                            : // Or fallback to homepage
                                (targetThemeLocale.home ?? targetLocalePath);
                    }
                    return {
                        text,
                        link,
                    };
                }),
                ...extraLocales.map(([text, localPath]) => ({
                    text,
                    link: localPath.replace(":route", (isMounted.value ? fullPath : localPath).replace(routeLocale.value, "")),
                })),
            ],
        };
        return languageDropdown;
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlTmF2YmFyTGFuZ3VhZ2VEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9zYWJsZXMvbmF2YmFyL3VzZU5hdmJhckxhbmd1YWdlRHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJMUQsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLElBQVksRUFBVyxFQUFFLENBQ2xELElBQUksS0FBSyxHQUFHLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRW5EOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRyxHQUFrRCxFQUFFO0lBQzNGLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7SUFDeEUsTUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7SUFDbkMsTUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDekIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTdCLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUN0QyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUs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