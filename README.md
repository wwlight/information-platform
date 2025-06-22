# 算力信息平台

- 项目由 [nuxt](https://nuxt.com/) 搭建的算力大屏，用 [Echarts](https://echarts.apache.org/examples/zh/index.html#chart-type-map) 实现地图效果上踩了不少坑，现将项目早期版本分享给大家，本地 mock 数据，希望能有所帮助。
- 依赖版本：![nuxt](https://img.shields.io/badge/nuxt-v3.17-brightgreen)
  ![echarts](https://img.shields.io/badge/echarts-v5.6.0-brightgreen)
- 效果截图：
  ![](./public/1C7B3406-C919-4C7A-AE53-7C38E69CE186.png)
- 在线预览:

| 访问地址 | 部署 | 状态 |
| :---: | :---: | :---: |
|[![Website](https://img.shields.io/badge/vercel%20%E5%9C%B0%E5%9D%80-https://information--platform.vercel.app/-brightgreen)](https://information-platform.vercel.app/)|[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wwlight/information-platform)| - |
|[![Website](https://img.shields.io/badge/netlify%20%E5%9C%B0%E5%9D%80-https://information--platform.netlify.app/-brightgreen)](https://information-platform.netlify.app/)|[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wwlight/information-platform)|[![Netlify Status](https://api.netlify.com/api/v1/badges/819578ee-370c-4588-8924-6fb89eecf5b1/deploy-status)](https://app.netlify.com/projects/information-platform/deploys)|

- `echarts` 地图相关 `geoJson` 文件下载地址：[DataV.GeoAltas](https://datav.aliyun.com/portal/school/atlas/area_selector)
- 可直接运行下载脚本: `node ./public/download-datav-maps.cjs`
- `echarts` 地图轮廓、投影、立体效果在 [`./utils/useMapChart.ts`](./utils/useMapChart.ts) 配置文件中
- 支持地图下钻功能

## 设置

```bash
pnpm install

pnpm dev

pnpm generate
```
