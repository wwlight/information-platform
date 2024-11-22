/* eslint-disable ts/ban-ts-comment */
// @ts-nocheck

const imgLegendOwn = 'data:image/png;base64,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'

const imgLegendGeneral = 'data:image/png;base64,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'

export default function useMapChart() {
  const mapCodeHash: any = {
    china: '100000',
    北京市: '110000',
    天津市: '120000',
    河北省: '130000',
    山西省: '140000',
    内蒙古自治区: '150000',
    辽宁省: '210000',
    吉林省: '220000',
    黑龙江省: '230000',
    上海市: '310000',
    江苏省: '320000',
    浙江省: '330000',
    安徽省: '340000',
    福建省: '350000',
    江西省: '360000',
    山东省: '370000',
    河南省: '410000',
    湖北省: '420000',
    湖南省: '430000',
    广东省: '440000',
    广西壮族自治区: '450000',
    海南省: '460000',
    重庆市: '500000',
    四川省: '510000',
    贵州省: '520000',
    云南省: '530000',
    西藏自治区: '540000',
    陕西省: '610000',
    甘肃省: '620000',
    青海省: '630000',
    宁夏回族自治区: '640000',
    新疆维吾尔自治区: '650000',
    台湾省: '710000',
    香港特别行政区: '810000',
    澳门特别行政区: '820000',
  }

  function getOption({
    mapName = 'china',
    regionNumData = [],
    powerGeneralData = [],
    powerOwnData = [],
  }) {
    return {
      tooltip: {
        show: false,
      },
      legend: {
        show: false,
      },
      geo: [
        {
          map: mapName,
          layoutCenter: ['50%', '70%'],
          layoutSize: '100%',
          silent: true,
          itemStyle: {
            borderWidth: 3,
            borderColor: '#e4effb',
            shadowColor: 'rgba(0, 132, 254, 0.83)',
            shadowBlur: 20,
          },
          regions: [{
            name: '南海诸岛',
            itemStyle: {
              opacity: 0,
            },
          }],
        },
        {
          map: mapName,
          layoutCenter: ['50%', '70%'],
          layoutSize: '100%',
          label: {
            show: true,
            color: '#bbd0fd',
            fontSize: 12,
          },
          emphasis: {
            label: {
              show: true,
              color: '#ffffff',
            },
            itemStyle: {
              areaColor: '#2974ff',
            },
          },
          itemStyle: {
            areaColor: '#0f55d2',
            borderColor: '#4a82e7',
            borderWidth: 1,
          },
          regions: [{
            name: '南海诸岛',
            itemStyle: {
              borderWidth: 1,
              borderColor: '#e4effb',
              shadowColor: 'rgba(0, 132, 254, 0.83)',
              shadowBlur: 20,
            },
          }],
        },
        {
          map: mapName,
          zlevel: -1,
          layoutCenter: ['50%', '71.5%'],
          layoutSize: '100%',
          silent: true,
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: false,
            },
            itemStyle: {
              areaColor: '#04245f',
            },
          },
          itemStyle: {
            areaColor: '#04245f',
            borderColor: '#13318f',
            borderWidth: 1,
            shadowOffsetY: 0,
            shadowBlur: 20,
          },
          regions: [{
            name: '南海诸岛',
            itemStyle: {
              opacity: 0,
            },
          }],
        },
      ],
      series: [
        {
          name: '算力中心',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: regionNumData,
          symbolSize: 10,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
          },
          emphasis: {
            scale: true,
          },
          tooltip: {
            show: false,
          },
          label: {
            show: true,
            formatter: params => params.data.centerNum,
            position: 'top',
            distance: 10,
            backgroundColor: '#112a06',
            padding: [4, 7, 2, 7],
            borderWidth: 1,
            borderColor: '#fabe00',
            color: '#fabe00',
            fontSize: 16,
            fontWeight: 'bold',
          },
          itemStyle: {
            color: '#fabe00',
          },
          zlevel: 1,
        },
        {
          name: '算力中心',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: powerGeneralData,
          symbolSize: 10,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
          },
          emphasis: {
            scale: false,
          },
          tooltip: {
            show: false,
          },
          label: {
            show: true,
            formatter: params => `{a|${params.data.name}}`,
            position: 'top',
            distance: 10,
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: 16,
            rich: {
              a: {
                width: '100%',
                height: 32,
                padding: [0, 15, 0, 25],
                align: 'center',
                verticalAlign: 'middle',
                backgroundColor: {
                  image: imgLegendGeneral,
                  size: '100% 100%',
                },
              },
            },
          },
          itemStyle: {
            color: '#ffdc39',
          },
          zlevel: 2,
        },
        {
          name: '算力中心',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: powerOwnData,
          symbolSize: 10,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
          },
          emphasis: {
            scale: false,
          },
          tooltip: {
            show: false,
          },
          label: {
            show: true,
            formatter: params => `{a|${params.data.name}}`,
            position: 'top',
            distance: 10,
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: 16,
            rich: {
              a: {
                width: '100%',
                height: 32,
                padding: [0, 15, 0, 25],
                align: 'center',
                verticalAlign: 'middle',
                backgroundColor: {
                  image: imgLegendOwn,
                  size: '100% 100%',
                },
              },
            },
          },
          itemStyle: {
            color: '#00eeff',
          },
          zlevel: 2,
        },
      ],
    }
  }

  return {
    mapCodeHash,
    getOption,
  }
}
