import { isLinkHttp, removeEndingSlash, removeLeadingSlash } from "@vuepress/helper/client";
import { resolveRepoType } from "vuepress-shared/client";
export const editLinkPatterns = {
    GitHub: ":repo/edit/:branch/:path",
    GitLab: ":repo/-/edit/:branch/:path",
    Gitee: ":repo/edit/:branch/:path",
    Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default",
};
export const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern, }) => {
    if (!filePathRelative)
        return null;
    const repoType = resolveRepoType(docsRepo);
    let pattern = "";
    if (editLinkPattern)
        pattern = editLinkPattern;
    else if (repoType != null)
        pattern = editLinkPatterns[repoType];
    if (!pattern)
        return null;
    return pattern
        .replace(/:repo/u, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`)
        .replace(/:branch/u, docsBranch)
        .replace(/:path/u, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZUVkaXRMaW5rLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC91dGlscy9pbmZvL3Jlc29sdmVFZGl0TGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFNUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUE0QztJQUN2RSxNQUFNLEVBQUUsMEJBQTBCO0lBQ2xDLE1BQU0sRUFBRSw0QkFBNEI7SUFDcEMsS0FBSyxFQUFFLDBCQUEwQjtJQUNqQyxTQUFTLEVBQUUsaUZBQWlGO0NBQzdGLENBQUM7QUFVRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUM5QixRQUFRLEVBQ1IsVUFBVSxFQUNWLE9BQU8sRUFDUCxnQkFBZ0IsRUFDaEIsZUFBZSxHQUNDLEVBQWlCLEVBQUU7SUFDbkMsSUFBSSxDQUFDLGdCQUFnQjtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRW5DLE1BQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUzQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFFakIsSUFBSSxlQUFlO1FBQUUsT0FBTyxHQUFHLGVBQWUsQ0FBQztTQUMxQyxJQUFJLFFBQVEsSUFBSSxJQUFJO1FBQUUsT0FBTyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWhFLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFMUIsT0FBTyxPQUFPO1NBQ1gsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLFFBQVEsRUFBRSxDQUFDO1NBQ3JGLE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO1NBQy9CLE9BQU8sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNoRyxDQUFDLENBQUMifQ==