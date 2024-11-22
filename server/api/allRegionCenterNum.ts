export default defineEventHandler(() => {
  return {
    code: 200,
    msg: '操作成功',
    data: [
      {
        id: '110000',
        regionName: '北京市',
        centerNum: 2,
        lngLat: [
          116.7245,
          39.90502,
        ],
        lat: '39.905023',
        lng: '116.724502',
      },
      {
        id: '500000',
        regionName: '重庆市',
        centerNum: 1,
        lngLat: [
          106.55048,
          29.563707,
        ],
        lat: '29.563707',
        lng: '106.550483',
      },
      {
        id: '650000',
        regionName: '新疆维吾尔自治区',
        centerNum: 1,
        lngLat: [
          87.62858,
          43.7933,
        ],
        lat: '43.793301',
        lng: '87.628579',
      },
    ],
  }
})
