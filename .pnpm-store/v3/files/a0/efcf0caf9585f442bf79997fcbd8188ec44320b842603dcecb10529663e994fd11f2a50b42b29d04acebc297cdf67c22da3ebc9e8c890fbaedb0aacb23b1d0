import { computed } from "vue";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { useData } from "@theme-hope/composables/useData";
import { resolveEditLink } from "@theme-hope/utils/info/resolveEditLink";
export const useEditLink = () => {
    const { frontmatter, page, themeLocale } = useData();
    const metaLocale = useMetaLocale();
    return computed(() => {
        const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern = "", } = themeLocale.value;
        const showEditLink = frontmatter.value.editLink ?? editLink ?? true;
        if (!showEditLink)
            return null;
        if (!docsRepo)
            return null;
        const link = resolveEditLink({
            docsRepo,
            docsBranch,
            docsDir,
            editLinkPattern,
            filePathRelative: page.value.filePathRelative,
        });
        if (!link)
            return null;
        return {
            text: metaLocale.value.editLink,
            link,
        };
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlRWRpdExpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvc2FibGVzL2luZm8vdXNlRWRpdExpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUl6RSxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsR0FBd0MsRUFBRTtJQUNuRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQztJQUNyRCxNQUFNLFVBQVUsR0FBRyxhQUFhLEVBQUUsQ0FBQztJQUVuQyxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDbkIsTUFBTSxFQUNKLElBQUksRUFDSixRQUFRLEdBQUcsSUFBSSxFQUNmLFVBQVUsR0FBRyxNQUFNLEVBQ25CLE9BQU8sR0FBRyxFQUFFLEVBQ1osUUFBUSxFQUNSLGVBQWUsR0FBRyxFQUFFLEdBQ3JCLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUV0QixNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDO1FBRXBFLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFL0IsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPLElBQUksQ0FBQztRQUUzQixNQUFNLElBQUksR0FBRyxlQUFlLENBQUM7WUFDM0IsUUFBUTtZQUNSLFVBQVU7WUFDVixPQUFPO1lBQ1AsZUFBZTtZQUNmLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCO1NBQzlDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFdkIsT0FBTztZQUNMLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDL0IsSUFBSTtTQUNMLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9