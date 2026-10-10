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
      "负载均衡",
      "python",
      "sql",
      "瑞吉外卖",
      "尚医通",
      "天机学堂",
      "LangChain-RAG",
      "LangGraph",
      "运维手册",
      "药品经验积累",
      "ansible",
    ],
  },
    {
    text: "AI编程",
    icon: "lightbulb",
    prefix: "/VibeCoding/",
    children: [
      "SmartReservation",
      "Fund",
      "jobhunter",
    ],
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