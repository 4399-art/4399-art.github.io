import { a as CategoryMap, c as TypesMap, d as BlogPluginFrontmatter, f as BlogPluginTypeFrontmatter, i as CategoryLocaleMap, l as BlogCategoryFrontmatterOptions, n as CategoryConfig, o as TypeLocaleConfig, p as BlogTypeFrontmatterOptions, r as CategoryLocaleConfig, s as TypeMap, t as CategoriesMap, u as BlogPluginCategoryFrontmatter } from "../internal-DLhVnfed.js";
import { ComputedRef } from "vue";

//#region src/client/typings.d.ts
interface Article<T extends Record<string, unknown> = Record<string, unknown>> {
  /**
   * Article path
   *
   * 文章路径
   */
  path: string;
  /**
   * Article info
   *
   * 文章信息
   */
  info: T;
}
interface BlogCategoryData<T extends Record<string, unknown> = Record<string, unknown>> {
  /**
   * Category path
   *
   * 分类路径
   */
  path: string;
  /**
   * Only available when current route matches an item path
   *
   * 仅当当前路径和某个子项目匹配时可用
   */
  currentItems?: Article<T>[];
  /**
   * Category map
   *
   * 分类映射
   */
  map: Record<
  /**
   * Unique key under current category
   *
   * 当前分类下全局唯一的 key
   */
  string, {
    /**
     * Category path of the key
     *
     * 对应键值的分类路径
     */
    path: string;
    /**
     * Category items of the key
     *
     * 对应键值的项目
     */
    items: Article<T>[];
  }>;
}
interface BlogTypeData<T extends Record<string, unknown> = Record<string, unknown>> {
  /**
   * Type path
   *
   * 类别路径
   */
  path: string;
  /**
   * Items under current type
   *
   * 当前类别下的项目
   */
  items: Article<T>[];
}
//#endregion
//#region src/client/composables/useBlogCategory.d.ts
declare const blogCategoryMap: any;
/**
 * Use blog category data
 *
 * 使用博客分类数据
 *
 * @description Get blog category data for current page or specified key
 *
 * 获取当前页面或指定键的博客分类数据
 *
 * @param key - Category key to get data for
 *
 * key - 要获取数据的分类键
 *
 * @returns Computed blog category data
 *
 * 返回计算的博客分类数据
 */
declare const useBlogCategory: <T extends Record<string, unknown> = Record<string, unknown>>(key?: string) => ComputedRef<BlogCategoryData<T>>;
//#endregion
//#region src/client/composables/useBlogType.d.ts
declare const blogTypeMap: any;
/**
 * Use blog type data
 *
 * 使用博客类型数据
 *
 * @description Get blog type data for current page or specified key
 *
 * 获取当前页面或指定键的博客类型数据
 *
 * @param key - Type key to get data for
 *
 * key - 要获取数据的类型键
 *
 * @returns Computed blog type data
 *
 * 返回计算的博客类型数据
 */
declare const useBlogType: <T extends Record<string, unknown> = Record<string, unknown>>(key?: string) => ComputedRef<BlogTypeData<T>>;
//#endregion
export { Article, BlogCategoryData, BlogCategoryFrontmatterOptions, BlogPluginCategoryFrontmatter, BlogPluginFrontmatter, BlogPluginTypeFrontmatter, BlogTypeData, BlogTypeFrontmatterOptions, CategoriesMap, CategoryConfig, CategoryLocaleConfig, CategoryLocaleMap, CategoryMap, TypeLocaleConfig, TypeMap, TypesMap, blogCategoryMap, blogTypeMap, useBlogCategory, useBlogType };
//# sourceMappingURL=index.d.ts.map