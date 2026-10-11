import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/study/": [
    {
      text: "学习笔记",
      icon: "lightbulb",
      children: [
        {
          text: "笔记总览",
          icon: "table-list",
          link: "/study/",
        },
        {
          text: "运维基础",
          icon: "server",
          collapsible: true,
          expanded: true,
          children: [
            { text: "Linux", link: "linux" },
            { text: "负载均衡", link: "负载均衡" },
            { text: "运维手册", link: "运维手册" },
          ],
        },
        {
          text: "容器与云原生",
          icon: "cubes",
          collapsible: true,
          expanded: true,
          children: [
            { text: "Docker", link: "Docker" },
            { text: "K8S", link: "K8S" },
          ],
        },
        {
          text: "自动化与 DevOps",
          icon: "gears",
          collapsible: true,
          expanded: true,
          children: [
            { text: "CI/CD", link: "cicd" },
            { text: "Ansible", link: "ansible" },
          ],
        },
        {
          text: "日志与监控",
          icon: "chart-line",
          collapsible: true,
          expanded: true,
          children: [
            { text: "ELK 日志栈", link: "ELK" },
            { text: "监控告警", link: "监控告警" },
          ],
        },
        {
          text: "编程与数据",
          icon: "code",
          collapsible: true,
          expanded: true,
          children: [
            { text: "Python", link: "python" },
            { text: "SQL", link: "sql" },
          ],
        },
        {
          text: "AI 应用",
          icon: "robot",
          collapsible: true,
          expanded: true,
          children: [
            { text: "LangChain RAG", link: "LangChain-RAG" },
            { text: "LangGraph", link: "LangGraph" },
          ],
        },
        {
          text: "项目与实战",
          icon: "diagram-project",
          collapsible: true,
          expanded: true,
          children: [
            { text: "瑞吉外卖", link: "瑞吉外卖" },
            { text: "尚医通", link: "尚医通" },
            { text: "天机学堂", link: "天机学堂" },
            { text: "药品项目经验", link: "药品经验积累" },
          ],
        },
      ],
    },
  ],

  "/VibeCoding/": [
    {
      text: "AI 编程实战",
      icon: "wand-sparkles",
      children: [
        {
          text: "智慧图书馆座位预约",
          icon: "building-columns",
          link: "SmartReservation",
        },
        {
          text: "AI 基金分析系统",
          icon: "money-bill-trend-up",
          link: "Fund",
        },
        {
          text: "JobHunter 求职平台",
          icon: "briefcase",
          link: "jobhunter",
        },
      ],
    },
  ],
});
