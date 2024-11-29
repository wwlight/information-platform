const fs = require('node:fs')
const https = require('node:https')
const path = require('node:path')
const { promisify } = require('node:util')

// 创建目录的 Promise 版本
const mkdir = promisify(fs.mkdir)
const writeFile = promisify(fs.writeFile)

// 行政区划数据结构
const areaLevels = {
  country: '100000', // 全国
  provinces: [
    '110000',
    '120000',
    '130000',
    '140000',
    '150000',
    '210000',
    '220000',
    '230000',
    '310000',
    '320000',
    '330000',
    '340000',
    '350000',
    '360000',
    '370000',
    '410000',
    '420000',
    '430000',
    '440000',
    '450000',
    '460000',
    '500000',
    '510000',
    '520000',
    '530000',
    '540000',
    '610000',
    '620000',
    '630000',
    '640000',
    '650000',
    '710000',
    '810000',
    '820000',
  ],
}

// 下载单个文件
async function downloadFile(code, type = 'full') {
  const url = `https://geo.datav.aliyun.com/areas_v3/bound/${code}${type === 'full' ? '_full' : ''}.json`
  const filename = `${code}${type === 'full' ? '_full' : ''}.json`
  const filepath = path.join(__dirname, 'map_data', filename)

  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}, status: ${response.statusCode}`))
        return
      }

      let data = ''
      response.on('data', (chunk) => {
        data += chunk
      })

      response.on('end', async () => {
        try {
          // 验证 JSON 格式
          JSON.parse(data)
          await writeFile(filepath, data)
          console.log(`✓ Downloaded: ${filename}`)
          resolve(filepath)
        }
        catch (error) {
          reject(new Error(`Invalid JSON data for ${url}: ${error.message}`))
        }
      })
    }).on('error', (error) => {
      reject(new Error(`Download failed for ${url}: ${error.message}`))
    })
  })
}

// 解析地图数据获取城市代码
async function parseMapDataForCities(filepath) {
  try {
    const data = JSON.parse(await fs.promises.readFile(filepath, 'utf8'))
    return data.features
      .map(feature => feature.properties.adcode)
      .filter(code => code && code.length === 6)
  }
  catch (error) {
    console.error(`Error parsing ${filepath}:`, error.message)
    return []
  }
}

// 主下载函数
async function downloadAllMaps() {
  try {
    // 创建保存目录
    const downloadDir = path.join(__dirname, 'map_data')
    await mkdir(downloadDir, { recursive: true })

    // 下载全国地图
    console.log('正在下载全国地图...')
    await downloadFile(areaLevels.country)
    await downloadFile(areaLevels.country, '')

    // 下载省级地图
    console.log('\n正在下载省级地图...')
    const provincePromises = areaLevels.provinces.map(async (code) => {
      try {
        // 下载省级完整版和简版
        await downloadFile(code)
        await downloadFile(code, '')

        // 获取省级地图中的城市代码
        const provincePath = path.join(__dirname, 'map_data', `${code}_full.json`)
        const cityCodes = await parseMapDataForCities(provincePath)

        // 下载城市地图
        console.log(`\n正在下载 ${code} 的城市地图...`)
        for (const cityCode of cityCodes) {
          try {
            await downloadFile(cityCode)
            await downloadFile(cityCode, '')
          }
          catch (error) {
            console.error(`下载城市 ${cityCode} 地图失败:`, error.message)
          }
        }
      }
      catch (error) {
        console.error(`下载省份 ${code} 地图失败:`, error.message)
      }
    })

    await Promise.all(provincePromises)
    console.log('\n所有地图下载完成！')
  }
  catch (error) {
    console.error('下载过程出错:', error.message)
  }
}

// 添加延迟函数避免请求过快
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// 运行下载脚本
console.log('开始下载阿里云 DataV 地图数据...')
downloadAllMaps()
