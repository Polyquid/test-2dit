
import buildChartsElem from './buildChartsElem.js';
import getData from './getData.js';

const initCharts = () => {
  const wrapper = document.querySelector('.case-5');

  // TODO: Переписать инициализацию wrapper, group, subtitle, separator. Инициализация по ходу обработки data
  const chartsWrapper = document.createElement('div');
  chartsWrapper.classList.add('charts__wrapper');

  const chartsSalesGroup = document.createElement('div');
  chartsSalesGroup.classList.add('charts__group');

  const chartsRevenueGroup = document.createElement('div');
  chartsRevenueGroup.classList.add('charts__group');

  const chartsSalesTitle = document.createElement('h3');
  chartsSalesTitle.classList.add('charts__subtitle');
  chartsSalesTitle.textContent = 'Количество проданных пицц';

  const chartsRevenueTitle = document.createElement('h3');
  chartsRevenueTitle.classList.add('charts__subtitle');
  chartsRevenueTitle.textContent = 'Выручка';

  const separatorSales = document.createElement('div');
  separatorSales.classList.add('charts__separator');

  const separatorRevenue = document.createElement('div');
  separatorRevenue.classList.add('charts__separator');

  chartsSalesGroup.appendChild(chartsSalesTitle);
  chartsRevenueGroup.appendChild(chartsRevenueTitle);
  chartsSalesGroup.appendChild(separatorSales);
  chartsRevenueGroup.appendChild(separatorRevenue);
  chartsWrapper.appendChild(chartsSalesGroup);
  chartsWrapper.appendChild(chartsRevenueGroup);
  wrapper.appendChild(chartsWrapper);
  const [salesData, revenueData] = getData();

  salesData.forEach((data) => {
    buildChartsElem(data, chartsSalesGroup);
  });
  revenueData.forEach((data) => {
    buildChartsElem(data, chartsRevenueGroup);
  });
};

export default initCharts;
