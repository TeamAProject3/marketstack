export const chartJsConfig = { 
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        distribution: 'linear',
        ticks: {
          source: 'auto'
        },
        time: {
          displayFormats: {second: 'h:mm:ss a'},
          unit: 'second'
        },
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepValue: 10,
          steps: 10
        },
        scaleLabel: {
          display: true,
          labelString: 'Price ($)'
        }
      }]
    },
    pan: {
      enabled: true,
      mode: 'x'
    },
    zoom: {
      enabled: true,
      drag: false,
      mode: 'x'
    }
  };
  
  export const chartColors = ["rgb(244, 67, 54)", "rgb(76, 175, 80)", "rgb(63, 81, 181)"];
  
  export const chartDataset = (stock_name, color, stock_values) => {
    return {
      label: stock_name.toUpperCase(),
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      borderCapStyle: 'butt',
      borderJoinStyle: 'miter',
      pointBorderColor: color,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: color,
      pointHoverBorderColor: color,
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: stock_values
    };
  };