import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  {
    text: "学习笔记",
    icon: "lightbulb",
    link: "/study/",
  },
  {
    text: "AI编程",
    icon: "wand-sparkles",
    link: "/VibeCoding/SmartReservation.html",
  },
  {
    text: "语雀",
    icon: "book",
    link: "https://www.yuque.com/jinghongyipie-ssx81/xka0ci",
  },
  {
    text: "GitHub",
    icon: "github",
    link: "https://github.com/4399-art?tab=repositories",
  },
]);
