import { n as CopyrightPluginLocaleData, t as CopyrightPluginSharedOptions } from "../options-DCN2aVfP.js";
import { DefaultLocaleInfo, Logger } from "@vuepress/helper";
import { LocaleConfig, PageFrontmatter } from "vuepress/shared";
import { Page, PluginFunction } from "vuepress/core";

//#region src/shared/data.d.ts
/**
 * Copyright information data
 *
 * 版权信息数据
 */
interface CopyrightInfoData {
  /**
   * Author information
   *
   * 作者信息
   */
  author?: string;
  /**
   * License information
   *
   * 协议信息
   */
  license?: string;
}
/**
 * Copyright plugin page data
 *
 * 版权插件页面数据
 */
interface CopyrightPluginPageData extends Record<string, unknown> {
  /**
   * Copyright information
   *
   * 版权信息
   */
  copyright?: CopyrightInfoData | string;
}
//#endregion
//#region src/shared/frontmatter.d.ts
interface CopyrightPluginFrontmatter extends PageFrontmatter {
  copy?: boolean | {
    /**
     * Min length triggering copyright append
     *
     * 触发附加版权的最小长度
     *
     * @default 100
     */
    triggerLength?: number;
    /**
     * Max length that allows to copy
     *
     * @description 0 means unlimited
     *
     * 允许复制的最大长度
     *
     * @description 0 表示无限制
     *
     * @default 0
     */
    maxLength?: number;
    /**
     * Disable copy
     *
     * 禁用复制
     *
     * @default false
     */
    disableCopy?: boolean;
    /**
     * Disable selection
     *
     * 禁用选择
     *
     * @default false
     */
    disableSelection?: boolean;
  };
}
//#endregion
//#region src/node/options.d.ts
interface CopyrightPluginOptions extends CopyrightPluginSharedOptions {
  /**
   * Author getter
   *
   * 作者获取器
   *
   * @param page - Page object / 页面对象
   */
  authorGetter?: <ExtraPageData extends Record<string, unknown> = Record<never, never>, ExtraPageFrontmatter extends Record<string, unknown> = Record<string, unknown>, ExtraPageFields extends Record<string, unknown> = Record<never, never>>(page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>) => string | null;
  /**
   * License getter
   *
   * 协议信息获取器
   *
   * @param page - Page object / 页面对象
   */
  licenseGetter?: <ExtraPageData extends Record<string, unknown> = Record<never, never>, ExtraPageFrontmatter extends Record<string, unknown> = Record<string, unknown>, ExtraPageFields extends Record<string, unknown> = Record<never, never>>(page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>) => string | null;
  /**
   * Copyright getter
   *
   * 版权信息获取器
   *
   * @param page - Page object / 页面对象
   */
  copyrightGetter?: <ExtraPageData extends Record<string, unknown> = Record<never, never>, ExtraPageFrontmatter extends Record<string, unknown> = Record<string, unknown>, ExtraPageFields extends Record<string, unknown> = Record<never, never>>(page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>) => string | null;
  /**
   * Locales config for copyright
   *
   * 版权插件的多语言配置
   */
  locales?: LocaleConfig<CopyrightPluginLocaleData>;
}
//#endregion
//#region src/node/copyrightPlugin.d.ts
declare const logger: Logger;
/**
 * Copyright plugin
 *
 * 版权插件
 *
 * @example
 * ```ts
 * import { copyrightPlugin } from '@vuepress/plugin-copyright'
 *
 * export default {
 *   plugins: [
 *     copyrightPlugin({
 *       author: 'Your Name',
 *       license: 'MIT',
 *       global: true,
 *     }),
 *   ],
 * }
 * ```
 */
declare const copyrightPlugin: (options?: CopyrightPluginOptions) => PluginFunction;
//#endregion
//#region src/node/locales.d.ts
/**
 * Default locale info for copyright plugin
 *
 * 版权插件的默认多语言信息
 */
declare const copyrightLocaleInfo: DefaultLocaleInfo<CopyrightPluginLocaleData>;
//#endregion
export { CopyrightInfoData, CopyrightPluginFrontmatter, CopyrightPluginLocaleData, CopyrightPluginOptions, CopyrightPluginPageData, CopyrightPluginSharedOptions, copyrightLocaleInfo, copyrightPlugin, logger };
//# sourceMappingURL=index.d.ts.map