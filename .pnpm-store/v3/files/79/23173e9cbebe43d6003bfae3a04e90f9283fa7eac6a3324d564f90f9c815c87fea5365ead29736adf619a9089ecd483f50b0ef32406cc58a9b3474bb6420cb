import { MarkdownItTaskListOptions } from "@mdit/plugin-tasklist";
import { Plugin } from "vuepress/core";
import { PluginSimple } from "markdown-it";

//#region src/node/options.d.ts
/**
 * Options of markdown-ext plugin
 *
 * markdown-ext 插件选项
 */
interface MarkdownExtPluginOptions {
  /**
   * Whether enable standard GFM support
   *
   * 是否启用标准的 GitHub Favor Markdown 支持
   *
   * @default false
   */
  gfm?: boolean;
  /**
   * Whether convert `\n` in paragraphs into `<br>`s
   *
   * 是否将段落中的 `\n` 转换为 `<br>`
   *
   * @description enabled in gfm mode
   *
   * @default false
   */
  breaks?: boolean;
  /**
   * Whether convert URL-like text into links
   *
   * 是否将文字中的链接格式文字转换为链接
   *
   * @description enabled in gfm mode
   *
   * @default false
   */
  linkify?: boolean;
  /**
   * Whether to enable footnote format support
   *
   * 是否启用脚注格式支持。
   *
   * @description enabled in gfm mode
   *
   * @default false
   */
  footnote?: boolean;
  /**
   * Whether to enable tasklist format support
   *
   * 是否启用任务列表支持
   *
   * @description enabled in gfm mode
   *
   * @default false
   */
  tasklist?: MarkdownItTaskListOptions | boolean;
  /**
   * Whether to enable component support
   *
   * 是否启用组件支持
   *
   * @default false
   */
  component?: boolean;
  /**
   * Whether to enable v-pre wrapper.
   *
   * 是否启用 v-pre 容器。
   *
   * @default false
   */
  vPre?: boolean;
  /**
   * Whether to enable CJK-friendly support for emphasis marks.
   *
   * 是否启用对强调标记的 CJK 友好支持。
   *
   * @description When not set, it is automatically enabled if a CJK language is detected in the site's `lang` or `locales[xxx].lang` configuration.
   *
   * 未设置时，如果在站点的 `lang` 或 `locales[xxx].lang` 配置中检测到 CJK 语言，将自动启用。
   */
  cjkFriendly?: boolean;
}
//#endregion
//#region src/node/markdownExtPlugin.d.ts
declare module 'vuepress/markdown' {
  interface MarkdownOptions {
    ext?: MarkdownExtPluginOptions;
  }
}
/**
 * Markdown extensions plugin
 *
 * Markdown 扩展插件
 *
 * @example
 * ```ts
 * import { markdownExtPlugin } from '@vuepress/plugin-markdown-ext'
 *
 * export default {
 *   plugins: [
 *     markdownExtPlugin({
 *       gfm: true,
 *       component: true,
 *       vPre: true,
 *     }),
 *   ],
 * }
 * ```
 */
declare const markdownExtPlugin: (options: MarkdownExtPluginOptions) => Plugin;
//#endregion
//#region src/node/markdown-it-plugins/component.d.ts
/**
 * Component fence support plugin
 *
 * 组件代码块支持插件
 *
 * @param md - MarkdownIt instance / MarkdownIt 实例
 */
declare const component: PluginSimple;
//#endregion
//#region src/node/markdown-it-plugins/vPre.d.ts
/**
 * v-pre container support plugin
 *
 * v-pre 容器支持插件
 *
 * @param md - MarkdownIt instance / MarkdownIt 实例
 */
declare const vPre: PluginSimple;
//#endregion
export { MarkdownExtPluginOptions, component, markdownExtPlugin, vPre };
//# sourceMappingURL=index.d.ts.map