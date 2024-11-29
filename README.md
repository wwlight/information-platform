# 算力信息平台

- 项目由 [nuxt](https://nuxt.com/) 搭建的算力大屏，用 [Echarts](https://echarts.apache.org/examples/zh/index.html#chart-type-map) 实现地图效果上踩了不少坑，现将项目早期版本分享给大家，本地 mock 数据，希望能有所帮助。
- 依赖版本：![echarts](https://img.shields.io/badge/nuxt-v3.13.2-brightgreen)
  ![nuxt](https://img.shields.io/badge/echarts-v5.5.1-brightgreen)
- 效果截图：
  ![](./public/1C7B3406-C919-4C7A-AE53-7C38E69CE186.png)
- 在线预览:

| 访问地址 | 操作项 |
| :---: | :---: |
| <a href="https://infomation-platform.vercel.app/" target="_blank"><img src="https://img.shields.io/badge/vercel%20%E5%9C%B0%E5%9D%80-https://infomation--platform.vercel.app/-brightgreen" alt="访问地址"/></a> |[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwwlight%2Finfomation-platform)|
| <a href="https://infomation-platform.netlify.app/" target="_blank"><img src="https://img.shields.io/badge/netlify%20%E5%9C%B0%E5%9D%80-https://infomation--platform.netlify.app/-brightgreen" alt="访问地址"/></a> |[![Netlify Status](https://api.netlify.com/api/v1/badges/786b328b-4a56-43b7-a68e-30224a17d07d/deploy-status)](https://app.netlify.com/sites/infomation-platform/deploys)|


- `echarts` 地图相关 `geoJson` 文件下载地址：[DataV.GeoAltas](https://datav.aliyun.com/portal/school/atlas/area_selector)
- 可直接运行下载脚本: `node ./public/download-datav-maps.cjs`
- `echarts` 地图轮廓、投影、立体效果在 [`./utils/useMapChart.ts`](./utils/useMapChart.ts) 配置文件中

## 设置

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## 本地运行

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## 打包

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```
