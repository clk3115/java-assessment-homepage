import { createApp } from "vue/dist/vue.esm-bundler.js";
import "./style.css";
import template from "./template.html?raw";

const Icon = {
  props: ["name"],
  computed: {
    path() {
      return (
        {
          arrow: "M7 17 17 7M7 7h10v10",
          chevron: "m9 5 7 7-7 7",
          code: "m8 6-6 6 6 6m8-12 6 6-6 6m-2-15-4 18",
          sun: "M12 3V1m0 22v-2M3 12H1m22 0h-2M5.6 5.6 4.2 4.2m15.6 15.6-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
          moon: "M21 13a9 9 0 0 1-10-10A9 9 0 1 0 21 13Z",
          cap: "m2 9 10-5 10 5-10 5-10-5m4 3v6c4 3 8 3 12 0v-6m4-3v7",
          trophy:
            "M8 3h8v7a4 4 0 0 1-8 0V3Zm0 2H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4m-4 2v7m-4 0h8",
          chip: "M6 6h12v12H6V6Zm3 3h6v6H9V9ZM9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4",
          book: "M4 3h7a3 3 0 0 1 3 3v15a4 4 0 0 0-4-2H4V3Zm10 3a3 3 0 0 1 3-3h5v16h-4a4 4 0 0 0-4 2",
          plus: "M12 5v14M5 12h14",
          check: "m5 12 4 4L19 6",
          menu: "M4 6h16M4 12h16M4 18h16",
          up: "m6 14 6-6 6 6",
          racket:
            "M16 3c-3-1-7 1-8 4s0 6 3 7 7-1 8-4 0-6-3-7ZM10 14l-7 7m4-3-2-2M11 5l5 7M8 9l8-5",
        }[this.name] || ""
      );
    },
  },
  template:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="path"/></svg>',
};

createApp({
  components: { Icon },
  data() {
    let savedTheme = "dark";
    try {
      savedTheme = localStorage.getItem("clk-theme") || "dark";
    } catch {
      /* 存储不可用时使用默认主题。 */
    }
    return {
      theme: savedTheme === "light" ? "light" : "dark",
      activeSection: "home",
      mobileMenu: false,
      selectedStage: 0,
      selectedGoal: "ai",
      openQuestion: -1,
      showTop: false,
      observer: null,
      skills: ["C", "C++", "Python", "PyTorch"],
      nav: [
        { id: "about", label: "关于我" },
        { id: "future", label: "未来规划" },
        { id: "club", label: "俱乐部目标" },
      ],
      stages: [
        {
          time: "当前 · 基础提升",
          title: "打牢基础，保持探索",
          tag: "BUILD THE FOUNDATION",
          description:
            "把已有的编程基础连成体系，在课程学习之外，用小项目验证自己的理解。",
          tasks: [
            "巩固 C / C++ 与数据结构，整理算法题中的常见思路。",
            "系统学习 Python 和线性代数、概率统计，为 AI 学习做准备。",
            "使用 PyTorch 完成一个入门模型，记录数据处理、训练与评估过程。",
          ],
          result:
            "阶段目标：形成可复习的知识笔记，并独立完成一个 AI 入门实验。",
        },
        {
          time: "大二 → 大三",
          title: "以赛促学，走近科研",
          tag: "LEARN BY BUILDING",
          description:
            "延续蓝桥杯的竞赛经历，从解题能力逐步走向项目能力，尝试更深入的研究学习。",
          tasks: [
            "持续练习算法与编程，复盘竞赛题目，准备后续比赛。",
            "参与俱乐部 AI 项目，学习 Git 协作与实验记录方法。",
            "在基础扎实后阅读入门论文，尝试复现公开实验并向老师请教。",
          ],
          result:
            "阶段目标：积累一份完整项目记录，理解一项模型从原理到实验的过程。",
        },
        {
          time: "大三 → 大四",
          title: "明确方向，准备考研",
          tag: "FOCUS ON THE NEXT STEP",
          description:
            "结合课程、竞赛与项目体验，进一步明确研究兴趣，安排可持续的考研复习节奏。",
          tasks: [
            "了解目标院校及专业要求，结合自身情况确定报考方向。",
            "按阶段复习数学、英语及专业课，定期检查薄弱知识点。",
            "整理个人项目与学习成果，练习清晰表达技术思路与实验结论。",
          ],
          result: "阶段目标：完成系统复习，带着明确的学习兴趣进入下一阶段。",
        },
      ],
      goals: [
        {
          id: "ai",
          label: "人工智能",
          en: "ARTIFICIAL INTELLIGENCE",
          icon: "chip",
          title: "从会用框架，到理解模型。",
          description:
            "以 Python 与 PyTorch 为起点，补足机器学习基础，亲手走一遍数据、模型、训练、评估的完整流程。",
          tasks: [
            "完成一个图像分类小项目，独立划分训练集与验证集。",
            "记录损失、准确率与参数变化，比较至少两组实验结果。",
          ],
          output: "一个可复现的 AI 入门项目 + 实验笔记",
          code: [
            "import torch",
            "from curiosity import next_step",
            "",
            "while learning:",
            "    explore()",
            "    build()",
            "    reflect()",
          ],
        },
        {
          id: "contest",
          label: "竞赛实践",
          en: "COMPETITIVE PROGRAMMING",
          icon: "trophy",
          title: "让每次比赛，都有新的收获。",
          description:
            "以蓝桥杯省赛三等奖为新的起点，继续训练算法思维，在交流和复盘中把偶尔做对变成真正掌握。",
          tasks: [
            "按专题练习数据结构与算法，整理错题和复杂度分析。",
            "参与俱乐部模拟赛或组队交流，完成赛后复盘。",
          ],
          output: "专题题解集 + 可追踪的竞赛复盘记录",
          code: [
            "// practice, then reflect",
            "solve(problem);",
            "analyze(complexity);",
            "",
            "if (mistake) {",
            "  review_and_retry();",
            "}",
          ],
        },
        {
          id: "research",
          label: "科研探索",
          en: "RESEARCH & EXPLORATION",
          icon: "book",
          title: "带着问题阅读，用实验求证。",
          description:
            "希望在俱乐部认识有相同兴趣的伙伴，学习如何读论文、提问题，并从小规模实验开始了解科研。",
          tasks: [
            "选择一篇适合当前基础的 AI 论文，整理问题、方法与局限。",
            "尝试复现其中一个实验，保留环境、参数和结果记录。",
          ],
          output: "一份论文阅读报告 + 一次小规模复现实验",
          code: [
            "question = ask_why()",
            "paper = read(question)",
            "",
            "experiment = reproduce(paper)",
            "observe(experiment)",
            "compare_and_reflect()",
            "// stay curious.",
          ],
        },
      ],
      questions: [
        {
          title: "为什么想继续考研？",
          text: "目前我希望通过考研进一步学习计算机与人工智能相关知识，把编程实践与理论基础结合起来。具体院校和研究方向还需要在课程、竞赛及项目探索中逐步明确。",
        },
        {
          title: "希望在俱乐部中如何成长？",
          text: "希望和伙伴一起交流算法、参与 AI 项目、尝试论文阅读与实验复现。遇到问题主动请教，也愿意分享自己的学习记录，在合作中提升表达与解决问题的能力。",
        },
      ],
    };
  },
  computed: {
    goal() {
      return this.goals.find((item) => item.id === this.selectedGoal);
    },
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = this.theme;
      try {
        localStorage.setItem("clk-theme", this.theme);
      } catch {
        /* 不影响页面使用。 */
      }
    },
    closeMenu() {
      this.mobileMenu = false;
    },
    handleScroll() {
      this.showTop = window.scrollY > 550;
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    },
  },
  mounted() {
    document.documentElement.dataset.theme = this.theme;
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
    // 以视口中可见区域同步导航状态，无需反复查询布局。
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) this.activeSection = entry.target.id;
        });
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => this.observer.observe(section));
  },
  beforeUnmount() {
    this.observer?.disconnect();
    window.removeEventListener("scroll", this.handleScroll);
  },
  template,
})
  .component("Icon", Icon)
  .mount("#app");
