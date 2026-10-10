import { computed } from "vue";
import { resolveRepoLink, resolveRepoType } from "vuepress-shared/client";
import { useThemeLocale } from "@theme-hope/composables/useTheme";
/**
 * Get navbar config of repository link
 *
 * @returns repository link config, or null if it doesn't exist or is hidden
 */
export const useNavbarRepo = () => {
    const themeLocale = useThemeLocale();
    const repo = computed(() => themeLocale.value.repo);
    const repoLink = computed(() => (repo.value ? resolveRepoLink(repo.value) : null));
    const repoType = computed(() => (repo.value ? resolveRepoType(repo.value) : null));
    const repoLabel = computed(() => repoLink.value ? (themeLocale.value.repoLabel ?? repoType.value ?? "Source") : null);
    return computed(() => {
        if (!repoLink.value || !repoLabel.value || themeLocale.value.repoDisplay === false)
            return null;
        return {
            type: repoType.value ?? "Source",
            label: repoLabel.value,
            link: repoLink.value,
        };
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlTmF2YmFyUmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9zYWJsZXMvbmF2YmFyL3VzZU5hdmJhclJlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUUvQixPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVFsRTs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLEdBQW1DLEVBQUU7SUFDaEUsTUFBTSxXQUFXLEdBQUcsY0FBYyxFQUFFLENBQUM7SUFFckMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVuRixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRW5GLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FDOUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ3BGLENBQUM7SUFFRixPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxLQUFLLEtBQUs7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVoRyxPQUFPO1lBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLElBQUksUUFBUTtZQUNoQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDdEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLO1NBQ3JCLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9