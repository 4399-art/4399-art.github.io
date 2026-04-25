import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  {
    text: "学习笔记",
    icon: "lightbulb",
    prefix: "/study/",
    children: "structure",
  },
  {
    text: "语雀",
    icon: "book",
    link: "https://www.yuque.com/jinghongyipie-ssx81/xka0ci",
  },
]);