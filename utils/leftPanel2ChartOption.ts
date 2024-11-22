export default function (data: any = {}) {
  const len = data?.seriesData?.length || 0
  const span = len > 6 ? (5 / len) * 100 : 100

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      top: '8%',
      left: '6%',
      bottom: len > 6 ? '14%' : '1%',
      right: len > 6 ? '10%' : '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: data.xAxisData,
      minInterval: 1,
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: '#6a7589',
          width: 1,
        },
      },
      axisLabel: {
        show: true,
        color: '#B5C5D4',
        fontSize: 12,
      },
      axisTick: {
        show: false,
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(186, 198, 208, 0.2)',
        },
      },
      axisLabel: {
        show: true,
        color: '#B5C5D4',
        fontSize: 12,
      },
    },
    dataZoom: [
      {
        type: 'slider',
        show: len > 6,
        bottom: '5%',
        left: '12%',
        right: '10%',
        height: '10px',
        minSpan: span,
        maxSpan: span,
      },
      {
        type: 'inside',
        show: len > 6,
        xAxisIndex: [0],
        minSpan: span,
        maxSpan: span,
      },
    ],
    series: [
      {
        data: data.seriesData,
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#acd6ff',
              },
              {
                offset: 0.01,
                color: '#acd6ff',
              },
              {
                offset: 0.1,
                color: '#0096f5',
              },
              {
                offset: 0.9,
                color: '#174d9f',
              },
            ],
            globalCoord: false,
          },
        },
        barWidth: 22,
        backgroundStyle: {
          color: 'rgb(187, 209, 245, 0.2)',
        },
      },
    ],
  }
}
