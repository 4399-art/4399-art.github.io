import { t as PhotoSwipePluginLocaleData } from "../locales-DcmFK8cf.js";
import { App, MaybeRefOrGetter, Ref } from "vue";
import { PhotoSwipeOptions as PhotoSwipeOptions$1 } from "photoswipe";

//#region src/client/helpers/photo-swipe.d.ts
/**
 * PhotoSwipe options for VuePress
 *
 * VuePress 中的 PhotoSwipe 选项
 */
type PhotoSwipeOptions = Omit<PhotoSwipeOptions$1, 'dataSource' | 'index'>;
/**
 * PhotoSwipe options ref
 *
 * PhotoSwipe 选项响应式引用
 */
type PhotoSwipeOptionsRef = Ref<PhotoSwipeOptions>;
/**
 * Define PhotoSwipe config
 *
 * 定义 PhotoSwipe 配置
 *
 * @param options - PhotoSwipe options / PhotoSwipe 选项
 *
 * @example
 * ```ts
 * import { definePhotoSwipeConfig } from '@vuepress/plugin-photo-swipe/client'
 *
 * definePhotoSwipeConfig({
 *   bgOpacity: 0.8,
 *   spacing: 0.1,
 * })
 * ```
 */
declare const definePhotoSwipeConfig: (options: MaybeRefOrGetter<PhotoSwipeOptions>) => void;
/**
 * Get PhotoSwipe options
 *
 * 获取 PhotoSwipe 选项
 *
 * @returns PhotoSwipe options / PhotoSwipe 选项
 */
declare const usePhotoSwipeOptions: () => PhotoSwipeOptionsRef;
declare const injectPhotoSwipeConfig: (app: App) => void;
//#endregion
//#region src/client/typings.d.ts
/**
 * PhotoSwipe behavior options
 *
 * PhotoSwipe 行为选项
 */
interface PhotoSwipeBehaviorOptions {
  /**
   * Whether to enable download button
   *
   * 是否启用下载按钮
   */
  download?: boolean;
  /**
   * Whether to enable fullscreen button
   *
   * 是否启用全屏按钮
   */
  fullscreen?: boolean;
  /**
   * Whether to close when scrolling
   *
   * 是否在滚动时关闭
   */
  scrollToClose?: boolean;
}
//#endregion
//#region src/client/composables/usePhotoSwipe.d.ts
/**
 * Options for usePhotoSwipe composable
 *
 * usePhotoSwipe 组合式函数的选项
 */
interface UsePhotoSwipeOptions extends PhotoSwipeBehaviorOptions {
  /**
   * Image selector
   *
   * 图片选择器
   */
  selector: string[] | string;
  /**
   * Locale data
   *
   * 多语言数据
   */
  locales: Record<string, Record<`${keyof PhotoSwipePluginLocaleData}Title`, string>>;
}
/**
 * Use PhotoSwipe composable
 *
 * 使用 PhotoSwipe 组合式函数
 *
 * @param options - PhotoSwipe options / PhotoSwipe 选项
 *
 * @example
 * ```ts
 * import { usePhotoSwipe } from '@vuepress/plugin-photo-swipe/client'
 *
 * usePhotoSwipe({
 *   selector: 'img',
 *   locales: {
 *     '/': {
 *       closeTitle: 'Close',
 *       downloadTitle: 'Download',
 *     },
 *   },
 *   download: true,
 *   fullscreen: true,
 * })
 * ```
 */
declare const usePhotoSwipe: ({
  selector,
  locales,
  download,
  fullscreen,
  scrollToClose
}: UsePhotoSwipeOptions) => void;
//#endregion
//#region src/client/utils/createPhotoSwipe.d.ts
/**
 * PhotoSwipe state interface
 *
 * PhotoSwipe 状态接口
 */
interface PhotoSwipeState {
  /**
   * Open PhotoSwipe at specific index
   *
   * 在指定索引打开 PhotoSwipe
   *
   * @param index - Image index / 图片索引
   */
  open: (index: number) => void;
  /**
   * Close PhotoSwipe
   *
   * 关闭 PhotoSwipe
   */
  close: () => void;
  /**
   * Destroy PhotoSwipe instance
   *
   * 销毁 PhotoSwipe 实例
   */
  destroy: () => void;
}
/**
 * Create PhotoSwipe instance
 *
 * 创建 PhotoSwipe 实例
 *
 * @param images - Image links / 图片链接
 * @param options - PhotoSwipe options / PhotoSwipe 选项
 * @returns PhotoSwipe state / 可操作的 PhotoSwipe 状态
 *
 * @example
 * ```ts
 * import { createPhotoSwipe } from '@vuepress/plugin-photo-swipe/client'
 *
 * const state = await createPhotoSwipe([
 *   'https://example.com/image1.jpg',
 *   'https://example.com/image2.jpg',
 * ], {
 *   download: true,
 *   fullscreen: true,
 * })
 *
 * // Open first image
 * state.open(0)
 * ```
 */
declare const createPhotoSwipe: (images: string[], {
  scrollToClose,
  download,
  fullscreen,
  ...photoSwipeOptions
}: PhotoSwipeBehaviorOptions & PhotoSwipeOptions) => Promise<PhotoSwipeState>;
//#endregion
export { PhotoSwipeBehaviorOptions, PhotoSwipeOptions, PhotoSwipeOptionsRef, PhotoSwipePluginLocaleData, UsePhotoSwipeOptions, createPhotoSwipe, definePhotoSwipeConfig, injectPhotoSwipeConfig, usePhotoSwipe, usePhotoSwipeOptions };
//# sourceMappingURL=index.d.ts.map