import { MarkdownItAttrsOptions } from "@mdit/plugin-attrs";
import { MarkdownItStylizeConfig } from "@mdit/plugin-stylize";
import { Plugin } from "vuepress/core";
export * from "@mdit/plugin-attrs";
export * from "@mdit/plugin-stylize";

//#region \0rolldown/runtime.js
//#endregion
//#region src/node/options.d.ts
interface MarkdownStylizePluginOptions {
  /**
   * Whether to enable align support
   *
   * 是否启用自定义对齐支持。
   *
   * @default false
   */
  align?: boolean;
  /**
   * Whether to enable attr support
   *
   * 是否启用属性支持。
   *
   * @default false
   */
  attrs?: MarkdownItAttrsOptions | boolean;
  /**
   * Whether to enable layout support
   *
   * 是否启用布局支持。
   *
   * @default false
   */
  layout?: boolean;
  /**
   * Whether to enable superscript format support
   *
   * 是否启用上角标格式支持。
   *
   * @default false
   */
  sup?: boolean;
  /**
   * Whether to enable subscript format support
   *
   * 是否启用下角标格式支持。
   *
   * @default false
   */
  sub?: boolean;
  /**
   * Whether to enable mark format support
   *
   * 是否启用标注支持。
   *
   * @default false
   */
  mark?: boolean;
  /**
   * Whether to enable spoiler support
   *
   * 是否启用剧透支持。
   *
   * @default false
   */
  spoiler?: boolean;
  /**
   * Customizing token stylize
   *
   * 自定义标记样式。
   */
  custom?: MarkdownItStylizeConfig[];
}
//#endregion
//#region src/node/markdownStylizePlugin.d.ts
declare module 'vuepress/markdown' {
  interface MarkdownOptions {
    stylize?: MarkdownStylizePluginOptions;
  }
}
/**
 * Markdown stylize plugin
 *
 * Markdown 样式化插件
 *
 * @param options - plugin options / 插件选项
 *
 * @example
 * ```ts
 * import { markdownStylizePlugin } from '@vuepress/plugin-markdown-stylize'
 *
 * export default {
 *   plugins: [
 *     markdownStylizePlugin({
 *       align: true,
 *       attrs: true,
 *       mark: true,
 *       layout: true,
 *       spoiler: true,
 *       sub: true,
 *       sup: true,
 *     }),
 *   ],
 * }
 * ```
 */
declare const markdownStylizePlugin: (options: MarkdownStylizePluginOptions) => Plugin;
declare namespace index_d_exports {
  export { MarkdownStylizePluginOptions, markdownStylizePlugin };
}
//#endregion
export { MarkdownStylizePluginOptions, markdownStylizePlugin };
//# sourceMappingURL=index.d.ts.map