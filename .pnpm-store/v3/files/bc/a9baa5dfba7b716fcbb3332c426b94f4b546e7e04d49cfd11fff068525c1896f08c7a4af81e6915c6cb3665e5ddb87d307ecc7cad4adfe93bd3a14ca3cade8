import { n as ReadingTime, r as ReadingTimePluginPageData, t as ReadingTimePluginLocaleData } from "../locales-6008QQbC.js";
import { DefaultLocaleInfo } from "@vuepress/helper";
import { LocaleConfig } from "vuepress/shared";
import { App, PluginFunction } from "vuepress/core";

//#region src/node/locales.d.ts
/**
 * Default locale info for `@vuepress/plugin-reading-time`
 */
declare const readingTimeLocaleInfo: DefaultLocaleInfo<ReadingTimePluginLocaleData>;
//#endregion
//#region src/node/getReadingTime.d.ts
/**
 * Get word number of given string
 *
 * 获取给定字符串的字数
 *
 * @param content - content to count words
 * @returns word count
 *
 * @example
 * ```ts
 * getWordNumber('Hello world') // 2
 * getWordNumber('你好世界') // 4
 * ```
 */
declare const getWordNumber: (content: string) => number;
/**
 * Get reading time info
 *
 * 获取阅读时间信息
 *
 * @param content - content to calculate reading time
 * @param wordsPerMinute - reading speed in words per minute
 * @returns reading time information
 *
 * @default wordsPerMinute 300
 *
 * @example
 * ```ts
 * getReadingTime('Hello world', 300)
 * // { minutes: 0.01, words: 2 }
 * ```
 */
declare const getReadingTime: (content: string, wordsPerMinute?: number) => ReadingTime;
//#endregion
//#region src/node/options.d.ts
/**
 * Reading time plugin options
 *
 * 阅读时间插件选项
 */
interface ReadingTimePluginOptions {
  /**
   * Reading speed (words per minute)
   *
   * 每分钟阅读的字数
   *
   * @default 300
   */
  wordPerMinute?: number;
  /**
   * Locales config
   *
   * 多语言选项
   *
   * @see https://ecosystem.vuejs.press/plugins/reading-time.html#locales
   * @see https://ecosystem.vuejs.press/plugins/zh/reading-time.html#locales
   */
  locales?: LocaleConfig<ReadingTimePluginLocaleData>;
}
//#endregion
//#region src/node/readingTimePlugin.d.ts
/**
 * Reading time plugin
 *
 * 阅读时间插件
 *
 * @param options - plugin options
 * @returns VuePress plugin function
 *
 * @example
 * ```ts
 * import { readingTimePlugin } from '@vuepress/plugin-reading-time'
 *
 * export default {
 *   plugins: [
 *     readingTimePlugin({
 *       wordPerMinute: 300
 *     })
 *   ]
 * }
 * ```
 */
declare const readingTimePlugin: (options?: ReadingTimePluginOptions) => PluginFunction;
//#endregion
//#region src/node/useReadingTimePlugin.d.ts
/**
 * Composition API to use `@vuepress/plugin-reading-time`
 *
 * 使用 `@vuepress/plugin-reading-time` 的组合式 API
 *
 * @param app - VuePress app instance
 * @param options - plugin options
 *
 * @example
 * ```ts
 * import { useReadingTimePlugin } from '@vuepress/plugin-reading-time'
 *
 * export default (options) => (app) => {
 *   useReadingTimePlugin(app, {
 *     wordPerMinute: 250
 *   })
 *
 *   return {
 *     name: 'vuepress-plugin-xxx'
 *   }
 * }
 * ```
 */
declare const useReadingTimePlugin: (app: App, options?: ReadingTimePluginOptions) => void;
/**
 * Composition API to remove `@vuepress/plugin-reading-time`
 *
 * 移除 `@vuepress/plugin-reading-time` 的组合式 API
 *
 * @param app - VuePress app instance
 *
 * @example
 * ```ts
 * import { removeReadingTimePlugin } from '@vuepress/plugin-reading-time'
 *
 * export default (options) => (app) => {
 *   removeReadingTimePlugin(app)
 *
 *   return {
 *     name: 'vuepress-plugin-xxx'
 *   }
 * }
 * ```
 */
declare const removeReadingTimePlugin: (app: App) => void;
//#endregion
export { ReadingTime, ReadingTimePluginLocaleData, ReadingTimePluginOptions, ReadingTimePluginPageData, getReadingTime, getWordNumber, readingTimeLocaleInfo, readingTimePlugin, removeReadingTimePlugin, useReadingTimePlugin };
//# sourceMappingURL=index.d.ts.map