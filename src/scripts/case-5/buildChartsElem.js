import Chart from 'chart.js/auto';
import generateConfigChart from './generateConfigChart.js';

const buildChartsElem = (data, groupElem) => {
  const canvasElem = document.createElement('canvas');
  const chartsWrapper = document.createElement('div');
  chartsWrapper.classList.add('charts');
  chartsWrapper.appendChild(canvasElem);

  const config = generateConfigChart(data);
  const myChart = new Chart(canvasElem, config);

  myChart.canvas.parentNode.style.height = '360px';
  myChart.canvas.parentNode.style.width = '240px';

  groupElem.appendChild(chartsWrapper);
};

export default buildChartsElem;
