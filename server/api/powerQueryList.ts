export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    let res = {}

    switch (body.cityId) {
      case 652300:
        res = {
          code: 200,
          msg: '操作成功',
          data: [
            {
              id: 1,
              creater: '1',
              createTime: '2024-10-31T14:20:10.000+08:00',
              updater: '1',
              updateTime: '2024-10-31T14:20:03.000+08:00',
              isDelete: 0,
              name: '吉昌算力中心',
              provinceId: 650000,
              cityId: 652300,
              location: '新疆昌吉州木垒县风电产业园',
              computeCapacity: 0.996,
              energyType: '风能',
              plannedLandArea: 1000,
              constructionArea: 2000,
              storageCapacity: 1000,
              commissioningDate: '2024-10-17T00:00:00.000+08:00',
              operator: '华为云',
              networkOperators: '移动',
              maintenanceServices: '全托管服务',
              applicationFields: '人工智能计算、大数据处理',
              heterogeneousComputeSupport: 'GPU、FPGA',
              pue: 1.2,
              carbonEmission: '50',
              carbonEmissionStrategy: '绿色数据中心',
              coolingSystem: '1',
              coolingSystemName: '液冷',
              constructionType: 2,
              deviceNames: '3090(100 台),4090(300 台),H100(500 台),H200(300 台),H800(280 台)',
            },
          ],
        }
        break
      case 500100:
        res = {
          code: 200,
          msg: '操作成功',
          data: [
            {
              id: 4,
              creater: null,
              createTime: null,
              updater: null,
              updateTime: null,
              isDelete: 0,
              name: '重庆嘉云智能算力中心',
              provinceId: 500000,
              cityId: 500100,
              location: '重庆市两江新区水土新城',
              computeCapacity: 1.177,
              energyType: '光伏',
              plannedLandArea: 1878,
              constructionArea: 5634,
              storageCapacity: 1500,
              commissioningDate: '2023-10-01T00:00:00.000+08:00',
              operator: '阿里云',
              networkOperators: '移动',
              maintenanceServices: '全托管服务',
              applicationFields: '人工智能计算、大数据处理',
              heterogeneousComputeSupport: 'GPU、FPGA',
              pue: 1.55,
              carbonEmission: '65',
              carbonEmissionStrategy: '碳中和',
              coolingSystem: '2',
              coolingSystemName: '风冷',
              constructionType: 1,
              deviceNames: '4090(480 台)',
            },
          ],
        }
        break
      case 110100:
        res = {
          code: 200,
          msg: '操作成功',
          data: [
            {
              id: 2,
              creater: null,
              createTime: null,
              updater: null,
              updateTime: null,
              isDelete: 0,
              name: '北京算力中心',
              provinceId: 110000,
              cityId: 110100,
              location: '北京地区',
              computeCapacity: 1.898,
              energyType: '电能',
              plannedLandArea: 2000,
              constructionArea: 3000,
              storageCapacity: 1000,
              commissioningDate: '2024-11-18T00:00:00.000+08:00',
              operator: '阿里云',
              networkOperators: '电信',
              maintenanceServices: '全托管服务',
              applicationFields: '人工智能计算、大数据处理',
              heterogeneousComputeSupport: 'GPU、FPGA',
              pue: 1.2,
              carbonEmission: '60',
              carbonEmissionStrategy: '碳中和',
              coolingSystem: '1',
              coolingSystemName: '液冷',
              constructionType: 1,
              deviceNames: '',
            },
            {
              id: 3,
              creater: null,
              createTime: null,
              updater: null,
              updateTime: null,
              isDelete: 0,
              name: '北京算力中心2',
              provinceId: 110000,
              cityId: 110100,
              location: '北京A地区',
              computeCapacity: 1.298,
              energyType: '电能',
              plannedLandArea: 1400,
              constructionArea: 2000,
              storageCapacity: 1000,
              commissioningDate: '2024-11-18T00:00:00.000+08:00',
              operator: null,
              networkOperators: null,
              maintenanceServices: null,
              applicationFields: '人工智能计算、大数据处理',
              heterogeneousComputeSupport: 'GPU',
              pue: 1.5,
              carbonEmission: '70',
              carbonEmissionStrategy: '碳中和',
              coolingSystem: '1',
              coolingSystemName: '液冷',
              constructionType: 2,
              deviceNames: '',
            },
          ],
        }
        break
      default:
        res = {
          code: 200,
          msg: '操作成功',
          data: [],
        }
        break
    }

    return res
  }
  catch (error) {
    return {
      success: false,
      error,
    }
  }
})
