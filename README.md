# 曹令坤 · 关于我与我的未来

Java 俱乐部招新考核项目一。姓名：曹令坤；班级：软产 2501；2025 级软件工程。

## 直接查看

**双击 `打开网页.cmd` 或 `dist/index.html` 查看完整网页**，不需要安装 Node.js、不需要联网。提交时请保留完整 `dist` 文件夹，图片、CSS 和 JS 使用相对路径。工具环境无法直接验证 file 协议，具体已执行检查见 `验证记录.md`。

项目使用 Vue3，`dist` 是从下列源码构建得到的产物；源文件 `index.html` 需要开发服务器，请勿将其与 `dist/index.html` 混淆。

## 开发和构建

安装 Node.js 20.19+ 或 22+，在 VS Code 打开本项目文件夹，在终端执行：

```sh
npm install
npm run dev
```

浏览器打开终端显示的本地地址。修改 `src/main.js` 中的个人信息和计划，修改 `src/style.css` 调整样式。也可使用 pnpm，本项目附带 `pnpm-lock.yaml`。

```sh
npm run build
npm run preview
```

构建会覆盖 `dist` 并自动处理离线入口。使用 Vite 的 IIFE 单文件脚本输出，不依赖运行时 CDN；`scripts/make-offline.mjs` 将构建入口改为普通 defer 脚本，以支持直接打开本地文件。

## 技术与结构

- Vue 3.5.13：响应式数据、计算属性、事件绑定、条件渲染、列表渲染与组件。
- Vite 6.1.0：开发服务、依赖打包与静态构建。
- 原生 CSS：Flex / Grid、媒体查询、主题变量、移动端适配。
- 内联 SVG：自绘基础线条图标，无图标库、外部字体或运行时网络请求。

```text
├─ index.html             开发入口
├─ src/
│  ├─ main.js             Vue 组件、个人内容、交互逻辑
│  ├─ template.html       页面模板（通过 Vite 导入）
│  └─ style.css           视觉样式与响应式布局
├─ public/
│  ├─ favicon.svg         自绘网站图标
│  └─ images/avatar.png   用户提供的形象图
├─ scripts/make-offline.mjs
├─ vite.config.js
├─ package.json
├─ pnpm-lock.yaml
├─ dist/                  可直接展示和部署的成品
├─ README.md
└─ 讲解与验收.md
```

## 主要内容与交互

1. 自我介绍：姓名、年级、专业、班级、羽毛球爱好、性格、C / C++ / Python / PyTorch 技术基础、蓝桥杯省赛三等奖。
2. 未来规划：考研方向、选择原因、三个阶段的具体准备事项和预期成果；点击时间轴切换阶段。
3. 俱乐部目标：AI、竞赛、科研三个方向，各含至少两项可执行目标及预期产出；通过 Tab 切换查看。
4. 深浅主题切换：使用 CSS 变量，localStorage 保存偏好；存储不可用时仍能正常使用。
5. 问答折叠、移动端导航、回到顶部、滚动导航高亮。
6. 键盘可操作：方向键切换 Tab，焦点标识、ARIA 状态、跳过导航链接、减少动态效果偏好支持。

## 内容确认

用户确认的信息：姓名、班级、年级、专业、头像、羽毛球爱好、开朗性格、技术基础、考研意向、AI / 竞赛 / 科研目标，以及蓝桥杯省赛三等奖。未提供获奖届次与赛道，因此页面没有补写。

**考研原因、时间安排与具体学习任务是基于上述方向拟写的规划草稿，提交前请本人核对、修改为真实意愿。** 阶段目标不代表已完成经历；页面未编造科研成果或现有项目。代码装饰区是概念代码，不是可执行程序。

## 资源与辅助说明

- 形象图：用户提供，仅作为个人选用头像展示，图中人物不代表本人。可替换 `public/images/avatar.png` 后重新构建。
- 图标和页面样式：为本项目编写，无套用现成整站模板。
- Vue / Vite：项目开发依赖，均为开源工具。
- 本项目借助 AI 辅助整理与实现，提交者应理解主要代码及交互实现。

## 线上访问

- 网页：https://clk3115.github.io/java-assessment-homepage/
- 仓库：https://github.com/clk3115/java-assessment-homepage

使用 GitHub Pages 和仓库内的 GitHub Actions 工作流发布。首次运行从 source-code.zip 展开完整源码并提交到 main 分支，之后将 dist 文件夹作为静态网站部署；后续修改源码后需先重新构建并提交 dist。首次发布是否成功请查看 Actions 和 Pages 的部署状态。

## 评分对应

| 评分范围 | 对应实现 |
| --- | --- |
| A1–A5 内容 | 关于我、竞赛经历、考研原因与三个阶段、三个学习方向 |
| B1–B5 结构样式 | 语义化 header / nav / main / section / footer，Flex / Grid，桌面与手机布局 |
| C1–C4 交互 | Vue 状态驱动主题、时间轴、Tab、问答、移动菜单，资源本地化 |
| D1–D4 工程与复现 | 结构样式分离、源码与锁文件、README、离线成品 |
| Vue3 附加 | 使用 Vue3 真实响应式组件实现页面 |

