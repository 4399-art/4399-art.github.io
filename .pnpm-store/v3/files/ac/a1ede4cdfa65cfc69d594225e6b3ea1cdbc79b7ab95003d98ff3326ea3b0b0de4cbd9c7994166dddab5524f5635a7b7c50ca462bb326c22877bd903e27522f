import { PluginSimple } from "markdown-it";
import Token from "markdown-it/lib/token.mjs";

//#region src/plugin.d.ts
declare const footnote: PluginSimple;
//#endregion
//#region src/types.d.ts
interface FootNoteToken extends Token {
  meta: {
    id: number;
    subId: number;
    label: string;
  };
}
interface FootNoteEnv extends Record<string, any> {
  docId?: string;
  footnotes: {
    label?: string;
    refs?: Record<string, number>;
    list?: {
      label?: string;
      count?: number;
      content?: string;
      tokens?: Token[] | null;
    }[];
  };
}
//#endregion
export { FootNoteEnv, FootNoteToken, footnote };
//# sourceMappingURL=index.d.ts.map