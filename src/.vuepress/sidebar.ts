import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "/",
  "/portfolio",
    {
      text: "学习笔记",
      icon: "book",
      prefix: "study/",
      children: "structure",
    },
    {
      text: "语雀",
      icon: "person-chalkboard",
      link: "https://www.yuque.com/jinghongyipie-ssx81/xka0ci",
    },
  ],
});
