import { PluginWithOptions } from "markdown-it";

//#region src/options.d.ts
interface MarkdownItIconOptions<MarkdownItEnv = unknown> {
  render?: (content: string, env: MarkdownItEnv) => string;
}
//#endregion
//#region src/plugin.d.ts
declare const icon: PluginWithOptions<MarkdownItIconOptions>;
//#endregion
//#region src/render.d.ts
/**
 * Default render for icons
 *
 * @param icon icon string
 * @returns rendered icon content
 */
declare const defaultRender: (icon: string) => string;
/**
 * Render for [iconify-icon](https://iconify.design/docs/iconify-icon/)
 *
 * @param icon icon string
 * @returns rendered icon content
 */
declare const iconifyRender: (icon: string) => string;
/**
 * Fontawesome families short aliases
 */
declare const FONTAWESOME_FAMILY_SHORT_ALIAS: string[];
/**
 * Fontawesome styles short aliases
 */
declare const FONTAWESOME_STYLES_SHORT_ALIAS: string[];
/**
 * Fontawesome short aliases
 */
declare const FONTAWESOME_SHORT_ALIAS: string[];
/**
 * Fontawesome families classes
 */
declare const FONTAWESOME_FAMILIES: string[];
/**
 * Fontawesome styles classes
 */
declare const FONTAWESOME_STYLES: string[];
/**
 * All fontawesome families and styles classes
 */
declare const FONTAWESOME_FAMILIES_AND_STYLES: string[];
/**
 * Check if a class is a valid fontawesome short alias
 *
 * @param cls class string
 * @returns whether the class is a fontawesome short alias
 */
declare const isFontawesomeShortAlias: (cls: string) => boolean;
/**
 * Check if a class is a valid fontawesome family
 *
 * @param cls class string
 * @returns whether the class is a fontawesome family
 */
declare const isFontawesomeFamily: (cls: string) => boolean;
/**
 * Ensure every class is prefixed with `fa-` or a valid short alias
 *
 * @param icon icon class string
 * @returns prefixed icon class string
 */
declare const appendFontawesomePrefix: (icon: string) => string;
/**
 * Render for [fontawesome](https://fontawesome.com/) icons
 *
 * @param icon icon string
 * @returns rendered icon content
 */
declare const fontawesomeRender: (icon: string) => string;
/**
 * Render for [iconfont](https://www.iconfont.cn/) icons
 *
 * @param icon icon string
 * @returns rendered icon content
 */
declare const iconfontRender: (icon: string) => string;
//#endregion
//#region src/utils.d.ts
/**
 * Extract size from content
 *
 * @param data input data with content string
 * @returns data with size property and cleaned content string
 */
declare const extractSize: <Data extends {
  content: string;
}>(data: Data & {
  size?: string;
}) => Data & {
  size?: string;
};
/**
 * Extract color from content
 *
 * @param data input data with content string
 * @returns data with color property and cleaned content string
 */
declare const extractColor: <Data extends {
  content: string;
}>(data: Data & {
  color?: string;
}) => Data & {
  color?: string;
};
type AttrsInfo = Record<string, string>;
/**
 * Parse attrs string to object
 *
 * @param data input data with content string
 * @returns data with attrs object and cleaned content string
 */
declare const extractAttrs: <Data extends {
  content: string;
}>(data: Data & {
  attrs?: AttrsInfo;
}) => Data & {
  attrs: AttrsInfo;
};
declare const extractInfo: <Data extends {
  content: string;
}>(data: Data & {
  attrs?: AttrsInfo;
  size?: string;
  color?: string;
}) => Data & {
  attrs: AttrsInfo;
  size?: string;
  color?: string;
};
/**
 * append styles to attrs object
 *
 * @param attrs Attrs object
 * @param styleDefinition new style definition
 * @returns updated attrs object
 */
declare const appendStyle: (attrs: Record<string, string>, styleDefinition: string) => Record<string, string>;
/**
 * Stringify attrs object
 *
 * @param attrs Attrs object
 * @returns stringified attrs
 */
declare const stringifyAttrs: (attrs: Record<string, string>) => string;
//#endregion
export { AttrsInfo, FONTAWESOME_FAMILIES, FONTAWESOME_FAMILIES_AND_STYLES, FONTAWESOME_FAMILY_SHORT_ALIAS, FONTAWESOME_SHORT_ALIAS, FONTAWESOME_STYLES, FONTAWESOME_STYLES_SHORT_ALIAS, MarkdownItIconOptions, appendFontawesomePrefix, appendStyle, defaultRender, extractAttrs, extractColor, extractInfo, extractSize, fontawesomeRender, icon, iconfontRender, iconifyRender, isFontawesomeFamily, isFontawesomeShortAlias, stringifyAttrs };
//# sourceMappingURL=index.d.ts.map