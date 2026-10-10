import { MarkdownItIncludeOptions } from "@mdit/plugin-include";
import { Plugin } from "vuepress/core";

//#region src/node/options.d.ts
/**
 * Options for `@vuepress/plugin-markdown-include`
 *
 * `@vuepress/plugin-markdown-include` 插件的选项
 */
type MarkdownIncludePluginOptions = Omit<MarkdownItIncludeOptions, 'currentPath'>;
//#endregion
//#region src/node/markdownIncludePlugin.d.ts
declare module 'vuepress/markdown' {
  interface MarkdownOptions {
    include?: MarkdownIncludePluginOptions;
  }
}
/**
 * Markdown include plugin
 *
 * Markdown 导入插件
 *
 * @example
 * ```ts
 * import { markdownIncludePlugin } from '@vuepress/plugin-markdown-include'
 *
 * export default {
 *   plugins: [
 *     markdownIncludePlugin({
 *       deep: true,
 *       useComment: true,
 *     }),
 *   ],
 * }
 * ```
 */
declare const markdownIncludePlugin: (options: MarkdownIncludePluginOptions) => Plugin;
//#endregion
export { MarkdownIncludePluginOptions, markdownIncludePlugin };
//# sourceMappingURL=index.d.ts.map