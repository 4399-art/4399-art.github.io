import { RenderRule } from "markdown-it/lib/renderer.mjs";
import Token from "markdown-it/lib/token.mjs";
import { PluginWithOptions } from "markdown-it";

//#region src/options.d.ts
interface MarkdownItUMLOptions {
  /**
   * UML name
   *
   * UML 名称
   */
  name: string;
  /**
   * Opening marker
   *
   * 开始标记
   */
  open: string;
  /**
   *  Closing marker
   *
   * 结束标记
   */
  close: string;
  /**
   * Render function
   *
   * 渲染函数
   */
  render: RenderRule;
}
declare const defaultRender: (tokens: Token[], index: number) => string;
//#endregion
//#region src/plugin.d.ts
declare const uml: PluginWithOptions<MarkdownItUMLOptions>;
//#endregion
export { MarkdownItUMLOptions, defaultRender, uml };
//# sourceMappingURL=index.d.ts.map