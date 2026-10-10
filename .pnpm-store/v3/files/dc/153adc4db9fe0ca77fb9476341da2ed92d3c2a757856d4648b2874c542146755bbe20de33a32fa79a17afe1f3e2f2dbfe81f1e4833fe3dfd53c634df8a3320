import type { SidebarGroupItem, SidebarItem, SidebarLinkItem } from "@theme-hope/typings/sidebar";
import type { SidebarArrayOptions, SidebarItemOptions, SidebarObjectOptions, SidebarOptions } from "../../../shared/index.js";
export interface SidebarArrayItem {
    config: SidebarArrayOptions;
    prefix?: string;
}
/**
 * Resolve sidebar item
 *
 * @param options - sidebar item config
 * @param pathPrefix - current path prefix
 * @returns resolved sidebar item
 */
export declare const resolveSidebarItem: (options: SidebarItemOptions, pathPrefix: string) => SidebarLinkItem | SidebarGroupItem;
/**
 * Resolve sidebar items if the config is an array
 *
 * @param options - resolve sidebar array item options
 * @returns resolved sidebar items
 */
export declare const resolveArraySidebarItems: ({ config, prefix, }: SidebarArrayItem) => SidebarItem[];
export interface ResolveMultiSidebarOptions {
    config: SidebarObjectOptions;
    routePath: string;
}
/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 *
 * @param options - resolve multi sidebar options
 * @returns resolved sidebar items
 */
export declare const resolveMultiSidebarItems: ({ config, routePath, }: ResolveMultiSidebarOptions) => SidebarItem[];
export interface ResolveSidebarOptions {
    /**
     * Sidebar config
     */
    config: SidebarOptions;
    /**
     * Current route locale
     */
    routeLocale: string;
    /**
     * Current route path
     */
    routePath: string;
}
/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 *
 * @param options - resolve sidebar options
 * @returns resolved sidebar items
 */
export declare const resolveSidebarItems: ({ config, routeLocale, routePath, }: ResolveSidebarOptions) => SidebarItem[];
