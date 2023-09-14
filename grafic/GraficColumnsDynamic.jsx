import React from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import"./GraficLine.css";

// const data= [
//   {name:'title1', y:70,    color:'#96AEF1'},
//   {name:'title2', y:10,    color:'#96AEF1'},
//   {name:'title3', y:50,    color:'#96AEF1'},
// ]


const GraficColumnsDynamic = ({ title, data}) => {
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
      text: title,
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
      data: data
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

export default GraficColumnsDynamic;
