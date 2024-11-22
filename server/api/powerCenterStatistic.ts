export default defineEventHandler(() => {
  return {
    code: 200,
    msg: '操作成功',
    data: {
      computeCapacity: 8.719,
      storageCapacity: 8500,
      carbonEmission: 425,
    },
  }
})
