export default defineEventHandler(() => {
  return {
    code: 200,
    msg: '操作成功',
    data: [
      {
        brandName: 'NVIDIA',
        brandNum: 1960,
      },
      {
        brandName: 'AMD',
        brandNum: 360,
      },
      {
        brandName: 'Intel',
        brandNum: 1260,
      },
      {
        brandName: 'RTX',
        brandNum: 160,
      },
      {
        brandName: 'CUDA',
        brandNum: 1260,
      },
    ],
  }
})
