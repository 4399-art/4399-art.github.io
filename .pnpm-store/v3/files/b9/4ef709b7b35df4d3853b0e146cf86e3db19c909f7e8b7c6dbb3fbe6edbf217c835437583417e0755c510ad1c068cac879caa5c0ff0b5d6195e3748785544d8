import { n as MarkdownPreviewPluginLocaleData } from "../locales-IjozmnKJ.js";
import { Plugin } from "vuepress/core";
import { LocaleConfig } from "vuepress";
import { PluginSimple } from "markdown-it";

//#region src/node/options.d.ts
interface MarkdownPreviewPluginOptions {
  /**
   * Localization config for preview component
   *
   * 预览组件的本地化配置
   */
  locales?: LocaleConfig<MarkdownPreviewPluginLocaleData>;
}
//#endregion
//#region src/node/markdownPreviewPlugin.d.ts
declare module 'vuepress/markdown' {
  interface MarkdownOptions {
    preview?: MarkdownPreviewPluginOptions;
  }
}
/**
 * Markdown preview plugin
 *
 * Markdown 预览插件
 *
 * @example
 * ```ts
 * import { markdownPreviewPlugin } from '@vuepress/plugin-markdown-preview'
 *
 * export default {
 *   plugins: [
 *     markdownPreviewPlugin(),
 *   ],
 * }
 * ```
 */
declare const markdownPreviewPlugin: (options?: MarkdownPreviewPluginOptions) => Plugin;
//#endregion
//#region src/node/preview.d.ts
declare const preview: PluginSimple;
//#endregion
export { MarkdownPreviewPluginOptions, markdownPreviewPlugin, preview };
//# sourceMappingURL=index.d.ts.map