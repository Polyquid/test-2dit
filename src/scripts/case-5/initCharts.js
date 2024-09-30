import Chart from 'chart.js/auto';
import getData from './getData.js';

const initCharts = () => {
  const canvasElem = document.querySelector('#sales');

  const data = {
    labels: [
      'Россия', 'Blue', 'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [500, 50, 100],
      backgroundColor: [
        '#9D121A', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  const config = {
    type: 'doughnut',
    data: data,
    options: {
      cutout: '80%',
      radius: 100,
      aspectRatio: 240 / 360,
      elements: {
        arc: {
          spacing: 0,
          borderWidth: 0
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          align: 'start',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            font: {
              size: 12
            }
          }
        },
        subtitle: {
          display: true,
          text: '335 шт.',
          color: '#262424'
        },
        title: {
          display: true,
          text: 'Страны',
          color: '#A7A7A7'
        }
      }
    }
  };
  const myChart = new Chart(canvasElem, config);
  console.log(myChart);
  myChart.canvas.parentNode.style.height = '360px';
  myChart.canvas.parentNode.style.width = '240px';
};

export default initCharts;
