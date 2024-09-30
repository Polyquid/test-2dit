const getData = () => {
  const salesData = [
    {
      type: 'Страны',
      data: {
        Россия: 167,
        Казахстан: 126,
        Узбекистан: 42
      },
      dimension: 'шт.'
    },
    {
      type: 'Города',
      data: {
        Тюмень: 178,
        Петербург: 355,
        'Нур-султан': 170,
        'Алма-аты': 180,
        Ташкент: 182
      },
      dimension: 'шт.'
    }
  ];

  const revenueData = [
    {
      type: 'Страны',
      data: {
        Россия: 65,
        Казахстан: 48,
        Узбекистан: 17
      },
      dimension: '$'
    },
    {
      type: 'Города',
      data: {
        Тюмень: 22,
        Петербург: 43,
        'Нур-султан': 20,
        'Алма-аты': 22,
        Ташкент: 23
      },
      dimension: '$'
    }
  ];

  return [salesData, revenueData];
};

export default getData;
