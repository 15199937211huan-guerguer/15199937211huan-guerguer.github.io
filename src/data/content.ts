import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  LineChart,
  Mic,
  Search,
  Gauge,
  Code2,
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
    "Seedream训练数据建设",
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

export type HighlightItem = { title: string; detail: string };
export type HighlightGroup = { heading: string; items: HighlightItem[] };

export type Experience = {
  company: string;
  period: string;
  role: string;
  summary: string;
  highlights?: string[];
  highlightGroups?: HighlightGroup[];
  metrics?: ExperienceMetric[];
  insight?: string;
};

export const experiences: Experience[] = [
  {
    company: "字节跳动",
    period: "2025.11 — 至今",
    role: "Seedream训练数据建设 & 豆包视觉创作 Agent",
    summary:
      "先在 Seedream 5.0 基模训练方向主导 Reasoning 链路体系从 0 到 1 建设，后转向豆包创作 Agent 的策略与能力设计——从给模型喂数据的人，变成设计 Agent 行为的人。",
    highlightGroups: [
      {
        heading: "一、推理数据体系建设",
        items: [
          {
            title: "搭建全链路数据生产管线",
            detail:
              "搭建覆盖理解-推理-反思-生成的复合型数据架构，落地 32 条多模态自动化管线，打通 Coze 至 MM 平台入库流程，累计产出 41.5w+ 中英文推理数据，补齐模型推理能力训练素材缺口。",
          },
          {
            title: "优化数据标准与评测基准",
            detail:
              "从 Query、推理文本、图文等多维度重构数据规范，沉淀高密度标注标准，新增反思、CoT 定向管线提升数据多样性；搭建分层考点 Benchmark 与量化评测机制，精准定位模型空间、隐喻理解短板。",
          },
        ],
      },
      {
        heading: "二、视觉创作 Agent 全栈设计",
        items: [
          {
            title: "构建标准化 SFT/RL 训练体系",
            detail:
              "自研分层门控、清洗过滤类 SP，搭建 10w+ 高质量 SFT 数据集；设计多维度量化打分 SP，把主观对话评价转化为精准奖励指标，解决 Agent 行为不可控、奖励信号模糊问题。",
          },
          {
            title: "落地产品化可复用 Skill 能力",
            detail:
              "针对用户复刻创作需求，搭建三大类「做同款」完整 Skill 方案，标准化参考图、元素替换、提示词复用流程，降低用户操作门槛，沉淀可长期复用的 Agent 工具能力。",
          },
        ],
      },
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
    highlightGroups: [
      {
        heading: "一、Agent 问答产品全链路优化",
        items: [
          {
            title: "定位根因并统筹全流程",
            detail:
              "定位低准确率、高幻觉问题根因在于知识库与检索缺陷，统筹指标搭建、Prompt 优化、知识库重构、上线验证全流程。",
          },
          {
            title: "搭建迭代闭环抑制幻觉",
            detail:
              "搭建分层 RAG 指标、标准化指令框架、文本切片策略与线上监控迭代闭环，有效抑制模型幻觉、提升回答质量与用户体验。",
          },
        ],
      },
      {
        heading: "二、运维流程自动化落地",
        items: [
          {
            title: "巡检核对全流程工程化",
            detail:
              "改造人工巡检核对模式，将知识同步、网关异常监控、资产核验全流程工程化，搭建自动化管线与定时监控调度机制。",
          },
          {
            title: "自动化降本并提早预警",
            detail:
              "实现资产核对、知识库同步自动化，大幅减少人工操作，提早捕获流程异常。",
          },
        ],
      },
    ],
    metrics: [
      { value: "65%→87%", label: "回复准确率" },
      { value: "27.5%→1.2%", label: "幻觉率" },
      { value: "42.5%→100%", label: "知识库覆盖率" },
      { value: "2h→3min", label: "网关异常发现" },
    ],
    insight:
      "数据驱动诊断 → 分层指标 → 针对性策略 → 工程落地 → 数据验证闭环。Agent 和 RAG 是一体化系统——知识库结构决定记忆可靠性，行为策略决定用户信任度。",
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
    category: "✅已上线",
    year: "2026",
    description:
      "从需求定义、架构设计到全部代码独立完成。Orchestrator 驱动 11 个 Agent 角色协同，覆盖构建→执行→评测→决策→修订全链路；首创三轴多模态评测体系与版本谱系自动回滚，把多人数小时的迭代压缩为全自动执行。v2.0 已打通 Skill + SP 两侧并上线。",
    tags: ["Multi-Agent", "自动化评测", "飞书协同"],
    image:
      "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=data%20visualization%20art%2C%20abstract%203d%20charts%20and%20grids%20floating%20in%20dark%20space%2C%20teal%20wireframe%20glow%2C%20minimal%20futuristic%2C%20cinematic%20depth%2C%20ultra%20detailed&image_size=landscape_4_3",
  },
  {
    title: "百宝箱 · 数据提效 Web 工具集",
    category: "✅已上线",
    year: "2026",
    description:
      "基于火山方舟大模型 API 构建并发处理管线，集成 6+ 高频工具，覆盖团队日常 80% 以上数据处理场景。WebSocket 实时进度、敏感数据本地化处理，为多位非工程同学提供零代码入口，累计节约数百小时工时。",
    tags: ["提效工具", "并发管线", "操作简易"],
    image:
      "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=minimal%20toolbox%20web%20application%20concept%2C%20floating%20glass%20panels%20and%20modular%20tools%20in%20dark%20space%2C%20teal%20glow%20accents%2C%20clean%20futuristic%20product%20design%2C%20ultra%20detailed&image_size=landscape_4_3",
  },
  {
    title: "RAG + LangGraph 知识管理系统",
    category: "⭕️已完成暂未上线",
    year: "2025",
    description:
      "13 张数据表、五层微服务架构独立全栈实现。LangGraph 双模一体化同时支持企业级 RAG 与个人知识管理；BM25+kNN 混合检索 → RRF 融合 → BGE-Reranker 精排的四层漏斗，PKMS 侧实现从碎片收集到力导向图谱的全链路自动治理。",
    tags: ["RAG", "LangGraph", "混合检索"],
    image:
      "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=abstract%20knowledge%20graph%20visualization%2C%20interconnected%20glowing%20nodes%20and%20force-directed%20network%20on%20deep%20black%20background%2C%20teal%20cyan%20light%2C%20cinematic%2C%20ultra%20detailed&image_size=landscape_4_3",
  },
  {
    title: "人生万象 · AI 人生决策导航",
    category: "📈进行中",
    year: "2026",
    description:
      "用 AI 帮年轻人把混乱的人生选择整理成一张可看、可探索的人生地图，核心理念是「陪你看路，不替你决定」。拆解真实问题、重构失败经历、提供真实参照、把大决定拆成今天能做的最小验证步骤。",
    tags: ["人生推衍", "决策建议", "AI 应用"],
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
    title: "独立闭环落地",
    description:
      "掌握图文大模型原理，具备多模态数据设计能力，可完成底层推理数据、视觉 Agent 工作，涵盖标准制定、自动化管线搭建与分层评测体系搭建；累计产出几十万级训练数据，优化线上 Agent 核心指标。",
  },
  {
    icon: LineChart,
    title: "数据驱动增值",
    description:
      "精通 ReAct 行为策略设计，擅长划定场景边界、精准调度 Agent 工具能力，搭建「数据诊断 - 分层指标拆解 - 策略迭代 - 落地验证」完整闭环；将工作流程、提示词方案、评测逻辑标准化，沉淀自动化工具与成套 SOP 可复用资产，避免重复开发，持续缩短项目迭代周期、降低人力成本。",
  },
  {
    icon: HeartHandshake,
    title: "跨岗协同对齐",
    description:
      "将模糊需求拆解为可量化、可落地执行标准；能够区分底层模型缺陷与上层 Agent 交互问题，向不同岗位输出针对性反馈。前置对齐迭代目标，多管线同步推进仍可稳定把控项目节奏，有效减少需求返工。",
  },
];

export type Approach = { icon: LucideIcon; title: string; description: string };

export const approaches: Approach[] = [
  {
    icon: Code2,
    title: "想到了就做，自己先验证一版",
    description:
      "评测流程低效就自己搭平台，数据处理太痛苦就写工具集，知识管理不好就做 RAG 系统。不是等被分配任务的人——问题足够清晰，就先写代码跑一版，让讨论从「要不要做」变成「这版哪里不对」。",
  },
  {
    icon: Search,
    title: "先拆问题，再想方案",
    description:
      "遇到模糊或复杂的问题，第一反应不是给方案，而是先拆清楚：问题怎么出现的、谁受影响、卡在哪一步。Seedream 数据堆量没效果，正是拆清「缺的是结构不是数量」才找到方向。不确定时，先做一个最小版本跑起来。",
  },
  {
    icon: Gauge,
    title: "相信数据，也听真实用户怎么说",
    description:
      "做 Agent 评测花大量精力设计量化指标，但有些体验问题数据看不出来。所以习惯在数据之外找几个真实用户聊聊——数据告诉你是什么，用户告诉你为什么。",
  },
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

export const videoBreaks = {
  work: {
    src: "https://videos.pexels.com/video-files/3141210/3141210-uhd_3840_2160_25fps.mp4",
    poster:
      "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=abstract%20dark%20data%20stream%20with%20teal%20light%20particles%20flowing%2C%20cinematic%2C%20premium%20tech&image_size=landscape_16_9",
    title: "把复杂的 AI 能力，翻译成真实场景里好用的东西",
    caption: "数据是一种设计语言——你怎么设计它，就决定了模型学到什么样的思维方式。",
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
  { label: "优势与做事", href: "#strengths" },
  { label: "生活", href: "#life" },
  { label: "影像", href: "#gallery" },
  { label: "联系方式", href: "#contact" },
];

export const socials = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Lark Doc", value: "个人说明书", href: profile.larkDoc },
];
