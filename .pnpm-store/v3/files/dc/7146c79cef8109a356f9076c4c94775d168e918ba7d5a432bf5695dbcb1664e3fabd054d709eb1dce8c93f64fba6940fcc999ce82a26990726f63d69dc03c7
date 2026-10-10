import type { ComputedRef } from "vue";
import type { RepoType } from "vuepress-shared/client";
export interface RepoConfig {
    type: Exclude<RepoType, null> | "Source";
    label: string;
    link: string;
}
/**
 * Get navbar config of repository link
 *
 * @returns repository link config, or null if it doesn't exist or is hidden
 */
export declare const useNavbarRepo: () => ComputedRef<RepoConfig | null>;
