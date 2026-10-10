import { getDate } from "@vuepress/helper/client";
import { getReadingTimeLocale, useReadingTimeLocaleConfig, } from "@vuepress/plugin-reading-time/client";
import { computed, toRef } from "vue";
import { useBlogOptions } from "@theme-hope/composables/blog/useBlogOptions";
import { useCategoryMap } from "@theme-hope/composables/blog/useCategoryMap";
import { useTagMap } from "@theme-hope/composables/blog/useTagMap";
import { useThemeLocale } from "@theme-hope/composables/useTheme";
import { getAuthor, getCategory, getTag } from "../../../shared/index.js";
export const useArticleAuthor = (info) => {
    const themeLocale = useThemeLocale();
    return computed(() => {
        const { author } = info.value;
        if (author)
            return getAuthor(author);
        if (author === false)
            return [];
        return getAuthor(themeLocale.value.author, false);
    });
};
export const useArticleCategory = (info) => {
    const categoryMap = useCategoryMap();
    return computed(() => getCategory(info.value.category).map((name) => ({
        name,
        path: categoryMap.value.map[name].path,
    })));
};
export const useArticleTag = (info) => {
    const tagMap = useTagMap();
    return computed(() => getTag(info.value.tag).map((name) => ({
        name,
        path: tagMap.value.map[name].path,
    })));
};
export const useArticleDate = (info) => computed(() => getDate(info.value.date));
export const useArticleInfo = (props) => {
    const articleInfo = toRef(props, "info");
    const blogOptions = useBlogOptions();
    const author = useArticleAuthor(articleInfo);
    const category = useArticleCategory(articleInfo);
    const tag = useArticleTag(articleInfo);
    const date = useArticleDate(articleInfo);
    const readingTimeLocaleConfig = useReadingTimeLocaleConfig();
    const info = computed(() => ({
        author: author.value,
        category: category.value,
        date: date.value,
        tag: tag.value,
        isOriginal: articleInfo.value.isOriginal ?? false,
        readingTime: articleInfo.value.readingTime ?? null,
        readingTimeLocale: articleInfo.value.readingTime && readingTimeLocaleConfig.value
            ? getReadingTimeLocale(articleInfo.value.readingTime, readingTimeLocaleConfig.value)
            : null,
        pageview: props.path,
    }));
    const items = computed(() => blogOptions.value.articleInfo ?? null);
    return { info, items };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQXJ0aWNsZUluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvc2FibGVzL2Jsb2cvdXNlQXJ0aWNsZUluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEdBQzNCLE1BQU0sc0NBQXNDLENBQUM7QUFFOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFHdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBSWxFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBSTFFLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQUMsSUFBMEIsRUFBYSxFQUFFO0lBQ3hFLE1BQU0sV0FBVyxHQUFHLGNBQWMsRUFBRSxDQUFDO0lBRXJDLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUNuQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUU5QixJQUFJLE1BQU07WUFBRSxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLE1BQU0sS0FBSyxLQUFLO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFFaEMsT0FBTyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFDTCxD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