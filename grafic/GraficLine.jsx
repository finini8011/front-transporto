import React from 'react';
/* import Highcharts from 'highcharts' */
import HighchartsReact from 'highcharts-react-official';
import"./GraficLine.css";


const GraficLine = ({data}) => {
  console.log(data)
  const options = {
    chart: {
      polar: true,
      type: 'line'
    },

    title: {
      text: '% CUMPLIMIENTO FASE',
      x: -80
    },

    pane: {
      size: '80%'
    },

    xAxis: {
      categories: ['Fase 1. Planificación PESV', 'Fase 2. Implementación y ejecucción PESV', 'Fase 3. Seguimiento Organización', 'Fase 4. Mejora Continua PESV'],
      tickmarkPlacement: 'on',
      lineWidth: 0
    },

    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0
    },

    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
    },

    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },
    credits: {
      enabled: false
    },

    series: [{
      name: 'Total de pasos',
      data: data, //datos de los porcentajes
      pointPlacement: 'on'
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal'
          },
          pane: {
            size: '70%'
          }
        }
      }]
    }
  }


  return (
    <div className='relative'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options} />
    </div>
  )
};

export default GraficLine;
