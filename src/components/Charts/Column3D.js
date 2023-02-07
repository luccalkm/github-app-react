import React from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Chart from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const Column3D = ({ data }) => {
  const chartConfigs = {
    type: 'column3d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Most Popular',
        theme: 'fusion',
        yAxisName: 'Stars',
        yAxisNameFontSize: '16px',
        xAxisName: 'Repos',
        xAxisNameFontSize: '16px',
      },
      // Chart Data
      data: data,
    },
  }

  return <ReactFC {...chartConfigs} />
}

export default Column3D
