import { a as SidebarGroupOptions, m as AuthorInfo, s as SidebarLinkOptions, t as PortfolioMedia } from "./portfolio-C0MMdAKq.js";
import { PropType, VNode } from "vue";
import { HeaderItem } from "@vuepress/helper/client";
import { ReadingTime, ReadingTimeLocale } from "@vuepress/plugin-reading-time/client";
//#region src/client/utils/info/typings.d.ts
interface PageCategory {
  /**
   * Category name
   *
   * 分类名称
   */
  name: string;
  /**
   * Category path
   *
   * 分类路径
   */
  path?: string;
}
type PageTag = PageCategory;
//#endregion
//#region src/client/components/info/PageInfo.d.ts
interface PageInfoProps {
  /**
   * Authors of article
   *
   * 文章作者
   */
  author?: AuthorInfo[];
  /**
   * Categories of article
   *
   * 文章分类
   */
  category?: PageCategory[];
  /**
   * Tags of article
   *
   * 文章标签
   */
  tag?: PageTag[];
  /**
   * Writing Date
   *
   * 写作日期
   */
  date?: Date | null;
  /**
   * Whether the article is original
   *
   * 文章是否原创
   */
  isOriginal?: boolean;
  /**
   * Whether enable pageview
   *
   * If the value is a string, it will use as search id
   *
   * 是否启用访问量
   *
   * 如果值为字符串，会用做查询 id
   */
  pageview?: string | boolean;
  /**
   * ReadingTime info
   *
   * 阅读时间
   */
  readingTime?: ReadingTime | null;
  /**
   * ReadingTime Locales
   *
   * 阅读时间多语言
   */
  readingTimeLocale?: ReadingTimeLocale | null;
}
//#endregion
//#region src/client/typings/sidebar.d.ts
type SidebarLinkItem = SidebarLinkOptions;
interface SidebarGroupItem extends SidebarGroupOptions {
  prefix: string;
  children: SidebarItem[];
}
type SidebarItem = SidebarLinkItem | SidebarGroupItem;
//#endregion
//#region src/client/typings/slots.d.ts
type SidebarItemsSlotData = SidebarItem[];
type TocSlotData = HeaderItem[];
type Style = string | Record<string, string>;
interface HeroInfoSlotData {
  text: string | null;
  tagline: string | null;
  isFullScreen: boolean;
  style: Style | null;
}
interface HeroLogoSlotData {
  image: string | null;
  imageDark: string | null;
  alt: string;
  style: Style | null;
}
interface HeroBackgroundSlotData {
  image: string | null;
  imageDark: string | null;
  style: Style | null;
}
interface PortfolioAvatarSlotData {
  avatar: string | null;
  avatarDark: string | null;
  alt: string;
  style: Style | null;
}
interface PortfolioInfoSlotData {
  name: string;
  welcome: string;
  title: string;
  titles: string[];
  medias: PortfolioMedia[] | null;
}
interface PortfolioBackgroundSlotData {
  image: string | null;
  imageDark: string | null;
  style: Style | null;
}
interface ArticleTitleSlotData {
  title: string;
  isEncrypted: boolean;
  type: string;
}
interface ArticleCoverSlotData {
  cover: string | null;
}
interface ArticleExcerptSlotData {
  excerpt: string | null;
}
type ArticleInfoSlotData = PageInfoProps;
interface BloggerInfoSlotData {
  name: string;
  avatar: string | null;
  description: string | null;
}
//#endregion
export { SidebarLinkItem as _, BloggerInfoSlotData as a, HeroLogoSlotData as c, PortfolioInfoSlotData as d, SidebarItemsSlotData as f, SidebarItem as g, SidebarGroupItem as h, ArticleTitleSlotData as i, PortfolioAvatarSlotData as l, TocSlotData as m, ArticleExcerptSlotData as n, HeroBackgroundSlotData as o, Style as p, ArticleInfoSlotData as r, HeroInfoSlotData as s, ArticleCoverSlotData as t, PortfolioBackgroundSlotData as u, PageInfoProps as v };
//# sourceMappingURL=slots-ww2qJ45A.d.ts.map