import { PluginObject } from "vuepress/core";

//#region src/node/rtlPlugin.d.ts
/**
 * Options for RTL plugin
 *
 * RTL 插件选项
 */
interface RTLPluginOptions {
  /**
   * RTL locales
   *
   * RTL 语言路径
   *
   * @default ['/']
   */
  locales?: string[];
  /**
   * RTL selector
   *
   * RTL 选择器
   *
   * @default { 'html': { dir: 'rtl' } }
   */
  selector?: {
    [cssSelector: string]: {
      [attr: string]: string;
    };
  };
}
/**
 * Create RTL plugin
 *
 * 创建 RTL 插件
 *
 * @example
 * ```ts
 * import { rtlPlugin } from '@vuepress/plugin-rtl'
 *
 * export default {
 *   plugins: [
 *     rtlPlugin({
 *       locales: ['/ar/', '/he/'],
 *       selector: { 'html': { dir: 'rtl' } }
 *     })
 *   ]
 * }
 * ```
 */
declare const rtlPlugin: (options?: RTLPluginOptions) => PluginObject;
//#endregion
export { RTLPluginOptions, rtlPlugin };
//# sourceMappingURL=index.d.ts.map