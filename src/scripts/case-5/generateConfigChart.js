const colorsMap = {
  3: ['rgb(157, 18, 26)', 'rgb(239, 160, 33)', 'rgb(58, 55, 55)'],
  5: ['rgb(157, 18, 26)', 'rgb(0, 95, 167)', 'rgb(239, 160, 33)', 'rgb(115, 115, 115)', 'rgb(58, 55, 55)']
};

const textMap = {
  $: (totalValue, dimension) => `${dimension} ${totalValue} млн.`,
  'шт.': (totalValue, dimension) => `${totalValue} ${dimension}`
};

const generateConfigChart = (rawData) => {
  const { type, data, dimension } = rawData;
  const labels = Object.keys(data);
  const dataValues = Object.values(data);
  const totalValue = dataValues.reduce((acc, value) => acc += value, 0);
  const chartData = {
    labels,
    datasets: [{
      data: dataValues,
      backgroundColor: colorsMap[labels.length],
      hoverOffset: 4
    }]
  };

  return {
    type: 'doughnut',
    data: chartData,
    options: {
      rotation: -90,
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
        tooltip: {
          enabled: true
        },
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
          text: textMap[dimension](totalValue, dimension),
          color: '#262424',
          font: {
            weight: 600,
            size: 38
          }
        },
        title: {
          display: true,
          text: type,
          color: '#A7A7A7',
          font: {
            weight: 500,
            size: 14
          }
        }
      }
    }
  };
};

export default generateConfigChart;
