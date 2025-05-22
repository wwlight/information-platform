# 算力信息平台

- 项目由 [nuxt](https://nuxt.com/) 搭建的算力大屏，用 [Echarts](https://echarts.apache.org/examples/zh/index.html#chart-type-map) 实现地图效果上踩了不少坑，现将项目早期版本分享给大家，本地 mock 数据，希望能有所帮助。
- 依赖版本：![nuxt](https://img.shields.io/badge/nuxt-v3.13.2-brightgreen)
  ![echarts](https://img.shields.io/badge/echarts-v5.5.1-brightgreen)
- 效果截图：
  ![](./public/1C7B3406-C919-4C7A-AE53-7C38E69CE186.png)
- 在线预览:

| 访问地址 | 部署 | 状态 |
| :---: | :---: | :---: |
|[![Website](https://img.shields.io/badge/vercel%20%E5%9C%B0%E5%9D%80-https://infomation--platform.vercel.app/-brightgreen)](https://infomation-platform.vercel.app/)|[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wwlight/infomation-platform)|[![Vercel Status](https://vercelbadge.vercel.app/api/wwlight/infomation-platform)](https://vercel.com/wwlight/infomation-platform)|
|[![Website](https://img.shields.io/badge/netlify%20%E5%9C%B0%E5%9D%80-https://infomation--platform.netlify.app/-brightgreen)](https://infomation-platform.netlify.app/)|[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wwlight/infomation-platform)|[![Netlify Status](https://api.netlify.com/api/v1/badges/786b328b-4a56-43b7-a68e-30224a17d07d/deploy-status)](https://app.netlify.com/sites/infomation-platform/deploys)|

- `echarts` 地图相关 `geoJson` 文件下载地址：[DataV.GeoAltas](https://datav.aliyun.com/portal/school/atlas/area_selector)
- 可直接运行下载脚本: `node ./public/download-datav-maps.cjs`
- `echarts` 地图轮廓、投影、立体效果在 [`./utils/useMapChart.ts`](./utils/useMapChart.ts) 配置文件中
- 支持地图下钻功能

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
