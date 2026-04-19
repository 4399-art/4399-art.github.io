import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  {
    text: "学习笔记",
    icon: "lightbulb",
    prefix: "/study/",
    children: [
      "cicd",
      "Docker",
      "K8S",
      "linux",
      "nginx",
      "python",
      "sql",
      "瑞吉外卖",
      "尚医通",
      "天机学堂",
      "药品经验积累",
    ],
  },
  {
    text: "语雀",
    icon: "book",
    link: "https://www.yuque.com/jinghongyipie-ssx81/xka0ci",
  },
]);