//#region src/node/createConverter.d.ts
interface DeprecatedLoggerOptions {
  options: Record<string, unknown>;
  old: string;
  new: string;
  msg?: string;
  scope?: string;
}
interface DroppedLoggerOptions {
  options: Record<string, unknown>;
  old: string;
  new?: string;
  msg?: string;
  scope?: string;
}
interface Converter {
  deprecatedLogger: (options: DeprecatedLoggerOptions) => void;
  droppedLogger: (options: DroppedLoggerOptions) => void;
}
declare const createConverter: (name: string) => Converter;
//#endregion
export { Converter, DeprecatedLoggerOptions, DroppedLoggerOptions, createConverter };
//# sourceMappingURL=index.d.ts.map