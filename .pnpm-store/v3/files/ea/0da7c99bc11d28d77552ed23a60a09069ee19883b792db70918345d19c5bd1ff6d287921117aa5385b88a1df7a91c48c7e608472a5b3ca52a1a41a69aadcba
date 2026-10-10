import { PluginWithOptions } from "markdown-it";

//#region src/options.d.ts
interface MarkdownItStylizeResult {
  /**
   * Tag name
   *
   * 渲染的标签名称
   */
  tag: string;
  /**
   * Attributes settings
   *
   * 属性设置
   */
  attrs: Record<string, string>;
  /**
   * Tag content
   *
   * 标签内容
   */
  content: string;
}
interface MarkdownItStylizeConfig {
  /**
   * Inline token matcher
   *
   * 字符匹配
   */
  matcher: string | RegExp;
  /**
   * Content Replacer
   *
   * 内容替换
   */
  replacer: (options: {
    tag: string;
    content: string;
    attrs: Record<string, string>;
    env?: any;
  }) => MarkdownItStylizeResult | null | undefined;
}
interface MarkdownItStylizeOptions<MarkdownEnv extends Record<string, any> = Record<string, any>> {
  /**
   * Stylize config
   *
   * 格式化配置
   */
  config?: MarkdownItStylizeConfig[];
  /**
   * Local config getter
   *
   * @param env Markdown env object
   * @returns local stylize config
   *
   * 本地配置获取器
   *
   * @param env Markdown 环境对象
   * @returns 本地格式化配置
   */
  localConfigGetter?: (env?: MarkdownEnv) => MarkdownItStylizeConfig[] | null;
}
//#endregion
//#region src/plugin.d.ts
declare const stylize: PluginWithOptions<MarkdownItStylizeOptions>;
//#endregion
export { MarkdownItStylizeConfig, MarkdownItStylizeOptions, MarkdownItStylizeResult, stylize };
//# sourceMappingURL=index.d.ts.map