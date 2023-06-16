import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import"./GraficLine.css";


const GraficColumns = () => {

  const options = ({
    chart: {
      renderTo: 'GraficColumns',
      type: 'column',
      options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
      }
  },
  xAxis: {
      type: 'category'
  },
  yAxis: {
      title: {
          enabled: false
      }
  },
  tooltip: {
      headerFormat: '<b>{point.key}</b><br>',
      pointFormat: '{point.y}%'
  },
  title: {
      text: '% CUMPLIMIENTO POR PASO',
      align: 'center'
  },
  legend: {
      enabled: false
  },
  credits: {
      enabled: false
  },
  plotOptions: {
    column: {
        depth: 50,
        dataLabels: {
            enabled: true
        }
    }
},
  series: [{
      data: [{
        name: 'Paso 1',
        y: 100,
        color: '#96AEF1'
      },
      {
        name: 'Paso 2',
        y: 42,
        color: '#96AEF1'
      },
      {
        name: 'Paso 3',
        y: 63,
        color: '#96AEF1'
      },
      {
        name: 'Paso 4',
        y: 100,
        color: '#96AEF1'
      },
      {
        name: 'Paso 5',
        y: 75,
        color: '#96AEF1'
      },
      {
        name: 'Paso 6',
        y: 100,
        color: '#96AEF1'
      },
      {
        name: 'Paso 7',
        y: 67,
        color: '#96AEF1'
      },
      {
        name: 'Paso 8',
        y: 42,
        color: '#96AEF1'
      },
      {
        name: 'Paso 9',
        y: 100,
        color: '#FFA500'
      },
      {
        name: 'Paso 10',
        y: 100,
        color: '#FFA500'
      },
      {
        name: 'Paso 11',
        y: 19,
        color: '#FFA500'
      },
      {
        name: 'Paso 12',
        y: 13,
        color: '#FFA500'
      },
      {
        name: 'Paso 13',
        y: 100,
        color: '#FFA500'
      },
      {
        name: 'Paso 14',
        y: 50,
        color: '#FFA500'
      },
      {
        name: 'Paso 15',
        y: 25,
        color: '#FFA500'
      },
      {
        name: 'Paso 16',
        y: 100,
        color: '#FFA500'
      },
      {
        name: 'Paso 17',
        y: 50,
        color: '#FFA500'
      },
      {
        name: 'Paso 18',
        y: 19,
        color: '#FFA500'
      },
      {
        name: 'Paso 19',
        y: 100,
        color: '#FFA500'
      },
      {
        name: 'Paso 20',
        y: 100,
        color: '#60A44A'
      },
      {
        name: 'Paso 21',
        y: 50,
        color: '#60A44A'
      },
      {
        name: 'Paso 22',
        y: 25,
        color: '#60A44A'
      },
      {
        name: 'Paso 23',
        y: 0,
        color: '#C3C3C3'
      },
      {
        name: 'Paso 24',
        y: 100,
        color: '#C3C3C3'
      }
    ]
  }
]
});


  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options} />
    </div>
  )
};

export default GraficColumns;
