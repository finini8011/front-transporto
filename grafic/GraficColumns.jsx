import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import"./GraficLine.css";


const GraficColumns = ({data}) => {
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
        y: data && data[0],
        color: '#96AEF1'
      },
      {
        name: 'Paso 2',
        y: data && data[1],
        color: '#96AEF1'
      },
      {
        name: 'Paso 3',
        y: data && data[2],
        color: '#96AEF1'
      },
      {
        name: 'Paso 4',
        y: data && data[3],
        color: '#96AEF1'
      },
      {
        name: 'Paso 5',
        y: data && data[4],
        color: '#96AEF1'
      },
      {
        name: 'Paso 6',
        y: data && data[5],
        color: '#96AEF1'
      },
      {
        name: 'Paso 7',
        y: data && data[6],
        color: '#96AEF1'
      },
      {
        name: 'Paso 8',
        y: data && data[7],
        color: '#96AEF1'
      },
      {
        name: 'Paso 9',
        y:data && data[8],
        color: '#FFA500'
      },
      {
        name: 'Paso 10',
        y: data && data[9],
        color: '#FFA500'
      },
      {
        name: 'Paso 11',
        y: data && data[10],
        color: '#FFA500'
      },
      {
        name: 'Paso 12',
        y: data && data[11],
        color: '#FFA500'
      },
      {
        name: 'Paso 13',
        y: data && data[12],
        color: '#FFA500'
      },
      {
        name: 'Paso 14',
        y: data && data[13],
        color: '#FFA500'
      },
      {
        name: 'Paso 15',
        y: data && data[14],
        color: '#FFA500'
      },
      {
        name: 'Paso 16',
        y: data && data[15],
        color: '#FFA500'
      },
      {
        name: 'Paso 17',
        y: data && data[16],
        color: '#FFA500'
      },
      {
        name: 'Paso 18',
        y: data && data[17],
        color: '#FFA500'
      },
      {
        name: 'Paso 19',
        y: data && data[18],
        color: '#FFA500'
      },
      {
        name: 'Paso 20',
        y: data && data[19],
        color: '#60A44A'
      },
      {
        name: 'Paso 21',
        y: data && data[20],
        color: '#60A44A'
      },
      {
        name: 'Paso 22',
        y: data && data[21],
        color: '#60A44A'
      },
      {
        name: 'Paso 23',
        y: data && data[22],
        color: '#C3C3C3'
      },
      {
        name: 'Paso 24',
        y: data && data[23],
        color: '#C3C3C3'
      }
    ]
  }
]
});


  return (
    <div className='relative'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options} />
    </div>
  )
};

export default GraficColumns;
