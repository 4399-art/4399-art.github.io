import { App, Component } from "vue";

//#region src/client/helpers/useCatalogInfoGetter.d.ts
interface CatalogInfo {
  /**
   * Catalog title
   *
   * 目录标题
   */
  title: string;
  /**
   * Catalog order
   *
   * 目录顺序
   */
  order?: number;
  /**
   * Catalog content
   *
   * 目录内容
   */
  content?: Component;
}
type CatalogInfoGetter = (meta: Record<string, unknown>) => CatalogInfo | null;
/**
 * Define catalog info getter
 *
 * 定义目录信息获取器
 *
 * @param getter catalog info getter function
 */
declare const defineCatalogInfoGetter: (getter: CatalogInfoGetter) => void;
/**
 * Use catalog info getter
 *
 * 使用目录信息获取器
 *
 * @returns Catalog info getter function / 目录信息获取器函数
 */
declare const useCatalogInfoGetter: () => CatalogInfoGetter;
/**
 * Inject catalog info getter
 *
 * 注入目录信息获取器
 *
 * @param app Vue app instance
 */
declare const injectCatalogInfoGetter: (app: App) => void;
//#endregion
export { CatalogInfo, CatalogInfoGetter, defineCatalogInfoGetter, injectCatalogInfoGetter, useCatalogInfoGetter };
//# sourceMappingURL=index.d.ts.map