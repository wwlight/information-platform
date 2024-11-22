const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAC3BAMAAACiQNKsAAAAHlBMVEUAAAB3t/l3t/l3t/l3t/l3t/l3t/l3t/l3t/l3t/mICzVvAAAACnRSTlMABgkNERsgFiklFkNX9AAAAm9JREFUeNrt0sFvEkEUBvBvZpdwnVSr16kl7XVtDcYbYoF4o5FqPQpI5UYV2/gHYOhZqf1zLRgz4FJ2d/Y9m03eLyQkm803b759SElVvg5upreuBu/qBoTU8+H04/hwB7e2Dltvp7MvVPm6MT07wIrdi2nHgkDjqmMQoxo3HeT18FPfYC3V/P4SuTQnEe4UnPbhT5/2sFF1YuEpHJ4jwePrmmf2dYREwdArvTyx6aobecw9M0hFvc88ezCzAFO6Hljql51sw4QzZPBihEzKP5DadhcZ7R0jpeAXMvsWpX3RIjOdcqBHbXgofUhVyk94eR0h2YWFF33mdz2yOk/g7STx+BG8lRMurfrIoWk2Dx4hh2Dj6LqHXKp20+AWuegNo6secqqahMaZWn+D3Kq4Q6mG3MI21rsEgcuEQz0kXn/PgEIXa6gufCXPWIpAIljXbgtExojRbRAp2XWPfCWPOQaZVsJxtL2UDMiofwc9AqGj2GFU4jWULQjpEZbtg9RnLDsGqW0sCWogFUaxL8C0jM9A7BWccxDbjlXOU3rZgJhym14BuXps5wntx+5AxzUdWJALor+ngMHIfU96dfdPr+JuQMx1rSNQc1sSGjBQNa5lcWU/AIunmDsAi13M1cAidM3TCw3PJrpdDAxYqGjRDZMaazjPmrtFfwIei+AdMNkCEIFJsOidScg8ueILN1AWTLSB5gu383wmqtDhYGMRgE0k4RKe2vKeS/j/CldgYxjDlZn//ihcOPjCUeRwCya60LUoMDESfh/hq4pyguINZ2Q4j1Cr4YX4lLH5C5Iaa0dIHUIIIYQQQgghhBBCCMHhN6s1RrnqhPDpAAAAAElFTkSuQmCC'

const color = ['#158eff', '#5b80ff', '#fcaf8d', '#2470ff', '#00e8fb', '#bcbf5c', '#67d470', '#d4ac67', '#d47467', '#54b5f2', '#5458f2', '#9754f2', '#c454f2', '#d9e7ff']

export default function (data: any = {}, total: number = 0) {
  return {
    color,
    graphic: {
      elements: [{
        type: 'image',
        z: -1,
        style: {
          image: img,
          width: 190,
          height: 190,
        },
        top: '9%',
        left: '0.5%',
      }],
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      top: 'center',
      right: '5%',
      padding: [30, 0, 0, 0],
      itemWidth: 14,
      itemHeight: 14,
      borderRadius: 0,
      formatter: (name: any) => {
        const found: any = data.find((item: any) => item.name === name)
        if (found) {
          return `【${name}】 ${found.value} 台`
        }
        return ''
      },
      textStyle: {
        color: '#94A3B8',
        fontSize: 14,
      },
      data: data.map((item: any) => item.name),
    },
    series: [
      {
        name: '算力设备',
        type: 'pie',
        radius: ['63%', '73%'],
        center: ['23%', '50%'],
        avoidLabelOverlap: false,
        padAngle: 2,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data,
      },
      {
        type: 'pie',
        radius: '48%',
        center: ['23%', '50%'],
        avoidLabelOverlap: false,
        showInLegend: false,
        emphasis: {
          scale: false,
        },
        tooltip: {
          show: false,
        },
        slient: true,
        zlevel: 3,
        data: [{
          name: '设备总数',
          value: total,
          itemStyle: {
            color: '#122742',
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
          },
          label: {
            position: 'center',
            show: true,
            formatter: () => {
              return [
                '{titleStyle|设备总数}',
                `{valueStyle|${total}}`,
              ].join('\n')
            },
            rich: {
              titleStyle: {
                color: '#a8c3e6',
                fontSize: 14,
                fontWeight: 'normal',
                fontFamily: 'aliPuHuiTi',
                padding: [0, 0, 10, 0],
              },
              valueStyle: {
                color: '#dbe7f6',
                fontSize: 20,
                fontWeight: 'bold',
              },
            },
          },
        }],
      },
      {
        type: 'pie',
        radius: '56%',
        center: ['23%', '50%'],
        avoidLabelOverlap: false,
        showInLegend: false,
        emphasis: {
          scale: false,
        },
        tooltip: {
          show: false,
        },
        zlevel: 1,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: [{
          name: '设备总数',
          value: total,
        }],
        itemStyle: {
          color: '#77b7f93b',
        },
      },
    ],
  }
}
