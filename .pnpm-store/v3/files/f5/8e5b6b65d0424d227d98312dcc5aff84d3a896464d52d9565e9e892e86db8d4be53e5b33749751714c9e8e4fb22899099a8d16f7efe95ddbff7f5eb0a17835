import { FunctionalComponent } from "vue";
import { RequiredSlot } from "@vuepress/helper/client";
import { RouteLocationNormalizedLoaded } from "vuepress/client";

//#region src/client/components/IconBase.d.ts
interface IconBaseProps {
  name?: string;
  color?: string;
  ariaLabel?: string;
}
declare const IconBase: FunctionalComponent<IconBaseProps, Record<never, never>, {
  default: RequiredSlot;
}>;
//#endregion
//#region src/client/components/fullscreenIcons.d.ts
declare const EnterFullScreenIcon: FunctionalComponent;
declare const CancelFullScreenIcon: FunctionalComponent;
//#endregion
//#region src/client/components/repoIcons.d.ts
declare const GitHubIcon: FunctionalComponent;
declare const GitLabIcon: FunctionalComponent;
declare const GiteeIcon: FunctionalComponent;
declare const BitbucketIcon: FunctionalComponent;
declare const SourceIcon: FunctionalComponent;
declare const RepoIcon: FunctionalComponent<{
  link?: string;
  type?: string;
}>;
//#endregion
//#region src/client/utils/hash.d.ts
declare const cyrb53: (content: string, seed?: number) => number;
declare const generateIndexFromHash: (content: string, total: number) => number;
//#endregion
//#region src/client/utils/path.d.ts
/**
 * Get hash from path
 *
 * @param path link path
 * @returns hash
 */
declare const getHash: (path: string) => string;
declare const normalizePath: (path: string) => string;
/**
 * Whether the lick is active
 *
 * @param route Current route
 * @param link link path
 *
 * @returns Whether the link is active
 */
declare const isActiveLink: (route: RouteLocationNormalizedLoaded, link?: string) => boolean;
//#endregion
//#region src/client/utils/resolveRepo.d.ts
type RepoType = "GitHub" | "GitLab" | "Gitee" | "Bitbucket" | null;
declare const resolveRepoLink: (repo: string) => string;
declare const resolveRepoType: (repo?: string) => RepoType;
//#endregion
//#region src/client/utils/window.d.ts
declare const getSize: () => Record<"width" | "height" | "left" | "top", number>;
declare const openPopupWindow: (link: string, target?: string, features?: string[]) => void;
//#endregion
export { BitbucketIcon, CancelFullScreenIcon, EnterFullScreenIcon, GitHubIcon, GitLabIcon, GiteeIcon, IconBase, IconBaseProps, RepoIcon, RepoType, SourceIcon, cyrb53, generateIndexFromHash, getHash, getSize, isActiveLink, normalizePath, openPopupWindow, resolveRepoLink, resolveRepoType };
//# sourceMappingURL=index.d.ts.map