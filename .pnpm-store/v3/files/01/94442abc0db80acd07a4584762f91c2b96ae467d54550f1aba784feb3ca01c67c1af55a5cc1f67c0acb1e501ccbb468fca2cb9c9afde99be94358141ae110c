import { o as BaseCommentPluginOptions, r as GiscusOptions } from "./giscus-BkeBZFLM.js";
import { PageFrontmatter } from "vuepress/shared";
import { ArtalkConfig } from "artalk";
import { WalineInitOptions, WalineLocale } from "@waline/client";

//#region src/shared/frontmatter.d.ts
/**
 * Comment plugin frontmatter
 *
 * 评论插件 frontmatter
 */
interface CommentPluginFrontmatter extends PageFrontmatter {
  /**
   * Whether enable comment
   *
   * 是否启用评论
   *
   * @default true
   */
  comment?: boolean;
  /**
   * Comment identifier
   *
   * 评论标识符
   */
  commentID?: string;
  /**
   * Whether enable pageviews
   *
   * 是否启用访问量
   *
   * @description Only available when using waline
   *
   * 仅在使用 Waline 时可用
   *
   * @default true
   */
  pageview?: boolean;
}
//#endregion
//#region src/shared/options/artalk.d.ts
/**
 * Artalk comment options
 *
 * Artalk 评论选项
 */
type ArtalkOptions = BaseCommentPluginOptions & Partial<Omit<ArtalkConfig, 'el' | 'pageKey'>>;
//#endregion
//#region src/shared/options/disable.d.ts
/**
 * No comment plugin options
 *
 * 禁用评论插件选项
 */
interface NoCommentPluginOptions extends BaseCommentPluginOptions {
  provider?: 'None';
  comment?: never;
}
//#endregion
//#region src/shared/options/twikoo.d.ts
/**
 * Twikoo initialization options
 *
 * Twikoo 初始化选项
 */
interface TwikooInitOptions {
  /**
   * Environment ID for TenCloud or deployment URL for Vercel
   *
   * 腾讯云环境 ID 或 Vercel 部署 URL
   */
  envId: string;
  /**
   * TenCloud region
   *
   * 腾讯云区域
   *
   * @default "ap-shanghai"
   */
  region?: string;
}
/**
 * Twikoo comment options
 *
 * Twikoo 评论选项
 */
type TwikooOptions = BaseCommentPluginOptions & TwikooInitOptions;
//#endregion
//#region src/shared/options/waline.d.ts
/**
 * Waline locale data
 *
 * Waline 语言包数据
 */
type WalineLocaleData = Partial<WalineLocale>;
/**
 * Waline comment options
 *
 * Waline 评论选项
 */
interface WalineOptions extends BaseCommentPluginOptions, Omit<WalineInitOptions, 'comment' | 'el' | 'locale'> {
  /**
   * Whether enable page views count by default
   *
   * 是否启用访问量
   *
   * @default true
   */
  pageview?: boolean;
}
//#endregion
//#region src/shared/options/options.d.ts
/**
 * Comment options
 *
 * 评论选项
 */
type CommentOptions = ArtalkOptions | GiscusOptions | NoCommentPluginOptions | TwikooOptions | WalineOptions;
//#endregion
export { TwikooOptions as a, CommentPluginFrontmatter as c, TwikooInitOptions as i, WalineLocaleData as n, NoCommentPluginOptions as o, WalineOptions as r, ArtalkOptions as s, CommentOptions as t };
//# sourceMappingURL=options-VhvAaqEA.d.ts.map