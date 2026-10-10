import { PluginSimple } from "markdown-it";
import { RuleInline } from "markdown-it/lib/parser_inline.mjs";

//#region src/legacy.d.ts
/**
 * @deprecated Recommended to use `imgSize` instead.
 *
 * @param md Markdown-it instance
 */
declare const legacyImgSize: PluginSimple;
//#endregion
//#region src/obsidian.d.ts
declare const obsidianImgSizeRule: RuleInline;
declare const obsidianImgSize: PluginSimple;
//#endregion
//#region src/plugin.d.ts
declare const imgSizeRule: RuleInline;
declare const imgSize: PluginSimple;
//#endregion
//#region src/types.d.ts
interface MarkdownReference {
  href: string;
  title?: string;
}
interface ImgSizeEnv extends Record<string, any> {
  references?: Record<string, MarkdownReference>;
}
//#endregion
export { ImgSizeEnv, MarkdownReference, imgSize, imgSizeRule, legacyImgSize, obsidianImgSize, obsidianImgSizeRule };
//# sourceMappingURL=index.d.ts.map