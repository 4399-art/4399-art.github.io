import { t as PhotoSwipePluginLocaleData } from "../locales-DcmFK8cf.js";
import { DefaultLocaleInfo } from "@vuepress/helper";
import { PluginFunction } from "vuepress/core";
import { LocaleConfig } from "vuepress/shared";

//#region src/node/locales.d.ts
/**
 * Default locale info for PhotoSwipe plugin
 *
 * PhotoSwipe 插件的默认多语言信息
 */
declare const photoSwipeLocaleInfo: DefaultLocaleInfo<PhotoSwipePluginLocaleData>;
//#endregion
//#region src/node/options.d.ts
interface PhotoSwipePluginOptions {
  /**
   * Image selector
   *
   * 图片选择器
   *
   * @default "[vp-content] :not(a) > img:not([no-view])"
   */
  selector?: string[] | string;
  /**
   * Whether to enable the download button
   *
   * 是否启用下载按钮
   *
   * @default true
   */
  download?: boolean;
  /**
   * Whether to enable the fullscreen button
   *
   * 是否启用全屏按钮
   *
   * @default true
   */
  fullscreen?: boolean;
  /**
   * Whether close the current image when scrolling
   *
   * 是否在滚动时关闭当前图片
   *
   * @default true
   */
  scrollToClose?: boolean;
  /**
   * Locale config
   *
   * 国际化配置
   */
  locales?: LocaleConfig<PhotoSwipePluginLocaleData>;
}
//#endregion
//#region src/node/photoSwipePlugin.d.ts
/**
 * VuePress PhotoSwipe plugin
 *
 * VuePress PhotoSwipe 插件
 *
 * @example
 * ```ts
 * import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'
 *
 * export default {
 *   plugins: [
 *     photoSwipePlugin({
 *       selector: '[vp-content] :not(a) > img:not([no-view])',
 *       download: true,
 *       fullscreen: true,
 *       scrollToClose: true,
 *     }),
 *   ],
 * }
 * ```
 */
declare const photoSwipePlugin: (options?: PhotoSwipePluginOptions) => PluginFunction;
//#endregion
export { PhotoSwipePluginLocaleData, PhotoSwipePluginOptions, photoSwipeLocaleInfo, photoSwipePlugin };
//# sourceMappingURL=index.d.ts.map