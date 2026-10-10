import { isArray } from "@vuepress/helper/client";
import { computed } from "vue";
import { useData } from "@theme-hope/composables/useData";
export const useMetaInfo = () => {
    const { frontmatter, themeLocale } = useData();
    const changelog = computed(() => frontmatter.value.changelog ??
        ((themeLocale.value.changelog ?? false) && !frontmatter.value.home));
    const contributors = computed(() => {
        // oxlint-disable-next-line no-shadow
        const { contributors, home } = frontmatter.value;
        return isArray(contributors)
            ? home
                ? false
                : (themeLocale.value.contributors ?? true)
            : (contributors ??
                (home ? false : (themeLocale.value.contributors ?? true)));
    });
    const lastUpdated = computed(() => frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true);
    return {
        changelog,
        contributors,
        lastUpdated,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlTWV0YUluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvc2FibGVzL3VzZU1ldGFJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRS9CLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQVkxRCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsR0FBYSxFQUFFO0lBQ3hDLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7SUFFL0MsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUN4QixHQUFHLEVBQUUsQ0FDSCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVM7UUFDM0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FDdEUsQ0FBQztJQUVGLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDakMscUNBQXFDO1FBQ3JDLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUVqRCxPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDMUIsQ0FBQyxDQUFFLElBQTRCO2dCQUM3QixDQUFDLENBQUMsS0FBSztnQkFDUCxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUMsWUFBWTtnQkFDWCxDQUFFLElBQTRCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQzFCLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLElBQUksQ0FDN0UsQ0FBQztJQUVGLE9BQU87UUFDTCxTQUFTO1FBQ1QsWUFBWTtRQUNaLFdBQVc7S0FDWixDQUFDO0FBQ0osQ0FBQyxDQUFDIn0=