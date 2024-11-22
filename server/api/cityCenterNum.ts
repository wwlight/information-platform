export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    let res = {}
    switch (body.provinceId) {
      case '650000':
        res = {
          code: 200,
          msg: '操作成功',
          data: [
            {
              id: 652300,
              regionName: '昌吉回族自治州',
              centerNum: 2,
              constructionType: 2,
              constructionTypeName: '通用建设',
              lngLat: [
                87.309,
                44.011044,
              ],
              lat: '44.011044',
              lng: '87.308995',
            },
          ],
        }
        break
      case '500000':
        res = {
          code: 200,
          msg: '操作成功',
          data: [
            {
              id: 500100,
              regionName: '重庆市',
              centerNum: 3,
              constructionType: 1,
              constructionTypeName: '自有建设',
              lngLat: [
                106.55048,
                29.563707,
              ],
              lat: '29.563707',
              lng: '106.550483',
            },
          ],
        }
        break
      default:
        res = {
          code: 200,
          msg: '操作成功',
          data: [
            {
              id: 110100,
              regionName: '北京市',
              centerNum: 2,
              constructionType: 1,
              constructionTypeName: '自有建设',
              lngLat: [
                116.7245,
                39.90502,
              ],
              lat: '39.905023',
              lng: '116.724502',
            },
          ],
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
