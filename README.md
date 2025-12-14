# monitor

packages/ ​

├── core/ # 核心 SDK，只定义公共逻辑和约束 ​

│ ├── src/ ​

│ │ ├── index.ts # 核心入口，初始化方法和接口 ​

│ │ ├── transport.ts # Transport 接口定义和基类 ​

│ │ └── types.ts # 公共类型定义 ​

├── browser-utils/ # 浏览器通用工具包 ​

│ ├── src/ ​

│ │ ├── helpers.ts # 浏览器环境基础信息获取 ​

│ │ └── index.ts # 导出工具方法 ​

├── browser/ # 浏览器端 SDK ​

│ ├── src/ ​

│ │ ├── index.ts # 浏览器 SDK 入口 ​

│ │ ├── metrics.ts # 性能监控插件 ​

│ │ ├── errors.ts # 异常捕获插件 ​

│ │ ├── clicks.ts # 点击事件采集插件 ​

│ │ └── transport.ts # 浏览器 Transport 实现 ​

├── node/ # Node 端 SDK ​

│ ├── src/ ​

│ │ ├── index.ts # Node SDK 入口 ​

│ │ └── transport.ts # Node Transport 实现 ​

└── tsconfig.json # TypeScript 配置文件 ​
