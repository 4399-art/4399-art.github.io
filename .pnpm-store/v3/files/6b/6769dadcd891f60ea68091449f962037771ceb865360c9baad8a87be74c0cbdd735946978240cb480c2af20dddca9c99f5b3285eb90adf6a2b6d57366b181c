import { t as ArtPlayerOptions } from "../artplayer-Bgxvo1ek.js";
import { a as ShareServiceOptions, i as ShareServiceConfig, n as ShareAction, o as ShareServiceVariableName, r as ShareService, t as BuiltInShareService } from "../share-C7EIzVQF.js";
import { DefaultLocaleInfo } from "@vuepress/helper";
import { DefaultLayoutTranslations } from "vidstack";
import { LocaleConfig } from "vuepress/shared";
import { PluginFunction } from "vuepress/core";

//#region src/shared/locales.d.ts
interface PDFLocaleData {
  /**
   * PDF hint text
   *
   * @description Only used if the browser does not support embedding PDF and no PDFJS URL is provided.
   * [url] will be replaced by actual PDF link.
   *
   * PDF 提示文字
   *
   * @description 只有在浏览器不支持嵌入 PDF 且没有提供 PDFJS URL 时才会使用
   * [url] 会被实际 PDF 链接替换
   */
  hint: string;
}
interface SiteInfoLocaleData {
  /**
   * Source text
   *
   * 源代码文字
   */
  source: string;
}
type VidstackLocaleData = Partial<DefaultLayoutTranslations>;
//#endregion
//#region src/node/components/share/config.d.ts
declare const SHARE_CONFIG: Record<BuiltInShareService, ShareServiceConfig>;
declare const AVAILABLE_SERVICES: BuiltInShareService[];
//#endregion
//#region src/node/options/share.d.ts
interface ShareOptions {
  /**
   * Service to be enabled
   *
   * 需要被启用的服务
   */
  services: ShareService[];
  /**
   * Your twitter twitter user name
   *
   * @description required when you are using twitter service
   *
   * 你的 twitter 用户名
   *
   * @description required when you are using twitter service
   */
  twitterUserName?: string;
}
//#endregion
//#region src/node/options/global.d.ts
interface DeprecatedComponentGlobalOptions {
  /**
   * @deprecated Use `@vuepress/plugin-icon` instead
   */
  fontIcon?: never;
}
interface ComponentGlobalOptions extends DeprecatedComponentGlobalOptions {
  /**
   * ArtPlayer config
   *
   * ArtPlayer 配置
   */
  artPlayer?: ArtPlayerOptions;
  /**
   * PDF viewer config
   *
   * PDF 阅读器配置
   */
  pdf?: {
    /**
     * Location of pdfjs
     *
     * pdfjs 的位置
     */
    pdfjs?: string | boolean;
  };
  /**
   * Share config
   *
   * 分享配置
   */
  share?: ShareOptions;
}
//#endregion
//#region src/node/options/name.d.ts
/** @deprecated */
type DeprecatedComponent = "AudioPlayer" | "VideoPlayer" | "YouTube";
type AvailableComponent = "ArtPlayer" | "Badge" | "BiliBili" | "CodePen" | "PDF" | "Share" | "StackBlitz" | "SiteInfo" | "VPBanner" | "VPCard" | "VidStack";
//#endregion
//#region src/node/options/locales.d.ts
interface ComponentLocaleOptions {
  /**
   * PDF Locales config
   *
   * PDF 组件国际化配置
   */
  pdf?: LocaleConfig<PDFLocaleData>;
  /**
   * SiteInfo Locales config
   *
   * 站点信息 组件国际化配置
   */
  siteInfo?: LocaleConfig<SiteInfoLocaleData>;
  /**
   * VidStack Locales config
   *
   * VidStack 组件国际化配置
   */
  vidstack?: LocaleConfig<VidstackLocaleData>;
}
//#endregion
//#region src/node/options/root.d.ts
interface RootComponentOptions {
  /**
   * @deprecated Please use "@vuepress/plugin-back-to-top instead"
   */
  backToTop?: never;
  /**
   * @deprecated Please use "@vuepress/plugin-notice instead"
   */
  notice?: never;
}
//#endregion
//#region src/node/options/options.d.ts
interface ComponentPluginOptions {
  /**
   * Components to be registered
   *
   * 需要被注册的组件
   *
   * @default []
   */
  components?: AvailableComponent[];
  /**
   * Global config for components
   *
   * 组件全局配置
   */
  componentOptions?: ComponentGlobalOptions;
  /**
   * Root config for components
   *
   * 根组件配置
   */
  rootComponents?: RootComponentOptions;
  /**
   * Component Locales
   *
   * 组件多语言
   */
  locales?: ComponentLocaleOptions;
}
//#endregion
//#region src/node/componentsPlugin.d.ts
declare const componentsPlugin: (options: ComponentPluginOptions, legacy?: boolean) => PluginFunction;
//#endregion
//#region src/node/locales/pdf.d.ts
declare const pdfLocaleInfo: DefaultLocaleInfo<PDFLocaleData>;
//#endregion
//#region src/node/locales/siteInfo.d.ts
declare const siteInfoLocaleInfo: DefaultLocaleInfo<SiteInfoLocaleData>;
//#endregion
//#region src/node/locales/vidstack.d.ts
declare const vidstackLocaleInfo: DefaultLocaleInfo<VidstackLocaleData>;
//#endregion
export { AVAILABLE_SERVICES, ArtPlayerOptions, AvailableComponent, BuiltInShareService, ComponentGlobalOptions, ComponentLocaleOptions, ComponentPluginOptions, DeprecatedComponent, DeprecatedComponentGlobalOptions, PDFLocaleData, SHARE_CONFIG, ShareAction, ShareOptions, ShareService, ShareServiceConfig, ShareServiceOptions, ShareServiceVariableName, SiteInfoLocaleData, VidstackLocaleData, componentsPlugin, pdfLocaleInfo, siteInfoLocaleInfo, vidstackLocaleInfo };
//# sourceMappingURL=index.d.ts.map