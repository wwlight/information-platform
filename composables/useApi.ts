export function useApi() {
  return {
    // 算力设备统计
    deviceNum: (data = {}) => useHttp.post('/api/powerDeviceStatistic', data),
    // GPU类型统计
    deviceBrandNum: (data = {}) => useHttp.post('/api/gpuTypeStatistic', data),
    // 异构计算支持类型统计
    deviceProcessorNum: (data = {}) => useHttp.post('/api/deviceProcessorNum', data),
    // 集成算力地域分布
    regionCenterNum: (data = {}) => useHttp.post('/api/regionCenterNum', data),
    // 算力规模/存储能力、碳排放量/冷却系统
    statisticCenterNum: (data = {}) => useHttp.post('/api/powerCenterStatistic', data),
    // 算力标签树
    powerLabelTree: (data = {}) => useHttp.post('/api/powerLabelTree', data),
    // 算力位置数
    regionTree: (data = {}) => useHttp.post('/api/regionTree', data),
    // 全部算力数据
    getRegionCenterNum: (data = {}) => useHttp.post('/api/allRegionCenterNum', data),
    // 某省数据
    getCityCenterNum: (data = {}) => useHttp.post('/api/cityCenterNum', data),
    // 查询算力中心列表
    powerQueryList: (data = {}) => useHttp.post('/api/powerQueryList', data),
  }
}
