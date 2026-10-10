import { d as AutoLinkOptions, f as NavItemOptions, l as SidebarOptions, m as AuthorInfo, p as Author, r as ThemeBasePageFrontmatter } from "./portfolio-C0MMdAKq.js";
import { a as BlogLocaleData, c as PaginationLocaleData, i as BlogLocaleConfig, l as PageInfoType, o as BlogLocaleOptions, r as ThemeHomePageFrontmatter } from "./blogHome-BFBvmRyP.js";
import { n as AppearanceLocaleData, t as AppearanceConfig } from "./appearance-BfzS9F_u.js";
import { BlogPluginPageData } from "@vuepress/plugin-blog";
import { GetHeadersOptions } from "@vuepress/helper/shared";
import { SeoPluginPageData } from "@vuepress/plugin-seo";
import { ReadingTimePluginPageData } from "@vuepress/plugin-reading-time";
import { GitPluginPageData } from "@vuepress/plugin-git";
import { CSSProperties } from "vue";
import { LocaleData } from "vuepress/shared";

//#region src/shared/infoGetter.d.ts
declare const getAuthor: (author: Author | false | undefined, canDisable?: boolean) => AuthorInfo[];
declare const getStringArray: (value: string[] | string | undefined, optionName: string) => string[];
declare const getCategory: (category: string[] | string | undefined) => string[];
declare const getTag: (tag: string[] | string | undefined) => string[];
//#endregion
//#region src/shared/options/feature/encrypt.d.ts
interface EncryptLocaleData {
  /**
   * Aria label for encrypt icon
   *
   * 加密图标的无障碍标签
   */
  iconLabel: string;
  /**
   * Password placeholder
   *
   * 密码输入框的默认占位符
   */
  placeholder: string;
  /**
   * Whether remember password
   *
   * 是否记忆密码
   */
  remember: string;
  /**
   * Password error hint
   *
   * 密码错误提示
   */
  errorHint: string;
}
type PasswordOptions = string | string[] | {
  password: string | string[];
  hint: string;
};
/**
 * Encrypt Options
 *
 * 加密选项
 *
 * @kind root
 */
interface EncryptOptions {
  /**
   * Whether encrypt globally
   *
   * 是否全局加密
   *
   * @default false
   */
  global?: boolean;
  /**
   * Admin passwords, which has the highest authority
   *
   * 最高权限密码
   */
  admin?: PasswordOptions;
  /**
   * Encrypt Configuration
   *
   * @example
   *
   * ```json
   * {
   *   // This will encrypt the entire guide directory and both passwords will be available
   *   "/guide/": ["1234", "5678"],
   *   // this will only encrypt /config/page.html
   *   "/config/page.html": {
   *     password: "1234"
   *     hint: "This is a hint"
   *   }
   * }
   * ```
   *
   * 加密配置
   *
   * @example
   *
   * ```json
   * {
   *   // 这会加密整个 guide 目录，并且两个密码都是可用的
   *   "/guide/": ["1234", "5678"],
   *   // 这只会加密 /config/page.html
   *   "/config/page.html": {
   *     password: "1234"
   *     hint: "这是一个提示"
   *   }
   * }
   * ```
   */
  config?: Record<string, PasswordOptions>;
}
interface PasswordConfig {
  tokens: string[];
  hint?: string;
}
/**
 * Encrypt Config
 *
 * 加密配置
 *
 * @kind root
 */
interface EncryptConfig {
  /**
   * Whether encrypt globally
   *
   * 是否全局加密
   *
   * @default false
   */
  global?: boolean;
  /**
   * Admin passwords, which has the highest authority
   *
   * 最高权限密码
   */
  admin?: PasswordConfig;
  /**
   * Encrypt Configuration
   *
   * 加密配置
   */
  config?: Record<string, PasswordConfig>;
}
//#endregion
//#region src/shared/options/feature/options.d.ts
interface FeatureLocaleData {
  /**
   * Blog related i18n config
   *
   * 博客相关多语言配置
   */
  blogLocales: BlogLocaleData;
  /**
   * Pagination related i18n config
   *
   * 分页相关多语言配置
   */
  paginationLocales: PaginationLocaleData;
  /**
   * Encrypt related i18n config
   *
   * 加密相关多语言配置
   */
  encryptLocales: EncryptLocaleData;
}
interface FeatureLocaleOptions {
  /**
   * Blog feature options
   *
   * 博客功能配置
   */
  blog?: BlogLocaleOptions;
}
interface FeatureLocaleConfig {
  blog?: BlogLocaleConfig;
}
/**
 * @kind root
 */
interface FeatureOptions {
  /**
   * Encrypt config
   *
   * 加密配置
   */
  encrypt?: EncryptOptions;
  /**
   * Whether enable hotReload for features that requires app to restart
   *
   * @description These features includes blog support and structure sidebar feature
   *
   * 是否为需要重启整个 app 的功能启用热更新
   *
   * @description 这些功能包括博客支持和结构侧边栏功能
   *
   * @default app.env.isDebug
   */
  hotReload?: boolean;
}
interface FeatureConfig extends FeatureLocaleConfig {
  /**
   * Encrypt config
   *
   * 加密配置
   */
  encrypt: EncryptConfig;
}
//#endregion
//#region src/shared/options/info.d.ts
interface InfoOptions {
  /**
   * Site favicon
   *
   * 站点图标
   */
  favicon?: string;
  /**
   * Domain which to be deployed to
   *
   * 网站部署域名
   */
  hostname?: string;
  /**
   * Global default author
   *
   * 全局默认作者
   */
  author?: Author;
  /**
   * Global default license
   *
   * 全局默认协议
   */
  license?: string;
  /**
   * Extra i18n sites
   *
   * @description key is the name of language, and value is the path of site, `:route` will be replaced by current route
   *
   * 额外的多语言站点
   *
   * @description 键是语言的名称，值是站点的路径，`:route` 会被替换为当前路由
   */
  extraLocales?: Record<string, string>;
}
type InfoConfig = Omit<InfoOptions, "favicon" | "hostname">;
//#endregion
//#region src/shared/options/helpers.d.ts
type LocaleDataToOption<LocaleData> = { [Key in keyof LocaleData]?: Partial<LocaleData[Key]> };
//#endregion
//#region src/shared/options/layout/footer.d.ts
/**
 * 页脚选项
 *
 * Footer options
 */
interface FooterLocaleOptions {
  /**
   * The default content for the footer, supports HTMLString.
   *
   * 页脚的默认内容，支持 HTMLString
   */
  footer?: string;
  /**
   * The default copyright info, set it to `false` to disable it by default.
   *
   * 默认的版权信息，设置为 `false` 来默认禁用它
   */
  copyright?: string | false;
  /**
   * Whether to display footer by default
   *
   * 是否默认显示页脚
   *
   * @default false
   */
  displayFooter?: boolean;
}
//#endregion
//#region src/shared/options/layout/info.d.ts
interface DocsRepoLocaleOptions {
  /**
   * Pattern of edit link, we provide built-in support for GitHub, Gitlab, Gitee, Bitbucket
   *
   * 编辑链接的匹配，我们已经为 GitHub、Gitlab、Gitee 和 Bitbucket 提供了内置支持
   *
   * @example ":repo/edit/:branch/:path"
   */
  editLinkPattern?: string;
  /**
   * The repo of your docs
   *
   * 文档仓库
   *
   * @default themeConfig.repo
   */
  docsRepo?: string;
  /**
   * The branch of your docs
   *
   * 文档所在分支
   *
   * @default "main"
   */
  docsBranch?: string;
  /**
   * Docs dir location in repo
   *
   * 文档在仓库中的目录
   *
   * @default ""
   */
  docsDir?: string;
}
//#endregion
//#region src/shared/options/layout/meta.d.ts
interface MetaLocateData {
  /**
   * Author label text
   *
   * 作者文字
   */
  author: string;
  /**
   * Writing date label text
   *
   * 写作日期文字
   */
  date: string;
  /**
   * Label text marked as original
   *
   * 标记原创的文字
   */
  origin: string;
  /**
   * Page views label text
   *
   * 访问量文字
   */
  views: string;
  /**
   * Tag label text
   *
   * 标签文字
   */
  tag: string;
  /**
   * Category label text
   *
   * 分类文字
   */
  category: string;
  /**
   * Expect reading time label text
   *
   * 期望阅读时间文字
   */
  readingTime: string;
  /**
   * Words label Text
   *
   * 文章字数
   */
  words: string;
  /**
   * Table of contents
   *
   * 此页内容
   */
  toc: string;
  /**
   * Previous link
   *
   * 上一页
   */
  prev: string;
  /**
   * Next link
   *
   * 下一页
   */
  next: string;
  /**
   * Contributors text
   *
   * 贡献者
   */
  contributors: string;
  /**
   * Edit link text
   *
   * 编辑此页
   */
  editLink: string;
  /**
   * Print button
   *
   * 打印按钮
   */
  print: string;
}
interface MetaLocaleOptions {
  /**
   * Whether to show "Last Updated" or not
   *
   * 是否显示页面最后更新时间
   *
   * @default true
   */
  lastUpdated?: boolean;
  /**
   * Whether to show "changelog" or not
   *
   * 是否显示页面变更历史
   *
   * @default false
   */
  changelog?: boolean;
  /**
   * Whether to show "Contributors" or not
   *
   * @description `true` means `meta`
   *
   * 是否显示页面贡献者
   *
   * @description `true` 表示 `meta`
   *
   * @default "meta"
   */
  contributors?: "content" | "meta" | boolean;
  /**
   * Whether to show "Edit this page" or not
   *
   * 是否展示编辑此页链接
   *
   * @default true
   */
  editLink?: boolean;
}
//#endregion
//#region src/shared/navbar.d.ts
/**
 * Base nav group, has nav items children
 */
interface NavGroup<Child> extends NavItemOptions {
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
   * Children of current group
   *
   * 当前分组的子项
   */
  children: Child[];
}
type NavbarLinkOptions = AutoLinkOptions | string;
type NavbarGroupOptions = NavGroup<NavbarLinkOptions | NavGroup<NavbarLinkOptions>>;
type NavbarOptions = (NavbarLinkOptions | NavbarGroupOptions)[];
//#endregion
//#region src/shared/options/layout/navbar.d.ts
interface NavbarLocaleData {
  /**
   * Aria label of of the language selection dropdown
   *
   * 语言下拉列表的无障碍标签
   */
  selectLangAriaLabel: string;
  /**
   * Language name of current locale
   *
   * 当前语言的名称
   */
  langName: string;
}
/**
 * Navbar component
 *
 * 导航栏组件
 */
type NavbarComponent = "Brand" | "Links" | "Language" | "Search" | "Outlook" | "Repo";
/**
 * Navbar layout options
 *
 * 导航栏布局选项
 */
interface NavbarLayoutOptions {
  start?: string[];
  center?: string[];
  end?: string[];
}
interface NavbarLocaleOptions {
  /**
   * Navbar config
   *
   * @description Set to `false` to disable navbar in current locale
   *
   * @see https://theme-hope.vuejs.press/guide/layout/navbar.html
   *
   * 导航栏配置
   *
   * @description 设置 `false` 以在当前语言中禁用导航栏
   *
   * @see https://theme-hope.vuejs.press/v2/zh/guide/layout/navbar.html
   */
  navbar?: NavbarOptions | false;
  /**
   * Navbar logo
   *
   * @description should be absolute path relative to `.vuepress/public` folder
   *
   * 导航栏图标
   *
   * @description 应为基于 `.vuepress/public` 文件夹的绝对路径
   */
  logo?: string;
  /**
   * Navbar logo under darkmode
   *
   * @description should be absolute path relative to `.vuepress/public` folder
   *
   * 夜间模式下导航栏图标
   *
   * @description 应为基于 `.vuepress/public` 文件夹的绝对路径
   */
  logoDark?: string;
  /**
   * Navbar title
   *
   * 导航栏标题
   *
   * @default $siteLocale.title
   */
  navbarTitle?: string;
  /**
   * Repository link
   *
   * 仓库链接
   */
  repo?: string;
  /**
   * Whether display repo link in navbar.
   *
   * 是否在导航栏显示仓库链接。
   *
   * @default true
   */
  repoDisplay?: boolean;
  /**
   * Repository aria label of navbar
   *
   * 导航栏仓库按钮的无障碍标签
   */
  repoLabel?: string;
  /**
   * Whether to hide navbar when scrolling down
   *
   * 是否在向下滚动时自动隐藏导航栏
   *
   * @default "mobile"
   */
  navbarAutoHide?: "always" | "mobile" | "none";
  /**
   * Navbar layout config
   *
   * 导航栏布局设置
   *
   * @default { start: ["Brand"], center: ["Links"], end: ["Language", "Repo", "Outlook", "Search"] }
   */
  navbarLayout?: NavbarLayoutOptions;
  /**
   * Whether hide site title on mobile
   *
   * 是否在移动视图下隐藏站点名称
   *
   * @default true
   */
  hideSiteNameOnMobile?: boolean;
}
//#endregion
//#region src/shared/options/layout/route.d.ts
interface RouteLocaleData {
  /**
   * Skip to main content
   */
  skipToContent: string;
  /**
   * 404 page title
   *
   * 404 页面的标题
   */
  notFoundTitle: string;
  /**
   * 404 page msgs
   *
   * 404 页面的提示信息
   */
  notFoundMsg: string[];
  /**
   * Back to homepage
   *
   * 返回主页
   */
  home: string;
  /**
   * Back to last page
   *
   * 返回上一页
   */
  back: string;
}
//#endregion
//#region src/shared/frontmatter/normal.d.ts
interface StructureSidebarDirOptions {
  /**
   * Dir title
   *
   * @default title of README.md
   *
   * 目录标题
   *
   * @default README.md 标题
   */
  text?: string;
  /**
   * Dir icon
   *
   * @default icon of README.md
   *
   * 目录图标
   *
   * @default README.md 图标
   */
  icon?: string;
  /**
   * Whether dir is expanded by default
   *
   * 当前目录是否默认展开
   *
   * @default false
   */
  expanded?: boolean;
  /**
   * Whether Dir is collapsible
   *
   * 目录是否可折叠
   *
   * @default true
   */
  collapsible?: boolean;
  /**
   * Whether Dir is clickable
   *
   * @description Will set group link to link of README.md
   *
   * 目录是否可点击
   *
   * @description 将会将目录分组的链接设置为 README.md 对应的链接
   *
   * @default false
   */
  link?: boolean;
  /**
   * Whether index current dir
   *
   * 是否索引此目录
   *
   * @default true
   */
  index?: boolean;
  /**
   * Dir order in sidebar
   *
   * 目录在侧边栏中的顺序
   *
   * @default 0
   */
  order?: number;
}
interface ThemeNormalPageFrontmatter extends ThemeBasePageFrontmatter {
  /**
   * Whether is homepage
   *
   * 是否是主页
   */
  home?: false;
  /**
   * Whether index current page
   *
   * 是否索引此页面
   *
   * @default true
   */
  index?: boolean;
  /**
   * Page order in sidebar
   *
   * 页面在侧边栏的顺序
   *
   * @default 0
   */
  order?: number;
  /**
   * Dir config
   *
   * @description Only available at README.md
   *
   * 目录配置
   *
   * @description 仅在 README.md 中可用
   */
  dir?: StructureSidebarDirOptions;
  /**
   * A short title used in navbar, sidebar and breadcrumb
   *
   * 用于导航栏，侧边栏和路径导航的短标题
   */
  shortTitle?: string;
  /**
   * Whether display lastUpdated time
   *
   * 是否显示最后更新事件
   */
  lastUpdated?: boolean;
  /**
   * Whether display changelog
   *
   * 是否显示变更历史
   */
  changelog?: boolean;
  /**
   * Whether display contributors
   *
   * 是否显示贡献者
   */
  contributors?: boolean | string[];
  /**
   * Whether show Edit link
   *
   * 是否显示编辑此页链接
   */
  editLink?: boolean;
  /**
   * Previous page link
   *
   * 上一页链接
   */
  prev?: string | AutoLinkOptions;
  /**
   * Next page link
   *
   * 下一页链接
   */
  next?: string | AutoLinkOptions;
  /**
   * Whether show toc list in desktop mode
   *
   * 是否在桌面模式下展示标题列表
   */
  toc?: GetHeadersOptions | boolean;
  /**
   * PageInfo items
   *
   * 页面信息项
   *
   * @default ["Author", "Visitor", "Time", "Category", "Tag", "ReadTime"]
   */
  pageInfo?: PageInfoType[] | false;
  /**
   * Whether enable breadcrumb
   *
   * 是否启用路径导航
   */
  breadcrumb?: boolean;
  /**
   * Whether enable breadcrumb icon
   *
   * 是否启用路径导航图标
   */
  breadcrumbIcon?: boolean;
  /**
   * Whether exclude current page in breadcrumb
   *
   * 是否在路径导航中排除
   */
  breadcrumbExclude?: boolean;
  /**
   *
   * Whether enable pageviews
   *
   * @description Only available when using artalk or waline comment service
   *
   * 是否启用访问量
   *
   * @description 仅在使用 Artalk 或 Waline 评论服务时有效
   *
   * @default true
   */
  pageview?: boolean;
  /**
   * Whether this page is an article
   */
  article?: boolean;
  /**
   * Whether the article be sticky in list
   *
   * If a number fill in, greater number will appear in front
   *
   * 是否置顶，如果填入数字，更大值会出现在前面
   */
  sticky?: boolean | number;
  /**
   * Whether the article be stared
   *
   * If a number fill in, greater number will appear in front
   *
   * 是否标为星标，如果填入数字，更大值会出现在前面
   */
  star?: boolean | number;
  /**
   * Page excerpt
   *
   * 页面的摘要
   */
  excerpt?: string;
}
//#endregion
//#region src/shared/frontmatter/projectHome.d.ts
interface ThemeProjectHomeActionOptions {
  /**
   * Action name
   *
   * 操作名称
   */
  text: string;
  /**
   * Action link
   *
   * 操作链接
   */
  link: string;
  /**
   * Type of action
   *
   * 操作类型
   *
   * @default "default"
   */
  type?: "primary" | "default";
  /**
   * Action icon
   *
   * 操作图标
   */
  icon?: string;
}
interface ThemeProjectHomeHighlightItem {
  /**
   * Item name, supports HTML string
   *
   * 项目名称，支持 HTML 字符串
   */
  title: string;
  /**
   * Item description, supports HTML string
   *
   * 项目描述，支持 HTML 字符串
   */
  details?: string;
  /**
   * Item icon
   *
   * @description image link or icon fontClass are supported
   *
   * 项目图标
   *
   * @description 支持图片链接或者图标字体类
   */
  icon?: string;
  /**
   * Item link
   *
   * 项目链接
   */
  link?: string;
}
type ThemeProjectHomeFeatureItem = ThemeProjectHomeHighlightItem;
interface ThemeProjectHomeHighlightOptions {
  /**
   * Highlight section header, supports HTML string
   *
   * 亮点标题，支持 HTML 字符串
   */
  header: string;
  /**
   * Highlight section description, supports HTML string
   *
   * 亮点描述，支持 HTML 字符串
   */
  description?: string;
  /**
   * Text color
   *
   * 文字颜色
   */
  color?: string;
  /**
   * Highlight section image
   *
   * 亮点图像
   */
  image?: string;
  /**
   * Highlight section image used in darkmode
   *
   * 夜间模式使用的亮点图片
   *
   * @default image
   */
  imageDark?: string;
  /**
   * Highlight Background image
   *
   * 亮点背景图
   */
  bgImage?: string;
  /**
   * Highlight Background image used in darkmode
   *
   * 夜间模式使用的亮点背景图
   *
   * @default bgImage
   */
  bgImageDark?: string;
  /**
   * Highlight Background image style
   *
   * 亮点背景图样式
   */
  bgImageStyle?: CSSProperties | string;
  /**
   * Highlight section list type
   *
   * 亮点列表类型
   *
   * @default un-order
   */
  type?: "order" | "un-order" | "no-order";
  /**
   * Highlights
   *
   * 亮点
   */
  highlights?: ThemeProjectHomeHighlightItem[];
}
interface ThemeProjectHomeFeatureOptions {
  /**
   * Feature header
   *
   * 功能标题
   */
  header?: string;
  /**
   * Feature section description, supports HTML string
   *
   * 功能描述，支持 HTML 字符串
   */
  description?: string;
  /**
   * Text color
   *
   * 文字颜色
   */
  color?: string;
  /**
   * Feature section image
   *
   * 功能图像
   */
  image?: string;
  /**
   * Feature section image used in darkmode
   *
   * 夜间模式使用的功能图片
   *
   * @default image
   */
  imageDark?: string;
  /**
   * Feature Background image
   *
   * 功能背景图
   */
  bgImage?: string;
  /**
   * Feature Background image used in darkmode
   *
   * 夜间模式使用的功能背景图
   *
   * @default bgImage
   */
  bgImageDark?: string;
  /**
   * Feature Background image style
   *
   * 功能背景图样式
   */
  bgImageStyle?: CSSProperties | string;
  /**
   * Features
   *
   * 功能
   */
  features: ThemeProjectHomeFeatureItem[];
}
interface ThemeProjectHomePageFrontmatter extends ThemeHomePageFrontmatter {
  actions?: ThemeProjectHomeActionOptions[];
  features?: ThemeProjectHomeFeatureItem[];
  highlights?: (ThemeProjectHomeFeatureOptions | ThemeProjectHomeHighlightOptions)[];
}
//#endregion
//#region src/shared/page.d.ts
interface ThemePageData extends BlogPluginPageData, Partial<GitPluginPageData>, Partial<ReadingTimePluginPageData>, Partial<SeoPluginPageData> {
  filePathRelative: string | null;
}
//#endregion
//#region src/shared/options/layout/sidebar.d.ts
interface SidebarFileInfo {
  type: "file";
  filename: string;
  title: string;
  order: number | null;
  path?: string | null;
  frontmatter: ThemeNormalPageFrontmatter;
  pageData: ThemePageData;
}
interface SidebarDirInfo {
  type: "dir";
  dirname: string;
  children: SidebarInfo[];
  title: string;
  order: number | null;
  groupInfo: {
    icon?: string;
    expanded?: boolean;
    collapsible?: boolean;
    link?: string;
  };
  frontmatter: ThemeNormalPageFrontmatter | null;
  pageData: ThemePageData | null;
}
type SidebarInfo = SidebarFileInfo | SidebarDirInfo;
type SidebarSorterKeyword = "readme" | "order" | "date" | "date-desc" | "filename" | "title";
type SidebarSorterFunction = (infoA: SidebarInfo, infoB: SidebarInfo) => number;
type SidebarSorter = SidebarSorterFunction | SidebarSorterKeyword | (SidebarSorterKeyword | SidebarSorterFunction)[];
interface SidebarLocaleOptions {
  /**
   * Sidebar config
   *
   * @description Set to `false` to disable sidebar in current locale
   * @see https://theme-hope.vuejs.press/guide/layout/sidebar.html
   *
   * 侧边栏配置
   *
   * @description 设置为 `false` 以在当前语言中禁用侧边栏
   * @see https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html
   */
  sidebar?: SidebarOptions;
}
//#endregion
//#region src/shared/options/layout/options.d.ts
interface LayoutLocaleData {
  /**
   * Navbar related i18n config
   */
  navbarLocales: NavbarLocaleData;
  /**
   * Meta related i18n config
   */
  metaLocales: MetaLocateData;
  /**
   * Router related i18n config
   */
  routerLocales: RouteLocaleData;
}
interface DeprecatedLayoutOptions {
  /**
   * @deprecated Use `toc.levels` instead
   */
  headerDepth?: number;
}
interface LayoutLocaleOptions extends NavbarLocaleOptions, SidebarLocaleOptions, DocsRepoLocaleOptions, MetaLocaleOptions, FooterLocaleOptions {
  /**
   * Home path of current locale
   *
   * @description Used as the link of back-to-home and navbar logo
   *
   * 当前语言的主页路径
   *
   * @description 用于导航栏图标和返回主页按钮的链接
   */
  home?: string;
  /**
   * Whether enable breadcrumb globally
   *
   * 是否全局启用路径导航
   *
   * @default true
   */
  breadcrumb?: boolean;
  /**
   * Whether display icon in breadcrumb
   *
   * 是否在路径导航显示图标
   *
   * @default true
   */
  breadcrumbIcon?: boolean;
  /**
   * Whether display icon besides page title
   *
   * 是否在页面标题旁显示图标
   *
   * @default true
   */
  titleIcon?: boolean;
  /**
   * Article Info display configuration
   *
   * @see https://theme-hope.vuejs.press/guide/feature/page-info.html
   *
   * 文章信息配置
   *
   * @see https://theme-hope.vuejs.press/zh/guide/feature/page-info.html
   *
   * @default ["Author", "Original", "Date", "PageView", "ReadingTime", "Category", "Tag"]
   */
  pageInfo?: PageInfoType[] | false;
  /**
   * Whether show toc list in desktop mode
   *
   * An object with the following properties can be set:
   *
   * - `selector`: The selector of the headers.
   * - `ignore`: Ignore specific elements within the header.
   * - `levels`: The levels of the headers.
   *
   * 是否在桌面模式下展示标题列表
   *
   * 可以设置一个对象，包含以下属性：
   *
   * - `selector`: 选择器
   * - `ignore`: 忽略特定元素
   * - `levels`: 标题的级别
   *
   * @default true
   */
  toc?: GetHeadersOptions | boolean;
  /**
   * Whether rtl layout should be used
   *
   * 是否使用 rtl 布局
   *
   * @default false
   */
  rtl?: boolean;
  /**
   * Whether display nextLink
   *
   * 是否显示 下一篇 链接
   *
   * @default true
   */
  nextLink?: boolean;
  /**
   * Whether display prevLink
   *
   * 是否显示 上一篇 链接
   *
   * @default true
   */
  prevLink?: boolean;
}
type LayoutLocaleConfig = LayoutLocaleOptions;
/**
 * @kind root
 */
interface LayoutOptions {
  /**
   * Sorter of structure sidebar
   *
   * 结构化侧边栏排序器
   *
   * @default ["readme", "order", "title", "filename"]
   */
  sidebarSorter?: SidebarSorter;
}
//#endregion
//#region src/shared/options/locales.d.ts
interface ThemeLocaleData extends AppearanceLocaleData, FeatureLocaleData, LayoutLocaleData {
  /**
   * Current lang code
   */
  lang: string;
}
interface ThemeLocaleOptions extends LocaleData, LocaleDataToOption<AppearanceLocaleData>, LocaleDataToOption<FeatureLocaleData>, FeatureLocaleOptions, LocaleDataToOption<LayoutLocaleData>, LayoutLocaleOptions {
  /**
   * Global default author
   *
   * 全局默认作者
   */
  author?: Author;
}
interface ThemeLocaleConfig extends LocaleData, ThemeLocaleData, FeatureLocaleConfig, LayoutLocaleConfig {
  /**
   * Global default author
   *
   * 全局默认作者
   */
  author?: Author;
}
//#endregion
//#region src/shared/data.d.ts
interface ThemeData extends AppearanceConfig, FeatureConfig, InfoConfig {
  locales: Record<string, ThemeLocaleConfig>;
}
//#endregion
export { getStringArray as $, NavbarLocaleOptions as A, InfoOptions as B, ThemeProjectHomePageFrontmatter as C, NavbarComponent as D, RouteLocaleData as E, MetaLocaleOptions as F, FeatureOptions as G, FeatureLocaleConfig as H, MetaLocateData as I, EncryptOptions as J, EncryptConfig as K, DocsRepoLocaleOptions as L, NavbarGroupOptions as M, NavbarLinkOptions as N, NavbarLayoutOptions as O, NavbarOptions as P, getCategory as Q, FooterLocaleOptions as R, ThemeProjectHomeHighlightOptions as S, ThemeNormalPageFrontmatter as T, FeatureLocaleData as U, FeatureConfig as V, FeatureLocaleOptions as W, PasswordOptions as X, PasswordConfig as Y, getAuthor as Z, ThemePageData as _, DeprecatedLayoutOptions as a, ThemeProjectHomeFeatureOptions as b, LayoutLocaleOptions as c, SidebarFileInfo as d, getTag as et, SidebarInfo as f, SidebarSorterKeyword as g, SidebarSorterFunction as h, ThemeLocaleOptions as i, NavGroup as j, NavbarLocaleData as k, LayoutOptions as l, SidebarSorter as m, ThemeLocaleConfig as n, LayoutLocaleConfig as o, SidebarLocaleOptions as p, EncryptLocaleData as q, ThemeLocaleData as r, LayoutLocaleData as s, ThemeData as t, SidebarDirInfo as u, ThemeProjectHomeActionOptions as v, StructureSidebarDirOptions as w, ThemeProjectHomeHighlightItem as x, ThemeProjectHomeFeatureItem as y, InfoConfig as z };
//# sourceMappingURL=data-BYbUV5Xn.d.ts.map