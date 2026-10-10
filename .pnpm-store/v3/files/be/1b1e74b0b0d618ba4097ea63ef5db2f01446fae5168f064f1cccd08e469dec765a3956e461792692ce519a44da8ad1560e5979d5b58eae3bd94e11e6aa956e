import { PageFrontmatter } from "vuepress/shared";

//#region src/shared/author.d.ts
type AuthorName = string;
interface AuthorInfo {
  /**
   * Author name
   *
   * 作者姓名
   */
  name: string;
  /**
   * Author website
   *
   * 作者网站
   */
  url?: string;
  /**
   * Author email
   *
   * 作者 Email
   */
  email?: string;
}
type Author = AuthorName | AuthorName[] | AuthorInfo | AuthorInfo[];
//#endregion
//#region src/shared/nav.d.ts
/**
 * Base nav item, displayed as text
 */
interface NavItemOptions {
  /**
   * Text of item
   *
   * 项目文字
   */
  text: string;
  /**
   * Icon of item
   *
   * 项目图标
   */
  icon?: string;
  /**
   * Aria label of item
   *
   * 项目无障碍标签
   */
  ariaLabel?: string;
}
/**
 * Options for `<AutoLink>`
 */
interface AutoLinkOptions extends NavItemOptions {
  /**
   * Link of item
   *
   * 当前页面链接
   */
  link: string;
  /**
   * Rel of `<a>` tag
   *
   * `<a>` 标签的 `rel` 属性
   */
  rel?: string;
  /**
   * Target of `<a>` tag
   *
   * `<a>` 标签的 `target` 属性
   */
  target?: string;
  /**
   * RegExp mode to be active
   *
   * 匹配激活的正则表达式
   */
  activeMatch?: string;
  /**
   * Whether it's active only when exact match
   *
   * 是否仅在完全匹配时激活
   */
  exact?: boolean;
}
//#endregion
//#region src/shared/sidebar.d.ts
type SidebarLinkOptions = AutoLinkOptions;
interface SidebarGroupOptions extends NavItemOptions {
  /**
   * Link prefix of current group
   *
   * 当前分组的页面前缀
   */
  prefix?: string;
  /**
   * Link of current group
   *
   * 当前分组的链接
   */
  link?: string;
  /**
   * Whether current group is expanded by default
   *
   * 当前分组的链接是否默认展开
   *
   * @default false
   */
  expanded?: boolean;
  /**
   * Whether current group is collapsible
   *
   * 当前分组的链接是否可折叠
   *
   * @default false
   */
  collapsible?: boolean;
  /**
   * Children of current group
   *
   * 当前分组的子项
   */
  children: SidebarItemOptions[];
}
interface SidebarStructureOptions extends NavItemOptions {
  /**
   * Link prefix of current group
   *
   * 当前分组的页面前缀
   */
  prefix?: string;
  /**
   * Link of current group
   *
   * 当前分组的链接
   */
  link?: string;
  /**
   * Whether current group is expanded by default
   *
   * 当前分组的链接是否默认展开
   *
   * @default false
   */
  expanded?: boolean;
  /**
   * Whether current group is collapsible
   *
   * 当前分组的链接是否可折叠
   *
   * @default false
   */
  collapsible?: boolean;
  children: "structure";
}
type SidebarItemOptions = SidebarLinkOptions | SidebarGroupOptions | SidebarStructureOptions | string;
type SidebarArrayOptions = SidebarItemOptions[];
type SidebarObjectOptions = Record<string, SidebarArrayOptions | "structure" | false>;
type SidebarOptions = SidebarArrayOptions | SidebarObjectOptions | "structure" | false;
//#endregion
//#region src/shared/frontmatter/base.d.ts
interface ThemeBasePageFrontmatter extends PageFrontmatter {
  /**
   * Page icon
   *
   * 页面图标
   */
  icon?: string;
  /**
   * Page Author(s)
   *
   * 页面作者
   */
  author?: Author | false;
  /**
   * Writing Date
   *
   * 写作日期
   */
  date?: Date | string;
  /**
   * Page Category(ies)
   *
   * 页面分类
   */
  category?: string | string[];
  categories?: string[];
  /**
   * Page Tag(s)
   *
   * 页面标签
   */
  tag?: string[] | string;
  tags?: string[];
  /**
   * Whether the content is original
   *
   * 是否原创
   */
  isOriginal?: boolean;
  /**
   * Whether the page is an article
   *
   * 页面是否是文章
   */
  article?: boolean;
  /**
   * Page Cover
   *
   * 页面封面
   */
  cover?: string;
  /**
   * Page Banner
   *
   * 页面 Banner 图
   */
  banner?: string;
  /**
   * Footer text
   *
   * 页脚文字
   */
  footer?: string | boolean;
  /**
   * License text
   *
   * 协议文字
   */
  license?: string;
  /**
   * Copyright text
   *
   * 版权文字
   */
  copyright?: string | false;
  /**
   * Whether is home page
   *
   * 是否是主页
   *
   * @default false
   */
  home?: boolean;
  /**
   * Whether enable navbar
   *
   * 是否启用导航栏
   *
   * @default true
   */
  navbar?: boolean;
  /**
   * Sidebar configuration
   *
   * 侧边栏配置
   */
  sidebar?: false | SidebarArrayOptions;
  /**
   * Additional Class for Page container
   *
   * 页面容器的额外类名
   */
  containerClass?: string;
  /**
   * Whether show external link icon
   *
   * 是否启用外部链接图标
   *
   * @default true
   */
  externalLinkIcon?: boolean;
}
//#endregion
//#region src/shared/frontmatter/portfolio.d.ts
interface PortfolioMedia {
  name?: string;
  icon: string;
  url: string;
}
interface ThemePortfolioFrontmatter extends ThemeBasePageFrontmatter {
  portfolio: true;
  home?: boolean;
  name?: string;
  avatar?: string;
  avatarDark?: string;
  avatarStyle?: Record<string, string> | string;
  avatarAlt: string;
  titles?: string[];
  bgImage?: string;
  bgImageDark?: string;
  bgImageStyle?: Record<string, string> | string;
  welcome?: string;
  medias?: PortfolioMedia[];
  /**
   * @default 'portfolio'
   */
  content?: "portfolio" | "doc" | "none";
}
//#endregion
export { SidebarGroupOptions as a, SidebarObjectOptions as c, AutoLinkOptions as d, NavItemOptions as f, AuthorName as h, SidebarArrayOptions as i, SidebarOptions as l, AuthorInfo as m, ThemePortfolioFrontmatter as n, SidebarItemOptions as o, Author as p, ThemeBasePageFrontmatter as r, SidebarLinkOptions as s, PortfolioMedia as t, SidebarStructureOptions as u };
//# sourceMappingURL=portfolio-C0MMdAKq.d.ts.map