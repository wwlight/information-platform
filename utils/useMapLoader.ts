export default async function (code: string) {
  try {
    const mapData = await import(`../assets/map-data/${code}_full.json`)
    return mapData.default
  }
  catch (error) {
    console.error(`地图数据加载失败，code: ${code}`, error)
    return null
  }
}
