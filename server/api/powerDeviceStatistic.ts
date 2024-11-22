export default defineEventHandler(() => {
  return {
    code: 200,
    msg: '操作成功',
    data: {
      deviceAllNum: 1960,
      deviceNumList: [
        {
          deviceName: '3090',
          deviceNum: 100,
        },
        {
          deviceName: '4090',
          deviceNum: 780,
        },
        {
          deviceName: 'H100',
          deviceNum: 500,
        },
        {
          deviceName: 'H200',
          deviceNum: 300,
        },
        {
          deviceName: 'H800',
          deviceNum: 280,
        },
      ],
    },
  }
})
