import { n as RedirectBehaviorOptions } from "../behavior-C8vQI65c.js";
import { t as RedirectPluginLocaleData } from "../locales-Dgh6UceV.js";
import { App, LocaleConfig, PluginFunction } from "vuepress/core";
import { PageFrontmatter } from "vuepress";

//#region src/node/types/frontmatter.d.ts
interface RedirectPluginFrontmatter extends PageFrontmatter {
  redirectFrom?: string[] | string;
  redirectTo?: string;
}
//#endregion
//#region src/node/types/options.d.ts
interface RedirectPluginOptions extends RedirectBehaviorOptions {
  /**
   * Redirect mapping
   *
   * 重定向映射
   */
  config?: Record<string, string> | ((app: App) => Record<string, string>);
  /**
   * Whether switch locales
   *
   * 是否启用重定向语言
   *
   * @default false
   */
  switchLocale?: 'direct' | 'modal' | 'popup' | false;
  /**
   * Locale language config
   *
   * 多语言语言配置
   */
  localeConfig?: Record<string, string[] | string>;
  /**
   * Locales config
   *
   * 多语言选项
   */
  locales?: LocaleConfig<RedirectPluginLocaleData>;
}
//#endregion
//#region src/node/redirectPlugin.d.ts
declare const redirectPlugin: (options?: RedirectPluginOptions) => PluginFunction;
//#endregion
export { RedirectPluginFrontmatter, RedirectPluginOptions, redirectPlugin };
//# sourceMappingURL=index.d.ts.map