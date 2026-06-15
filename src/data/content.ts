import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Bot,
  LineChart,
  Layers,
  Workflow,
  Users,
  Brain,
  Zap,
  Mic,
  Briefcase,
  Globe,
  Search,
  Rocket,
  Gauge,
  Code2,
  Database,
  Palette,
  Mountain,
  HeartHandshake,
} from "lucide-react";

export const profile = {
  name: "YANG HUAN",
  nameCn: "杨欢",
  role: "AI实践者 · Agent",
  tagline: "Make AI Truly Useful in Real Scenarios",
  heroTitle: ["让 AI", "在真实场景里", "变得好用"],
  heroSubtitle:
    "把复杂AI能力，翻译成真实场景里好用的东西——让能力产生可被衡量的价值。",
  heroRoles: [
    "AI 视觉模型效果设计",
    "豆包创作 Agent 策略",
    "Vibe Coding 自研落地",
    "数据即一种设计语言",
  ],
  heroMarquee: [
    "AI 视觉模型",
    "Agent 策略",
    "Seedream 基模训练",
    "Vibe Coding",
    "数据即设计语言",
    "Multi-Agent 评测",
    "RAG 知识管理",
    "让 AI 真正好用",
  ],
  location: "Shanghai, China",
  email: "1518756151@qq.com",
  larkDoc:
    "https://bytedance.larkoffice.com/docx/G4y2dxBIIoRuSmxZQd8clpmon3b",
  heroVideo:
    "https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4",
  portrait:
    "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=cinematic%20portrait%20of%20a%20thoughtful%20young%20asian%20AI%20product%20designer%20in%20dark%20minimal%20studio%2C%20moody%20low-key%20lighting%2C%20soft%20rim%20light%2C%20teal%20accent%20glow%2C%20editorial%20photography%2C%20high%20detail%2C%20film%20grain&image_size=portrait_4_3",
  portraits: [
    { src: "/photos/p35.jpg", label: "在路上 · 九寨" },
    { src: "/photos/cibo.jpg", label: "22 · 慈坡圣山" },
  ],
};

export const intro = {
  paragraphs: [
    "大家好，我是来自上海海事大学的26届学生——杨欢。04 白羊♈️ ｜ ESFP（E 皮 稍 I 骨，但你来找我聊天我会很开心！）出生在新疆却还没走完新疆——欠自己一趟完整的家乡旅行，自己什么都愿意试一次，折腾一下。我是一个兼具好奇心和行动力的人——对 AI 能力本身好奇，对它怎么服务人好奇，同时不愿意停在想的层面，习惯用做出来的东西说话。",
    "在字节跳动、爱奇艺实习，做过seedream视觉模型、语言模型、豆包视觉创作Agent相关工作。工作之外有强烈的 Vibe Coding 驱动力——自研过 Multi-Agent 评测平台、团队提效工具集、RAG 知识管理系统。也积极参与行业交流：抖音 AI 创变者黑客松、扣子高校分享、中小学 AI 科创讲师。发现问题，就自己动手做出来。",
  ],
};

export type Keyword = { icon: LucideIcon; title: string; description: string };

export const keywords: Keyword[] = [
  {
    icon: Brain,
    title: "AI 视觉模型",
    description: "当前在做的核心方向，覆盖基模训练和创作 Agent。",
  },
  {
    icon: Bot,
    title: "Agent & Skills",
    description: "从策略设计到评估体系到自动化迭代，一直在做。",
  },
  {
    icon: Zap,
    title: "能自己做出来",
    description: "Vibe Coding，搭过平台 / 工具 / 系统，验证想法不靠等。",
  },
  {
    icon: Briefcase,
    title: "5 段实习经历",
    description: "字节、爱奇艺、华侨银行……不同场景下理解 AI 落地。",
  },
  {
    icon: Mic,
    title: "喜欢表达和连接",
    description: "AI 科创讲师、黑客松、高校分享、校级活动组织者。",
  },
  {
    icon: Globe,
    title: "持续探索",
    description: "30+ 次志愿者、海燕社社长，喜欢徒步、爬山、旅游。",
  },
];

export type Obsession = { index: string; title: string; description: string };

export const obsessions: Obsession[] = [
  {
    index: "01",
    title: "技术要变强",
    description:
      "人工智能专业出身，对模型能力迭代有好奇心。做 Seedream 基模训练时深入数据管线，弄清什么样的数据能让推理能力提升；搭评测平台时，思考如何让评测摆脱主观感觉。",
  },
  {
    index: "02",
    title: "要真的好用",
    description:
      "模型强只是起点，关键在于有人用、用得顺、能解决真实问题。做 Agent 策略的起点永远是用户在什么场景下需要它。一个产出没有在真实场景里被验证过，就还不算完成。",
  },
  {
    index: "03",
    title: "想到了就做",
    description:
      "评测流程低效，自己搭一个平台；数据处理太痛苦，写一个工具集；知识管理不好，做一个 RAG 系统。不是等别人来做的人——问题足够清晰，就先自己动手验证一版。",
  },
];

export type Stat = { value: number; prefix?: string; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 5, suffix: " 段", label: "实习经历" },
  { value: 5, prefix: "前", suffix: "%", label: "学业排名" },
  { value: 8, suffix: "+", label: "荣誉称号" },
  { value: 10, suffix: "+", label: "竞赛获奖" },
  { value: 30, suffix: "+", label: "次志愿服务" },
  { value: 108, suffix: "", label: "走过的城市" },
];

export type ExperienceMetric = { value: string; label: string };

export type Experience = {
  company: string;
  period: string;
  role: string;
  summary: string;
  highlights: string[];
  metrics?: ExperienceMetric[];
  insight?: string;
};

export const experiences: Experience[] = [
  {
    company: "字节跳动",
    period: "2025.11 — 至今",
    role: "AI 视觉模型 · Seedream 基模训练 & 豆包创作 Agent",
    summary:
      "先在 Seedream 5.0 基模训练方向主导 Reasoning 链路体系从 0 到 1 建设，后转向豆包创作 Agent 的策略与能力设计——从给模型喂数据的人，变成设计 Agent 行为的人。",
    highlights: [
      "判断问题不在数据量而在数据结构，从任务拆解、思维过程显式化、中英文差异三维重新设计数据形态。",
      "设计多模型协同架构workflow，完成 Prompt → Flow Engineering 升级。",
      "基于 ReAct 架构设计 5 大 SP 模块，构建自我强化数据闭环。",
      "设计Skill，提升创作场景的产物效果。",
    ],
    metrics: [
      { value: "41.5万+", label: "推理数据产出" },
      { value: "32 条", label: "差异化数据管线" },
      { value: "MAE=0.04", label: "机评人评对齐度" },
      { value: "1-2万/天", label: "数据机筛规模" },
    ],
    insight:
      "数据不是生产资料，而是一种设计语言——你怎么设计数据结构，就决定了模型会学到什么样的思维方式。",
  },
  {
    company: "爱奇艺",
    period: "2025.06 — 2025.11",
    role: "AI Agent 产品优化 + 自动化工作流建设",
    summary:
      "在成熟复杂的系统上做精准手术：把「答不对」这个模糊问题拆成可定位、可量化的环节，建立 RAG 五层评估体系，端到端优化 Agent 问答、知识库与自动化监控。",
    highlights: [
      "Agent 问答优化：四阶段指令框架 + 8 个高频场景专属 Prompt 模板，准确率与满意度大幅提升。",
      "RAG 知识库搭建：分块关联性元数据标识 + 全自动同步管道，覆盖率与同步效率质变。",
      "自动化监控：四层架构网关监控 + Excel 资产校验工具，异常发现从小时级压缩到分钟级。",
    ],
    metrics: [
      { value: "65%→87%", label: "回复准确率" },
      { value: "27.5%→1.2%", label: "幻觉率" },
      { value: "42.5%→100%", label: "知识库覆盖率" },
      { value: "2h→3min", label: "网关异常发现" },
    ],
    insight:
      "将 Agent 和 RAG 视为一体化系统——先画清楚场景边界和决策树，再讨论用什么模型和参数。",
  },
  {
    company: "华侨银行",
    period: "2025.03 — 2025.06",
    role: "RPA 全周期开发",
    summary:
      "在业务系统老旧、合规要求极高的银行环境里，用非侵入方式找切入口，基于金智维平台独立完成三个核心自动化场景的端到端交付。",
    highlights: [
      "个人信息批量查询录入自动化：单条耗时 3-5 分钟 → 30 秒，效率提升 6-10 倍。",
      "数据导出清洗归档自动化：可配置清洗规则 + 标准化命名，单次 20-30 分钟 → 3 分钟。",
      "批量邮件自动发送自动化：配置表驱动 + 发送前校验 + 防重发，2-3 小时 → 15 分钟。",
    ],
    metrics: [
      { value: "6-12×", label: "整体效率提升" },
      { value: "3 个", label: "端到端自动化场景" },
    ],
    insight:
      "先找到最痛的点、用非侵入方式切入、把容错和可追溯做扎实，然后一步步拓展范围。",
  },
  {
    company: "AI 科创教师",
    period: "2023.07 — 2025.07",
    role: "上海熊星科技 / 科悟慕沐教育",
    summary:
      "以大小班形式为中小学生讲授 AI 与编程课程，覆盖硬件编程、图形化编程、Python、机器学习、Coze Agent 搭建，并指导科创项目从选题到答辩。",
    highlights: [
      "结构化表达：把复杂 AI 概念拆解为孩子能懂的语言，训练降维沟通的肌肉记忆。",
      "即时反馈迭代：课堂理解程度实时可见，迫使我在几秒内调整讲解策略。",
      "项目全流程把控：从选题到答辩，本质上是产品从需求到交付的完整映射。",
    ],
    insight:
      "好的教学不是完成课时，而是让学生真正获得思维方式的改变——价值驱动而非任务驱动。",
  },
];

export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
};

export const projects: Project[] = [
  {
    title: "Multi-Agent 评测与迭代闭环平台",
    category: "Vibe Coding · 自研全栈",
    year: "2025",
    description:
      "从需求定义、架构设计到全部代码独立完成。Orchestrator 驱动 11 个 Agent 角色协同，覆盖构建→执行→评测→决策→修订全链路；首创三轴多模态评测体系与版本谱系自动回滚，把多人数小时的迭代压缩为全自动执行。v2.0 已打通 Skill + SP 两侧并上线。",
    tags: ["Multi-Agent", "自动化评测", "飞书协同"],
    image:
      "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=data%20visualization%20art%2C%20abstract%203d%20charts%20and%20grids%20floating%20in%20dark%20space%2C%20teal%20wireframe%20glow%2C%20minimal%20futuristic%2C%20cinematic%20depth%2C%20ultra%20detailed&image_size=landscape_4_3",
  },
  {
    title: "百宝箱 · 数据提效 Web 工具集",
    category: "Vibe Coding · Web 平台",
    year: "2024",
    description:
      "基于火山方舟大模型 API 构建并发处理管线，集成 6+ 高频工具，覆盖团队日常 80% 以上数据处理场景。WebSocket 实时进度、敏感数据本地化处理，为多位非工程同学提供零代码入口，累计节约数百小时工时。",
    tags: ["提效工具", "并发管线", "零代码"],
    image:
      "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=minimal%20toolbox%20web%20application%20concept%2C%20floating%20glass%20panels%20and%20modular%20tools%20in%20dark%20space%2C%20teal%20glow%20accents%2C%20clean%20futuristic%20product%20design%2C%20ultra%20detailed&image_size=landscape_4_3",
  },
  {
    title: "RAG + LangGraph 知识管理系统",
    category: "Vibe Coding · 全栈架构",
    year: "2024",
    description:
      "13 张数据表、五层微服务架构独立全栈实现。LangGraph 双模一体化同时支持企业级 RAG 与个人知识管理；BM25+kNN 混合检索 → RRF 融合 → BGE-Reranker 精排的四层漏斗，PKMS 侧实现从碎片收集到力导向图谱的全链路自动治理。",
    tags: ["RAG", "LangGraph", "混合检索"],
    image:
      "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=abstract%20knowledge%20graph%20visualization%2C%20interconnected%20glowing%20nodes%20and%20force-directed%20network%20on%20deep%20black%20background%2C%20teal%20cyan%20light%2C%20cinematic%2C%20ultra%20detailed&image_size=landscape_4_3",
  },
  {
    title: "人生万象 · AI 人生决策导航",
    category: "进行中 · 产品定义到视觉",
    year: "2025",
    description:
      "用 AI 帮年轻人把混乱的人生选择整理成一张可看、可探索的人生地图，核心理念是「陪你看路，不替你决定」。拆解真实问题、重构失败经历、提供真实参照、把大决定拆成今天能做的最小验证步骤。",
    tags: ["产品定义", "视觉设计", "AI 应用"],
    image:
      "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=abstract%20life%20path%20map%20visualization%2C%20glowing%20winding%20roads%20and%20constellation%20points%20on%20dark%20gradient%20background%2C%20teal%20and%20warm%20light%2C%20poetic%20cinematic%2C%20ultra%20detailed&image_size=landscape_4_3",
  },
];

export type Academic = {
  title: string;
  role: string;
  period: string;
  points: string[];
  value: string;
};

export const academics: Academic[] = [
  {
    title: "Mask-RCNN 商船异常渔船检测",
    role: "项目负责人",
    period: "2022.12 — 2023.12",
    points: [
      "需求调研：访谈 15+ 船员、实地登 3 艘商船、问卷覆盖 80+ 从业者，定位雾天看不清、响应太慢等真实痛点。",
      "数据建设：牵头组织 5000+ 张图像标注，制定边界框误差 ≤2 像素规范与每日质检流程。",
      "模型迭代：3 轮优化使准确率 72% → 91%，漏检率降至 8%；分级预警机制全量交付 5 艘商船。",
    ],
    value:
      "人工监测工作量减少 40%，异常响应时间缩短 50%。第一次让「从用户场景出发」变成站在甲板上的具象画面。",
  },
  {
    title: "网络交易欺诈识别",
    role: "项目负责人",
    period: "2023.12 — 2024.12",
    points: [
      "需求调研：访谈 8 家金融机构风控负责人、50 名用户，发现传统规则引擎对新型欺诈识别率不足 30%。",
      "特征工程：基础 + 交互 + 时序三层 62 个特征，引入 Spark 将时序特征计算从 5 秒缩至 0.1 秒。",
      "模型设计：孤立森林 + XGBoost + stacking 融合，AUC 0.88 → 0.96，并设计三级风险响应策略。",
    ],
    value:
      "召回率 96%，欺诈损失减少 72%，判定延迟仅 0.8 秒。让我更清晰地区分「模型效果」与「产品效果」。",
  },
];

export type Strength = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type IntroWord = {
  text: string;
  kind: "company" | "project" | "award" | "trait" | "life";
  weight?: 4 | 6 | 10; // 10 = hero word, 6 = emphasized, 4 = normal
};

export const introWords: IntroWord[] = [
  // 实习公司
  { text: "字节跳动", kind: "company", weight: 10 },
  { text: "爱奇艺", kind: "company", weight: 6 },
  { text: "华侨银行", kind: "company", weight: 6 },
  { text: "AI 科创教师", kind: "company" },
  // 项目 / 方向
  { text: "Seedream 基模训练", kind: "project", weight: 6 },
  { text: "Vibe Coding", kind: "project", weight: 10 },
  { text: "豆包视觉创作 Agent", kind: "project", weight: 6 },
  { text: "Multi-Agent 评测平台", kind: "project", weight: 6 },
  { text: "RAG 知识管理系统", kind: "project", weight: 6 },
  { text: "百宝箱工具集", kind: "project" ,weight: 6 },
  { text: "LangGraph", kind: "project" ,weight: 4 },
  // 荣誉 / 奖项
  { text: "一等奖学金", kind: "award", weight: 10 },
  { text: "优秀毕业生", kind: "award", weight: 10 },
  { text: "国际大学生创新大赛一等", kind: "award", weight: 6 },
  { text: "数学建模二等奖", kind: "award", weight: 6 },
  { text: "优秀学生干部", kind: "award" ,weight: 6 },
  { text: "文化创意展示二等奖", kind: "award" ,weight: 6 },
  // 个人关键词
  { text: "好奇心 × 行动力", kind: "trait", weight: 6 },
  { text: "数据即设计语言", kind: "trait", weight: 4 },
  // 生活
  { text: "30+ 次志愿服务", kind: "life" ,weight: 4 },
  { text: "海燕社社长", kind: "life" ,weight: 4 },
  { text: "徒步", kind: "life",weight: 6 },
  { text: "爬山", kind: "life",weight: 6 },
  { text: "旅行", kind: "life",weight: 6 },
  { text: "去过 108 城", kind: "life", weight: 6 },
  { text: "10+ 座山峰", kind: "life",weight: 6 },
  { text: "1 座技术型雪山", kind: "life", weight: 6 },
  { text: "上海马拉松志愿者", kind: "life" ,weight: 6 },
  { text: "黑客松 & 高校分享", kind: "life" ,weight: 6 },
  { text: "武功山 · 黄山 · 老君山", kind: "life" ,weight: 6},
];

export const strengths: Strength[] = [
  {
    icon: Sparkles,
    title: "视觉&语言模型",
    description:
      "从语言问答智能助手，到 Seedream 视觉模型训练的数据形态设计，再到推理 Benchmark 与效果策略——把数据当作一种设计语言，决定模型学到什么样的思维方式。",
  },
  {
    icon: Bot,
    title: "Agent 策略与评测体系",
    description:
      "从 ReAct 行为策略、SP 体系设计到拆考点量化评测，让 Agent 在清晰的场景边界内克制地调用合适的能力。",
  },
  {
    icon: Workflow,
    title: "Vibe Coding 自研落地",
    description:
      "评测平台、提效工具、RAG 系统——发现问题就自己动手做一版。不是等待被分配任务的人，问题足够清晰就先写代码验证。",
  },
  {
    icon: LineChart,
    title: "数据驱动诊断",
    description:
      "数据驱动诊断 → 分层因果指标 → 针对性策略 → 工程化落地 → 数据验证闭环。相信数据，也会找真实用户聊聊到底卡在哪。",
  },
  {
    icon: Layers,
    title: "AI 专业底座",
    description:
      "人工智能专业出身，理解模型能力边界与原理，能在技术与产品、数据与审美、算法与体验之间高效翻译。",
  },
  {
    icon: Users,
    title: "表达、连接与跨领域",
    description:
      "AI 科创讲师、黑客松、高校分享、30+ 次志愿服务。把一件事讲清楚、帮到别人，以及跨领域碰撞带来的开放视角。",
  },
];

export type Approach = { icon: LucideIcon; title: string; description: string };

export const approaches: Approach[] = [
  {
    icon: Search,
    title: "先拆问题，再想方案",
    description:
      "遇到模糊或复杂的问题，第一反应不是给方案，而是先拆清楚：问题怎么出现的、谁受影响、现有做法是什么、卡在哪一步。Seedream 数据堆量没效果，正是拆清「缺的是结构不是数量」才找到方向。",
  },
  {
    icon: Rocket,
    title: "不确定时，先做一个小的",
    description:
      "不习惯等信息齐了才动手。更常见的是先搭一个最简版本跑起来，拿真实反馈再决定下一步。评测平台、百宝箱都是先解决一个最痛的场景，好用了再加功能。",
  },
  {
    icon: Code2,
    title: "能自己验证的事不等别人",
    description:
      "Vibe Coding 养成的习惯。一个想法说半天没人接、讨论没结论，我会先自己写一版跑起来——让讨论从「要不要做」变成「这个版本哪里不对」。",
  },
  {
    icon: Gauge,
    title: "相信数据，也听真实用户怎么说",
    description:
      "做 Agent 评测花大量精力设计量化指标，但有些体验问题数据看不出来。所以习惯在数据之外找几个真实用户聊聊。数据告诉你是什么，用户告诉你为什么。",
  },
];

export type Focus = { icon: LucideIcon; title: string; description: string };

export const focusAreas: Focus[] = [
  {
    icon: Sparkles,
    title: "多模态大模型的产品化落地",
    description:
      "一个推理能力很强的模型因为数据结构没设计好而效果平庸——从炫技 Demo 到可持续运营的产品之间，到底差了哪几层？",
  },
  {
    icon: Bot,
    title: "AI Agent 与工作流自动化",
    description:
      "Agent 的价值不在于能调用多少工具，而在于能否真正替用户端到端地完成一件事，且比人做更稳定。",
  },
  {
    icon: Database,
    title: "个人知识管理的 AI 化",
    description:
      "大多数人的问题不是没有知识，而是找不回来。AI 能不能让我在几秒内找到几个月前存过的一条笔记？",
  },
  {
    icon: Palette,
    title: "AI 内容创作工具的演进",
    description:
      "好的创作工具不是替创作者做决定，而是尊重他的风格、在他需要的环节提供助力。",
  },
];

export const focusThoughts: string[] = [
  "AI 越强，真正稀缺的越不是执行力，而是提出好问题、定义正确目标、在信息过载中帮团队对齐方向的能力。",
  "用少量体验换数量级效率提升往往值得，但前提是告知用户边界、预留兜底。难的是找到那条分界线，再用数据反复校准。",
  "好产品应该越用越懂你——学会你的偏好和工作流，沉淀为可解释、可控制的行为变化，而不是依赖黑盒推荐。",
];

export type LifeBlock = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
};

export const lifeStats: Stat[] = [
  { value: 30, suffix: "+", label: "次志愿服务" },
  { value: 108, suffix: " 城", label: "旅行足迹" },
  { value: 10, suffix: "+", label: "座山峰" },
  { value: 1, suffix: " 座", label: "技术型雪山" },
];

export const lifeBlocks: LifeBlock[] = [
  {
    icon: HeartHandshake,
    title: "志愿者 · 保持和外面世界的连接",
    description:
      "每次进入一个陌生的场景，都会从不同维度刷新我对「人的需求」的理解，这些理解在后续产品工作中被反复验证。",
    items: [
      "上海马拉松 · 半程马拉松 · 滴水湖铁人三项",
      "全球人工智能开发者大会 · 华为全联接大会",
      "上海科技节（负责人）· 自然博物馆 · 公安博物馆",
    ],
  },
  {
    icon: Mic,
    title: "AI 分享与黑客松 · 用输出倒逼输入",
    description:
      "输出是最好的学习方式——每次准备分享或参赛，都会逼着自己把模糊的认知结构化。",
    items: [
      "同济大学扣子高校 AI 线下分享",
      "抖音 AI 创变者黑客松：中科大 / 南科大 / 河北农大站",
      "青年发展公益项目 · 口述史 AI 共创实践",
    ],
  },
  {
    icon: Mountain,
    title: "徒步、爬山、旅行 · 用脚步丈量世界",
    description:
      "愿意为一座山早起 4 点、走 12 小时山路、在帐篷里听风。走得越多越发现——没有唯一正确的路线，只有适不适合当下的选择。",
    items: [
      "泰山 · 武功山 · 黄山 · 老君山 · 天门山",
      "南太行 · 虞山雄鹰线 · 九溪十八涧",
      "第一座技术型雪山——慈坡圣山",
    ],
  },
];

export const closing = {
  paragraphs: [
    "我并不是从一开始就规划好一条标准答案式的路径，而是一次次被某些具体问题吸引过去。最初只是觉得 AI 很有趣、写代码有成就感，但越来越被那些卡在现实里的问题抓住——明明有技术方案，却一直没被真正解决的地方。",
    "文档堆成山却还在群里重复回答同一个问题、流程不复杂却被人肉协作拖慢、工具已上线却没进入日常工作流、模型实验室指标很好却一到真实场景就不稳定——它们分别把我推向了知识管理、RPA 自动化、落地设计和评测体系。",
    "这些经历让我越来越清楚自己想持续做的事：用 AI 解决真实场景里的真实问题，然后自己动手把它做出来。如果一个问题足够吸引我，我会先写代码验证，再用真实使用来判断方向对不对。",
  ],
  quote: "技术明明已经够用了，为什么用户还是用不起来？",
};

export const videoBreaks = {
  work: {
    src: "https://videos.pexels.com/video-files/3141210/3141210-uhd_3840_2160_25fps.mp4",
    poster:
      "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=abstract%20dark%20data%20stream%20with%20teal%20light%20particles%20flowing%2C%20cinematic%2C%20premium%20tech&image_size=landscape_16_9",
    title: "把复杂的 AI 能力，翻译成真实场景里好用的东西",
    caption: "数据是一种设计语言——你怎么设计它，就决定了模型学到什么样的思维方式。",
  },
  life: {
    src: "https://videos.pexels.com/video-files/2887463/2887463-hd_1920_1080_30fps.mp4",
    poster:
      "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=cinematic%20mountain%20landscape%20at%20dawn%2C%20misty%2C%20moody%2C%20dark%20teal%20tone%2C%20hiking%20adventure&image_size=landscape_16_9",
    title: "没有唯一正确的路线，只有适不适合当下的选择",
    caption: "走得越多越发现——保持对真实世界的感知力，比规划好一条标准路径更重要。",
  },
};

export const galleryPhotos: string[] = [
  "/photos/p1.jpg",
  "/photos/p2.jpg",
  "/photos/p3.jpg",
  "/photos/p4.jpg",
  "/photos/p5.jpg",
  "/photos/p6.jpg",
  "/photos/p7.jpg",
  "/photos/p8.jpg",
  "/photos/p9.jpg",
  "/photos/p10.jpg",
  "/photos/p11.jpg",
  "/photos/p12.jpg",
  "/photos/p13.jpg",
  "/photos/p14.jpg",
  "/photos/p15.jpg",
  "/photos/p16.jpg",
  "/photos/p17.jpg",
  "/photos/p18.jpg",
  "/photos/p19.jpg",
  "/photos/p20.jpg",
  "/photos/p21.jpg",
  "/photos/p22.jpg",
  "/photos/p23.jpg",
  "/photos/p24.jpg",
  "/photos/p25.jpg",
  "/photos/p26.jpg",
  "/photos/p27.jpg",
  "/photos/p28.jpg",
  "/photos/p29.jpg",
  "/photos/p30.jpg",
  "/photos/p31.jpg",
  "/photos/p32.jpg",
  "/photos/p33.jpg",
  "/photos/p34.jpg",
  "/photos/p36.jpg",
  "/photos/p37.jpg",
  "/photos/p38.jpg",
  "/photos/p39.jpg",
  "/photos/p40.jpg",
  "/photos/p41.jpg",
  "/photos/p42.jpg",
  "/photos/p43.jpg",
  "/photos/p44.jpg",
  "/photos/p45.jpg",
  "/photos/p46.jpg",
  "/photos/p47.jpg",
  "/photos/p48.jpg",
  "/photos/p49.jpg",
  "/photos/p50.jpg",
  "/photos/p51.jpg",
  "/photos/p52.jpg",
  "/photos/p53.jpg",
  "/photos/p54.jpg",
  "/photos/p55.jpg",
  "/photos/p56.jpg",
  "/photos/p57.jpg",
  "/photos/p58.jpg",
  "/photos/p59.jpg",
  "/photos/p60.jpg",
  "/photos/p61.jpg",
  "/photos/p62.jpg",
  "/photos/p63.jpg",
  "/photos/p64.jpg",
  "/photos/p65.jpg",
  "/photos/p66.jpg",
  "/photos/p67.jpg",
  "/photos/p68.jpg",
  "/photos/p69.jpg",
  "/photos/p70.jpg",
  "/photos/p71.jpg",
];

export const navLinks = [
  { label: "首页", href: "#hero" },
  { label: "关于", href: "#about" },
  { label: "经历", href: "#experience" },
  { label: "学术", href: "#academic" },
  { label: "项目", href: "#projects" },
  { label: "优势", href: "#strengths" },
  { label: "做事", href: "#approach" },
  { label: "关注", href: "#focus" },
  { label: "生活", href: "#life" },
  { label: "影像", href: "#gallery" },
  { label: "联系方式", href: "#contact" },
];

export const socials = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Lark Doc", value: "个人说明书", href: profile.larkDoc },
];
