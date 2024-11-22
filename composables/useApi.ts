export function useApi() {
  return {
    // 算力设备统计
    async deviceNum(data = {}) {
      return await useHttp.post('/api/powerDeviceStatistic', data)
    },
    // GPU类型统计
    async deviceBrandNum(data = {}) {
      return await useHttp.post('/api/gpuTypeStatistic', data)
    },
    // 异构计算支持类型统计
    async deviceProcessorNum(data = {}) {
      return await useHttp.post('/api/deviceProcessorNum', data)
    },
    // 集成算力地域分布
    async regionCenterNum(data = {}) {
      return await useHttp.post('/api/regionCenterNum', data)
    },
    // 算力规模/存储能力、碳排放量/冷却系统
    async statisticCenterNum(data = {}) {
      return await useHttp.post('/api/powerCenterStatistic', data)
    },
    // 算力标签树
    async powerLabelTree(data = {}) {
      return await useHttp.post('/api/powerLabelTree', data)
    },
    // 算力位置数
    async regionTree(data = {}) {
      return await useHttp.post('/api/regionTree', data)
    },
    // 全部算力数据
    async getRegionCenterNum(data = {}) {
      return await useHttp.post('/api/allRegionCenterNum', data)
    },
    // 某省数据
    async getCityCenterNum(data = {}) {
      return await useHttp.post('/api/cityCenterNum', data)
    },
    // 查询算力中心列表
    async powerQueryList(data = {}) {
      return await useHttp.post('/api/powerQueryList', data)
    },
  }
}
